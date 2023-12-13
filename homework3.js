/*
 * Enter your name, surname and student id number here
 */

const currencies_all = rates[0].Cube.map((currency) => currency.currency);
currencies_all.unshift("EUR");

const currencies_no_EUR = currencies_all.filter((currency) => {
  return currency !== "EUR";
});

const dates = rates.map((date) => date.time);

// add currencies to the select tag

const sell_currency = document.getElementById("currency-sell");
const buy_currency = document.getElementById("currency-buy");
const result_html = document.getElementById("rates-source");

// add currencies to the sell
currencies_all.forEach((currency) => {
  const sell = document.createElement("option");
  sell.value = currency;
  sell.textContent = currency;
  sell_currency.appendChild(sell);
});

// add currencies to the buy
currencies_no_EUR.forEach((currency) => {
  const buy = document.createElement("option");
  buy.value = currency;
  buy.textContent = currency;
  buy_currency.appendChild(buy);
});

// change currencies on change in Sell select

function updateCurrencySell() {
  console.log(sell_currency.value);

  if (sell_currency.value !== "EUR") {
    const buy = document.getElementById("currency-buy");

    // delete all options except EUR
    for (let i = buy.options.length - 1; i >= 0; i--) {
      buy.options[i] = null;
    }

    const only_EUR = document.createElement("option");
    only_EUR.value = "EUR";
    only_EUR.textContent = "EUR";
    buy.appendChild(only_EUR);
  } else {
    currencies_no_EUR.forEach((currency) => {
      const buy = document.createElement("option");
      buy.value = currency;
      buy.textContent = currency;
      buy_currency.appendChild(buy);
    });
  }
}

// data validation

function date_exists(input) {
  const exists = rates.find((item) => item.time === input.value);

  if (!exists) {
    alert("Invalid date. Date is not in the data base!");
    return false;
  }

  return exists;
}

function validate(input) {
  const regexp = /\d{4}-\d{2}-\d{2}/;

  if (!input.value.match(regexp)) {
    alert("Invalid date. Date must be in format YYYY-MM-DD");
    return false;
  }

  return date_exists(input);
}

function convert() {
  const input = document.getElementById("date-on");
  const amount_sell = document.getElementById("amount-sell");
  const amount_buy = document.getElementById("amount-buy");

  // check input validity first and return existing data object
  const valid_data = validate(input);

  console.log(valid_data);

  // convert

  if (valid_data) {
    // if amount_sell ONLY
    if (amount_sell.value && !amount_buy.value) {
      const sell = valid_data.Cube.find(
        (item) => item.currency === buy_currency.value
      );

      result_html.innerHTML = `${(amount_sell.value / sell.rate).toFixed(2)}`;

      return console.log(
        "amount_buy",
        Math.round((amount_sell.value / sell.rate) * 100) / 100
      );
    }

    // if amount_buy ONLY
    if (!amount_sell.value && amount_buy.value) {
      const buy = valid_data.Cube.find(
        (item) => item.currency === buy_currency.value
      );

      result_html.innerHTML = `${(amount_buy.value * buy.rate).toFixed(2)}`;

      return console.log(
        "amount_sell",
        Math.round(amount_buy.value * buy.rate * 100) / 100
      );
    }
  }
}

// run convert function on enter key

// function enter(event) {
//   if (event.key === "Enter") {
//     convert();
//   }
// }
