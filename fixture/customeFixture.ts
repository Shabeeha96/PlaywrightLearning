import { test as base } from '@playwright/test';
import { SauceLoginPage } from '../pages/sauceLoginPage';

type MyFixture = { sauceLoginPAge: SauceLoginPage };
export const test = base.extend<MyFixture>({
    sauceLoginPage: async ({page}, use )=> {
       const sauceLoginPage = new SauceLoginPage(page);
       await use(sauceLoginPage);
    }
});