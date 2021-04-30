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
    "revision": "69018e6f6d0131de67fce7d64bf56464"
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
    "url": "assets/js/10.3774265b.js",
    "revision": "3f9ba73724c10c68a5612ac2be41bd2a"
  },
  {
    "url": "assets/js/11.80975e29.js",
    "revision": "5d163224255db26f73f483c3f042943d"
  },
  {
    "url": "assets/js/12.5660b571.js",
    "revision": "fe479e08c4acbb2e7e313fe991461020"
  },
  {
    "url": "assets/js/13.5772fca0.js",
    "revision": "997b6aadaeaaea73dabd94f2e0d8e692"
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
    "url": "assets/js/16.a24de89b.js",
    "revision": "c8c4ffa697832e36d2943799e7e8369c"
  },
  {
    "url": "assets/js/17.632aac7d.js",
    "revision": "b68dd261513400205fd974d392f420ab"
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
    "url": "assets/js/2.b353dc9f.js",
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
    "url": "assets/js/23.c3747b86.js",
    "revision": "a6e9d859c5a8c97046ffce0133412ba1"
  },
  {
    "url": "assets/js/24.ab70dae8.js",
    "revision": "787b8e7675126bdc81215940a2052a71"
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
    "url": "assets/js/29.cc963927.js",
    "revision": "da2b1916921841c5e1058821ef9fe3b7"
  },
  {
    "url": "assets/js/3.856da065.js",
    "revision": "c17f74454ef7893d51172744a0454461"
  },
  {
    "url": "assets/js/30.f9821ea8.js",
    "revision": "4f1b50ea73b2abeab4b6dbd69793cd7f"
  },
  {
    "url": "assets/js/31.95632818.js",
    "revision": "20f9968829a84c1cde54dfd8ecf727d5"
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
    "url": "assets/js/34.f1db38d4.js",
    "revision": "baf7ae51601cf4aff3f4d7f3bf15b03c"
  },
  {
    "url": "assets/js/35.98e8bb6b.js",
    "revision": "5255ff5b6035d5a42d9b9cf85dfbc2fe"
  },
  {
    "url": "assets/js/36.c9f965b9.js",
    "revision": "47d4a37a89d2d2fa2c799b5540bbaf47"
  },
  {
    "url": "assets/js/37.26323e74.js",
    "revision": "d79ccbbc162f68fa34b3176d499aaa07"
  },
  {
    "url": "assets/js/38.2b9feb30.js",
    "revision": "41a4481cbc56f47c6fd8149b5e8746e2"
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
    "url": "assets/js/42.216fd0d7.js",
    "revision": "344280eb437e21f5cb34e69343369dff"
  },
  {
    "url": "assets/js/43.69b78e2b.js",
    "revision": "23a3e26f6bd3651498c5f9734bf1cd47"
  },
  {
    "url": "assets/js/44.8bc7fe5c.js",
    "revision": "63d38fa37d47ad3990e6130c835e2809"
  },
  {
    "url": "assets/js/45.571d6002.js",
    "revision": "6482e21cffb4ffe0a942cf853217136b"
  },
  {
    "url": "assets/js/5.f996c84a.js",
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
    "url": "assets/js/9.7e5e8a4c.js",
    "revision": "21a8a71e95eb61f0397d0a9f98cf08d6"
  },
  {
    "url": "assets/js/app.394e397c.js",
    "revision": "cc6c69317f74869c52a46a9bfd6d0957"
  },
  {
    "url": "careers/index.html",
    "revision": "ea2fa3d49abd9afdd61474a044fdd317"
  },
  {
    "url": "cheat-sheet/firebase/index.html",
    "revision": "46641a5961ef4cfffa0a8b4b58d72172"
  },
  {
    "url": "cheat-sheet/git/index.html",
    "revision": "f4c0ec0abced3cfe384010a18701d5ad"
  },
  {
    "url": "cheat-sheet/gulp/index.html",
    "revision": "eb8652f97a90f41d60a3e5dcf9ff0dd3"
  },
  {
    "url": "cheat-sheet/index.html",
    "revision": "ecca149322bd6f160a66b0fe430c1826"
  },
  {
    "url": "cheat-sheet/npm/index.html",
    "revision": "fe074d958cbaf172f82cf79771271018"
  },
  {
    "url": "cheat-sheet/ssh/index.html",
    "revision": "1519e585e9f1dde713710006c90aa4b9"
  },
  {
    "url": "cheat-sheet/vue/index.html",
    "revision": "60ed5ed0234c0a800ffe813737c4be1b"
  },
  {
    "url": "cheat-sheet/yarn/index.html",
    "revision": "b21aa078835b4f848d9e4a35485a1647"
  },
  {
    "url": "guides/conventions/css/index.html",
    "revision": "8a3bd777bdd1c78db6b7af437080f4b8"
  },
  {
    "url": "guides/conventions/docs/index.html",
    "revision": "931683be3a0fbfc14c08fbe05b176707"
  },
  {
    "url": "guides/conventions/general/index.html",
    "revision": "232d0b30799ef523acf910611acae600"
  },
  {
    "url": "guides/conventions/html/index.html",
    "revision": "d1bcafb85d947f4b6d28e7662239ddce"
  },
  {
    "url": "guides/conventions/index.html",
    "revision": "a6be544ab1a792aa3ff77bdf23028083"
  },
  {
    "url": "guides/index.html",
    "revision": "8e6d57fb3c892cbdc08af0ff746aefd0"
  },
  {
    "url": "icon.png",
    "revision": "954d9f968f9df577f9cbd537e39b27f5"
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
    "revision": "b9047e870feacd8dbadc6d36623546ee"
  },
  {
    "url": "logo.png",
    "revision": "cb607cf0fda0c47d375cb71be9546970"
  },
  {
    "url": "wedev/backend/api/index.html",
    "revision": "f22c6dfc20d8e2a570409beb869374cc"
  },
  {
    "url": "wedev/backend/cloud-service/index.html",
    "revision": "b2319ed5073a7590863f5d1d0170cf63"
  },
  {
    "url": "wedev/backend/database/index.html",
    "revision": "721fe4c14e465bec627381bd4bf8f6b7"
  },
  {
    "url": "wedev/backend/framework/index.html",
    "revision": "c3677087ea95d55413e38771207e1d09"
  },
  {
    "url": "wedev/backend/realtime/index.html",
    "revision": "cc7297babf12261169bb5466b6d9668c"
  },
  {
    "url": "wedev/backend/serverless/index.html",
    "revision": "a309b7d0975fd67a30195276458e8790"
  },
  {
    "url": "wedev/devops/ci-cd/index.html",
    "revision": "f92c6ab1ed239808bc5becd7c1a80ebb"
  },
  {
    "url": "wedev/devops/docker/index.html",
    "revision": "9418050cfc6ea57269ba711f47bbe0f3"
  },
  {
    "url": "wedev/devops/scm/index.html",
    "revision": "c5bdf00782ced6ca4e76d72ca0009536"
  },
  {
    "url": "wedev/frontend/bundling-transpiler/index.html",
    "revision": "56f0f080c39a3c44c4fedf7490e20975"
  },
  {
    "url": "wedev/frontend/csr-ssr-spa-mpa-pwa/index.html",
    "revision": "08b6d5b1a4079ec714f696bc369fb546"
  },
  {
    "url": "wedev/frontend/css/index.html",
    "revision": "835808f98275121c18b07b30bb796815"
  },
  {
    "url": "wedev/frontend/framework/index.html",
    "revision": "e8dca10a6117c4386b5a68bed8a31e1a"
  },
  {
    "url": "wedev/frontend/hybrid-web-app/index.html",
    "revision": "a5eb4788d7907fb9324c1a81c31edbf0"
  },
  {
    "url": "wedev/frontend/linting/index.html",
    "revision": "03e9c3e1e2cd1edd4c6b3cb98f5d2251"
  },
  {
    "url": "wedev/frontend/ui-ux-framework/index.html",
    "revision": "9b40e5ac9e1d501dfd77cfa7347e8943"
  },
  {
    "url": "wedev/index.html",
    "revision": "5054e8cf11538a064f383f21f79782d9"
  },
  {
    "url": "wedev/language/index.html",
    "revision": "78f2f115b668d348ab53af00bb6b2780"
  },
  {
    "url": "wedev/misc/docs/index.html",
    "revision": "d7fb2bf4e1404d9baf29bd0262ff7f84"
  },
  {
    "url": "wedev/prologue/index.html",
    "revision": "c21e4bb3bdb7cd24258d68d7a728fcc1"
  },
  {
    "url": "wedev/tech-stack-overview/index.html",
    "revision": "4e38519154fdae442a8821a2db683375"
  },
  {
    "url": "wedev/tech-stack-recap/index.html",
    "revision": "5f5a8614c53a647203d43dd99395b50a"
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
