import { defineConfig } from "vuepress/config";

exports = defineConfig(ctx => ({
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
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Golden-Space',
      description: 'A space for the future.',
    },
  },
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
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        // nav: NavItems4EN,
        // sidebar: Sidebar4EN
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        // nav: NavItems4ZH,
        // sidebar: Sidebar4ZH
      }
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}))
