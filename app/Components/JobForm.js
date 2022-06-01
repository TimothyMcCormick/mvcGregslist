export function getJobForm(job = {}){
  return `
  
  <form class="mb-3 col-12 bg-white p-3 mt-4"
  onsubmit="app.jobsController.${job.id ? `updateJob('${job.id}')` : 'createJob()'}">
              <h3> ${job.id ?  'Edit '+ job.jobTitle : 'List a job'}</h3>
                
                  <div class=" mb-2">
                    <label for="" class="form-label">Company</label>
                    <input required type="text" name="company" id="company" value="${job.company || ''}" placeholder="Enter a company..." maxlength="30"
                      minlength="3" class="form-control" placeholder="" aria-describedby="helpId"
                  </div>
                  <div class=" mb-2">
                    <label for="" class="form-label">Job Title</label>
                    <input required type="text" name="jobTitle" id="jobTitle" value="${job.jobTitle || ''}" placeholder="Enter a Job Title..."
                      class="form-control" placeholder="" aria-describedby="helpId">
                  </div>
                  <div class=" mb-2">
                    <label for="" class="form-label">Hours</label>
                    <input required type="number" name="hours" id="hours" value="${job.hours || 40}"  min="" max=""
                      class="form-control" placeholder="" aria-describedby="helpId">
                  </div>
                  <div class=" mb-2">
                    <label for="" class="form-label">Rate</label>
                    <input required type="number" name="rate" id="rate" value="${job.rate || 15}" min="1" class="form-control"
                      placeholder="" aria-describedby="helpId">
                  </div>
                  <div class=" mb-2">
                    <label for="" class="form-label">Description</label>
                    <input required type="text" name="description" id="description" value="${job.description || ''}"
                      placeholder="Tell us about the job..." class="form-control" maxlength="75" placeholder=""
                      aria-describedby="helpId">
                  </div>
                  <div class="col-12 d-flex justify-content-end p-0">
                <button type="button" class="btn btn-secondary p-1 m-1" data-bs-dismiss="modal">Close</button>
                ${getButtons(job.id)}
                </div>
              </form>`
}

function getButtons(id){
  if(id){
    return ` <button type="submit" class="btn btn-info px-3 py-2" title="edit a job"><i
    class="mdi mdi-pencil"></i>
  Save</button>`
  } else {
    return ` <button type="submit" class="btn btn-primary p-1 m-1" title="create a job"><i
    class="mdi mdi-plus"></i>
  Create</button>`
  }
}