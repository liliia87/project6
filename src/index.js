import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 import './css/styles.css';
import CurrencyExchange from './currency_exchange.js';

function clearFields() {
  $('.showErrors').text("");
  $('#output1').text("");
  $('#output').text("");
  $('#amount').val("");
}

function getElements(response,amount, currency){
  let usaCUR = 'USD';
  if(response.conversion_rates){
    let body = response.conversion_rates;
    for (const [key, value] of Object.entries(body)){
      if (key === currency){
        $('#output').append(`${amount} ${key} = ${value*amount} ${currency}`);
        $('#output1').append(`1 ${usaCUR} = ${value} ${key}`);
      }
    }
  }
}

$(document).ready(function(){
  $('#searchResult').click(function(){
    let currency = $("input:radio[name=currency]:checked").val();
    let amount = $('#amount').val();
    clearFields();
    CurrencyExchange.getExchange()
    .then(function(response){
      getElements(response, amount, currency);
    });
  });
});
