<template>
        <div class="w-full h-screen no-scrollbar overflow-auto px-12 py-4 bg-[#171821]" >
            <HeaderPage/>
            <Dashboard v-if="dashTitle == 'dashboard'"/>
        </div>
</template>

<script>
import HeaderPage from './Header.vue'
import Dashboard from './Dashboard.vue'
export default {
    components:{HeaderPage , Dashboard},
    props : ['dashTitle'],
    data(){
        return {
        }
    }
}
</script>

<style>

 .no-scrollbar::-webkit-scrollbar {
    width: 0;
}
</style>