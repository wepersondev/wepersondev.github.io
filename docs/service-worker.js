/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c6221deaafdf311a90052cafebfcd83c"
  },
  {
    "url": "assets/css/0.styles.d6d31ea4.css",
    "revision": "1ed1f062779a5ac087589836dfaca316"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0b6d79b4.js",
    "revision": "b7b73b3ad0e1a11f9a532a4f5a3a6468"
  },
  {
    "url": "assets/js/11.80975e29.js",
    "revision": "5d163224255db26f73f483c3f042943d"
  },
  {
    "url": "assets/js/12.15245ae0.js",
    "revision": "bbe37d0cf51e505750e72399915f06c0"
  },
  {
    "url": "assets/js/13.cf467c90.js",
    "revision": "0dcf45407f17d5ce89d205d5103c3aae"
  },
  {
    "url": "assets/js/14.73067209.js",
    "revision": "aabaf75b4b12b119bace26276f065100"
  },
  {
    "url": "assets/js/15.d6dae71b.js",
    "revision": "4919baf9927791b5ed4744b5b77680f5"
  },
  {
    "url": "assets/js/16.642fc482.js",
    "revision": "3565bddced8eb39ccda7babb94d9c4de"
  },
  {
    "url": "assets/js/17.b2eadbc6.js",
    "revision": "bf12c8dc8bb65bc6ecee761d4a5c315a"
  },
  {
    "url": "assets/js/18.33f4bc98.js",
    "revision": "16aa65293733c3922b6a386c1ed8ab72"
  },
  {
    "url": "assets/js/19.752090cd.js",
    "revision": "f68e5c7b6620a083f47e15113714044e"
  },
  {
    "url": "assets/js/2.39eebe2a.js",
    "revision": "e53802e454b2471067e48613de4311df"
  },
  {
    "url": "assets/js/20.6bd616e0.js",
    "revision": "f61b25821bf6a539faf9392d126fd54f"
  },
  {
    "url": "assets/js/21.15ba137e.js",
    "revision": "36d962d69dccbebc61ae0f837403ea0b"
  },
  {
    "url": "assets/js/22.f53a937e.js",
    "revision": "53c6420007942d95e60d42e28893da99"
  },
  {
    "url": "assets/js/23.d3a764d4.js",
    "revision": "53216cdee71a423c6143d08cacf596df"
  },
  {
    "url": "assets/js/24.bc958664.js",
    "revision": "a6d5aaae9bd3a02a08d4f689fa057471"
  },
  {
    "url": "assets/js/25.7182c1c1.js",
    "revision": "cae66b4350d358b5c9c994736542e057"
  },
  {
    "url": "assets/js/26.562c4e13.js",
    "revision": "3d1be0115f082cdbf95097161efaeb61"
  },
  {
    "url": "assets/js/27.c5e81202.js",
    "revision": "3ff28f044080a8eaf5b168091dfbe117"
  },
  {
    "url": "assets/js/28.d2137af8.js",
    "revision": "1eef0c22e70a934727a88391dc7731ca"
  },
  {
    "url": "assets/js/29.3ca92959.js",
    "revision": "cc59bf5e76fb9cb774b9cace91d8313c"
  },
  {
    "url": "assets/js/3.856da065.js",
    "revision": "c17f74454ef7893d51172744a0454461"
  },
  {
    "url": "assets/js/30.556c416b.js",
    "revision": "1ee4acf486d4fef87e71030ca9a81c73"
  },
  {
    "url": "assets/js/31.d81f2cd2.js",
    "revision": "06468535d25188ecb2b5ae08c585a56b"
  },
  {
    "url": "assets/js/32.69d8f9eb.js",
    "revision": "96324d14dd250963a68657e67e2ff1cf"
  },
  {
    "url": "assets/js/33.2b0e47e3.js",
    "revision": "6782130ed9d7785956a67a4bcb114e17"
  },
  {
    "url": "assets/js/34.33ec61e9.js",
    "revision": "cdda2953fad1027aaab88e0e086b9392"
  },
  {
    "url": "assets/js/35.3d933053.js",
    "revision": "48d64f6cf9dbe3a858aacd090f94314c"
  },
  {
    "url": "assets/js/36.f64a1506.js",
    "revision": "d8aede00b1a0a3ed7844f3d2c2ebce37"
  },
  {
    "url": "assets/js/37.19569f92.js",
    "revision": "df2fb15623212509a62d4f10997e12f1"
  },
  {
    "url": "assets/js/38.905f2c48.js",
    "revision": "bc05c8d6fa826b8d45009eda99463eb2"
  },
  {
    "url": "assets/js/39.bc804062.js",
    "revision": "c30cfb181dfbc03d7ae9f7ee95df8c81"
  },
  {
    "url": "assets/js/4.e8cb163a.js",
    "revision": "6a11a0580d1e2a4880ceadf9aa7789aa"
  },
  {
    "url": "assets/js/40.858993f3.js",
    "revision": "f8e349ccca3c17026f776af0b7192246"
  },
  {
    "url": "assets/js/41.a685e96d.js",
    "revision": "02f1991cf74dfc93492bf434a3c4cad1"
  },
  {
    "url": "assets/js/42.64de4229.js",
    "revision": "61d3f40c7b7ff0bb830a68e61d139c45"
  },
  {
    "url": "assets/js/43.69b78e2b.js",
    "revision": "23a3e26f6bd3651498c5f9734bf1cd47"
  },
  {
    "url": "assets/js/44.0da3b9bf.js",
    "revision": "5a04c6bb75fca5b779a0a9a2a60ea741"
  },
  {
    "url": "assets/js/45.571d6002.js",
    "revision": "6482e21cffb4ffe0a942cf853217136b"
  },
  {
    "url": "assets/js/5.b2243494.js",
    "revision": "01a7cd88e21d4adf9642879eaf396876"
  },
  {
    "url": "assets/js/6.13571802.js",
    "revision": "20c618452434440eff6a17cf3a17166c"
  },
  {
    "url": "assets/js/7.78fdf3c5.js",
    "revision": "4fad0ae1033169df1c0dd3a1f28a4a18"
  },
  {
    "url": "assets/js/8.ecb6944f.js",
    "revision": "40d57fb8c5082c62d81e711e7b7ad368"
  },
  {
    "url": "assets/js/9.abcdeaa5.js",
    "revision": "7841a3acc37fe6592858a356d7f5fadc"
  },
  {
    "url": "assets/js/app.7c8d2a1f.js",
    "revision": "bdbad00ea448f980fbc99fdbe40ca336"
  },
  {
    "url": "careers/index.html",
    "revision": "263a63a3061b1fa9c4cff88453148cf1"
  },
  {
    "url": "cheat-sheet/firebase/index.html",
    "revision": "c047973efc61e492e4d55f4e1c8b414b"
  },
  {
    "url": "cheat-sheet/git/index.html",
    "revision": "c6c1e19f37cd7a882bdd4e31d942dc0c"
  },
  {
    "url": "cheat-sheet/gulp/index.html",
    "revision": "c11e76d419fc5909261ac532416a52f3"
  },
  {
    "url": "cheat-sheet/index.html",
    "revision": "9c061fd2353dc037061c6de8205f8379"
  },
  {
    "url": "cheat-sheet/npm/index.html",
    "revision": "c9e2c6d4aca6c34192d8b5dacb86a294"
  },
  {
    "url": "cheat-sheet/ssh/index.html",
    "revision": "6a62004e9442774cee6c4359a6785893"
  },
  {
    "url": "cheat-sheet/vue/index.html",
    "revision": "579800752310f5201451f15071f48170"
  },
  {
    "url": "cheat-sheet/yarn/index.html",
    "revision": "9c01e785918e964838d1292f27783edd"
  },
  {
    "url": "guides/conventions/css/index.html",
    "revision": "a135e4a725efc1e00ef61aeff05adb80"
  },
  {
    "url": "guides/conventions/docs/index.html",
    "revision": "b7f651138988c6a7aa4d7fd16b903142"
  },
  {
    "url": "guides/conventions/general/index.html",
    "revision": "bb4b16f3004257c108edf06fe5066825"
  },
  {
    "url": "guides/conventions/html/index.html",
    "revision": "a944e24bd2cb93de57fb47037dd8edc1"
  },
  {
    "url": "guides/conventions/index.html",
    "revision": "74f33be2ca6eea38349a2500e6e9c7a5"
  },
  {
    "url": "guides/index.html",
    "revision": "98eeb6a523753cf880c0ead91e14f30e"
  },
  {
    "url": "icon.png",
    "revision": "ea9ebb41b9f4e10edc6748f4343ee4fd"
  },
  {
    "url": "icons/apple-icon-120x120.png",
    "revision": "480b1c01fbdd2e310ac7084a467af752"
  },
  {
    "url": "icons/apple-icon-152x152.png",
    "revision": "36090d22a504836c7b3cb029d315aa19"
  },
  {
    "url": "icons/apple-icon-167x167.png",
    "revision": "2b9fbe82b47492bca7bbaa2ca668fab4"
  },
  {
    "url": "icons/apple-icon-180x180.png",
    "revision": "3501e8a77b6f6e40f983588c1d2cdf9f"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "522f3b746ceebcbdadcc5dee13d44f66"
  },
  {
    "url": "icons/icon-16x16.png",
    "revision": "1960c341af0d9392b7f915a6476592be"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "aefcf5f3983c2784b328aef1cc1cbbec"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "9b89a668c198c3bebaaa4477dde2f3d4"
  },
  {
    "url": "icons/icon-32x32.png",
    "revision": "fa84cdf5ff75e54030d02b2a69175579"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "befe0dee192382f3a07c820599e17fe7"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "0c0002f9223f3b1798b075328877f0cd"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "ebfe0182599bd546dcf6eea334de9cde"
  },
  {
    "url": "icons/ms-icon-144x144.png",
    "revision": "4914f7db46c8ccf2371b985d3ef49d48"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "5a4fcab9de92db21722b79c9f7b0e3a5"
  },
  {
    "url": "img/careers/wework.png",
    "revision": "d257f660afea3e50e76e54f32485c10e"
  },
  {
    "url": "img/wedev/angular.jpg",
    "revision": "6e2813d6dbc5cff371adad38b6d02717"
  },
  {
    "url": "img/wedev/babel.png",
    "revision": "d4bf63efee5d6a8555f2c16f8d1923a9"
  },
  {
    "url": "img/wedev/bootstrapvue.png",
    "revision": "2b581d4fb13dd76491e08cde77bddf07"
  },
  {
    "url": "img/wedev/cordova.jpg",
    "revision": "b23af1a796b0576d4ae7d6beeb0b507c"
  },
  {
    "url": "img/wedev/csr.png",
    "revision": "fc939df66f9be36fe0d11c65bd660598"
  },
  {
    "url": "img/wedev/db-no-relations.jpg",
    "revision": "cd4bfebfee1a7b370ec315772dbd912f"
  },
  {
    "url": "img/wedev/db-relations.jpg",
    "revision": "be09b117abf827565ea6d4a86b814f36"
  },
  {
    "url": "img/wedev/db-schema.jpg",
    "revision": "c5438b041d11721b2ef263636b251c5f"
  },
  {
    "url": "img/wedev/db-schemaless.jpg",
    "revision": "a9bff3c09d5969a695a8d88a9c0c0739"
  },
  {
    "url": "img/wedev/developer-type.png",
    "revision": "3d7d5181a85c9bc8b545a3ab4021dc51"
  },
  {
    "url": "img/wedev/docker.png",
    "revision": "35200f6806736f767acd5b1cbb0f5ef0"
  },
  {
    "url": "img/wedev/docker1.png",
    "revision": "2bd78dfdac7fba667ec5e7dff596f509"
  },
  {
    "url": "img/wedev/docker2.png",
    "revision": "cb8ebfeb0a4008ddc8e27b0cc004746e"
  },
  {
    "url": "img/wedev/docker3.png",
    "revision": "5f06d8e9cb2fa58439ca928ef7594dd0"
  },
  {
    "url": "img/wedev/electron.png",
    "revision": "1cc7f1e8a2bc434893703cc7d42be26b"
  },
  {
    "url": "img/wedev/element.png",
    "revision": "63237426f5ca92e931aa1284717c6a01"
  },
  {
    "url": "img/wedev/firebase-vs-amplify.png",
    "revision": "8633968abc4e3fcdec6970a26aadd1d9"
  },
  {
    "url": "img/wedev/flutter.jpg",
    "revision": "7b5ffef421d2692f48e76f78c28506da"
  },
  {
    "url": "img/wedev/frontend-frameworks-stackoverflow.png",
    "revision": "9d2bbc2f6591f33a2a8015d223643c07"
  },
  {
    "url": "img/wedev/git-flow.png",
    "revision": "f3ecc3cf5b3902dbb1ff2356fe65e67e"
  },
  {
    "url": "img/wedev/google-trends-languages.png",
    "revision": "0ebcf0148a89cf7cce160438db276a0f"
  },
  {
    "url": "img/wedev/google-trends-python.png",
    "revision": "545d30c07345e06865d7d70c3dcae4b3"
  },
  {
    "url": "img/wedev/graphql_diagram.png",
    "revision": "8efafc9157a25a40baf71107578247cd"
  },
  {
    "url": "img/wedev/ionic.png",
    "revision": "1f7aa59cad6dd6808dc92bb8e765f4a4"
  },
  {
    "url": "img/wedev/less.jpg",
    "revision": "0dec502c9071bf872eb8dcabac6c2ace"
  },
  {
    "url": "img/wedev/microservice.png",
    "revision": "34cd6250e09d9a738f121baef3b29d04"
  },
  {
    "url": "img/wedev/moore-law.png",
    "revision": "d125f40813e6f4a2e6039be384f9a417"
  },
  {
    "url": "img/wedev/node-django-spring.png",
    "revision": "72c37c3f0bb592011e11e0c5697706ca"
  },
  {
    "url": "img/wedev/parcel.jpg",
    "revision": "1f392f62899e9fb497b24e85ece2c871"
  },
  {
    "url": "img/wedev/quasar.png",
    "revision": "88091283ffe404802e3bb0ea6ca919aa"
  },
  {
    "url": "img/wedev/react-native.png",
    "revision": "2e326d6a9aaf902b0c13bd981534b929"
  },
  {
    "url": "img/wedev/react.jpg",
    "revision": "d1c71bfc6d110f0d5131eefa20e598be"
  },
  {
    "url": "img/wedev/rollup.png",
    "revision": "4634778c864dd9aad89ea8d2e7a9818d"
  },
  {
    "url": "img/wedev/saas-paas-iaas-diagram.svg",
    "revision": "7d0a6557a3ea84c95a700e54d0d814e6"
  },
  {
    "url": "img/wedev/sass.png",
    "revision": "d17e45d80f471620fd39e43203d88d0b"
  },
  {
    "url": "img/wedev/ssr.png",
    "revision": "4dc40b9377fc1c2361103a515086ff84"
  },
  {
    "url": "img/wedev/stylus.png",
    "revision": "e08e98da9a9d611bd056ce4b8bd0acc2"
  },
  {
    "url": "img/wedev/top-languages-2019-stackoverflow.png",
    "revision": "7f2710fc52e41a1c3c3cfc216fec9a6d"
  },
  {
    "url": "img/wedev/vue.jpg",
    "revision": "7f9f0880170173e66c055c7de3aba39e"
  },
  {
    "url": "img/wedev/vuetifyjs.png",
    "revision": "62de5afd1d2ba00dfda67dc892a7f4e7"
  },
  {
    "url": "img/wedev/webpack.png",
    "revision": "805d0c0e1a650540ed3a8c21c4aa447a"
  },
  {
    "url": "img/wedev/xamarin.png",
    "revision": "83cec39456c41897589a0ccb60f4a462"
  },
  {
    "url": "index.html",
    "revision": "eaa6ec97ca92887613b377f63fe1014d"
  },
  {
    "url": "logo.png",
    "revision": "c79a934bc5b472985a4c4cb2000117e2"
  },
  {
    "url": "wedev/backend/api/index.html",
    "revision": "32c51912747946da408e0b885881653a"
  },
  {
    "url": "wedev/backend/cloud-service/index.html",
    "revision": "caf83f4c9305c0c111239639734707fb"
  },
  {
    "url": "wedev/backend/database/index.html",
    "revision": "e3f196ba7d70193e506b07c71fefa777"
  },
  {
    "url": "wedev/backend/framework/index.html",
    "revision": "b40484a8001b84c1008f1fea0838e6ce"
  },
  {
    "url": "wedev/backend/realtime/index.html",
    "revision": "93fc848aa26a5131f73cf6527d3bc754"
  },
  {
    "url": "wedev/backend/serverless/index.html",
    "revision": "a373059e75f5d1178eff485c5e10a36c"
  },
  {
    "url": "wedev/devops/ci-cd/index.html",
    "revision": "947b66ceb0ec0694a83baffdb2665e1d"
  },
  {
    "url": "wedev/devops/docker/index.html",
    "revision": "5f88a62265c89fa83c8b40171f73e5c4"
  },
  {
    "url": "wedev/devops/scm/index.html",
    "revision": "b828ebab8051feef5cdb1a6bf5be070a"
  },
  {
    "url": "wedev/frontend/bundling-transpiler/index.html",
    "revision": "989d0b1848ef4ad0399c3c62d0fd28da"
  },
  {
    "url": "wedev/frontend/csr-ssr-spa-mpa-pwa/index.html",
    "revision": "03390a775d40f07061be8cadc50fd756"
  },
  {
    "url": "wedev/frontend/css/index.html",
    "revision": "383a5a4889b2fae8993f389851fde683"
  },
  {
    "url": "wedev/frontend/framework/index.html",
    "revision": "a252dd307ddf6f45eeccbf64094f2934"
  },
  {
    "url": "wedev/frontend/hybrid-web-app/index.html",
    "revision": "f89f584295a7beba2762765bd608b268"
  },
  {
    "url": "wedev/frontend/linting/index.html",
    "revision": "56da87c40654fc7e285f042616e93f23"
  },
  {
    "url": "wedev/frontend/ui-ux-framework/index.html",
    "revision": "2aed305fe9e4c1606e3691dd42932757"
  },
  {
    "url": "wedev/index.html",
    "revision": "fc34617146474a66e2439ce8d69504ac"
  },
  {
    "url": "wedev/language/index.html",
    "revision": "a0184ca2657c40058344e61ba506b353"
  },
  {
    "url": "wedev/misc/docs/index.html",
    "revision": "5e2cf9762e6b3764ac67d5828a07a523"
  },
  {
    "url": "wedev/prologue/index.html",
    "revision": "c6f3a002e4e0e5f10c11e9f5587034f1"
  },
  {
    "url": "wedev/tech-stack-overview/index.html",
    "revision": "a12c2fced4dca96f7b11996b6c6dbffd"
  },
  {
    "url": "wedev/tech-stack-recap/index.html",
    "revision": "19c63e83baff90347b44f610c6c86dc1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
