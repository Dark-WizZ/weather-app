export default class Weather{

  static api = '2423a53c7a0cc2851f352aa684e674f2';
  static units = 'metric'
  static tempereature;

  static async fetchData(city){
    try{
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.api}&units=${this.units}`);
      const data = await response.json();
      console.log(data)
      if(data.cod==404){
        console.log(data.message);
        return;
      }
      const temp = data.main.temp;
      this.tempereature = temp+'°C';
    }catch(err){
      console.log(err);
    }
  }

}