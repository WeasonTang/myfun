import { defineConfig } from 'vitepress'
import './enhanceApp.js' // 引入 enhanceApp.js 文件

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/myfun/',
  title: "威森",
  description: "just for fun",
  themeConfig: {
    logo: '/butterfly-flower.png',
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'algo', link: '/algo/java algo.md'},
      // cyber
      { text: 'cyber',
        items: [
          { text: 'web', link: '/cyber/web.md' },
        ]
      },    
      // linux
      { 
        text: 'linux', 
        items: [
          { text: 'linux基础', link: '/linux/linux命令' },
          { text: 'vscode相关命令', link: '/linux/vscode相关命令.md' },
          { text: 'go linux相关操作', link: '/linux/go linux相关操作.md' },
          { text: 'Git相关命令操作', link: '/linux/Git相关命令操作.md' },
          { text: 'archlinux_app', link: '/linux/archlinux_app.md' },
        ] 
      },
    ],

    sidebar: [
      {
        text: 'algo',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'java algo', link: '/algo/java algo.md' },        
        ]
      },
      {
        text: 'cyber',
        collapsed: true,
        items: [
          
          { text: 'web', link: '/cyber/web.md' },
        ]
      },
      {
        text: 'linux',
        collapsed: true,
        items: [
          { text: 'linux基础', link: '/linux/linux命令' },
          { text: 'vscode相关命令', link: '/linux/vscode相关命令.md' },
          { text: 'go linux相关操作', link: '/linux/go linux相关操作.md' },
          { text: 'Git相关命令操作', link: '/linux/Git相关命令操作.md' },
          { text: 'archlinux_app', link: '/linux/archlinux_app.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/WeasonTang' },
      { icon: 'bilibili', link: 'https://www.bilibili.com/' },
    ]
  }
})
