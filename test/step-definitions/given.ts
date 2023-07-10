import { Given } from '@wdio/cucumber-framework';

import openPage from '../support/actions/openPage.js';

Given(/^I am on the (\w+) page$/, openPage);