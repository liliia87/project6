// export default function Triangle(side1, side2, side3) {

// }

export default class CurrencyExchange {
  static getExchange(){
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
    .then(function(response){
      if (!response.ok){
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(function(error){
      return error;
    })
  }
}
