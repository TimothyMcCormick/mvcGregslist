import { generateId } from "../Utils/generateId.js";





export class House{
  constructor(houseData){
    this.id = houseData.id || generateId()
    this.bedrooms = houseData.bedrooms
    this.bathrooms = houseData.bathrooms
    this.levels = houseData.levels
    this.imgUrl = houseData.imgUrl
    this.year = houseData.year
    this.price = houseData.price
    this.description = houseData.description
  }

  get Template(){
    return`
    <div class=" col-6 col-md-3">
    <div class="rounded shadow p-2" ">
      <img class="img-fluid" src="${this.imgUrl}" alt="">
      <h4 class="text-center">${this.year}</h4>
      <h5 class="text-center">${this.bedrooms} bedrooms | ${this.bathrooms} baths | ${this.levels} Levels </h5>
      <h4 class="text-center">$${this.price}</h4>
      <p>${this.description}</p>
      <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')"><i class="mdi mdi-delete"></i></button>
      <button class="btn btn-warning" onclick="app.housesController.openEditForm('${this.id}')"><i class="mdi mdi-pencil"></i></button>
    </div>
  </div>
    `
  }
}
