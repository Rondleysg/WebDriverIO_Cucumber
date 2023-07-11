import { When } from "@wdio/cucumber-framework";

import login from "../support/actions/login.js";
import clickElement from "../support/actions/clickElement.js";
import add_remove_elementsPage from "../pageobjects/add_remove_elements.page.js";
import loginPage from "../pageobjects/login.page.js";

const pages = {
    login: loginPage,
    addRemove: add_remove_elementsPage,
};

When(/^I login with (\w+) and (.+)$/, login);

When(/^I (click|doubleclick) on the ([a-zA-Z]+) of ([a-zA-Z]+) page$/, async (action, element, page) => {
    const pageUse = pages[page];
    const elementUse = pageUse[element] 
    await clickElement(action, elementUse);
});
