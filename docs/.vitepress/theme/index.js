import DefaultTheme from "vitepress/theme";
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import loganUI from '../../../packages'
import '../../../packages/styles/base.css'
import { VPDemo } from '../vitepress'
import '../../../mock'
import './style/var.css'
export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.use(ElementPlus)
        app.use(loganUI)
        app.component('Demo', VPDemo)

    }
}