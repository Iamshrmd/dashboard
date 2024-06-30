<script>
import Sidebar from "./components/Sidebar.vue";
import dashboardInformation from "./components/dashboardInformation.vue"
export default {
  components:{Sidebar,dashboardInformation},
  data(){
    return{
      iconImgs : [
        {
          titleVisible:false,
          title:"dashboard",
          iconVisible:true,
          img:"src/assets/icons/Vector (11).png"
        },
        {
          titleVisible:false,
          title:"Profile",
          iconVisible:false,
          img:"src/assets/icons/Vector (1).png"
        },
        {
          titleVisible:false,
          title:"Leaderboard",
          iconVisible:false,
          img:"src/assets/icons/Vector (2).png"
        },
        {
          titleVisible:false,
          title:"Order",
          iconVisible:false,
          img:"src/assets/icons/Vector (3).png"
        },
        {
          titleVisible:false,
          title:"Product",
          iconVisible:false,
          img:"src/assets/icons/Vector (10).png"
        },
        {
          titleVisible:false,
          title:"Sales Report",
          iconVisible:false,
          img:"src/assets/icons/Vector (4).png"
        },
        {
          titleVisible:false,
          title:"Message",
          iconVisible:false,
          img:"src/assets/icons/Vector (5).png"
        },
        {
          titleVisible:false,
          title:"Settings",
          iconVisible:false,
          img:"src/assets/icons/Group (9).png"
        },
        {
          titleVisible:false,
          title:"Signout",
          iconVisible:false,
          img:"src/assets/icons/Vector (6).png"
        },
        {
          titleVisible:false,
          title:"Favourite",
          iconVisible:false,
          img:"src/assets/icons/Vector (7).png"
        },
        {
          titleVisible:false,
          title:"History",
          iconVisible:false,
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
    showDashItem(i){
      this.iconImgs.forEach((icon,index) => {
        if (i == index) {
          icon.titleVisible = !icon.titleVisible
        }else {
          icon.titleVisible = false
        }
        icon.iconVisible= false
      });
    }
  }
}
</script>

<template>
  <div class="w-full h-full min-h-screen overflow-hidden">
    <Sidebar @showdashitem="showDashItem" @toggleIcon="toggleicon" :iconImgs="iconImgs"/>
  </div>
</template>

<style >
</style>
