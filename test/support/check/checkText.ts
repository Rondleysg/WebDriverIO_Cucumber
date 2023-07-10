import { ChainablePromiseElement } from 'webdriverio';
/**
 * Check if the given element exists in the current DOM
 * @param  {String}   selector  Element to verify
 * @param  {String}   text  Text to verify if element contains
 */
export default async (element: ChainablePromiseElement<WebdriverIO.Element>, text: string) => {
    await expect(element).toHaveTextContaining(text);
};
