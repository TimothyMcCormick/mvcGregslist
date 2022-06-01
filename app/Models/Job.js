import { generateId } from "../Utils/generateId.js"




export class Job{
  constructor(jobData){
    this.id = jobData.id || generateId()
    this.company = jobData.company 
    this.jobTitle = jobData.jobTitle
    this.hours = jobData.hours
    this.rate = jobData.rate
    this.description = jobData.description

  }

  get Template(){
    return`
    <div class=" col-6 col-md-3">
    <div class="rounded shadow p-2" ">
      
      <h4 class="text-center">${this.company}</h4>
      <h4 class="text-center">${this.jobTitle}</h4>
      <h4 class="text-center">$${this.hours}</h4>
      <h4 class="text-center">$${this.rate}</h4>
      <p>${this.description}</p>
    </div>
  </div>
    `
  }
}

      