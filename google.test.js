const { By, Builder } = require('selenium-webdriver');
const Firefox = require('selenium-webdriver/firefox');
const options = new Firefox.Options();

describe('Testing Selenium Form Page',
    () => {
        let driver;

        beforeAll(
            async () => {
                driver = await new Builder()
                .forBrowser('firefox')
                .setFirefoxOptions( options.addArguments('--headless') )
                .build();
            }, 20000
        );

        afterAll(
            async () => await driver.quit()
        );

        it(
            'Web Page loaded correctly',
            async () => {
                await driver.get('https://www.selenium.dev/selenium/web/web-form.html');
                expect( await driver.getTitle() ).toBe( "Web form" );
            }
        )

        it(
            'Form Submit Check',
            async () => {
                await driver.get('https://www.selenium.dev/selenium/web/web-form.html');
        
                let textField = await driver.findElement( By.name('my-text') );
                await textField.sendKeys('Testing with Selenium');
                
                let submitButton = await driver.findElement( By.css('button') );
                await submitButton.click();
        
                await driver.manage().setTimeouts( {implicit: 500} );
        
                let message = await driver.findElement( By.id('message') );
                expect( await message.getText() ).toBe( "Received!" );
            }
        )
    }
)