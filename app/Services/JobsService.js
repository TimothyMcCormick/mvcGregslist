import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js";




class JobsService{
  async getJobs() {
    const res = await axios.get('https://bcw-sandbox.herokuapp.com/api/jobs')
    console.log('getJobs', res.data);
    ProxyState.jobs = res.data.map(j => new Job(j))
  }
  async createJob(jobData) {
    console.log('arrived at jobs service', jobData);
    const res = await axios.post('https://bcw-sandbox.herokuapp.com/api/jobs', jobData)
    console.log('createJob', res.data);
    ProxyState.jobs = [...ProxyState.jobs, new Job(res.data)]
  }
  async updateJob(jobData, id) {
    const res = await axios.put('https://bcw-sandbox.herokuapp.com/api/jobs/' + id, jobData)
    console.log('updateJob', res.data);
    let jobIndex = ProxyState.jobs.findIndex(j => j.id == id)
    ProxyState.jobs.splice(jobIndex, 1, new Job(res.data))
    ProxyState.jobs = ProxyState.jobs
  }
  async deleteJob(id) {
    const res = await axios.delete('https://bcw-sandbox.herokuapp.com/api/jobs/' + id)
    console.log('deleteJob', res.data);

    ProxyState.jobs = ProxyState.jobs.filter(j => j.id != id)
    ProxyState.jobs = ProxyState.jobs
  }
  
}

export const jobsService = new JobsService()