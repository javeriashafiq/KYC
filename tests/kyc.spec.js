import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ClientPage } from '../pages/ClientPage';

test('KYC - Create Client upto Tariff', async ({ page }) => {

  const loginPage  = new LoginPage(page);
  const clientPage = new ClientPage(page);

  // Step 1: Login
  await loginPage.login(
    'javeria.shafiq@leopardscourier.com',
    'Jiyaagha@125'
  );

  // Step 2: Start Process
  await clientPage.startProcess();

  // Step 3: Fill Client Info
  await clientPage.fillClientInfo({
    clientId:     '365365',
    city:         'kara',
    clientName:   'test',
    alias:        'test',
    email:        'test5@gmail.com',
    accountType:  'Normal',
    customerType: 'Individual',
    division:     'E-Commerce',
    cnic:         '98785-45454152',
    gst:          '7856412123123',
    addressCity:  'kara',
    area:         'Askari',
    subArea:      'Askari 11',
    address:      'test',
  });

  // Step 4: Select Sales Person
  await clientPage.selectSalesPerson('- AAMIR KHAN');

  // Step 5: Proceed to POC
  await clientPage.proceedToClientPOC();

  // Step 6: Fill POC
  await clientPage.selectOperationalRole('ACCOUNTS');
  await clientPage.enterContactName('test');
  await clientPage.enterContactPhone('0321-4741258');
  await clientPage.enableEShipMail();
  await clientPage.saveContact();

  // Step 7: Next Step to Tariff
  await clientPage.nextStep();

  // Step 8: Fill Tariff
  await clientPage.fillTariff({
    product:    'LEOPARD BOX',
    service:    'OVERNIGHT',
    category:   'LEOPARD BOX 1KG',
    zoneType:   'Color Zone',
    tariffType: 'Customized',
  });

});