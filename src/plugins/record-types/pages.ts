import { ElementHandle, Page } from 'puppeteer';
import { throwPageErrors } from '../../browserforce';


export class RecordTypePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private async clickAction(recordTypeId: string, action: 'delete' | 'edit'): Promise<RecordTypeDeletePage | RecordTypeEditPage> {
    const baseUrl = 'setup/ui/recordtype';
    const xpath = `//a[contains(@href, "${baseUrl}${action}.jsp?id=${recordTypeId.slice(0, 15)}")]`;
    await this.page.waitForXPath(xpath);
    const link = await this.page.$x(xpath);

    if (!link) {
      throw new Error(`${action.charAt(0).toUpperCase() + action.slice(1)} link not found`);
    }
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: 'networkidle0' }),
      (link[0] as ElementHandle<Element>).click()
    ]);
    return action === 'delete' ? new RecordTypeDeletePage(this.page) : new RecordTypeEditPage(this.page);
  }

  async clickDeleteAction(recordTypeId: string): Promise<RecordTypeDeletePage> {
    return this.clickAction(recordTypeId, 'delete') as Promise<RecordTypeDeletePage>;
  }
  
  async clickEditAction(recordTypeId: string): Promise<RecordTypeEditPage> {
    return this.clickAction(recordTypeId, 'edit') as Promise<RecordTypeEditPage>;
  }
}


export abstract class RecordTypeActionPage {
  protected page: Page;
  protected saveButton: string;

  constructor(page: Page, saveButton: string) {
    this.page = page;
    this.saveButton = saveButton;
  }

  protected async save(): Promise<void> {
    await this.page.waitForSelector(this.saveButton);
    await Promise.all([this.page.waitForNavigation(), this.page.click(this.saveButton)]);
    await throwPageErrors(this.page);
  }
}

export class RecordTypeDeletePage extends RecordTypeActionPage {
  constructor(page: Page) {
    super(page, 'input[name="save"]');
  }

  async deleteAndReplace(newRecordTypeId?: string): Promise<void> {
    await this.checkAndThrowOnError();
    const NEW_VALUE_SELECTOR = 'select#p2';
    if (newRecordTypeId) {
      await this.page.waitForSelector(NEW_VALUE_SELECTOR);
      await this.page.select(NEW_VALUE_SELECTOR, newRecordTypeId.slice(0, 15));
    }
    await this.save();
  }
  
  async checkAndThrowOnError(): Promise<void> {
    const saveButton = await this.page.$(this.saveButton);
    if (!saveButton) {
        const ErrorMsg = await this.page.evaluate(() => {
            const description = document.querySelector('div.bDescription')?.textContent?.trim() || '';
            const body = document.querySelector('div.pbSubsection')?.textContent?.trim() || '';
            return [description, body].filter(text => text).join('\n');
        });

        if (ErrorMsg) {
          const errMsg = new Error(ErrorMsg);
          errMsg.stack = ''; 
          throw errMsg;
        }
    }
  }

}


export class RecordTypeEditPage extends RecordTypeActionPage {
  constructor(page: Page) {
    super(page, '#bottomButtonRow > input:nth-child(1)');
  }

  async deactivateRecordType(): Promise<void> {
    await this.page.$eval('input[name="p5"]', check => check.checked = false);
    await this.save();
    //check if record type deactived and save
    try {
      await this.page.waitForNavigation({ timeout: 5000, waitUntil: 'networkidle0' });
     } catch (error) {
      
        const errorMsg = await this.page.evaluate(() => {
          const description = document.querySelector('#ep > div.pbBody > div:nth-child(3) > table > tbody > tr:nth-child(7) > td.last.data2Col > span')?.textContent?.trim() || '';
          return description;
        });

        
        if (errorMsg) {
          const errMsg = new Error(errorMsg);
          errMsg.stack = ''; 
          throw errMsg;
        }
        
    }
  }
}