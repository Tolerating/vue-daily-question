<script lang="ts" setup>
import List from '@/components/List.vue'
import { computed } from 'vue';

const item = computed(()=>{
    return Array(1000).fill('').map((item,index)=>({
        id:index,
        content:"列表数据内容" + index
    }))
})
</script>
<template>
    <List :items="item" :size="60" :shownumber="10"></List>
</template>
<style scoped>

</style>
