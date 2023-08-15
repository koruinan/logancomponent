# loganIcon 图标
loganIcon提供了一套常用的图标集合

## 使用图标
<br/>
如果你需要在其他组件中使用，请先全局注册组件，更多具体的可以参考Element Plus官网

## 安装
### 使用包管理器
```
# 选择一个你喜欢的包管理器

# NPM
$ npm install @element-plus/icons-vue
# Yarn
$ yarn add @element-plus/icons-vue
# pnpm
$ pnpm install @element-plus/icons-vue
```

### 注册所有图标
**注意**：如果是全局引入了logan-component,已经对图标注册，不再需要进行图标的注册
```js
// main.ts

// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (let i in Icons) {
    app.component(`logan-icon-${toline(i)}`, (Icons as any)[i]);
}
//toline函数为将首字母大写转换成小写
```

### 浏览器直接引入
#### 使用 unpkg
```html
<script src="//unpkg.com/@element-plus/icons-vue"></script>
```

#### 使用 jsDelivr
```html
<script src="//cdn.jsdelivr.net/npm/@element-plus/icons-vue"></script>
```

## 图标用法
### 基础用法
```vue
<logan-icon-timer style="margin:0 20px;font-size:40px;"/>  
<logan-icon-check style="font-size:40px"></logan-icon-check>
```
效果如下：
<div style="display:flex">
    <logan-icon-timer style="margin:0 20px;font-size:40px;"/>  
    <logan-icon-check style="font-size:40px"></logan-icon-check>
</div>

### 结合el-icon使用
```vue
<el-icon :size="40">
    <logan-icon-timer/>
</el-icon>
<el-icon :size="40">
    <logan-icon-check></logan-icon-check>
</el-icon>

```
效果如下：
<div style="display:flex">
    <el-icon :size="40" style="margin:0 20px;">
        <logan-icon-timer/>
    </el-icon>
    <el-icon :size="40">
        <logan-icon-check></logan-icon-check>
    </el-icon>
</div>

## 图标集合
> **TIP**
> 
> 只要你安装了 @element-plus/icons
> 
> 您可以点击图标复制代码。
:::demo
loganIcon/index
:::

