import { expect, browser, $ } from '@wdio/globals'

describe('Test Suite', () => {
    it('First test', async () => {
        await browser.url(`https://pastebin.com/`);
        const pageTitle = await browser.getTitle();

        expect(pageTitle).toEqual("Pastebin.com - #1 paste tool since 2002!")
    })
    
    it('Pastebin Test', async () => {
        await $("#postform-text").setValue("Hello from WebDriver");
    
        await $("#select2-postform-expiration-container").click();
        await browser.pause(2000);

        const option10Minutes = await $("//li[contains(., '10 Minutes')]");
        await option10Minutes.click();
        
        await $("#postform-name").setValue("helloweb");
        await browser.pause(5000);

    })
})
