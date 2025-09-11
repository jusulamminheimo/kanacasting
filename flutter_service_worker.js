'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ae9331c823a62cef6ae637fe02962f9c",
"assets/AssetManifest.bin.json": "1e1cd634f18ad08e45636101b8fcd67e",
"assets/AssetManifest.json": "18434ef4f05651e7b74d6dfb12edf684",
"assets/assets/background.png": "9d95286e609be703b423409f43f23326",
"assets/assets/background_empty.png": "3e6a149bb6b908d3b02ec22d97267754",
"assets/assets/csgotausta.png": "6a6958137582d9c8c5c932ea1e70a0e9",
"assets/assets/cticon.webp": "7f6c344ca6fb867f74611f09cd292c74",
"assets/assets/Frame_78.png": "0d311965f92754a535a4e70105b3da28",
"assets/assets/front_background.png": "5ab37ee2c211d64cb1fcfe17584915f4",
"assets/assets/kanaliiga_logo.png": "2bfb7c6e4fc8631d7459b58a4894ea41",
"assets/assets/sponsor_logos/atflow.png": "bc16baf314aa4a9014580a5948747dde",
"assets/assets/sponsor_logos/elisa.png": "71c6b75f429ac5a9bd6cbfdd3ee84373",
"assets/assets/sponsor_logos/supermetrics.png": "f017654cb87d64faaa1decf8231c4aab",
"assets/assets/sponsor_logos/tnnet.png": "ad88974df5be4d5c7061627bd51648a3",
"assets/assets/sponsor_logos/vilpe.png": "3aa9fba3faac2b19018ac7c5b7ee685f",
"assets/assets/sponsor_logos/visma.png": "277f6c5997ca37faa0b79494e164a4b1",
"assets/assets/sponsor_logos/warlock.png": "4939403882bf38f285648fd5d510cfd1",
"assets/assets/ticon.webp": "15f01176c7d378f71e5b703deee7b314",
"assets/assets/veto-ancient.jpg": "1a3ff1c4b37311293df961711a39c2cb",
"assets/assets/veto-anubis.jpg": "1a54368e7b858057b1f62186eb27ef00",
"assets/assets/veto-dust2.jpg": "71354e0acedf339a8b29b2b5d4ada3f7",
"assets/assets/veto-inferno.jpg": "9d294bab028761386c18716e933a4208",
"assets/assets/veto-mirage.jpg": "074dabbc6e53a5c3f019ddd1b071605c",
"assets/assets/veto-nuke.jpg": "7303ef49e2842a3d7a77a747f7c52515",
"assets/assets/veto-overpass.jpg": "e9e7b3f9d27c3f4c845a0721bc490f1d",
"assets/assets/veto-train.png": "fd7867535866b78695a6c8f2c1d64ab8",
"assets/assets/veto-vertigo.jpg": "b6aa2defd7c4c898342d4cf91ff7cff8",
"assets/FontManifest.json": "c4d622d3262be79e3a61940360926753",
"assets/fonts/Anton-Regular.ttf": "4cab96279ec05c67f65c13f193650412",
"assets/fonts/MaterialIcons-Regular.otf": "b33dafb4001396b2ebe79780dae5600a",
"assets/fonts/SpaceMono-Bold.ttf": "87357b7223ab3ed8c3da24f77f51d85f",
"assets/fonts/SpaceMono-Regular.ttf": "59c83e1fe244568db558bab69755a6dd",
"assets/NOTICES": "1683dccbc48fd44779115db444a7738e",
"assets/obs_assets/background_video.mov": "336bca227392bbe4b3850bd341f690d7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "b232cd969c0cb38f4a9d622f7d3c9820",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3d4354260ef80f5586a445df39a8498c",
"/": "3d4354260ef80f5586a445df39a8498c",
"main.dart.js": "1dfed3435d476abcddd61a3e7d90ec6f",
"manifest.json": "9f78207f15c7900eca7fd79fd6b8bf0d",
"version.json": "00a064811a1326ef49c71e9b8d36a984"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
