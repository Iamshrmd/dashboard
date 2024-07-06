<template>
  <div class="flex items-center justify-center w-full h-screen">
    <div class="flex flex-col gap-2 bg-[#21222D] p-5 rounded gap-y-5 md:w-1/3 sm:w-1/2">
        <h3 class="text-center text-[#fff]">کد تایید</h3>
        <p class="text-center text-[#F2C8ED] text-sm"> کدی که به شماره {{ phoneNumber}} ارسال شد رو وارد کنید</p>
        <span class="w-full bg-[#F2C8ED] h-px opacity-50"></span>
        <div class="flex flex-col justify-center gap-y-5">
          <div @keyup.enter="CheckRegisterCode(registerCode)" class="inputs flex items-center justify-center gap-x-5">
            <input autofocus @input="sumOptCode" inputmode="numeric" maxlength="1" class="text-center w-12 h-12 border border-[#F2C8ED] rounded inline-block bg-[#21222D] text-[#fff]">
            <input @input="sumOptCode" inputmode="numeric" maxlength="1" class="text-center w-12 h-12 border border-[#F2C8ED] rounded inline-block bg-[#21222D] text-[#fff]">
            <input @input="sumOptCode" inputmode="numeric" maxlength="1" class="text-center w-12 h-12 border border-[#F2C8ED] rounded inline-block bg-[#21222D] text-[#fff]">
            <input @input="sumOptCode" inputmode="numeric" maxlength="1" class="text-center w-12 h-12 border border-[#F2C8ED] rounded inline-block bg-[#21222D] text-[#fff]">
          </div>
            <button @click="CheckRegisterCode(registerCode)" class="h-10 rounded bg-[#F2C8ED] bg-opacity-10 text-[#F2C8ED] border border-[#F2C8ED]">تایید</button>
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
      console.log("register"+ ResgisterCode);
      axios
      .post('https://core.ccgram.ir/api/v1/register/verify',{
        phone :  localStorage.getItem('phone'),
        code : ResgisterCode
      })
      .then((response)=>{
        console.log(response);
        if (response.status == 200) {
            this.$router.push('/Dashboard')
        }
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
          console.log(this.registerCode);
    },
    returnTopPrevious(){
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>