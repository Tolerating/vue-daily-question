<script lang="ts" setup>
import IndexGirdItem from '@/components/IndexGirdItem.vue';
import pages from '@/pages';
</script>
<template>
    <div class="index-container">
        <IndexGirdItem v-for="(item,index) in pages" :key="index" :to="item.router" :title="item.title"></IndexGirdItem>
    </div>
</template>
<style lang="scss" scoped>
.index-container {
    background-color: white;
    display: grid;
    grid-gap:20px 20px;
    grid-template-columns: auto auto auto auto;
    justify-content: space-around;
    
}

</style>
