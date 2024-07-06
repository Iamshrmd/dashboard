<template>
        <div @click="f" class="w-full h-screen no-scrollbar overflow-auto px-12 py-4 bg-[#171821]" >
            <HeaderPage/>
            <Dashboard v-if="dashTitle == 'dashboard'"/>
            <Order v-if="dashTitle == 'Order'"/>
        </div>
</template>

<script>
import HeaderPage from './Header.vue'
import Dashboard from './Dashboard.vue'
import Profile from './Profile.vue'
import Order from './Order.vue'
export default {
    components:{HeaderPage , Dashboard , Profile, Order},
    props : ['dashTitle'],
    data(){
        return {
        }
    },
}
</script>

<style>

 .no-scrollbar::-webkit-scrollbar {
    width: 0;
}
</style>