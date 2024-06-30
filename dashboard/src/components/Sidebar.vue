<template>
  <section class="relative py-12">
    <aside class="sidebar transition-all duration-500 bg-[#171821] w-[88px] h-[800px] rounded-xl py-6 flex flex-col gap-y-10 items-center"  :class="{'w-[142px] rounded-tl-3xl rounded-bl-3xl rounded-tr-none rounded-br-none border-r border-[#2c2d33]':sideBarWidth}">
        <div class="flex justify-items-start gap-x-1 w-full px-6">
            <span class="inline-block w-2.5 h-2.5 bg-[#EA1701] rounded-full"></span>
            <span class="inline-block w-2.5 h-2.5 bg-[#FEB002] rounded-full"></span>
            <span class="inline-block w-2.5 h-2.5 bg-[#029F04] rounded-full"></span>
        </div>
        <div class="flex flex-col gap-y-5 h-full w-full px-4 relative">
            <div @click="showdashitem(i,icon.title)" @mouseenter="toggleIcon(i)" v-for="(icon,i) in iconImgs" :data-id="i" :key="i" class="iconDiv w-full h-9 flex items-center justify-around rounded-md" >
                <a class="flex items-center" href="#">
                    <img class="w-3.5 h-3.5" :src="`${icon.img}`" :class="{'hidden' : icon.imgVisible}">
                    <img class="w-3.5 h-3.5" :src="`${icon.blackImg}`" :class="{'hidden' : !icon.imgVisible}">
                </a>
                <span v-show="icon.titleVisible" class="title text-xs font-bold capitalize text-[#87888C]">{{ icon.title }}</span>
                <span v-if="icon.iconVisible" class="inline-block w-[3px] h-6 bg-[#A9DFD8] absolute right-0 rounded"></span>
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
            dashItem:'dashboard',
            sideBarWidth:false,
        }
    },
    methods:{
        toggleIcon(i){
            if (!this.sideBarWidth) {
                this.$emit('toggleIcon',i)
            }
        },
        showdashitem(i,title){
            this.$emit('showdashitem',i)
            this.dashItem = title
            console.log(this.sideBarWidth);
            //
            const sideBar = document.querySelector('.sidebar')
            sideBar.classList.add('!w-[142px]')
            this.sideBarWidth =true
            const iconDivs = document.querySelectorAll('.iconDiv')
            iconDivs.forEach(div => {
                div.classList.remove('bg-[#A9DFD8]')
                div.classList.add('selectedDiv')
                div.querySelector('.title').classList.remove('text-[#000]')
                if (div.dataset.id == i) {
                    div.classList.add('bg-[#A9DFD8]')
                    div.classList.remove('selectedDiv')
                    div.querySelector('.title').classList.toggle('text-[#000]')
                }
            });
            console.log(this.sideBarWidth);
        }
    }
}
</script>
<style>
 .selectedDiv{
    justify-content: flex-start;
    column-gap: 12px;
 }
</style>