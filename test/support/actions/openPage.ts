import loginPage from "../../pageobjects/login.page.js"

const pages = {
    login: loginPage
}

/**
 * Open Page
 * @param  {String}   page The Page name to navigate to
 */
export default async (page: string) => {
    await pages[page].open()
}