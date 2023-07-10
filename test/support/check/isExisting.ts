import { ChainablePromiseElement } from 'webdriverio';
/**
 * Check if the given element exists in the current DOM
 * @param  {String}   selector  Element to verify
 */
export default async (element: ChainablePromiseElement<WebdriverIO.Element>) => {
    await expect(element).toBeExisting();
};
