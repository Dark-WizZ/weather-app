import Weather from './weather_api';

export default class UI {

  static init(){
    this.domLoad();
    this.render();
    this.bindEvents();
  }

  static render(){
  }

  static domLoad(){
    this.locationIP = document.getElementById('locationIP');
    this.temperature = document.querySelector('.temperature')
  }

  static bindEvents(){
    this.locationIP.addEventListener('keypress', (e) => {
      this.locationIPEnter(e.key)
    });
  }

  static temperatureRender(){
    this.temperature.textContent = `${Weather.tempereature}`;
  }

  static async locationIPEnter(e){
    if (e == 'Enter'){
      const loc = this.locationIP.value;
      await Weather.fetchData(loc);
    }
    this.temperatureRender();
  }
}