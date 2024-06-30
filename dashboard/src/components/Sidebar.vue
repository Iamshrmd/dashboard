<template>
  <section class="relative pt-5">
    <aside class="sidebar transition-all  duration-500 bg-[#171821] w-[88px] rounded-xl pt-5 pb-5 flex flex-col gap-y-12 items-center">
        <div class="flex gap-x-1">
            <span class="inline-block w-2.5 h-2.5 bg-[#EA1701] rounded-full"></span>
            <span class="inline-block w-2.5 h-2.5 bg-[#FEB002] rounded-full"></span>
            <span class="inline-block w-2.5 h-2.5 bg-[#029F04] rounded-full"></span>
        </div>
        <div class="flex flex-col h-full gap-y-9 w-full">
            <div @click="showdashitem(i,icon.title)" @mouseenter="toggleIcon(i)" v-for="(icon,i) in iconImgs" :key="i" class="w-full flex items-center justify-center relative" :class="{'bg-[red]': icon.titleVisible}">
                <a href="#"><img class="w-3.5 h-3.5" :src="`${icon.img}`"></a>
                <span v-if="icon.iconVisible" class="inline-block w-[3px] h-[200%] bg-[#A9DFD8] absolute right-0 rounded"></span>
            </div>
        </div>
    </aside>
    <!-- <div v-if="dashItem" class="w-full h-full absolute top-0 left-[150px] border border-[red]">{{ dashItem}}</div> -->
  </section>
</template>

<script>
export default {
    props:['iconImgs'],
    data() {
        return{
            dashItem:'dashboard'
        }
    },
    methods:{
        toggleIcon(i){
            this.$emit('toggleIcon',i)
        },
        showdashitem(i,title){
            this.$emit('showdashitem',i)
            const sideBar = document.querySelector('.sidebar')
            if (sideBar.style.width == '88px') {
                sideBar.style.width='132px'
            } else {
                sideBar.style.width='88px'

            }
            this.dashItem = title

        }
    }
}
</script>

<style>

</style>