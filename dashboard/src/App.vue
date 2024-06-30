<script>
import Sidebar from "./components/Sidebar.vue";
import dashboardInformation from "./components/dashboardInformation.vue"
export default {
  components:{Sidebar,dashboardInformation},
  data(){
    return{
      iconImgs : [
        {
          title:"dashboard",
          iconVisible:true,
          img:"src/assets/icons/Vector (11).png"
        },
        {
          title:"Profile",
          iconVisible:false,
          img:"src/assets/icons/Vector (1).png"
        },
        {
          title:"Leaderboard",
          iconVisible:false,
          img:"src/assets/icons/Vector (2).png"
        },
        {
          title:"Order",
          iconVisible:false,
          img:"src/assets/icons/Vector (3).png"
        },
        {
          title:"Product",
          iconVisible:false,
          img:"src/assets/icons/Vector (10).png"
        },
        {
          title:"Sales Report",
          iconVisible:false,
          img:"src/assets/icons/Vector (4).png"
        },
        {
          title:"Message",
          iconVisible:false,
          img:"src/assets/icons/Vector (5).png"
        },
        {
          title:"Settings",
          iconVisible:false,
          img:"src/assets/icons/Group (9).png"
        },
        {
          title:"Signout",
          iconVisible:false,
          img:"src/assets/icons/Vector (6).png"
        },
        {
          title:"Favourite",
          iconVisible:false,
          img:"src/assets/icons/Vector (7).png"
        },
        {
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
    showDashItem(title){
      console.log(title);
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
