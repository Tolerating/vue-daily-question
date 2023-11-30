> pages.ts 中配置首页显示的页面
# 鼠标框选
## reactive的重置
```ts
const baseInfo = {
    startX: 0,
    startY: 0,
    width: 0,
    height: 0,
    left: 0,
    top: 0
}

const areaInfo = reactive<AreaInfo>({...baseInfo})
// 重置
Object.assign(areaInfo, baseInfo)

```

