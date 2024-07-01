<template>
        <div v-if="dashTitle" class="w-full h-screen px-12 py-4 bg-[#171821] rounded-tr-3xl rounded-xl text-[#fff] rounded-br-3xl rounded-tl-none rounded-bl-none" >
            <div class="flex items-center justify-between">
                <div class="w-1/2 flex items-center bg-[#21222D] rounded-lg">
                    <div class="flex items-center justify-end w-10">
                        <img class="w-3.5 h-3" src="../assets/header/search.png" alt="">
                    </div>
                    <input class="w-full h-11 px-2 rounded-tr-lg rounded-br-lg bg-[#21222D] text-xs"  placeholder="Search Here" type="text">
                </div>
                <div class="flex items-center gap-x-4">
                    <div class="relative">
                        <img class="w-3.5 h-4" src="../assets/header/Vector.png">
                        <span class="inline-block h-1.5 w-1.5 bg-[#FC003C] absolute top-0 right-0 rounded-full"></span>
                    </div>
                    <img class="h-[30px] w-[30px]" src="../assets/header/Profile.png">
                    <img class="w-3" src="../assets/header/Vector (1).png">
                </div>
            </div>
            <div></div>
        </div>
</template>

<script>
export default {
    props : ['dashTitle'],
    data(){
        return {
        }
    }
}
</script>

<style>

</style>