<template>
  <section class="relative pt-5">
    <aside class="sidebar transition-all  duration-500 bg-[#171821] w-[88px] rounded-xl pt-5 pb-5 flex flex-col gap-y-12 items-center">
        <div class="flex gap-x-1">
            <span class="inline-block w-2.5 h-2.5 bg-[#EA1701] rounded-full"></span>
            <span class="inline-block w-2.5 h-2.5 bg-[#FEB002] rounded-full"></span>
            <span class="inline-block w-2.5 h-2.5 bg-[#029F04] rounded-full"></span>
        </div>
        <div class="flex flex-col  gap-y-9 h-full w-full px-4 relative">
            <div @click="showdashitem(i,icon.title)" @mouseenter="toggleIcon(i)" v-for="(icon,i) in iconImgs" :data-id="i" :key="i" class="iconDiv w-full h-9 flex items-center justify-around rounded-md">
                <a href="#">
                    <img class="w-3.5 h-3.5" :src="`${icon.img}`" >
                    <img class="w-3.5 h-3.5" :src="`${icon.blackImg}`" >
                </a>
                <span v-if="icon.iconVisible" class="inline-block w-[3px] h-9 bg-[#A9DFD8] absolute right-0 rounded"></span>
                <span v-show="icon.titleVisible" class="title text-xs font-bold capitalize text-[#87888C]">{{ icon.title }}</span>
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
            sideBar.classList.add('!w-[142px]')
            this.dashItem = title
            const iconDivs = document.querySelectorAll('.iconDiv')
            iconDivs.forEach(div => {
                if (div.dataset.id == i) {
                    console.log(div.querySelector('.title'));
                    div.classList.toggle('bg-[#A9DFD8]')
                    div.querySelector('.title').classList.toggle('text-[#000]')
                }
            });
        }
    }
}
</script>

<style>
    .selectedIcon{
        background-color: #A9DFD8;
        color:#000;
    }
</style>