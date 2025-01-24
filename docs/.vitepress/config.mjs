import { defineConfig } from 'vitepress'
import { navBar } from './nav-bar.mjs'
import { sideBar } from './side-bar.mjs'
import { resolve } from 'path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Blog",
  description: "My Blog",
  assetsDir: 'static',
  base: '/blogs/',
  lastUpdated: true,
  returnToTopLabel: true,
  markdown: {
    math: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: navBar,
    /** 菜单 */
    sidebar: sideBar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/s-yonggang/blogs' }
    ],
    docFooter: { //上下篇文本
      prev: '上一篇',
      next: '下一篇'
    },
  },
  vite: {
    plugins: [
      // 你的 Vite 插件
    ],
    resolve: {
      alias: {
        // 你的别名配置
        '@': resolve(__dirname, '.vitepress')
      },
    },
    server: {
      port: 5173,
      open: true
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              return 'vendor'
            }
            // console.log(/\.png$/.test(id)) 
            // if () {
            //   return 'images'
            // }
          }
        }

      }
    }
  }
})
