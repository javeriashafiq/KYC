export class ClientPage {
  constructor(page) {
    this.page = page;
  }

  async waitForLoader() {
    await this.page.waitForTimeout(800);
  }

  // ==================== NAVIGATION ====================

  async startProcess() {
    const btn = this.page.getByRole('link', { name: 'Start Process' });
    await btn.waitFor({ state: 'visible', timeout: 10000 });
    await btn.click();
    await this.waitForLoader();
  }

  // ==================== STEP 01 - CLIENT INFO ====================

  async enterClientId(id) {
    const field = this.page.getByRole('textbox', { name: 'Enter 6-digit Client ID' });
    await field.waitFor({ state: 'visible', timeout: 5000 });
    await field.fill(id);
    await this.page.waitForTimeout(300);
  }

  async selectCity(city) {
    await this.page.locator('#select2-Form_CityId-container').waitFor({ state: 'visible', timeout: 5000 });
    await this.page.locator('#select2-Form_CityId-container').click();
    const search = this.page.getByRole('searchbox', { name: 'Search' });
    await search.waitFor({ state: 'visible', timeout: 5000 });
    await search.fill(city);
    await search.press('Enter');
    await this.page.waitForTimeout(500);
  }

  async enterClientName(name) {
    const field = this.page.getByRole('textbox', { name: ' Client Name *' });
    await field.waitFor({ state: 'visible', timeout: 5000 });
    await field.fill(name);
    await this.page.waitForTimeout(300);
  }

  async enterClientAlias(alias) {
    const field = this.page.getByRole('textbox', { name: ' Client Alias *' });
    await field.waitFor({ state: 'visible', timeout: 5000 });
    await field.fill(alias);
    await this.page.waitForTimeout(300);
  }

  async enterEmailAddress(email) {
    const field = this.page.getByRole('textbox', { name: ' Email Address *' });
    await field.waitFor({ state: 'visible', timeout: 5000 });
    await field.fill(email);
    await this.page.waitForTimeout(300);
  }

  async selectAccountType(type) {
    const dropdown = this.page.getByRole('combobox', { name: 'Select Account Type' });
    await dropdown.waitFor({ state: 'visible', timeout: 5000 });
    await dropdown.click();
    await this.page.getByRole('option', { name: type }).waitFor({ state: 'visible', timeout: 5000 });
    await this.page.getByRole('option', { name: type }).click();
    await this.page.waitForTimeout(300);
  }

  async selectCustomerType(type) {
    const dropdown = this.page.getByRole('combobox', { name: 'Select Customer Type' });
    await dropdown.waitFor({ state: 'visible', timeout: 5000 });
    await dropdown.click();
    await this.page.getByRole('option', { name: type }).waitFor({ state: 'visible', timeout: 5000 });
    await this.page.getByRole('option', { name: type }).click();
    await this.page.waitForTimeout(300);
  }

  async selectDivision(division) {
    const field = this.page.getByRole('textbox', { name: 'Select Division' });
    await field.waitFor({ state: 'visible', timeout: 5000 });
    await field.click();
    await this.page.getByRole('option', { name: division }).waitFor({ state: 'visible', timeout: 5000 });
    await this.page.getByRole('option', { name: division }).click();
    await this.page.waitForTimeout(300);
  }

  async enterCnic(cnic) {
    const field = this.page.getByRole('textbox', { name: ' CNIC Number (enter CNIC or' });
    await field.waitFor({ state: 'visible', timeout: 5000 });
    await field.fill(cnic);
    await this.page.waitForTimeout(300);
  }

  async enterGst(gst) {
    const field = this.page.getByRole('textbox', { name: '% GST Number * (13 digits)' });
    await field.waitFor({ state: 'visible', timeout: 5000 });
    await field.fill(gst);
    await this.page.waitForTimeout(300);
  }

  async selectAddressCity(city) {
    const dropdown = this.page.getByRole('combobox', { name: 'ABBOTABAD' }).nth(1);
    await dropdown.waitFor({ state: 'visible', timeout: 5000 });
    await dropdown.click();
    const search = this.page.getByRole('searchbox', { name: 'Search' });
    await search.waitFor({ state: 'visible', timeout: 5000 });
    await search.fill(city);
    await search.press('Enter');
    await this.page.waitForTimeout(500);
  }

  async selectArea(area) {
    const dropdown = this.page.getByRole('combobox', { name: 'Select area' }).first();
    await dropdown.waitFor({ state: 'visible', timeout: 5000 });
    await dropdown.click();
    await this.page.getByRole('option', { name: area }).waitFor({ state: 'visible', timeout: 5000 });
    await this.page.getByRole('option', { name: area }).click();
    await this.page.waitForTimeout(300);
  }

  async selectSubArea(subArea) {
    const dropdown = this.page.getByRole('combobox', { name: 'Select sub-area' }).first();
    await dropdown.waitFor({ state: 'visible', timeout: 5000 });
    await dropdown.click();
    await this.page.getByRole('option', { name: subArea }).waitFor({ state: 'visible', timeout: 5000 });
    await this.page.getByRole('option', { name: subArea }).click();
    await this.page.waitForTimeout(300);
  }

  async enterCompleteAddress(address) {
    const field = this.page.getByRole('textbox', { name: 'Complete Address *' });
    await field.waitFor({ state: 'visible', timeout: 5000 });
    await field.fill(address);
    await this.page.waitForTimeout(300);
  }

  async clickCreateClient() {
    const btn = this.page.getByRole('button', { name: ' Create client' });
    await btn.waitFor({ state: 'visible', timeout: 5000 });
    await btn.click();
    await this.page.waitForTimeout(1000);
  }

  // ==================== STEP 02 - SALES PERSON ====================

  async selectSalesPerson(name) {
    const field = this.page.getByRole('textbox', { name: 'Select Sales Person' });
    await field.waitFor({ state: 'visible', timeout: 5000 });
    await field.click();
    await this.page.getByRole('option', { name: name }).waitFor({ state: 'visible', timeout: 5000 });
    await this.page.getByRole('option', { name: name }).click();
    await this.page.waitForTimeout(300);
  }

  async proceedToClientPOC() {
    const btn = this.page.getByRole('button', { name: 'Proceed to Client POC' });
    await btn.waitFor({ state: 'visible', timeout: 5000 });
    await btn.click();
    await this.page.waitForTimeout(1000);
  }

  // ==================== STEP 03 - POC ====================

  async selectOperationalRole(role) {
    const dropdown = this.page.getByRole('combobox', { name: 'Select Operational Role' });
    await dropdown.waitFor({ state: 'visible', timeout: 5000 });
    await dropdown.click();
    await this.page.getByRole('option', { name: role }).waitFor({ state: 'visible', timeout: 5000 });
    await this.page.getByRole('option', { name: role }).click();
    await this.page.waitForTimeout(300);
  }

  async enterContactName(name) {
    const field = this.page.getByRole('textbox', { name: 'John Doe' });
    await field.waitFor({ state: 'visible', timeout: 5000 });
    await field.fill(name);
    await this.page.waitForTimeout(300);
  }

  async enterContactPhone(phone) {
    const field = this.page.getByRole('textbox', { name: '0317-1234567 or +' });
    await field.waitFor({ state: 'visible', timeout: 5000 });
    await field.fill(phone);
    await this.page.waitForTimeout(300);
  }

  async enableEShipMail() {
    const toggle = this.page.getByRole('main').getByText('Enable EShip Mail');
    await toggle.waitFor({ state: 'visible', timeout: 5000 });
    await toggle.click();
    await this.page.waitForTimeout(300);
  }

  async saveContact() {
    const btn = this.page.getByRole('button', { name: 'Save Contact' });
    await btn.waitFor({ state: 'visible', timeout: 5000 });
    await btn.click();
    await this.page.waitForTimeout(1000);
  }

  async nextStep() {
    const btn = this.page.getByRole('button', { name: 'Next Step' });
    await btn.waitFor({ state: 'visible', timeout: 5000 });
    await btn.click();
    await this.page.waitForTimeout(800);

    // ✅ Handle "Unsaved Data Detected" popup if it appears
    const understoodBtn = this.page.getByRole('button', { name: 'Understood' });
    const isVisible = await understoodBtn.isVisible().catch(() => false);
    if (isVisible) {
      await understoodBtn.click();
      await this.page.waitForTimeout(800);
    }
  }

  // ==================== STEP 04 - TARIFF ====================

  async selectTariffProduct(product) {
    // Wait for tariff page to fully load
    await this.page.locator('#select2-tariffProductDD-container').waitFor({ state: 'visible', timeout: 15000 });
    await this.page.locator('#select2-tariffProductDD-container').click();
    await this.page.getByRole('option', { name: product }).waitFor({ state: 'visible', timeout: 5000 });
    await this.page.getByRole('option', { name: product }).click();
    await this.page.waitForTimeout(500);
  }

  async selectTariffService(service) {
    await this.page.locator('#select2-tariffServicesDD-container').waitFor({ state: 'visible', timeout: 5000 });
    await this.page.locator('#select2-tariffServicesDD-container').click();
    await this.page.getByRole('option', { name: service }).waitFor({ state: 'visible', timeout: 5000 });
    await this.page.getByRole('option', { name: service }).click();
    await this.page.waitForTimeout(500);
  }

  async selectTariffCategory(category) {
    await this.page.locator('#select2-tariffServicesCategoryDD-container').waitFor({ state: 'visible', timeout: 5000 });
    await this.page.locator('#select2-tariffServicesCategoryDD-container').click();
    await this.page.getByRole('option', { name: category }).waitFor({ state: 'visible', timeout: 5000 });
    await this.page.getByRole('option', { name: category }).click();
    await this.page.waitForTimeout(500);
  }

  async selectZoneType(zoneType) {
    const field = this.page.getByRole('textbox', { name: '-- Select Zone Type --' });
    await field.waitFor({ state: 'visible', timeout: 5000 });
    await field.click();
    await this.page.getByRole('option', { name: zoneType }).waitFor({ state: 'visible', timeout: 5000 });
    await this.page.getByRole('option', { name: zoneType }).click();
    await this.page.waitForTimeout(500);
  }

  async selectTariffType(tariffType) {
    const field = this.page.getByRole('textbox', { name: '-- Select Tariff Type --' });
    await field.waitFor({ state: 'visible', timeout: 5000 });
    await field.click();
    await this.page.getByRole('option', { name: tariffType, exact: true }).waitFor({ state: 'visible', timeout: 5000 });
    await this.page.getByRole('option', { name: tariffType, exact: true }).click();
    await this.page.waitForTimeout(500);
  }

  async generateWorkspace() {
    const btn = this.page.getByRole('button', { name: ' Generate Workspace' });
    await btn.waitFor({ state: 'visible', timeout: 5000 });
    await btn.click();
    await this.page.waitForTimeout(1000);
  }

  // ==================== FULL FLOW METHODS ====================

  async fillClientInfo({ clientId, city, clientName, alias, email, accountType,
    customerType, division, cnic, gst, addressCity, area, subArea, address }) {
    await this.enterClientId(clientId);
    await this.selectCity(city);
    await this.enterClientName(clientName);
    await this.enterClientAlias(alias);
    await this.enterEmailAddress(email);
    await this.selectAccountType(accountType);
    await this.selectCustomerType(customerType);
    await this.selectDivision(division);
    await this.enterCnic(cnic);
    await this.enterGst(gst);
    await this.selectAddressCity(addressCity);
    await this.selectArea(area);
    await this.selectSubArea(subArea);
    await this.enterCompleteAddress(address);
    await this.clickCreateClient();
  }

  async fillTariff({ product, service, category, zoneType, tariffType }) {
    await this.selectTariffProduct(product);
    await this.selectTariffService(service);
    await this.selectTariffCategory(category);
    await this.selectZoneType(zoneType);
    await this.selectTariffType(tariffType);
    await this.generateWorkspace();
  }
}