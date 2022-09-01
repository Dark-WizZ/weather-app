import Weather from './weather_api';

export default class UI {

  static init(){
    this.domLoad();
    this.render();
    this.domLoad();
    this.bindEvents();
  }

  static render(){

  }

  static domLoad(){
    this.locationIP = document.getElementById('locationIP');
    this.temperature = document.querySelector('.temperature');
    this.state = document.querySelector('.state');
    this.error = document.querySelector('.error')
  }

  static bindEvents(){
    this.locationIP.addEventListener('keypress', (e) => {
      this.locationIPEnter(e.key)
    });
    this.temperature.addEventListener('click', this.temperatureClk.bind(this));
  }

  static temperatureClk(e){
    if(Weather.units=='metric'){
    Weather.units = 'imperial'
    Weather.symbol = '°F'
    }else{
      Weather.units = 'metric'
      Weather.symbol = '°C'
    }
    this.temperatureRender()
  }

  static async temperatureRender(){
    const stateName = locationIP.value
    Weather.city = (stateName)? stateName: Weather.city;
    await Weather.fetchData();
    if(Weather.error){
      this.error.style.display = 'block';
      return;
    }
    this.error.style.display = 'none';
    this.temperature.textContent = `${Weather.tempereature}`;
    this.state.textContent = Weather.city.toUpperCase();
  }

  static locationIPEnter(e){
    if (e == 'Enter'){
      this.temperatureRender()
    }
  }
}