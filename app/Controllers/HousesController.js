import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../Components/HouseForm.js";
import { housesService } from "../Services/HousesService.js"


function _drawHouses(){
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
    ProxyState.on('houses', _drawHouses)
    this.getHouses()
    _drawHouses()
  }

  viewHouses(){
    let form = getHouseForm()
    document.getElementById('form-body').innerHTML = form
    _drawHouses()
  }

  async getHouses(){
    await housesService.getHouses()
  }

  async createHouse(){
    window.event.preventDefault()
    let form = window.event.target
    console.log('form submitted', form);
    let houseData = {
      bedrooms : form.bedrooms.value,
      bathrooms : form.bathrooms.value,
      levels: form.levels.value,
      imgUrl: form.imgUrl.value,
      year: form.year.value,
      price: form.price.value,
      description: form.description.value,
    }
    console.log('the new house', houseData);
    housesService.createHouse(houseData)
    form.reset()
    bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).hide()
  }

  async updateHouse(id){
    window.event.preventDefault()
    console.log('updating house', id);
    let form = window.event.target
    let houseData = {
      bedrooms : form.bedrooms.value,
      bathrooms : form.bathrooms.value,
      levels: form.levels.value,
      imgUrl: form.imgUrl.value,
      year: form.year.value,
      price: form.price.value,
      description: form.description.value,
    }
    await housesService.updateHouse(houseData, id)
  }
  openCreateForm(){
    let form = getHouseForm()
    document.getElementById('form-body').innerHTML = form
    bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).show()
  }

  openEditForm(id){
    let house = ProxyState.houses.find(h => h.id ==id)
    console.log('open form', house);
    let updateForm = getHouseForm(house)
    document.getElementById('form-body').innerHTML = updateForm
    bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).show()
  }

  deleteHouse(id){
    console.log('deleting house', id);
    housesService.deleteHouse(id)
  }
}