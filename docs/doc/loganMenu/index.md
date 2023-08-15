# loganMenu 菜单
loganMenu对 el-menu 进行封装 将重复的 el-menu-item 通过循环进行封装 

菜单具备无限层级的功能

## 菜单用法
### 组件内使用
```vue
<template>
  <logan-menu>我是 loganMenu</logan-menu>
</template>
<script>
  import loganMenu from 'logan-component/loganMenu'
  import 'logan-component/loganMenu/style.css'
  export default {
    components: { loganMenu },
  }
</script>

```
### 全局使用
```js
import { createApp } from 'vue'
import loganMenu from 'logan-component/loganMenu'
import 'logan-component/loganMenu/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(loganMenu)
app.mount('#app')

```

**展示多层级的使用**


:::demo
loganMenu/index
:::


### 属性
| 属性          | 说明                    | 类型    | 可选值       | 默认值   |
| :------------ | ----------------------- | ------- | ------------ | -------- |
| data          | 导航菜单的数据          | any[]   | 必填         | -        |
| defaultactive | 默认选中的菜单的index值 | string  | -            | -        |
| router        | 是否为路由模式          | boolean | true / false | false    |
| name          | 菜单标题的键名          | string  | -            | name     |
| index         | 菜单标识的键名          | string  | -            | index    |
| icon          | 菜单图标的键名          | string  | -            | icon     |
| children      | 菜单子菜单的键名        | string  | -            | children |


同时继承[el-menu组件](https://element-plus.org/zh-CN/component/menu.html)的所有属性


