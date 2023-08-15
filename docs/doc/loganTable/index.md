# loganTable 表格
loganTable对 el-table 进行封装 将重复的 el-table-item 通过循环进行封装 

后续将集成更多的表格样式，有兴趣欢迎在**评论区留言**
## 表格用法
### 组件内使用
```vue
<template>
  <logan-Table>我是 loganTable</logan-Table>
</template>
<script>
  import loganTable from 'logan-component/loganTable'
  import 'logan-component/loganTable/style.css'
  export default {
    components: { loganTable },
  }
</script>

```
### 全局使用
```js
import { createApp } from 'vue'
import loganTable from 'logan-component/loganTable'
import 'logan-component/loganTable/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(loganTable)
app.mount('#app')

```


**展示多功能集成表格**


:::demo
loganTable/index
:::


### 属性
| 属性                     | 说明                    | 类型           | 可选值                       | 默认值           |
| :----------------------- | ----------------------- | -------------- | ---------------------------- | ---------------- |
| options                  | 表单配置项              | TableOptions[] | 必填                         | -                |
| data                     | 表格数据                | any[]          | 必填                         | -                |
| elementLoadingText       | 数据加载文案            | string         | String                       | -                |
| elementLoadingSpinner    | 数据加载图标            | string         | String                       | -                |
| elementLoadingBackground | 数据加载背景颜色        | string         | String                       | -                |
| elementLoadingSvg        | 加载图标是否是svg图标   | string         | String                       | -                |
| elementLoadingSvgViewBox | 加载图标是svg图标的配置 | string         | String                       | -                |
| editIcon                 | 编辑图标                | any[]          | string                       | 'Edit'           |
| isEditRow                | 是否是可编辑行          | any[]          | boolean                      | false            |
| editRowIndex             | 编辑行按钮标识          | any[]          | string                       | ''               |
| pagination               | 是否是含有分页的表格    | any[]          | boolean                      | false            |
| paginationAlign          | 分页的对齐方式          | string         | 'left' \| 'center'\| 'right' | 'left'           |
| currentPage              | 当前是第几页            | number         | -                            | 0                |
| pageSize                 | 当前页的大小            | number         | -                            | 10               |
| pageSizes                | 分页选项为多少条数据    | number[]       | -                            | [10, 20, 30, 40] |
| total                    | 表格数据的总数          | number         | -                            | 0                |

### TableOptions属性
| key      | 说明                 | 类型                                  |
| :------- | -------------------- | ------------------------------------- |
| label    | 表头名称             | string                                |
| prop     | 每列数据的字段名     | string                                |
| width    | 单元格的宽度         | string \| number                      |
| align    | 单元格的排列方式     | string('left' \| 'center' \| 'right') |
| slot     | 自定义单元格名称     | string                                |
| action   | 是否是编辑行         | boolean                               |
| editable | 是否是可编辑的单元格 | boolean                               |


### 事件
| 事件           | 说明                             | 类型                      |
| :------------- | -------------------------------- | ------------------------- |
| confirm        | 可编辑单元表格确认事件           | (scope) => {} 当前行数据  |
| cancel         | 可编辑单元表格取消事件           | (scope) => {} 当前行数据  |
| size-change    | 分页当前页显示条数改变时触发事件 | (val) => {}    当前页大小 |
| current-change | 分页当前页改变时触发事件         | (val) => {}   当前第几页  |



### 插槽
| 名称     | 说明                                 |
| :------- | ------------------------------------ |
| editCell | 可编辑单元变为可编辑状态显示的操作项 |
| editRow  | 可编辑行变为可编辑状态显示的操作项   |
| action   | 表格操作项所在的单元格的操作项       |





