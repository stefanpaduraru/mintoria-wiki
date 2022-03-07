const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Mintoria.io Wiki',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

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
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Artists',
        link: '/artists/',
      },
      {
        text: 'Collectors',
        link: '/collectors/',
      },
      {
        text: 'Partners',
        link: '/partners/'
      },
      {
        text: 'API',
        link: '/api/'
      },
      {
        text: 'Resources',
        link: '/resources/'
      },
    ],
    sidebar: {
      '/quick-start/': [
        {
          title: 'Quick Start',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
      '/artists/': [
        {
          title: 'Artists',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
      '/collectors/': [
        {
          title: 'Collectors',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
      '/partners/': [
        {
          title: 'Partners',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
      '/api/': [
        {
          title: 'API',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
      '/resources/': [
        {
          title: 'Resources',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
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
