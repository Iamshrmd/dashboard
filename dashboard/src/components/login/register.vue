<template>
  <div class="flex items-center justify-center w-full h-screen">
    <div class="flex flex-col gap-2 bg-[#21222D] p-5 rounded gap-y-5 w-1/3 ">
        <h3 class="text-center text-[#F2C8ED]">ثبت نام</h3>
        <span class="text-[#F2C8ED] text-sm text-center">  {{ phoneNumber }} : شماره   </span>
        <span class="w-full bg-[#F2C8ED] h-px rounded opacity-50"></span>
        <div class="flex flex-col justify-center gap-y-5">
            <input v-model="userName" class="block bg-opacity-10 bg-[#fff] text-[#F2C8ED] h-10 px-3 text-right rounded outline-none" type="text" placeholder="نام">
            <input v-model="userLastName" class="block bg-opacity-10 bg-[#fff] text-[#F2C8ED] h-10 px-3 text-right rounded outline-none" type="text" placeholder="نام خانوادگی">
            <button @click="addUser(userName,userLastName)" class="h-10 rounded bg-[#F2C8ED] bg-opacity-10 text-[#F2C8ED] border border-[#F2C8ED]">تایید</button>
            <div class="cursor-pointer flex items-center gap-x-2">
              <img class="w-4" src="../../assets/login/icons8-left-arrow-24.png">
              <span @click="returnTopPrevious" class="text-[#fff] text-sm">بازگشت</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  mounted(){
      this.phoneNumber = localStorage.getItem('phone')
  },
  data(){
    return{
      userName:'',
      userLastName:'',
      userPhone:null
    }
  },
  methods:{
    addUser(userName,userLastName){
      axios
      .post('https://core.ccgram.ir/api/v1/register',{
        phone: localStorage.getItem('phone'),
        first_name : userName,
        last_name: userLastName
      })
      .then ((response)=>{
        this.$router.push('/otp')
      })
      .catch((error)=>{
        console.log(error);
      })
      this.sendOtpCode()

    },
    sendOtpCode(){
      axios
      .post('https://core.ccgram.ir/api/v1/login/send-otp',{
        phone: localStorage.getItem('phone')
      })
      .then((response)=>{
        console.log(response);
      })
      .catch((error)=>{
        console.log(error);
      })
    },
    returnTopPrevious(){
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>