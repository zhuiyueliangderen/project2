<template>
    <div class="app-bus">
        <v-index></v-index>
        <v-detail></v-detail>
    </div>
</template>
<script>
import index from '../components/home/index.vue';
import detail from '../components/product/detail.vue';
export default {
    components:{
        'v-index': index,
        'v-detail':detail
    }
}
</script>
<style>
    
</style>