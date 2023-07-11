import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

class AddRemovePage extends Page {
    public get btnAddElement () {
        return $('button[onclick="addElement()"]');
    }

    public get btnRemove () {
        return $('button[onclick="deleteElement()"]');
    }

    public open () {
        return super.open('add_remove_elements/');
    }
}

export default new AddRemovePage();
