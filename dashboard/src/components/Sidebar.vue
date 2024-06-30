<template>
  <section class="relative flex gap-x-2 py-12" :class="{'gap-x-0': sideBarWidth}">
    <aside @click.self="closeSideBar()" class="sidebar transition-all duration-500 bg-[#171821] w-[88px] h-[800px] rounded-xl py-6 flex flex-col gap-y-10 items-center"  :class="{'w-[160px] rounded-tl-3xl rounded-bl-3xl rounded-tr-none rounded-br-none border-r border-[#2c2d33]':sideBarWidth}">
        <div class="flex justify-items-start gap-x-1 w-full px-6">
            <span class="inline-block w-2.5 h-2.5 bg-[#EA1701] rounded-full"></span>
            <span class="inline-block w-2.5 h-2.5 bg-[#FEB002] rounded-full"></span>
            <span class="inline-block w-2.5 h-2.5 bg-[#029F04] rounded-full"></span>
        </div>
        <div class="flex flex-col gap-y-5 h-full w-full px-4 relative">
            <div @click="showdashitem(i,icon.title)" @mouseenter="toggleIcon(i)" v-for="(icon,i) in iconImgs" :data-id="i" :key="i" class="iconDiv hover:cursor-pointer w-full h-9 flex items-center justify-center rounded-md">
                <a class="flex items-center" href="#">
                    <img class="w-3.5 h-3.5" :src="`${icon.img}`" :class="{'hidden' : icon.imgVisible}">
                    <img class="w-3.5 h-3.5" :src="`${icon.blackImg}`" :class="{'hidden' : !icon.imgVisible}">
                </a>
                <span v-show="sideBarWidth" class="title text-xs capitalize text-[#87888C]">{{ icon.title }}</span>
                <span v-if="icon.iconVisible" class="inline-block w-[3px] h-6 bg-[#A9DFD8] absolute right-0 rounded"></span>
            </div>
        </div>
    </aside>
    <div v-if="dashItem" class="w-full h-[800px] left-[150px] bg-[#171821] rounded-tr-3xl rounded-xl" :class="{'rounded-br-3xl rounded-tl-none rounded-bl-none': sideBarWidth}">{{ dashItem}}</div>
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
            this.sideBarWidth =true
            const iconDivs = document.querySelectorAll('.iconDiv')
            iconDivs.forEach(div => {
                div.classList.remove('selectedDiv')
                div.classList.add('allDivs')
                div.querySelector('.title').classList.remove('selectedSpan')
                if (div.dataset.id == i) {
                    div.classList.add('selectedDiv')
                    div.classList.remove('allDivs')
                    div.querySelector('.title').classList.add('selectedSpan')
                }
            });
        },
        closeSideBar(){
            this.sideBarWidth = !this.sideBarWidth
            if (this.sideBarWidth == true) {
                this.$emit('showdashitem',0)
                const iconDivs = document.querySelectorAll('.iconDiv')
                iconDivs.forEach(div => {
                    div.classList.remove('selectedDiv')
                    div.classList.add('allDivs')
                    div.querySelector('.title').classList.remove('selectedSpan')
                    if (div.dataset.id == 0) {
                        div.classList.add('selectedDiv')
                        div.classList.remove('allDivs')
                        div.querySelector('.title').classList.add('selectedSpan')
                    }
                });

            }else if(this.sideBarWidth == false){
                const iconDivs = document.querySelectorAll('.iconDiv')
                iconDivs.forEach(div => {
                div.classList.remove('selectedDiv')
                div.classList.remove('allDivs')
                this.$emit('removeBlackImgs')
            });
            }

        }
    }
}
</script>
<style>
 .selectedDiv{
    background-color: #A9DFD8;
    column-gap: 5px;
    justify-content: space-around;
 }
 .allDivs{
    justify-content: flex-start;
    column-gap: 12px;
    font-weight: 500;
 }
 .selectedSpan{
    color: #000;
    font-weight: 600;
 }
</style>