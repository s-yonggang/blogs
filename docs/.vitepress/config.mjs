import { defineConfig } from 'vitepress'
import { navBar } from './nav-bar.mjs'
import { sideBar } from './side-bar.mjs'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Blogs",
  description: "My Blogs",
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
    ]
  }
})
