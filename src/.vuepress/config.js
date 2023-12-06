import { defaultTheme } from '@vuepress/theme-default'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { searchPlugin } from '@vuepress/plugin-search'
import { defineUserConfig } from 'vuepress'
import { description } from '../../package.json'

export default defineUserConfig({
  title: 'RDF-Ext',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  theme: defaultTheme({
    editLink: false,
    darkMode: true,
    navbar: [{
      text: 'APIs',
      link: '/api/',
    }, {
      text: 'Tutorial',
      link: '/tutorial/'
    }, {
      text: 'Libraries',
      children: [{
        text: 'rdf-elements',
        link: 'https://github.com/rdf-ext/rdf-elements'
      }, {
        text: 'shacl-engine',
        link: 'https://github.com/rdf-ext/shacl-engine'
      }]
    }, {
      text: 'Tools',
      children: [{
        text: 'RDF Translator',
        link: 'https://playground.rdf-ext.org/rdf-translator/'
      }, {
        text: 'SHACL Playground',
        link: 'https://playground.rdf-ext.org/shacl/'
      }, {
        text: 'rdf-ext-cli',
        link: 'https://github.com/rdf-ext/rdf-ext-cli'
      }]
    }]
  }),
  plugins: [
    prismjsPlugin({
      preloadLanguages: ['js', 'web-idl']
    }),
    registerComponentsPlugin({
      componentsDir: new URL('./components', import.meta.url).pathname
    }),
    searchPlugin()
  ]
})
