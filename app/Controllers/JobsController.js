import { ProxyState } from "../AppState.js";
import { getJobForm } from "../Components/JobsForm.js";




function _drawJobs(){
  let jobs = ProxyState.jobs
  let template = ''
  jobs.forEach(j =>{
    template += j.Template
  })
  document.getElementById('listings').innerHTML = template
}


export class JobsController{
  constructor(){
    console.log('jobs controller loaded', ProxyState.jobs);
    _drawJobs()

  }
  viewJobs(){
    let form = getJobForm()
    document.getElementById('form-body').innerHTML = form
    console.log('job form body loaded');
    _drawJobs()
  }
}