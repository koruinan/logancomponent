import { App } from "vue";
import loganIcon from "./loganIcon";
import loganMenu from './loganMenu'
import loganTable from "./loganTable";
import loganForm from './loganForm'
import loganModelForm from './loganModelForm'
import './styles/base.css'
import { toline } from './utils'
import * as Icons from '@element-plus/icons-vue'

const components = [
    loganIcon,
    loganMenu,
    loganTable,
    loganForm,
    loganModelForm
]

export default {
    install(app: App) {
        for (let i in Icons) {
            app.component(`logan-icon-${toline(i)}`, (Icons as any)[i]);
        }
        components.map(item => {
            app.use(item)
        })
    }
}