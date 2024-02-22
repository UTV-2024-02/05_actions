const calculate = require('./calculation');

describe('Testing unit calculation',
    () => {
        it(
            'Check for standard division',
            () => {
                expect( calculate(8, 2) ).toBe( 4 );
            });

        it(
            'Division by 1',
            () => {
                expect( calculate(7, 1) ).toBe( 7 );
            }
        );

        it(
            'Division by zero',
            () => {
                expect( calculate(3, 0) ).toBe( Infinity );
            }
        );

        it(
            'Zero division by anything',
            () => {
                expect( calculate(0, 13) ).toBe( 7 );
            }
        );

        it(
            'Random tests',
            () => {
                for (let i=0; i<100; i++) {
                    let a = Math.random() * 100 + 1;
                    let b = Math.random() * 100 + 1;
                    let result = a / b;
                    expect( calculate(a, b) ).toBe( result );
                }
            }
        )

        }
);
