const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Golden Space',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'A space for the future',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: 'https://gitee.com/wibus/blog-assets-goo/raw/master/asset-pic/20220208171108.png',
    repo: 'wibus-wee/GS-server',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Development',
        link: '/development/'
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'deploy-server',
          ]
        }
      ],
      // '/config/': [{
      //   title: 'Config',
      //   collapsable: false,
      //   children: [
      //     '',
      //   ]
      // }],
      '/development/': [{
        title: 'Developement',
        collapsable: false,
        children: [
          '',
          'interface',
          'headers',
        ]
      }]


    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
