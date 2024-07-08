<template>
  <div>
    <div class="justify-between items-center justify-between  gap-5">
      <span @click="toggleCreateProjectPanel" class="w-full md:w-1/5 text-center flex items-center justify-center cursor-pointer rounded bg-[#A9DFD8] bg-opacity-10 text-[#A9DFD8] border border-[#A9DFD8] py-1">New Project</span>
    </div>
    <div v-if="showCreateProject" class="grid grid-cols-1 md:grid-cols-2 justify-between mt-4 gap-10">
      <div class="flex gap-x-5 items-center justify-between">
        <span class="text-sm text-[#fff] text-opacity-60">project name</span>
        <input v-model="name" class="md:w-1/2 text-[#fff] text-opacity-60 bg-[#171821] border border-[#fff] border-opacity-20 rounded" type="text">
      </div>
      <div class="flex gap-x-5 items-center justify-between">
        <span class="text-sm text-[#fff] text-opacity-60">name of employer</span>
        <input v-model="employerName" class="md:w-1/2 text-[#fff] text-opacity-60 bg-[#171821] border border-[#fff] border-opacity-20 rounded" type="text">
      </div>
      <div class="flex gap-x-5 items-center justify-between">
        <span class="text-sm text-[#fff] text-opacity-60">occupational group</span>
        <select v-model="jobId" class="w-1/2 bg-[#171821] border border-[#fff] border-opacity-20 text-opacity-60 text-[#fff] rounded py-px px-2">
          <option v-for="job in jobGroup" :key="job.id" :value="job.id">{{ job.name }}</option>
        </select>
      </div>
      <div class="flex gap-x-5 items-center justify-between">
        <span class="text-sm text-[#fff] text-opacity-60">area of expertise</span>
        <input v-model="area" class="md:w-1/2 text-[#fff] text-opacity-60 bg-[#171821] border border-[#fff] border-opacity-20 rounded" type="text">
      </div>
      <div class="flex gap-x-5 items-center justify-between">
        <span class="text-sm text-[#fff] text-opacity-60">description</span>
        <input v-model="jobDescription" class="md:w-1/2 text-[#fff] text-opacity-60 bg-[#171821] border border-[#fff] border-opacity-20 rounded" type="text">
      </div>
      <div class="flex gap-x-5 items-center justify-between">
        <span class="text-sm text-[#fff] text-opacity-60">date</span>
        <input v-model="startAt" class="md:w-1/2 text-[#fff] text-opacity-60 bg-[#171821] border border-[#fff] border-opacity-20 rounded text-[#fff] text-opacity-60" type="date">
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 justify-between items-center justify-between">
        <button @click="createProject" class="w-full text-center flex items-center justify-center cursor-pointer rounded bg-[#A9DFD8] bg-opacity-10 text-[#A9DFD8] border border-[#A9DFD8] py-1 w-[100%]">Create Project</button>
      </div>
    </div>
    <div v-if="showProjects" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-5">
      <div class="hover:border-opacity-60 transition-all duration-400 flex flex-col gap-y-3 px-3 py-3 border border-[#A9DFD8] border-opacity-20 rounded" v-for="project in projects" :key="project.id">
        <div class="flex items-center justify-between">
          <span class="text-sm text-[#fff] text-opacity-60">project name</span>
          <span class="text-[#A9DFD8]">{{ project.name}}</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm text-[#fff] text-opacity-60">name of employer</span>
          <span class="text-[#A9DFD8]">{{ project.employer_name || '-'}}</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-[#fff] text-opacity-60">occupational group</span>
          <span class="text-[#A9DFD8] ">{{  project.job_group?.name || '-'}}</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm text-[#fff] text-opacity-60">area of expertise</span>
          <span class="text-[#A9DFD8]">{{ project.description || '-'}}</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm text-[#fff] text-opacity-60">description</span>
          <span class="text-[#A9DFD8]">{{ project.job_description || '-'}}</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm text-[#fff] text-opacity-60">date</span>
          <span class="text-[#A9DFD8]">{{ formatDate(project.created_at) || '-'}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {TOKEN, ROLE , ACCEPT} from '../../../config.js'
export default {
  data(){
    return{
      showCreateProject : false,
      showProjects: true,
      name:'',
      employerName:'',
      jobGroup: [],
      jobId: null,
      area:'',
      jobDescription:'',
      startAt:'',
      projects:[]
    }
  },
  mounted(){
    this.fetchProjects()
    this.fetchJobGroup()
  },
  methods:{
    fetchJobGroup(){
      axios
      .get('https://core.ccgram.ir/api/v1/baseInfo/projectJobGroup/select-list',{
        headers: {
              Authorization: "Bearer " + TOKEN,
              role: ROLE,
              accept: ACCEPT,
            },
          }
        )
        .then((response)=>{
          console.log(response);
          this.jobGroup = response.data
        })
        .catch((error)=>{
          console.log(error);
        })
    },
    fetchProjects(){
      axios
        .get(
          `https://core.ccgram.ir/api/v1/project/list`,
          {
            headers: {
              Authorization: "Bearer " + TOKEN,
              role: ROLE,
              accept: ACCEPT,
            },
          }
        )
        .then((response)=>{
          console.log(response);
          this.projects = response.data.data
          console.log('projects',this.projects);
        })
        .catch((error)=>{
          console.log(error);
        })
    },
    toggleCreateProjectPanel(){
      this.showCreateProject = !this.showCreateProject
      this.showProjects = !this.showProjects
    },
    createProject(){
      console.log(this.startAt);
      axios
      .post('https://core.ccgram.ir/api/v1/project/add',{
        name: this.name,
        description: this.area,
        employer_name: this.employerName,
        job_group_id: this.jobId,
        job_description: this.jobDescription,
        start_at:this.startAt,
        is_active: 1,
      },
      {
            headers: {
              Authorization: "Bearer " + TOKEN,
              role: ROLE,
              accept: ACCEPT,
            },
      })
      .then((response)=>{
        console.log(response);
      })
      .catch((error)=>{
        console.log(error);
      })
      .finally(()=>{
        this.toggleCreateProjectPanel()
        this.fetchProjects()
      })
    },
    formatDate(date) {
    if (!date) return '-';
    // اینجا می‌توانید فرمت تاریخ را به دلخواه تنظیم کنید
    return new Date(date).toLocaleDateString();
  }
  }
}

</script>
