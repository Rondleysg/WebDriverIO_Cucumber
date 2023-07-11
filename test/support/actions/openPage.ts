import add_remove_elementsPage from "../../pageobjects/add_remove_elements.page.js"
import loginPage from "../../pageobjects/login.page.js"

const pages = {
    login: loginPage,
    addRemove: add_remove_elementsPage
}

/**
 * Open Page
 * @param  {String}   page The Page name to navigate to
 */
export default async (page: string) => {
    await pages[page].open()
}