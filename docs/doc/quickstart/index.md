# 快速开始
本节将介绍如何在项目中使用logan-component



> **TIP**
> 
> 由于本组件是基于 Element Plus 的二次封装，请确保已经安装了和正确使用了 Element Plus
>
> 关于 Element Plus 的安装和使用，请参考[Element Plus官网](https://element-plus.org/zh-CN/)

## 用法
### 完整引入 
如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。
```js
import { createApp } from 'vue'
import loganComponent from 'logan-component'
import 'logan-component/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(loganComponent)
app.mount('#app')

```

### 按需引入 
如果你只想使用其中的一个组件，请参考以下示例。
#### 组件内使用
```vue
<template>
  <logan-icon>我是 loganIcon</logan-icon>
</template>
<script>
  import loganIcon from 'logan-component/loganIcon'
  import 'logan-component/loganIcon/style.css'
  export default {
    components: { loganIcon },
  }
</script>

```
#### 全局使用
```js
import { createApp } from 'vue'
import loganIcon from 'logan-component/loganIcon'
import 'logan-component/loganIcon/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(loganIcon)
app.mount('#app')

```