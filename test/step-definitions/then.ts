import { Then } from '@wdio/cucumber-framework';

import SecurePage from '../pageobjects/secure.page.js';
import isExisting from '../support/check/isExisting.js';
import checkText from '../support/check/checkText.js';

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await isExisting(SecurePage.flashAlert);
    await checkText(SecurePage.flashAlert, message);
});