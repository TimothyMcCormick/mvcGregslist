export function getHouseForm(house = {}){
  return `
  
  <form class="mb-3 col-12 bg-white p-3 mt-4"
  onsubmit="app.housesController.${house.id ? `updateHouse('${house.id}')` : 'createHouse()'}">
              <h3> ${house.id ?  'Edit '+ house.year : 'List a house'}</h3>
                <div class="row">
                  <div class=" mb-2">
                    <label for="" class="form-label">Bedrooms</label>
                    <input required type="text" name="bedrooms" id="bedrooms" value="${house.bedrooms || ''}" placeholder="Enter bedrooms..." maxlength="15"
                      minlength="3" class="form-control" placeholder="" aria-describedby="helpId"
                  </div>
                  <div class=" mb-2">
                    <label for="" class="form-label">Bathrooms</label>
                    <input required type="text" name="bathrooms" id="bathrooms" value="${house.bathrooms || ''}" placeholder="Enter bathrooms..."
                      class="form-control" placeholder="" aria-describedby="helpId">
                  </div>
                  <div class=" mb-2">
                    <label for="" class="form-label">Year</label>
                    <input required type="number" name="year" id="year" value="${house.year || 2000}"  min="" max=""
                      class="form-control" placeholder="" aria-describedby="helpId">
                  </div>
                  <div class=" mb-2">
                    <label for="" class="form-label">Price</label>
                    <input required type="number" name="price" id="price" value="${house.price || 1}" min="1" class="form-control"
                      placeholder="" aria-describedby="helpId">
                  </div>
                  <div class="c mb-2">
                    <label for="" class="form-label">description</label>
                    <input required type="text" name="description" id="description" value="${house.description || ''}"
                      placeholder="Tell us about the house..." class="form-control" maxlength="75" placeholder=""
                      aria-describedby="helpId">
                  </div>
                  <div class="">
                    <label for="" class="form-label">Image Url</label>
                    <input required type="text" name="imgUrl" id="imgUrl" value="${house.imgUrl || ''}" class="form-control" placeholder=""
                      aria-describedby="helpId">
                  </div>
                  <div class="">
                    <label for="" class="form-label">Levels</label>
                    <input required type="number" name="levels" id="levels" value="${house.levels || ''}" class="form-control" placeholder=""
                      aria-describedby="helpId">
                  </div>
                </div>
                <div class="col-12 d-flex justify-content-end p-0">
                <button type="button" class="btn btn-secondary p-1 m-1" data-bs-dismiss="modal">Close</button>
                ${getButtons(house.id)}
              </form>`
}

function getButtons(id){
  if(id){
    return ` <button type="submit" class="btn btn-info px-3 py-2" title="edit a house"><i
    class="mdi mdi-pencil"></i>
  Save</button>`
  } else {
    return ` <button type="submit" class="btn btn-primary p-1 m-1" title="create a house"><i
    class="mdi mdi-plus"></i>
  Create</button>`
  }
}