<template>
  <div class="flex items-center justify-center w-full h-screen">
    <div class="flex flex-col gap-2 bg-[#21222D] p-5 rounded gap-y-5 w-1/3 ">
        <h3 class="text-center text-[#fff]">کد تایید</h3>
        <p class="text-center text-[#A9DFD8] text-sm"> کدی که به شماره {{ phoneNumber}} ارسال شد رو وارد کنید</p>
        <span class="w-full bg-[#A9DFD8] h-px opacity-50"></span>
        <div class="flex flex-col justify-center gap-y-5">
          <div class="inputs flex items-center justify-center gap-x-5">
            <input @input="sumOptCode" inputmode="numeric" maxlength="1" class="text-center w-12 h-12 border border-[#A9DFD8] rounded inline-block bg-[#21222D] text-[#fff]">
            <input @input="sumOptCode" inputmode="numeric" maxlength="1" class="text-center w-12 h-12 border border-[#A9DFD8] rounded inline-block bg-[#21222D] text-[#fff]">
            <input @input="sumOptCode" inputmode="numeric" maxlength="1" class="text-center w-12 h-12 border border-[#A9DFD8] rounded inline-block bg-[#21222D] text-[#fff]">
            <input @input="sumOptCode" inputmode="numeric" maxlength="1" class="text-center w-12 h-12 border border-[#A9DFD8] rounded inline-block bg-[#21222D] text-[#fff]">
          </div>
            <button @click="CheckRegisterCode(registerCode)" class="h-10 rounded bg-[#A9DFD8] bg-opacity-10 text-[#A9DFD8] border border-[#A9DFD8]">تایید</button>
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
      registerCode :''
    }
  },
  methods:{
    CheckRegisterCode(ResgisterCode){
      axios
      .post('https://core.ccgram.ir/api/v1/register/verify',{
        phone :  localStorage.getItem('phone'),
        code : parseInt(ResgisterCode)
      })
      .then((response)=>{
        console.log(response);
      })
      .catch((error)=>{
        console.log(error);
      })
    },
    sumOptCode(e){
      const target = e.target;
      const val = target.value;
        if (isNaN(val)) {
            target.value = "";
            return;
        }
        if (val != "") {
            const next = target.nextElementSibling;
            if (next) {
                next.focus();
            }
          }
          this.registerCode += val
    },
    returnTopPrevious(){
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>