import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js"


function _drawHouses(){
  // get all the houses and build a template
  let houses = ProxyState.houses
  let template = ''
  houses.forEach(h => {
    template += h.Template
  })

  document.getElementById('listings').innerHTML = template
  }




export class HousesController{
  constructor(){
    console.log('Houses controller loaded', ProxyState.houses);
    _drawHouses()
  }


  viewHouses(){
  //  Get Car Form and inject into modal body
    _drawHouses()
  }
}