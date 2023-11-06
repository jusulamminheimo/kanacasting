'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7d0aebe6924b07ba1d9e970257ee0166",
"assets/AssetManifest.json": "ba870c250cd534e7fa943edc40c95f47",
"assets/assets/background.png": "9d95286e609be703b423409f43f23326",
"assets/assets/background_empty.png": "3e6a149bb6b908d3b02ec22d97267754",
"assets/assets/csgotausta.png": "6a6958137582d9c8c5c932ea1e70a0e9",
"assets/assets/cticon.webp": "7f6c344ca6fb867f74611f09cd292c74",
"assets/assets/front_background.png": "5ab37ee2c211d64cb1fcfe17584915f4",
"assets/assets/kanaliiga_logo.png": "2bfb7c6e4fc8631d7459b58a4894ea41",
"assets/assets/sponsor_logos/barebells.png": "5b4017aa8512631e39eb4be15da8ae03",
"assets/assets/sponsor_logos/cgi.png": "17461a95b2502c62a4a9320d8438f77a",
"assets/assets/sponsor_logos/crowdcollective.png": "9f8540e0a967e53e08c5c01da82cf183",
"assets/assets/sponsor_logos/etteplan.png": "8797443fadd811cc3ab8c53fdf3b78b0",
"assets/assets/sponsor_logos/nocco.png": "de8eff78291e28cb567b63ee313a2f83",
"assets/assets/sponsor_logos/vilpe.png": "3aa9fba3faac2b19018ac7c5b7ee685f",
"assets/assets/ticon.webp": "15f01176c7d378f71e5b703deee7b314",
"assets/assets/veto-ancient.jpg": "1a3ff1c4b37311293df961711a39c2cb",
"assets/assets/veto-anubis.jpg": "1a54368e7b858057b1f62186eb27ef00",
"assets/assets/veto-inferno.jpg": "9d294bab028761386c18716e933a4208",
"assets/assets/veto-mirage.jpg": "074dabbc6e53a5c3f019ddd1b071605c",
"assets/assets/veto-nuke.jpg": "7303ef49e2842a3d7a77a747f7c52515",
"assets/assets/veto-overpass.jpg": "e9e7b3f9d27c3f4c845a0721bc490f1d",
"assets/assets/veto-vertigo.jpg": "b6aa2defd7c4c898342d4cf91ff7cff8",
"assets/FontManifest.json": "07e473f6a35438dc401e23e5ff64f73a",
"assets/fonts/BigShouldersDisplay-Bold.ttf": "ede3799127cbec0f20b461ba2eadee50",
"assets/fonts/BigShouldersDisplay-ExtraBold.ttf": "185c5a8a9d8468a77a1f97d088a04007",
"assets/fonts/BigShouldersDisplay-Regular.ttf": "1fe48df13b450f96904f68cc34d12965",
"assets/fonts/MaterialIcons-Regular.otf": "96203fcffd58f79e4d7d07422d9d7a91",
"assets/fonts/WorkSans-Black.ttf": "d174236ffb8ef7c2158395e4ee83e3b6",
"assets/fonts/WorkSans-BlackItalic.ttf": "397e988b62638fa420f269108c81bedf",
"assets/fonts/WorkSans-Bold.ttf": "f051cc0ed2761378e886727284cf3c05",
"assets/fonts/WorkSans-ExtraBold.ttf": "749d400e25914e869b2cb9f554439eb4",
"assets/fonts/WorkSans-ExtraLight.ttf": "08652b8358873ee1f44ac52b67b1c109",
"assets/fonts/WorkSans-Light.ttf": "fac65b7a2b5c287d027e8ab9df15ff58",
"assets/fonts/WorkSans-MediumItalic.ttf": "624fb450f2a020fbf2ff5ac9ce819735",
"assets/fonts/WorkSans-Regular.ttf": "7d761a652f8e716f57f4352b0f4e6280",
"assets/fonts/WorkSans-Thin.ttf": "69825d3bbd338a65e0ba517745d84be7",
"assets/NOTICES": "682aeae8770ebb56cba8440df3ccd4b6",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "55719c017b5392d171b68c8dd6f9eaec",
"/": "55719c017b5392d171b68c8dd6f9eaec",
"main.dart.js": "e9bd437c73cdddbd065292f3cf06d742",
"manifest.json": "9f78207f15c7900eca7fd79fd6b8bf0d",
"version.json": "00a064811a1326ef49c71e9b8d36a984"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
