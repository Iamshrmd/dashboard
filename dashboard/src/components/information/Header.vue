<template>
  <div class="grid grid-cols-3 mb-7 gap-4">
                <div class="col-span-2 flex items-center bg-[#21222D] rounded-lg">
                    <div class="flex items-center justify-end w-10">
                        <img class="w-3.5 h-3" src="../../assets/header/search.png" alt="">
                    </div>
                    <input class="w-full h-11 text-[#fff] outline-0 px-2 rounded-tr-lg rounded-br-lg bg-[#21222D] text-xs"  placeholder="Search Here" type="text">
                </div>
                <div class="flex items-center justify-end gap-x-4 relative py-2">
                    <div class="relative">
                        <img class="w-3.5 h-4" src="../../assets/header/Vector.png">
                        <span class="inline-block h-1.5 w-1.5 bg-[#FC003C] absolute top-0 right-0 rounded-full"></span>
                    </div>
                    <img @click="toggleProfilePanel"  class="h-[30px] w-[30px]" src="../../assets/header/Profile.png">
                    <img @click="toggleProfilePanel" class="arrow transform transition-all duration-500 hover:cursor-pointer w-3" src="../../assets/header/Vector (1).png">
                    <div class="panel transition-all duration-500 absolute top-full opacity-0 w-24 right-0 bg-[#171821] bg-opacity-80 rounded">
                        <div class="flex items-center justify-between">
                            <img class="w-4 h-4 grayscale-100" src="../../assets/icons/icons8-female-user-26.png">
                            <span class="text-xs text-[#fff]">Edit Profile</span>
                        </div>
                    </div>
                </div>
    </div>
</template>

<script>
export default {
    methods:{
        toggleProfilePanel(){
            const arrow = document.querySelector('.arrow')
            arrow.classList.toggle('rotate-180')
            const panel = document.querySelector('.panel')
            panel.classList.toggle('opacity-100')
        }
    }
}
</script>

<style>

</style>