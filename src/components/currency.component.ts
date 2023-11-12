import { ToWords } from 'to-words';

class Currency {

    formatToINR(amount: number): string {
        const formatter = new Intl.NumberFormat('en-IN', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        return '₹' + formatter.format(amount);
    }

    formatToWord(amount: number): string {

        const toWords = new ToWords({
            localeCode: 'en-IN',
            converterOptions: {
                currency: true,
                ignoreDecimal: false,
                ignoreZeroCurrency: false,
                doNotAddOnly: false,
                currencyOptions: {
                    name: 'Rupee',
                    plural: 'Rupees',
                    symbol: '₹',
                    fractionalUnit: {
                        name: 'Paisa',
                        plural: 'Paise',
                        symbol: '',
                    },
                }
            }
        });

        return toWords.convert(amount, { currency: true });
    }
}

export const currency = new Currency();
