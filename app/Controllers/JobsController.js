import { ProxyState } from "../AppState.js";
import { getJobForm } from "../Components/JobForm.js";
import { jobsService } from "../Services/JobsService.js";



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
    ProxyState.on('jobs', _drawJobs)
    this.getJobs()
    this.viewJobs()
  }
  
  viewJobs(){
    let form = getJobForm()
    document.getElementById('form-body').innerHTML = form
    console.log('job form body loaded');
    _drawJobs()
  }

  async getJobs(){
    await jobsService.getJobs()
  }

  async createJob(){
    window.event.preventDefault()
    let form = window.event.target
    console.log('form submitted', form);
    let jobData = {
      company : form.company.value,
      jobTitle : form.jobTitle.value,
      hours : form.hours.value,
      rate : form.rate.value,
      description : form.description.value
    }
    console.log('the new job', jobData);
    jobsService.createJob(jobData)
    form.reset()
    bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).hide()
  }

  async updateJob(id){
    window.event.preventDefault()
    console.log('updating job', id);
    let form = window.event.target
    let jobData = {
      company : form.company.value,
      jobTitle : form.jobTitle.value,
      hours : form.hours.value,
      rate : form.rate.value,
      description : form.description.value
    }
    await jobsService.updateJob(jobData, id)
  }

  openCreateForm(){
    let form = getJobForm()
    document.getElementById('form-body').innerHTML = form
    bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).show()
  }

  openEditForm(id){
    let job = ProxyState.jobs.find(j => j.id == id)
    console.log('open form', job);
    let updateForm = getJobForm(job)
    document.getElementById('form-body').innerHTML = updateForm
    bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).show()
  }

  deleteJob(id){
    console.log('deleting job', id);
    jobsService.deleteJob(id)
  }
}