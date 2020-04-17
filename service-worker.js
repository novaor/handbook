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
    "revision": "0108ade6a05a57aeb6ea383734df8069"
  },
  {
    "url": "assets/css/0.styles.fef4b18c.css",
    "revision": "8961bf8be7e5cf9b77579155199d74c4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9b5153c2.js",
    "revision": "7784bb9a79b87e47c8d008da5ff1fc44"
  },
  {
    "url": "assets/js/11.c7ea0655.js",
    "revision": "a80129d09dabb04d8d5edb48c9a4bec1"
  },
  {
    "url": "assets/js/12.747f4ce2.js",
    "revision": "e2bd77c57dd1cce138dc424fec2789e2"
  },
  {
    "url": "assets/js/13.cdf8b2ed.js",
    "revision": "1db848d1358a6e07caa70d6c90f7cbad"
  },
  {
    "url": "assets/js/14.c5399a2a.js",
    "revision": "5fa23f0a1299cad57e490ec8e7d8cf95"
  },
  {
    "url": "assets/js/15.9877b020.js",
    "revision": "d625a4ecbc391dacacac344f0714c1cf"
  },
  {
    "url": "assets/js/16.56db992d.js",
    "revision": "3e314b0b6182c87ba565e17f8435dff3"
  },
  {
    "url": "assets/js/3.bd61b1b9.js",
    "revision": "0844ab2b657f4be5d64d31a02b8ac391"
  },
  {
    "url": "assets/js/4.bbe02140.js",
    "revision": "5cb60fc623b0d1f5fff033854eb463da"
  },
  {
    "url": "assets/js/5.f8a9918c.js",
    "revision": "4d2bc9710f86a24949bfaf3f2546ec81"
  },
  {
    "url": "assets/js/6.cb16ded4.js",
    "revision": "caeded466998a79d39c2089e075df877"
  },
  {
    "url": "assets/js/7.f6ba5230.js",
    "revision": "7ba8699dbe97e2ef8d026868aa3369a8"
  },
  {
    "url": "assets/js/8.05ce71b7.js",
    "revision": "bf90f3778d8e1bde99163059b107dddb"
  },
  {
    "url": "assets/js/9.b06d696d.js",
    "revision": "8f5e03ba06f09b2aa8d6221724e3305e"
  },
  {
    "url": "assets/js/app.d119b6d0.js",
    "revision": "94e73c8134376b371c477d20f6d650df"
  },
  {
    "url": "assets/js/vendors~notification.22e715a0.js",
    "revision": "8f47e04add94200b815111b3536c66cf"
  },
  {
    "url": "config.html",
    "revision": "e19ed7479ddb1ba269119d8b2ba20ef1"
  },
  {
    "url": "guide/ffmpeg-install.html",
    "revision": "3c6cd9aeb01090d2f7818015ab08d32c"
  },
  {
    "url": "guide/index.html",
    "revision": "fdb359c559aa829309e6fccbba630b78"
  },
  {
    "url": "guide/install-mysql.html",
    "revision": "20a070237b3a0a7567f1223563de6d5f"
  },
  {
    "url": "guide/install-oracle_xe.html",
    "revision": "23094b5496d1d62ab59e71c12ff89f4a"
  },
  {
    "url": "guide/macos-install.html",
    "revision": "dd360531b66e6f7d5aabed22965f0f95"
  },
  {
    "url": "guide/turnserver.html",
    "revision": "6566960258848e0e20bdd8d10ddbc36a"
  },
  {
    "url": "guide/vue.html",
    "revision": "908759b59c5e52f2f68d5fca5350b1b2"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "7272303cbbf17df3f5b5be8863b4991c"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
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
