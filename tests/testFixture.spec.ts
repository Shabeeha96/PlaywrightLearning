import { test } from '../fixture/customeFixture';

import { ENV } from '../Cofig/env';

test('fixture POM', async ({page, sauceLoginPage}) => {
    await page.goto(ENV.baseURL);
    await sauceLoginPage.login('standard_user', "secret_sauce");
})