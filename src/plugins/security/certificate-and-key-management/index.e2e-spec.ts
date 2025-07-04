import { Org } from '@salesforce/core';
import assert from 'assert';
import { spawnSync } from 'node:child_process';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { CertificateAndKeyManagement } from './index.js';

describe(CertificateAndKeyManagement.name, function () {
  let pluginCertificateManagement: CertificateAndKeyManagement;
  before(() => {
    pluginCertificateManagement = new CertificateAndKeyManagement(global.bf);
  });

  const configGeneratedCert = {
    certificates: [
      {
        name: 'identity_provider',
        label: 'identity_provider',
      },
    ],
  };
  const configImportFromKeystore = {
    importFromKeystore: [
      {
        filePath:
          './src/plugins/security/certificate-and-key-management/Dummy.jks',
        name: 'Dummy',
      },
    ],
  };
  it('should enable Identity Provider as a prerequisite', async () => {
    // https://salesforce.stackexchange.com/questions/61618/import-keystore-in-certificate-and-key-management
    const __dirname = fileURLToPath(new URL('.', import.meta.url));
    const dir = resolve(join(__dirname, 'sfdx-source', 'identity-provider'));
    const sourceDeployCmd = spawnSync('sf', [
      'project',
      'deploy',
      'start',
      '-d',
      dir,
      '--json',
    ]);
    assert.deepStrictEqual(
      sourceDeployCmd.status,
      0,
      sourceDeployCmd.output.toString()
    );
  });
  it('should create a self-signed certificate', async () => {
    await pluginCertificateManagement.apply(configGeneratedCert);
  });
  it('should not do anything if self-signed certificate is already available', async () => {
    // explictly pass definition to retrieve
    const res = await pluginCertificateManagement.run(configGeneratedCert);
    assert.deepStrictEqual(res, { message: 'no action necessary' });
  });
  it('should import a cert from a keystore', async () => {
    await pluginCertificateManagement.run(configImportFromKeystore);
  });
  it('should not do anything if cert is already available in keystore', async () => {
    const res = await pluginCertificateManagement.run(configImportFromKeystore);
    assert.deepStrictEqual(res, { message: 'no action necessary' });
  });
  it('should delete certificates using Metadata API', async () => {
    const org = await Org.create({});
    const conn = org.getConnection();
    await conn.metadata.delete('Certificate', ['identity_provider', 'Dummy']);
  });
});
