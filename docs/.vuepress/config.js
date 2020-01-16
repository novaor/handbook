module.exports = {
  title: 'Handbook',
  description: 'a handbook about coding',
  dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#af485b' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#af485b' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  markdown: {
    lineNumbers: true
  },
  theme: '@vuepress/vue',
  themeConfig: {
    repo: 'novaor/handbook',
    smoothScroll: true,
    locales: {
      '/': {
        label: '简体中文',
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        sidebar: {
          '/guide/': [
            {
              title: 'mysql',
              collapsable: false,
              children: [
                'install-mysql'
              ]
            },
            {
              title: 'oracle',
              collapsable: false,
              children: [
                'install-oracle_xe'
              ]
            },
            {
              title: 'nginx',
              collapsable: false,
              children: [
                'macos-install'
              ]
            },
            {
              title: 'vue',
              collapsable: false,
              children: [
                'vue'
              ]
            }
          ]
        }
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }]
  ],
  extraWatchFiles: [
    '.vuepress/nav/zh.js'
  ]
};
