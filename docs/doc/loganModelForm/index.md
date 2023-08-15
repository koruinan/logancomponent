# loganModelForm 表单
loganModelForm为弹窗表单

使用 el-dialog 对 loganForm 进行封装

## 弹窗表单用法
### 组件内使用
```vue
    <template>
    <logan-ModelForm>我是 loganModelForm</logan-ModelForm>
</template>
<script>
import loganModelForm from 'logan-component/loganModelForm'
import 'logan-component/loganModelForm/style.css'
export default {
    components: { loganModelForm },
}
</script>
```


### 全局使用
```js
import { createApp } from 'vue'
import loganModelForm from 'logan-component/loganModelForm'
import 'logan-component/loganModelForm/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(loganModelForm)
app.mount('#app')

```

**展示多功能弹窗集成表单**

:::demo
loganModelForm/index
:::


### 属性
| 属性         | 说明                                                                                                     | 类型                                                                                                                           | 可选值       | 默认值  |
| :----------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------ | ------- |
| options      | 弹窗表单配置项                                                                                           | FormOptions[]                                                                                                                  | 必填         | -       |
| visible      | 控制表单的隐藏和显示                                                                                     | FormOptions[]                                                                                                                  | true / false | false   |
| isScroll     | 是否在可视区域内滚动                                                                                     | FormOptions[]                                                                                                                  | true / false | false   |
| onPreview    | 点击文件列表中已上传的文件时的钩子                                                                       | `(uploadFile: UploadFile) => void`                                                                                             | -            | -       |
| onRemove     | 文件列表移除文件时的钩子                                                                                 | `(uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                                                                   | -            | -       |
| onSuccess    | 文件上传成功时的钩子                                                                                     | `(response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                                                    | -            | -       |
| onError      | 文件上传失败时的钩子                                                                                     | `(error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                                                     | -            | -       |
| onProgress   | 文件上传时的钩子                                                                                         | `	(evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                                        | -            | -       |
| onChange     | 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用                                           | `(uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                                                                   | -            | -       |
| onExceed     | 当超出限制时，执行的钩子函数                                                                             | `(files: File[], uploadFiles: UploadUserFile[]) => void`                                                                       | -            | -       |
| beforeUpload | 上传文件之前的钩子，参数为上传的文件， 若返回false或者返回 Promise 且被 reject，则停止上传。             | `(rawFile: UploadRawFile) => Awaitable<void                                \| undefined \| null   \| boolean \| File \| Blob>` | -            | -       |
| beforeRemove | 删除文件之前的钩子，参数为上传的文件和文件列表， 若返回 false 或者返回 Promise 且被 reject，则停止删除。 | `(uploadFile: UploadFile, uploadFiles: UploadFiles) => Awaitable<boolean>`                                                     | -            | -       |
| httpRequest  | 上传组件自定义的上传方法                                                                                 | function                                                                                                                       | -            | -       |
| labelWidth   | 表单元素的标签宽度                                                                                       | string                                                                                                                         | -            | '100px' |
### FormOptions属性
| key           | 说明                     | 类型                                                                                 |
| :------------ | ------------------------ | ------------------------------------------------------------------------------------ |
| type          | 表单项的类型             | string                                                                               |
| value         | 表单项的初始值           | any                                                                                  |
| label         | 表单项的label            | string                                                                               |
| prop          | 表单项的标识             | string                                                                               |
| rules         | 表单项的验证规则         | 详情查看Element Plus[表单组件](https://element-plus.org/zh-CN/component/upload.html) |
| placeholder   | 表单项的占位符           | string                                                                               |
| attrs         | 表单项的属性             | 详情查看Element Plus[表单组件](https://element-plus.org/zh-CN/component/upload.html) |
| children      | 表单项的子元素           | FormOptions[]                                                                        |
| uploadAttrs   | 上传表单的属性           | 详情查看Element Plus[上传表单](https://element-plus.org/zh-CN/component/upload.html) |
| editorConfig  | 富文本编辑器的编辑器配置 | 详情请看富文本编辑器[wang-editor](https://www.wangeditor.com/)                       |
| toolbarConfig | 富文本编辑器的工具栏配置 | 详情请看富文本编辑器[wang-editor](https://www.wangeditor.com/)                       |
| mode          | 富文本编辑器的工具栏模式 | 详情请看富文本编辑器[wang-editor](https://www.wangeditor.com/)                       |



### 插槽
| 名称       | 说明                                      |
| :--------- | ----------------------------------------- |
| uploadarea | 上传组件的整个上传组件                    |
| uploadtip  | 上传组件的提示说明文字                    |
| footer     | 弹窗底部区域作用域插槽  formref为表单实例 |

### 作用域表单实例上的方法
> TIP
>
> 可以直接通过表单实例使用 formref.value.functionname(),具体使用可以参考**上述示例**


| 名称        | 说明               | 返回值   |
| :---------- | ------------------ | -------- |
| resetFields | 表单的重置方法     | void     |
| validate    | 表单的验证方法     | function |
| getFormDate | 表单的数据获取方法 | object   |




