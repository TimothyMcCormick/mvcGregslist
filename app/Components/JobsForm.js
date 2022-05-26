export function getJobForm(){
  return `
  
  <form class="mb-3 col-12 bg-white p-3 mt-4" onsubmit="app.jobsController.createJob()">
              <h3> List a Job </h3>
                <div class="row">
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Company</label>
                    <input required type="text" name="company" id="company" placeholder="Enter your company" maxlength="15"
                      minlength="3" class="form-control" placeholder="" aria-describedby="helpId"
                      
                  </div>
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Title</label>
                    <input required type="text" name="title" id="title" placeholder="Enter job title"
                      class="form-control" placeholder="" aria-describedby="helpId">
                  </div>
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Pay</label>
                    <input required type="number" name="pay" id="pay" value="" min="" max=""
                      class="form-control" placeholder="" aria-describedby="helpId">
                  </div>
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Image</label>
                    <input required name="image" id="image" value="" min="" class="form-control"
                      placeholder="" aria-describedby="helpId">
                  </div>
                  <div class="col-12 mb-2">
                    <label for="" class="form-label">description</label>
                    <input required type="text" name="description" id="description"
                      placeholder="Tell us about the job" class="form-control" maxlength="" placeholder=""
                      aria-describedby="helpId">
                  </div>
                </div>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary px-3 py-2" title="create a car"><i
                    class="mdi mdi-plus"></i>
                  Create</button>
              </form>`
}