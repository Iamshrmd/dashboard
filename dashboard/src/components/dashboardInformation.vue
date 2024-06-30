<template>
        <div v-if="dashTitle" class="w-full h-[800px] left-[150px] bg-[#171821] rounded-tr-3xl rounded-xl text-[#fff]" :class="{'rounded-br-3xl rounded-tl-none rounded-bl-none': dashTitle}">{{ dashTitle}}</div>
</template>

<script>
export default {
    props : ['dashTitle'],
    data(){
        return {
        }
    }
}
</script>

<style>

</style>