import { BrowserforcePlugin } from '../../plugin.js';

const BASE_PATH = 'setup/activitiesSetupPage.apexp';

const MANY_WHO_PREF_INPUT_SELECTOR =
  'input[id="thePage:theForm:theBlock:manyWhoPref"]';
const SUBMIT_BUTTON_SELECTOR =
  'input[id="thePage:theForm:theBlock:buttons:submit"]';

type Config = {
  allowUsersToRelateMultipleContactsToTasksAndEvents: boolean;
};

export class ActivitySettings extends BrowserforcePlugin {
  public async retrieve(): Promise<Config> {
    const page = await this.browserforce.openPage(BASE_PATH);
    await page.waitForSelector(MANY_WHO_PREF_INPUT_SELECTOR);
    const response = {
      allowUsersToRelateMultipleContactsToTasksAndEvents: await page.$eval(
        MANY_WHO_PREF_INPUT_SELECTOR,
        (el: HTMLInputElement) => el.checked
      ),
    };
    await page.close();
    return response;
  }

  public async apply(config: Config): Promise<void> {
    if (config.allowUsersToRelateMultipleContactsToTasksAndEvents === false) {
      throw new Error(
        '`allowUsersToRelateMultipleContactsToTasksAndEvents` can only be disabled with help of the salesforce.com Support team'
      );
    }
    const page = await this.browserforce.openPage(BASE_PATH);
    await page.waitForSelector(MANY_WHO_PREF_INPUT_SELECTOR);
    await page.$eval(
      MANY_WHO_PREF_INPUT_SELECTOR,
      (e: HTMLInputElement, v: boolean) => {
        e.checked = v;
      },
      config.allowUsersToRelateMultipleContactsToTasksAndEvents
    );
    await Promise.all([
      page.waitForNavigation(),
      page.click(SUBMIT_BUTTON_SELECTOR),
    ]);
    await page.close();
  }
}
