import loginPage from "../../pageobjects/login.page.js"

export default async (username, password) => {
    await loginPage.login(username, password)
}