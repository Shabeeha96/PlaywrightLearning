import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  use: {
    headless: false,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

});
//Learning GitHub for QA assessments.
//Practicing API testing and manual testing.
