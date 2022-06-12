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

function getElements(response, amount, currency){
  let usaCUR = 'USD';
  let body = response.conversion_rates;

  if(body){
    for (const [key, value] of Object.entries(body)){
      if (key === currency){
        $('#output').append(`${amount} ${key} = ${value*amount} ${currency}`);
        $('#output1').append(`1 ${usaCUR} = ${value} ${key}`);
      }
    }
  } else {
    $('.showErrors').text(`There was an error!`);
  }
}
async function makeApiCall(amount, currency){
  const response = await CurrencyExchange.getExchange();
  getElements(response, amount, currency);
}

$(document).ready(function(){
  $('#searchResult').click(function(){
    let currency = $("input:radio[name=currency]:checked").val();
    let amount = $('#amount').val();
    clearFields();
    makeApiCall(amount, currency);
  });
});
