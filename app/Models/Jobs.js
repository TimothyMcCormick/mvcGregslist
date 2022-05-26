



export class Jobs{
  constructor(img, company, title, pay, description){
    this.img = img
    this.company = company 
    this.title = title
    this.pay = pay
    this.description = description

  }

  get Template(){
    return`
    <div class=" col-6 col-md-3">
    <div class="rounded shadow p-2" ">
      <img class="img-fluid" src="${this.img}" alt="">
      <h4 class="text-center">${this.company}</h4>
      <h4 class="text-center">${this.title}</h4>
      <h4 class="text-center">$${this.pay}</h4>
      <p>${this.description}</p>
    </div>
  </div>
    `
  }
}

      