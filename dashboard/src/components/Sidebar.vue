<template>
  <section class="relative">
    <aside @click.self="closeSideBar()" class="sidebar overflow-y-auto no-scrollbar transition-all duration-500 bg-[#171821] w-[88px] h-screen rounded-tl-xl rounded-bl-xl py-6 flex flex-col gap-y-10 items-center border-r border-[#2c2d33]"  :class="{'!w-[160px] rounded-tl-3xl rounded-bl-3xl rounded-tr-none rounded-br-none ':sideBarWidth}">
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
  </section>
</template>

<script>

export default {
    props:['iconImgs'],
    data() {
        return{
            sideBarWidth:false,
            Title:''
        }
    },
    methods:{
        toggleIcon(i){
            if (!this.sideBarWidth) {
                this.$emit('toggleIcon',i)
            }
        },
        showdashitem(i,title){
            this.$emit('showdashitem',i,title)
            this.sideBarWidth =true
            this.Title= title
            this.selectIcon(i)
        },
        closeSideBar(){
            this.sideBarWidth = !this.sideBarWidth
            if (this.sideBarWidth) {
                console.log(this.Title);
                this.$emit('showdashitem',0,this.Title)
                this.selectIcon(0)

            }else if(!this.sideBarWidth){
                const iconDivs = document.querySelectorAll('.iconDiv')
                iconDivs.forEach(div => {
                div.classList.remove('selectedDiv')
                div.classList.remove('allDivs')
                this.$emit('removeBlackImgs',this.Title)
            });
            }

        },
        selectIcon(index){
            const iconDivs = document.querySelectorAll('.iconDiv')
            iconDivs.forEach(div => {
                div.classList.remove('selectedDiv')
                div.classList.add('allDivs')
                div.querySelector('.title').classList.remove('selectedSpan')
                if (div.dataset.id == index) {
                    div.classList.add('selectedDiv')
                    div.classList.remove('allDivs')
                    div.querySelector('.title').classList.add('selectedSpan')
                }
            });
        }
    }
}
</script>
<style>
 .selectedDiv{
    background-color: #A9DFD8;
    column-gap: 5px;
    justify-content: space-evenly;
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
 .no-scrollbar::-webkit-scrollbar {
    width: 0;
}
</style>