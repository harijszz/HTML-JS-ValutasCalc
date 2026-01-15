const amount = document.getElementById("amount");
const submitButton = document.getElementById("submit");
const outputContainer = document.getElementById("output");
const selectedCurrency = document.getElementById("valuta");
const baseRates = {
  EUR: { EUR: 1.00, GBP: 0.86, USD: 1.09, CHF: 1.06, SEK: 11.45 },
  GBP: { EUR: 1.16, GBP: 1.00, USD: 1.27, CHF: 1.23, SEK: 13.30 },
  USD: { EUR: 0.92, GBP: 0.79, USD: 1.00, CHF: 0.97, SEK:10.48 },
  CHF: { EUR: 0.94, GBP: 0.81, USD: 1.03, CHF: 1.00, SEK:10.80 },
  SEK: { EUR: 0.087, GBP: 0.075, USD: 0.095, CHF: 0.093, SEK: 1.00 }
};

submitButton.addEventListener("click", handleClick);

function handleClick(){
    if(selectedCurrency.value == "GBP"){
        sum = amount.value * 0.86;
        console.log(sum);
    }
    else if(selectedCurrency.value == "USD"){
        sum = amount.value * 1.09;
        console.log(sum);
    }
    else if(selectedCurrency.value == "CHF"){
        sum = amount.value * 1.06;
        console.log(sum);
    }
    else if(selectedCurrency.value == "SEK"){
        sum = amount.value * 11.45;
        console.log(sum);
    }
};