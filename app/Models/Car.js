import { generateId } from "../Utils/generateId.js"


export class Car{
  constructor(carData){
    // NOTE need id to have something unique on each car
    this.id = carData.id || generateId()
    this.make = carData.make
    this.model = carData.model
    this.imgUrl = carData.imgUrl
    this.year = carData.year
    this.price = carData.price
    this.description = carData.description
    this.color = carData.color
  }


  get Template(){
    return `
  <div class=" col-6 col-md-3">
    <div class="rounded shadow p-2" ">
      <img class="img-fluid" src="${this.imgUrl}" alt="">
      <h5 class="text-center">${this.make} | ${this.model} | ${this.year}</h5>
      <h4 class="text-center">$${this.price}</h4>
      <p>${this.description}</p>
      <input class="w-100" type="color" value="${this.color}">
      <button class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')"><i class="mdi mdi-delete"></i></button>
      <button class="btn btn-warning" onclick="app.carsController.openEditForm('${this.id}')"><i class="mdi mdi-pencil"></i></button>
    </div>
  </div>
    `
  }
}