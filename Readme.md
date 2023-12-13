Using the template attached to the task, create a currency exchange calculator. The exchange rate data for the 90 days starting from 11 September 2023 are available in JSON format as a global variable rates (in a separate JavaScript file rates.js, which must not be changed!). You can process data as an object. The exchange rates are available from EUR to other currencies.

A user must be able to enter a date, select currencies in the drop-down lists under Sell and Buy, enter the amount he/she wants to sell or buy, press Convert button and see the amount in another currency he/she must buy or sell.

Currency list population

Both drop-down lists of currencies are empty in the template HTML. You should write a JavaScript script to fill the lists of currencies with unique currency values present in the provided currency exchange rate data and EUR.

The code mock-up for getting the list of currencies is given in the file homework3.js. You can use the given code mock-up and/or write your own code. You should implement addition of currencies to the lists "currency-sell" and “currency-buy”.

Data validation

The JavaScript script should check that the values entered for the date and an amount are correct:

a value entered in the field “date-on” is a valid date which is not less than a minimal date for which exchange rates are available in the file rates.js and is not greater than a maximal date for which exchange rates are available in the file rates.js (minimal and maximal dates must be determined programmatically);
one of the fields “amount-sell” or “amount-buy” is not empty, the other one is empty;
the fields “amount-sell” or “amount-buy” if filled contain positive real numbers.
Currency selection

If a user selects EUR in the drop-down list “currency-sell”, the drop-down list “currency-buy” must be updated to contain all available currencies. If a user selects any currency other than EUR in the drop-down list “currency-sell”, the drop-down list “currency-buy” must be updated to contain only EUR.

And the opposite: If a user selects EUR in the drop-down list “currency-buy”, the drop-down list “currency-sell” must be updated to contain all available currencies. If a user selects any currency other than EUR in the drop-down list “currency-buy”, the drop-down list “currency-sell” must be updated to contain only EUR.

As a result, there will always be EUR in one of the drop-down lists.

Amount conversion

If a user enters “amount-sell”, the application must find the exchange rate between the currency in the drop-down list “currency-sell” and the currency in the drop-down list “currency-buy” on the date in the input field “date-on” in the file rates.js and use it convert the entered amount. The result must be shown in the input field “amount-buy”.

If a user enters “amount-buy”, the application must find the exchange rate between the currency in the drop-down list “currency-sell” and the currency in the drop-down list “currency-buy” on the date in the input field “date-on” in the file rates.js and use it convert the entered amount. The result must be shown in the input field “amount-sell”.

The calculated amount must be rounded to 2 decimal places.

Look at the following examples:

A user enters/selects the following values:

date-on 2023-12-08
currency-sell USD
currency-buy EUR
amount-sell 100
The exchange rate from EUR to USD on 2023-12-08 is 1.0777. amount-buy is calculated as 100/1.0777=92.79.

A user enters/selects the following values:

date-on 2023-12-07
currency-sell USD
currency-buy EUR
amount-buy 100
The exchange rate from EUR to USD on 2023-12-07 is 1.0771. amount-sell is calculated as 100\*1.0771=107.71.

A user enters/selects the following values:

date-on 2023-12-08
currency-sell EUR
currency-buy USD
amount-sell 100
The exchange rate from EUR to USD on 2023-12-08 is 1.0777. amount-buy is calculated as 100\*1.0777=107.77.

A user enters/selects the following values:

date-on 2023-12-07
currency-sell EUR
currency-buy USD
amount-buy 100
The exchange rate from EUR to USD on 2023-12-07 is 1.0771. amount-sell is calculated as 100/1.0771=92.84.

A user enters/selects the following values:

date-on 2023-12-07
currency-sell EUR
currency-buy EUR
amount-buy 100
Since both currencies are EUR, no conversion is needed, and the amount-sell is equal to amount-buy = 100.

Additional information

The following additional information must be added to the web page using JavaScript script:

When the conversion is made, the div element with id= "calculator-rate-info" must be shown (originally it is hidden). The exchange rate used for the conversion should be added in the span element with id="calculator-rate" and the currency should be added in the span element with id="calculator-currency".
The information source available in the file rates.js as the property “name” of the property object “Sender” must be added as the span element with id="rates-source".
Submission

You should submit all parts of the web page archived as a .zip file.
Do not forget to put your name, surname and student ID number in each of the updated homework solution files.
For your solution, you are allowed to change HTML code and homework3.js file. The code that is already available in index.html and homework3.js can also be updated if necessary.
The file rates.js must not be changed. You can use any JS library (for example, jQuery or other) for the implementation. Just add the link to the required library in HTML.
