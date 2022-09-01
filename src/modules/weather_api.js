export default class Weather{

  static api = '2423a53c7a0cc2851f352aa684e674f2';
  static units = 'metric'
  static tempereature;
  static symbol = '°C';
  static city ='';
  static error=false;

  static async fetchData(){
    try{
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.api}&units=${this.units}`);
      const data = await response.json();
      if(data.cod==404){
        this.error = true;
        return;
      }
      this.error = false;
      const temp = data.main.temp;
      this.tempereature = temp+this.symbol;
    }catch(err){
      console.log(err);
    }
  }

}