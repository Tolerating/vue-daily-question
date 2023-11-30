<script lang="ts" setup>
import type {RouteLocationRaw} from 'vue-router'
interface Props{
    to:RouteLocationRaw,
    title:string
}
defineProps<Props>()
</script>
<template>
    <div class="gird-item">
        <img src="/src/assets/link.png" alt="">
        <RouterLink :to="to">
            {{ title }}
        </RouterLink>
    </div>
</template>
<style lang="scss" scoped>
.gird-item {
    display: flex;
    box-sizing: linline-box;
    justify-content: center;
    align-items: center;
    width: 200px;
    min-height: 50px;
    line-height: 20px;
    background: white;

    img {
        $length: 20px;
        width: $length;
        height: $length;
        margin-right: 5px;
    }

    a {
        color: rgb(3, 138, 3);
        background: linear-gradient(to right, #79b989, #e34b4b) no-repeat right bottom;
        background-size: 0 2px;
        transition: background-size 1300ms;
        text-decoration: none;
    }

    a:hover {
        color: #d93e8a;
        background-position-x: left;
        background-size: 100% 2px;
    }
}
</style>
