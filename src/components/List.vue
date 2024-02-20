<script lang="ts" setup>
import { computed, ref } from 'vue';

const props = defineProps<{ 
    items: Array<any>, 
    // 每条数据渲染结点的高度
    size: number, 
    // 每次渲染的DOM个数
    shownumber: number 
}>()
const {items,size,shownumber} = props
const container = ref()
const start = ref<number>(0)
const end = ref<number>(shownumber)
// 最终筛选出要展示的数据
const showData = computed(()=>{
    return items.slice(start.value,end.value)
})
// 计算容器的高度
const containerHeight = computed(()=>{
    return size * shownumber + "px"
})
// 撑开容器内容高度的元素的高度
const barHeight = computed(()=>{
    return size * items.length + "px"
})
// 列表向上滚动改变top的值
const listTop = computed(()=>{
    return start.value * size + "px"
})
// 容器的滚动事件
const handleScroll = ()=>{
    const scrollTop = container.value.scrollTop
    console.log(scrollTop);
    
    // 计算卷去的数据条数，用计算的结果作为获取数据的起始和结束下标
    // 起始的下标就是卷去的数据条数，向下取整
    start.value = Math.floor(scrollTop / size)
    
    // 结束的下标就是起始的下标加上要展示的数据条数
    end.value = start.value + shownumber
}
</script>
<template>
    <div class="container" :style="{ height: containerHeight }" @scroll="handleScroll" ref="container">
        <div class="list" :style="{ top: listTop}">
            <div v-for="item in showData" :key="item.id" :style="{ height: `${size}px` }">
                {{ item.content }}
            </div>
            <div class="bar" :style="{ height: barHeight }"></div>
        </div>
    </div>
</template>
<style scoped>
.container{
    overflow-y: scroll;
    background-color: rgb(150, 150, 150);
    font-size: 20px;
    font-weight: bold;
    line-height: 60px;
    margin: 0 auto;
    position: relative;
    text-align: center;
}
.list{
    position: absolute;
    top: 0;
    width: 100%;
}
</style>
