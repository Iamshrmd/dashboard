<template>
  <section class="w-full min-h-screen flex">
    <Sidebar @removeBlackImgs="removeBlackImgs" @showdashitem="showDashItem" @toggleIcon="toggleicon" :iconImgs="iconImgs"/>
    <dashboardInformation :dashTitle="dashTitle" />
  </section>
</template>

<script>
import dashboardInformation from '../components/information/dashboardInformation.vue'
import Sidebar from '../components/information/Sidebar.vue'
export default {
    components:{Sidebar, dashboardInformation},
  data(){
    return{
      dashTitle:'Dashboard',
      iconImgs : [
        {
          titleVisible:false,
          title:"Dashboard",
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
          blackImg:"src/assets/icons/profile-black.png",
          img:"src/assets/icons/profile.png"
        },
        {
          titleVisible:false,
          title:"Leaderboard",
          imgVisible:false,
          iconVisible:false,
          blackImg:"src/assets/icons/leaderboard-black.png",
          img:"src/assets/icons/leaderboard.png"
        },
        {
          titleVisible:false,
          title:"Order",
          imgVisible:false,
          iconVisible:false,
          blackImg:"src/assets/icons/cart-black.png",
          img:"src/assets/icons/cart.png"
        },
        {
          titleVisible:false,
          title:"Projects",
          imgVisible:false,
          iconVisible:false,
          blackImg:"src/assets/icons/bag-black.png",
          img:"src/assets/icons/bag.png"
        },
        {
          titleVisible:false,
          title:"Sales Report",
          imgVisible:false,
          iconVisible:false,
          blackImg:"src/assets/icons/report-black.png",
          img:"src/assets/icons/report.png"
        },
        {
          titleVisible:false,
          title:"Message",
          imgVisible:false,
          iconVisible:false,
          blackImg:"src/assets/icons/message-black.png",
          img:"src/assets/icons/message.png"
        },
        {
          titleVisible:false,
          title:"Settings",
          imgVisible:false,
          iconVisible:false,
          blackImg:"src/assets/icons/setting-black.png",
          img:"src/assets/icons/setting.png"
        },
        {
          titleVisible:false,
          title:"Signout",
          imgVisible:false,
          iconVisible:false,
          blackImg:"src/assets/icons/out-black.png",
          img:"src/assets/icons/out.png"
        },
        {
          titleVisible:false,
          title:"Favourite",
          imgVisible:false,
          iconVisible:false,
          blackImg:"src/assets/icons/star-black.png",
          img:"src/assets/icons/star.png"
        },
        {
          titleVisible:false,
          title:"History",
          imgVisible:false,
          iconVisible:false,
          blackImg:"src/assets/icons/history-black.png",
          img:"src/assets/icons/history.png"
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

<style>

</style>