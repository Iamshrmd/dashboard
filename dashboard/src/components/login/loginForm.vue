<template>
  <div class="flex items-center justify-center w-full h-screen">
    <div class="flex flex-col gap-2 bg-[#21222D] p-5 rounded gap-y-5 w-1/3 ">
        <h3 class="text-center text-[#A9DFD8]">ورود</h3>
        <span class="w-full bg-[#A9DFD8] h-px opacity-50"></span>
        <div class="flex flex-col justify-center gap-y-5">
            <input v-model="phonenumber" class="block bg-opacity-10 bg-[#fff] text-[#A9DFD8] h-10 px-3 text-right rounded outline-none" type="text">
            <input class="block bg-opacity-10 bg-[#fff] text-[#A9DFD8] h-10 px-3 text-right rounded outline-none" type="text" placeholder="رمز حساب کاربری">
            <button class="h-10 rounded bg-[#A9DFD8] bg-opacity-10 text-[#A9DFD8] border border-[#A9DFD8]">تایید</button>
            <button @click="sendLogonCode(phonenumber)" class="text-[#fff] cursor-pointer">ورود با کد یکبار مصرف</button>
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
  data(){
    return{
      phonenumber:''
    }
  },
  mounted(){
    this.phonenumber =  localStorage.getItem('phone')
    console.log(this.phonenumber);
  },
  methods:{
    sendLogonCode(){
      axios
      .post('https://core.ccgram.ir/api/v1/login/send-otp',{
        phone: this.phonenumber
      })
      .then((response)=>{
        console.log(response);
        this.$router.push('/LoginCode')
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  }
}
</script>

<style>

</style>