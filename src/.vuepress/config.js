const sidebar = require('./sidebar')

module.exports = {
  title: '위펄슨 기술 블로그',
  description: '기술의 공유, 상생, 발전을 지향합니다',
  themeConfig: {
    nav: [
      { text: 'WeDev', link: '/we-dev/' },
      { text: 'Guides', link: '/guides/' },
      { text: 'Cheat Sheet', link: '/cheat-sheet/' },
      { text: 'Careers', link: '/careers/' },
      { text: 'WePerson', link: 'https://weperson.com' },
    ],
    sidebar,
    lastUpdated: 'Last Updated'
  },
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/icon-16x16.png', color: '#3eaf7c' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'naver-site-verification', content: '9f6fd9374b76e620a5d27ecde3ad0ce5ff285294' }],
    ['meta', { name: 'google-site-verification', content: '_foyyoJ5pPvEdoIZjTVELtmkAh8b0pZ83LXTC4zfHXw' }]
  ],
  dest: 'docs',
  extraWatchFiles: ['.vuepress/sidebar.js'],
  serviceWorker: { updatePopup: true },
  markdown: { lineNumbers: true },
  plugins: [
    ['@vuepress/back-to-top'],
    ['@vuepress/plugin-medium-zoom'],
    // ['@vuepress/google-analytics', { 'ga': 'UA-144184493-1' }],
    ['@vuepress/pwa', { serviceWorker: true, updatePopup: true }],
    // ['sitemap', { hostname: 'https://wepersondev.github.io' }],
    ['seo']
  ]
}
