import type { Selector } from 'webdriverio';
import { ChainablePromiseElement } from 'webdriverio';
import isExisting from '../check/isExisting.js';

/**
 * Perform an click action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   element  Element to verify
 */
export default async (
    action: 'click' | 'doubleClick',
    element: ChainablePromiseElement<WebdriverIO.Element>
) => {
    /**
     * The method to call on the browser object
     * @type {String}
     */
    const method = (action === 'click') ? 'click' : 'doubleClick';

    await isExisting(element);

    await element[method]();
};