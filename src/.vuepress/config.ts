import { defineConfig } from "vuepress/config";
import {
  Sidebar4EN,
  Sidebar4ZH,
  NavItems4EN,
  NavItems4ZH
} from './configs/index'

export = defineConfig(ctx => ({
  title: 'Golden Space',
  description: 'A space for the future',
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
    '/zh/': {
      lang: 'zh-CN',
      title: 'Golden-Space',
      description: '一个未来的空间',
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
    editLinks: true,
    docsDir: 'src',
    lastUpdated: true,
    smoothScroll: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: NavItems4EN,
        sidebar: Sidebar4EN
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: NavItems4ZH,
        sidebar: Sidebar4ZH
      },
    },
  },
  plugins: [
    ['@vuepress/plugin-back-to-top', true],
    ['@vuepress/plugin-medium-zoom', true],
  ],
  extraWatchFiles: ['.vuepress/config/**','.vuepress/config.ts'],
  evergreen: !ctx.isProd,
}))
