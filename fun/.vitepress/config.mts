import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
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
          { text: 'shortcut', link: '/cyber/shortcut.md' },
          { text: 'network', link: '/cyber/network.md' },
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
      // docker
      {
        text: 'docker',
        items: [
          { text: 'docker基础', link: '/docker/docker基础.md' },
          { text: 'docker进阶', link: '/docker/docker进阶.md' },
          { text: 'docker_app', link: '/docker/docker_app.md' },
        ]
      },
      // go
      { 
        text: 'go', 
        items: [
          { text: 'go issues', link: '/go/goIssues.md' },
          { text: 'go algo', link: '/go/goAlgo.md' },          
          { text: 'go基础', link: '/go/go基础.md' },
          { text: 'go进阶', link: '/go/go进阶.md' },   
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
          { text: 'shortcut', link: '/cyber/shortcut.md' },
          { text: 'network', link: '/cyber/network.md' },
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
      },
      // docker
      {
        text: 'docker',
        collapsed: true,
        items: [
          { text: 'docker基础', link: '/docker/docker基础.md' },
          { text: 'docker进阶', link: '/docker/docker进阶.md' },
          { text: 'docker_app', link: '/docker/docker_app.md' },
          { text: 'DevOps_java', link: '/docker/DevOps_java.md' },
        ]
      },
      // go
      {
        text: 'go',
        collapsed: true,
        items: [
          { text: 'go issues', link: '/go/goIssues.md' },
          { text: 'go algo', link: '/go/goAlgo.md' },
          { text: 'go基础', link: '/go/go基础.md' },
          { text: 'go进阶', link: '/go/go进阶.md' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/WeasonTang' },
      { icon: 'bilibili', link: 'https://www.bilibili.com/' },
    ]
  },



  // google analytics
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-RJMPP58S6J' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      
      gtag('config', 'G-RJMPP58S6J');`
    ]
  ],
})
