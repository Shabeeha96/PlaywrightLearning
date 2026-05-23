import { expect, test} from '@playwright/test';
import path from "path";
test('Dynamic upload', async({page}) => {

    await page.goto('https://demoqa.com/upload-download');
    const files = ['annies 1.csv', 'Screenshot 2023-12-07 111747.png', 'SHABEEHA_HIND_T_ManualQA CV.pdf'];

     for (const file of files){
     const  filePath = path.join(process.cwd(), 'testdata', 'annies 1.csv');
    
    await page.setInputFiles('#uploadFile', filePath);
    await expect(page.locator('#uploadedFilePath')).toContainText('file');
    console.log('Annies Dynamic Assertion True');
     }
    page.pause();
})