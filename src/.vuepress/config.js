const { description } = require('../../package')
const Prism = require('prismjs')

Prism.languages.strawberrylang = {
  'comment': [
      {
          pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
          lookbehind: true,
          greedy: true,
      },
      {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: true,
          greedy: true,
      },
  ],
  'string': {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true,
  },
  'number': /(-?)((\b\d+(\.\d*)?|\.\d+)([-+]?\d+)?)/,
  'keyword': /\b(?:func|in|if|else|for|foreach|repeat|switch|case|break|continue|readonly|return|while|event|default)\b/,
  'boolean': /\b(?:true|false|null)\b/,
  'builtin': /\b(?:range|type|random|choice|time|unicodeToNumber|numberToUnicode|int|float|string|bool|list|dic)\b/,
  'operator': /--|\+\+|\*\*|&&|\|\||[-+*/%!=<>]=?|[&|^~]/,
}

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '딸기도넛',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'shortcut icon', href: 'assets/StrawberryDonutCircle.png' }],
    ['meta', { property: 'og:image', content: 'https://guide.sbdonut.dev/assets/StrawberryDonut.png' }],
    ['meta', { name: 'theme-color', content: '#ed91ad' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  base: '/',
  theme: 'default-prefers-color-scheme',
  themeConfig: {
    repo: 'https://github.com/StrawberryDonut/guide',
    editLinks: false,
    docsDir: 'src',
    editLinkText: '',
    lastUpdated: '마지막 업데이트',
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Invite',
        link: '/invite/',
        target: '_blank',
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/WWk5xG3ehQ',
      },
      {
        text: 'UniqueCode',
        link: 'https://discord.gg/ARCdUzC',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
          ]
        },
        {
          title: '튜토리얼',
          collapsable: false,
          children: [
            'tutorial/getting-started.md',
            'tutorial/bot-help.md',
            'tutorial/syntax.md',
            'tutorial/lang.md',
            'tutorial/example-story.md',
            'tutorial/example-lang.md',
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
    [
      '@vuepress/last-updated',
      {
        dateOptions: {
          dateStyle: 'full',
          timeStyle: 'short',
        },
      },
    ],
  ],

  locales: {
    '/': {
      lang: 'ko',
    },
  },
}
