module.exports = {
  // site config
  base: '/vue3-ssr-template/',
  lang: 'en-US',
  title: 'Vue3 SSR Template',
  description: 'Prod ready starter for your large scale-up Vue SSR application regarding SEO, Internationalization',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/hero.jpg',
    navbar: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/xmimiex/vue3-ssr-template',
      },
    ],
    // sidebar object
    // pages under different sub paths will use different sidebar
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          children: ['/guide/README.md', '/guide/getting-started.md', '/guide/folder-structure.md'],
        },
        {
          text: 'Config',
          link: '/config/'
        },
      ],
      '/config/': [
        {
          text: 'Guide',
          link: '/guide/'
        },
        {
          text: 'Config',
          children: ['/config/README.md'],
        },
      ],
    },
  },
}
