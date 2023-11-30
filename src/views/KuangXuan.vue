<script lang="ts" setup>
import { reactive, onMounted, computed, ref } from 'vue'
interface AreaInfo {
    startX: number,
    startY: number,
    width: number,
    height: number,
    left: number,
    top: number
}
const baseInfo = {
    startX: 0,
    startY: 0,
    width: 0,
    height: 0,
    left: 0,
    top: 0
}
const areaInfo = reactive<AreaInfo>({ ...baseInfo })
const items = ref<HTMLInputElement[]>()
const list = reactive<{ id: number, selected: boolean, offsetLeft?: number, offsetTop?: number, width?: number, height?: number }[]>([
    { id: 1, selected: false, offsetLeft: 0, offsetTop: 0, width: 0, height: 0 },
    { id: 2, selected: false, offsetLeft: 0, offsetTop: 0, width: 0, height: 0 },
    { id: 3, selected: false, offsetLeft: 0, offsetTop: 0, width: 0, height: 0 },
    { id: 4, selected: false, offsetLeft: 0, offsetTop: 0, width: 0, height: 0 },
    { id: 5, selected: false, offsetLeft: 0, offsetTop: 0, width: 0, height: 0 },
    { id: 6, selected: false, offsetLeft: 0, offsetTop: 0, width: 0, height: 0 },
    { id: 7, selected: false, offsetLeft: 0, offsetTop: 0, width: 0, height: 0 },
    { id: 8, selected: false, offsetLeft: 0, offsetTop: 0, width: 0, height: 0 },
    { id: 9, selected: false, offsetLeft: 0, offsetTop: 0, width: 0, height: 0 },
    { id: 10, selected: false, offsetLeft: 0, offsetTop: 0, width: 0, height: 0 }
])
const getItemPosition = () => {
    list.forEach((value, index) => {
        const { offsetLeft, offsetTop, clientHeight, clientWidth } = items.value![index]
        console.log(value);
        value.offsetLeft = offsetLeft
        value.offsetTop = offsetTop
        value.width = clientHeight
        value.height = clientWidth
    })
    console.dir(items.value![1]);
}
const init = (): void => {
    window.addEventListener('mousedown', (event) => {
        console.log(event);
        areaInfo.startX = event.clientX
        areaInfo.startY = event.clientY
    })
    window.addEventListener('mousemove', (event) => {
        if (areaInfo.startX) {
            const { startX, startY, left, top, width, height } = areaInfo
            const { clientX, clientY } = event
            areaInfo.left = Math.min(event.clientX, startX)
            areaInfo.top = Math.min(event.clientY, startY)
            areaInfo.width = Math.abs(clientX - startX)
            areaInfo.height = Math.abs(clientY - startY)
            list.forEach((value, index) => {

                if (value.offsetLeft! > left &&
                    value.width! + value.offsetLeft! < left + width &&
                    value.offsetTop! > top &&
                    value.offsetTop! + value.height! < top + height
                ) {
                    value.selected = true
                } else {
                    value.selected = false

                }
            })
        }
    })
    window.addEventListener('mouseup', (event) => {
        Object.assign(areaInfo, baseInfo)
    })

}
const areaStyle: any = computed(() => {
    return (
        areaInfo.width && {
            position: 'fixed',
            zIndex: 1,
            opacity: 1,
            width: areaInfo.width + 'px',
            height: areaInfo.height + 'px',
            left: areaInfo.left + 'px',
            top: areaInfo.top + 'px'
        }
    )
})
onMounted(() => {
    init()
    getItemPosition()
})


</script>
<template>
    <div class="container">
        <div class="area" :style="areaStyle"></div>
        <div class="list">
            <div v-for="item in list" :key="item.id" :class="{ selected: item.selected }" class="item" ref="items">
                {{ item.id }}
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container {
    .area {
        width: 0;
        height: 0;
        opacity: 0;
        background: rgba(0, 140, 255, .3);
        border: 1px solid rgb(0, 140, 255);
    }

    .list {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 100px 0;
        margin: 0 auto;
        width: 300px;

        .item {
            width: 50px;
            height: 50px;
            background: rgb(53, 154, 255);
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            margin-right: 10px;
            margin-bottom: 10px;
            &.selected {
                background: rgb(0, 255, 42);
            }
        }

    }
}
</style>
