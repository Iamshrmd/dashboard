<script>
import Sidebar from "./components/Sidebar.vue";
import dashboardInformation from "./components/dashboardInformation.vue"
export default {
  components:{Sidebar,dashboardInformation},
  data(){
    return{
      dashTitle:'',
      iconImgs : [
        {
          titleVisible:false,
          title:"dashboard",
          iconVisible:false,
          imgVisible:false,
          img:"src/assets/icons/home.png",
          blackImg:"src/assets/icons/home-black.png",
        },
        {
          titleVisible:false,
          title:"Profile",
          imgVisible:false,
          iconVisible:false,
          blackImg:"src/assets/icons/home-black.png",
          img:"src/assets/icons/Vector (1).png"
        },
        {
          titleVisible:false,
          title:"Leaderboard",
          imgVisible:false,
          iconVisible:false,
          blackImg:"src/assets/icons/home-black.png",
          img:"src/assets/icons/Vector (2).png"
        },
        {
          titleVisible:false,
          title:"Order",
          imgVisible:false,
          iconVisible:false,
          blackImg:"src/assets/icons/home-black.png",
          img:"src/assets/icons/Vector (3).png"
        },
        {
          titleVisible:false,
          title:"Product",
          imgVisible:false,
          iconVisible:false,
          blackImg:"src/assets/icons/home-black.png",
          img:"src/assets/icons/Vector (10).png"
        },
        {
          titleVisible:false,
          title:"Sales Report",
          imgVisible:false,
          iconVisible:false,
          blackImg:"src/assets/icons/home-black.png",
          img:"src/assets/icons/Vector (4).png"
        },
        {
          titleVisible:false,
          title:"Message",
          imgVisible:false,
          iconVisible:false,
          blackImg:"src/assets/icons/home-black.png",
          img:"src/assets/icons/Vector (5).png"
        },
        {
          titleVisible:false,
          title:"Settings",
          imgVisible:false,
          iconVisible:false,
          blackImg:"src/assets/icons/home-black.png",
          img:"src/assets/icons/Group (9).png"
        },
        {
          titleVisible:false,
          title:"Signout",
          imgVisible:false,
          iconVisible:false,
          blackImg:"src/assets/icons/home-black.png",
          img:"src/assets/icons/Vector (6).png"
        },
        {
          titleVisible:false,
          title:"Favourite",
          imgVisible:false,
          iconVisible:false,
          blackImg:"src/assets/icons/home-black.png",
          img:"src/assets/icons/Vector (7).png"
        },
        {
          titleVisible:false,
          title:"History",
          imgVisible:false,
          iconVisible:false,
          blackImg:"src/assets/icons/home-black.png",
          img:"src/assets/icons/Vector (8).png"
        },
      ]
    }
  },
  methods:{
    toggleicon(i){
      this.iconImgs.forEach((icon,index) => {
        if (i == index) {
          icon.iconVisible = !icon.iconVisible
        }else {
          icon.iconVisible = false
        }
      });
    },
    showDashItem(i,title){
      this.dashTitle = title
      this.iconImgs.forEach((icon,index) => {
        icon.imgVisible = false
        if (i == index) {
          icon.imgVisible = true
        }
        icon.iconVisible =false
        icon.titleVisible= true
      });
    },
    removeBlackImgs(title){
      this.dashTitle = title
      this.iconImgs.forEach(icon =>{
        icon.imgVisible = false
      })
    }
  }
}
</script>

<template>
  <div class="w-full h-full min-h-screen flex gap-x-2 overflow-hidden py-12" :class="{'gap-x-0': dashTitle}">
    <Sidebar @removeBlackImgs="removeBlackImgs" @showdashitem="showDashItem" @toggleIcon="toggleicon" :iconImgs="iconImgs"/>
    <dashboardInformation :dashTitle="dashTitle"/>
  </div>
</template>

<style >
</style>
