<template>
  <div class="flex items-center justify-center w-full h-screen">
    <div class="flex flex-col gap-2 bg-[#21222D] p-5 rounded gap-y-5 w-1/3 ">
        <h3 class="text-center text-[#fff]">فرم ورود</h3>
        <span class="w-full bg-[#A9DFD8] h-px opacity-50"></span>
        <div class="flex flex-col justify-center gap-y-5">
            <input v-model="phoneNumber" class="block bg-opacity-10 bg-[#fff] text-[#A9DFD8] h-10 px-3 text-right rounded outline-none" type="text" placeholder="شماره موبایل">
            <button @click="checkNumber(phoneNumber)" class="submit-button h-10 rounded bg-[#A9DFD8] bg-opacity-10 text-[#A9DFD8] border border-[#A9DFD8]">تایید</button>
            <!-- <router-link @click="checkNumber(phoneNumber)" :to="nextPage"  class="h-10 rounded flex items-center justify-center bg-[#A9DFD8] bg-opacity-10 text-[#A9DFD8] text-center border border-[#A9DFD8]">ورود</router-link> -->
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      phoneNumber:null,
      nextPage: '',
    }
  },
  methods:{
    checkNumber(phoneNumber){
      const submitButton= document.querySelector('.submit-button')
      submitButton.textContent='کمی صبر کنید'
      axios
      .post('https://core.ccgram.ir/api/v1/login/check',{
        phone : phoneNumber
      })
      .then((response)=>{
        // this.isRegistered = false ? response.data.method == 'register' : true
        if (response.data.method == 'register') {
          this.nextPage = '/register'
        }else {
          this.nextPage = '/loginForm'
        }
        this.$router.push(this.nextPage);
        localStorage.setItem('phone',phoneNumber)
      })
      .catch((error) => {
        console.log(error);
      })
    },
  }
}
</script>

<style>

</style>