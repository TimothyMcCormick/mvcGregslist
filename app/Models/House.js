import { generateId } from "../Utils/generateId.js";





export class House{
  constructor(location, img, bedrooms, bathrooms, sqFt, price, description){
    this.img = img
    this.location = location
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.sqFt = sqFt
    this.price = price
    this.description = description
  }

  get Template(){
    return`
    <div class=" col-6 col-md-3">
    <div class="rounded shadow p-2" ">
      <img class="img-fluid" src="${this.img}" alt="">
      <h4 class="text-center">${this.location}</h4>
      <h5 class="text-center">${this.bedrooms} bedrooms | ${this.bathrooms} baths | ${this.sqFt} Sq.Ft. </h5>
      <h4 class="text-center">$${this.price}</h4>
      <p>${this.description}</p>
    </div>
  </div>
    `
  }
}
