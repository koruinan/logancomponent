import loganForm from './src/index.vue'
import { App } from 'vue'

export default {
    install(app: App) {
        app.component('logan-form', loganForm)
    }
}