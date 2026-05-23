import { test , expect } from '@playwright/test';
test ('Get User Api', async ({request}) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users');
    const body = await response.json();
    console.log(body[6].address.geo.lng);
    expect(body[6].address.geo.lng).toBe('21.8984');
   console.log('assertion True');
})