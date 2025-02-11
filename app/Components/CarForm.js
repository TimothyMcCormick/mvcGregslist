export function getCarForm(car = {}){
  return `
  
  <form class="mb-3 col-12 bg-white p-3 mt-4"
  onsubmit="app.carsController.${car.id ? `updateCar('${car.id}')` : 'createCar()'}">
              <h3> ${car.id ?  'Edit '+ car.make : 'List a car'}</h3>
                <div class="row justify-content-between">
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Make</label>
                    <input required type="text" name="make" id="make" value="${car.make || ''}" placeholder="Enter a car Make..." maxlength="15"
                      minlength="3" class="form-control" placeholder="" aria-describedby="helpId"
                      title="please enter a model">
                  </div>
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Model</label>
                    <input required type="text" name="model" id="model" value="${car.model || ''}" placeholder="Enter a car Model..."
                      class="form-control" placeholder="" aria-describedby="helpId">
                  </div>
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Year</label>
                    <input required type="number" name="year" id="year" value="${car.year || 2000}"  min="1960" max="2023"
                      class="form-control" placeholder="" aria-describedby="helpId">
                  </div>
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Price</label>
                    <input required type="number" name="price" id="price" value="${car.price || 1}" min="1" class="form-control"
                      placeholder="" aria-describedby="helpId">
                  </div>
                  <div class="col-12 mb-2">
                    <label for="" class="form-label">description</label>
                    <input required type="text" name="description" id="description" value="${car.description || ''}"
                      placeholder="Tell us about the car..." class="form-control" maxlength="75" placeholder=""
                      aria-describedby="helpId">
                  </div>
                  <div class="col-6">
                    <label for="" class="form-label">Image Url</label>
                    <input required type="text" name="imgUrl" id="imgUrl" value="${car.imgUrl || ''}" class="form-control" placeholder=""
                      aria-describedby="helpId">
                  </div>
                  <div class="col-6">
                    <label for="" class="form-label">Color</label>
                    <input required type="color" name="color" id="color" value="${car.color || '#ffffff'}" class="form-control" placeholder=""
                      aria-describedby="helpId">
                  </div>
                </div>
                <div class="col-12 d-flex justify-content-end p-0">
                <button type="button" class="btn btn-secondary p-1 m-1" data-bs-dismiss="modal">Close</button>
                ${getButtons(car.id)}
                </div>
              </form>`
}

function getButtons(id){
  if(id){
    return ` <button type="submit" class="btn btn-info px-3 py-2" title="edit a car"><i
    class="mdi mdi-pencil"></i>
  Save</button>`
  } else {
    return ` <button type="submit" class="btn btn-primary p-1 m-1" title="create a car"><i
    class="mdi mdi-plus"></i>
  Create</button>`
  }
}