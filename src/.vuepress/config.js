const { resolve } = require('path')
const { description } = require('../../package')

module.exports = {
  title: 'RDF-Ext',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    editLink: false,
    darkMode: true,
    navbar: [
      {
        text: 'APIs',
        link: '/api/',
      },
      {
        text: 'Tutorial',
        link: '/tutorial/'
      }
    ]
  },
  plugins: [
    ['@vuepress/plugin-prismjs', {
      preloadLanguages: ['js', 'web-idl']
    }],
    ['@vuepress/plugin-register-components', {
      componentsDir: resolve(__dirname, './components')
    }],
    '@vuepress/search'
  ]
}
