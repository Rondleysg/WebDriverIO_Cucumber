import { When } from '@wdio/cucumber-framework';

import login from '../support/actions/login.js';


When(/^I login with (\w+) and (.+)$/, login);