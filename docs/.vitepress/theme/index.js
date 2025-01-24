// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import Color from '../components/Color.vue'
import ColorList from '../components/ColorList.vue'
import Lines from '../components/Lines.vue'
import Tag from '../components/Tag.vue'
import CardList from '../components/CardList.vue'
import Banner from '../components/Banner.vue'
import GlslCanvas from '../components/Demo.vue'
import GlslEditor from '../components/GlslEditor.vue'

import Layout from './Layout.vue'

import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'


export default {
  extends: Theme,
  Layout: Layout,
  // Layout: () => {
  //   return h(Theme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
  enhanceApp({ app, router, siteData }) {
    // ...
    // 注册自定义全局组件
    app.component('Color', Color)
    app.component('ColorList', ColorList)
    app.component('Lines', Lines)
    app.component('Tag', Tag)
    app.component('CardList', CardList)
    app.component('Banner', Banner)
    app.component('GlslCanvas', GlslCanvas)
    app.component('GlslEditor', GlslEditor)
  },
  setup() {
    const route = useRoute()
    const initZoom = () => {
      //mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' })
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    };
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  }
}
