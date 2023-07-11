import { Then } from '@wdio/cucumber-framework';

import SecurePage from '../pageobjects/secure.page.js';
import isExisting from '../support/check/isExisting.js';
import checkText from '../support/check/checkText.js';
import loginPage from '../pageobjects/login.page.js';
import add_remove_elementsPage from '../pageobjects/add_remove_elements.page.js';

const pages = {
    login: loginPage,
    addRemove: add_remove_elementsPage,
};

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await isExisting(SecurePage.flashAlert);
    await checkText(SecurePage.flashAlert, message);
});

Then(/^I should see a ([a-zA-Z]+) element$/, async (element) => {
    const elementUse = pages.addRemove[element] 
    await isExisting(elementUse);
});