import { mdPlugin } from './config/plugins'
import { defineConfig } from 'vitepress'
export default defineConfig({
    markdown: {
        config: (md) => mdPlugin(md),
    },
    title: 'loganComponent',
    base: '/logancomponentdoc/',
    description: '',
    head: [],
    themeConfig: {
        logo: '/logo.png',
        nav: [
            { text: '首页', link: '/doc/' },
            { text: 'GitHub', link: 'https://github.com/koruinan/logancomponent',target:'_blank' },
            { text: 'Gitee', link: 'https://gitee.com/koruinan/logancomponent',target:'_blank' }
        ],
        sidebar: [
            {
                text: '介绍',
                link: '/doc/intro/'
            },
            {
                text: '安装',
                link: '/doc/install/'
            },
            {
                text: '快速开始',
                link: '/doc/quickstart/'
            },
            {
                text: 'loganIcon 图标',
                link: '/doc/loganIcon/'
            },
            {
                text: 'loganMenu 菜单',
                link: '/doc/loganMenu/'
            },
            {
                text: 'loganForm 表单',
                link: '/doc/loganForm/'
            },
            {
                text: 'loganModelForm 弹窗表单',
                link: '/doc/loganModelForm/'
            },
            {
                text: 'loganTable 表格',
                link: '/doc/loganTable/'
            }
        ]
    }
})