<template>
        <div class="w-full h-screen overflow-auto px-12 py-4 bg-[#171821] rounded-tr-3xl rounded-xl text-[#fff] rounded-br-3xl rounded-tl-none rounded-bl-none" >
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

</style>