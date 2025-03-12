import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/myfun/',
  title: "威森",
  description: "just for fun",
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'track', link: '/markdown-examples' },
      { text: 'linux', link: '/linux/linux命令' },
    ],

    sidebar: [
      {
        text: 'track',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      },
      {
        text: 'linux',
        items: [
          { text: 'linux基础', link: '/linux/linux命令'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'bilibili', link: 'https://www.bilibili.com/' },
    ]
  }
})
