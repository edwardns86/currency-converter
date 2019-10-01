
// Formatting

function formatCurrency(type, value) {
  const formatter = new Intl.NumberFormat(type, {
    currency: type,
    style: "currency"
  });
  return formatter.format(value);
}


// API 
async function callApi(fromCurrency, toCurrency, amount) {

  let url = `https://free.currencyconverterapi.com/api/v6/convert?q=${fromCurrency+ "_" + toCurrency}&compacty&apiKey=69f496aafa69b403a742`;
  let result = await fetch(url); 
  let json = await result.json();
  
  let rate = json.results[fromCurrency+"_"+toCurrency].val ;
  
  return rate  * amount;
    
}

// Conversion 
 
async function convertedAmount() {
  
  let fromCurrency = document.getElementById("from-select").value; 
  
  let toCurrency = document.getElementById("to-select").value;

  let amount = document.getElementById("amount").value;
  const convertedAmount = await callApi(fromCurrency, toCurrency , amount);


     document.getElementById("result").innerHTML= formatCurrency(toCurrency, convertedAmount) ;
}

  







