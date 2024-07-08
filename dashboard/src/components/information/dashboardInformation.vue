<template>
        <div @click="f" class="w-full h-screen no-scrollbar overflow-auto px-12 py-4 bg-[#171821]" >
            <HeaderPage/>
            <Dashboard v-if="dashTitle == 'Dashboard'"/>
            <Projects v-if="dashTitle == 'Projects'"/>
        </div>
</template>

<script>
import HeaderPage from './Header.vue'
import Dashboard from './dashboard-page/Dashboard.vue'
import Projects from './projects-page/Projects.vue'

export default {
    components:{HeaderPage , Dashboard, Projects },
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