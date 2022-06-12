// export default function Triangle(side1, side2, side3) {

// }

export default class CurrencyExchange {
  static async getExchange(){
    try{
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      if (!response.ok){
        throw Error (response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}
