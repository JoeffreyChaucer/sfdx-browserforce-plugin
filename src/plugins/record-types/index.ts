import { Connection } from '@salesforce/core';
import { BrowserforcePlugin } from '../../plugin';
import { RecordTypePage } from './pages';

type Config = {
  deletions: RecordTypeConfig[];
};

type RecordTypeConfig = {
  fullName: string;
  replacement?: string;
  toBeDeleted?: boolean;
};

export class RecordTypes extends BrowserforcePlugin {
  public async retrieve(definition: Config): Promise<Config> {
    const conn = this.org.getConnection();
    const response: Config = {
      deletions: []
    };
    const recordTypeFileProperties = await listRecordTypes(conn);
    const recordTypes = await queryRecordTypes(conn);
    for (const deletion of definition.deletions) {
      const recordType = getRecordType(deletion.fullName, recordTypeFileProperties, recordTypes);
      if (recordType) {

        if (deletion.replacement) {
          const replacementRecordType = getRecordType(deletion.replacement, recordTypeFileProperties, recordTypes);
          if (!replacementRecordType) {
            throw new Error(`Could not find replacement RecordType: ${deletion.replacement}`);
          }
        }
        response.deletions.push({
          ...deletion,
          toBeDeleted: true
        });
      } else {
        response.deletions.push(deletion);
      }
    }
    return response;
  }

  public async apply(config: Config): Promise<void> {
    const conn = this.org.getConnection();
    const recordTypeFileProperties = await listRecordTypes(conn);
    const recordTypes = await queryRecordTypes(conn);


    for (const deletion of config.deletions) {
      const recordType = getRecordType(deletion.fullName, recordTypeFileProperties, recordTypes);
      let pageURL = `ui/setup/rectype/RecordTypes?type=${recordType.EntityDefinitionId}`;
      
      const page = await this.browserforce.openPage(pageURL);
            
      const recordTypePage = new RecordTypePage(page);
      
      if (recordType.IsActive) {
        try {
          const editPage = await recordTypePage.clickEditAction(recordType.Id);
          await editPage.deactivateRecordType();
        } catch (error) {
            console.error(`Failed to deactivate record type with ID ${recordType.Id}:`, error);
            continue; 
        }
      }
      
      const deletePage = await recordTypePage.clickDeleteAction(recordType.Id);
      let newRecordTypeId;
      if (deletion.replacement) {
        const replacementRecordType = getRecordType(deletion.replacement, recordTypeFileProperties, recordTypes);
        newRecordTypeId = replacementRecordType.Id;
      }
      await deletePage.deleteAndReplace(newRecordTypeId);
      await page.close();
    }
  }
}

async function listRecordTypes(conn) {
  const recordTypes = await conn.metadata.list({
    type: 'RecordType'
  });
  return recordTypes;
}

type RecordType = {
  Id: string;
  EntityDefinitionId: string;
  IsActive: boolean;
};

async function queryRecordTypes(conn: Connection): Promise<RecordType[]> {
  const recordTypesResult = await conn.tooling.query<RecordType>(
    `SELECT Id, EntityDefinitionId, IsActive FROM RecordType`
  );
  const recordTypes = recordTypesResult.records;
  return recordTypes;
}

function getRecordType(fullName: string, fileProperties, recordTypes) {
  const recordTypeFileProperty = fileProperties.find((fp) => fp.fullName === fullName);
  if (recordTypeFileProperty) {
    return recordTypes.find((x) => x.Id === recordTypeFileProperty.id);
  }
  return undefined;
}
