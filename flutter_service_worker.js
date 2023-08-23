'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ec1ac12ab85dbcdbf7b3b506314fe9b4",
".git/config": "071f70d79b241145f51dafa06370cdff",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "fb8327b3a6f3e19d04c1e1dc5906b9b0",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d8deb016518799e453d2f94d6319643b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f20531ebe36a656455feb4d63be1b946",
".git/logs/refs/heads/master": "d9e8505ada41d149f4262aecb73a8c22",
".git/logs/refs/heads/test": "641dd2944351629f5f134cf557de9b6f",
".git/logs/refs/remotes/origin/master": "0d399ab1c529f8ffdbcf46d33204828d",
".git/logs/refs/remotes/origin/test": "4fcccbd4e17eeee35a9c5940d320253c",
".git/objects/01/1da9384c598a5561d86297da0645b5e9e26454": "e541decb1c9a83e33f27ee968f69b1b9",
".git/objects/01/5a0b09c3d98940470235c102f78d585a9eb86e": "4281850d52a65073593b558dc20a31bf",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/5edd5f46ab437ef6e4228ec5ff6a1640614482": "4070b4fd67f4b3bb817ccac2bb99ae3e",
".git/objects/08/084ab60480b660131bf4280765e2b21b349476": "71c6ffaa4cf9218df923063436f76960",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/12/a4ff692afe8202f1bc7c09c655a9e2b0a6ff63": "2f8634ee6909c3dac53824fa5aca767d",
".git/objects/19/420c07c7330c98357bbf6156e2e8debb478a24": "71cbdef6defc4b2c73783263578cec2a",
".git/objects/1d/07036fd210a6d4237f2e5ed4bb899b42dfdda7": "324bbe586c139eb8971cab7b80c6aa61",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/56f37f03ce85a12cf7c78e764b540a49f36693": "f30e32eb15689e3e5763dd4ae98c2782",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/1f/e873b4969a18a4ea09f0af205021d731fce804": "b5e6e0eae166cefee40d80974d11f18c",
".git/objects/21/b0709991fa2923e77fe5e94d9e538cc635bc93": "67ac77f64523f9de59be2875667ea292",
".git/objects/29/dfc36b152c93922944cd503c4648f40c4a2426": "baefd85cda3514f88df9b426a5af6f53",
".git/objects/2c/a4cf15a6b6c75acda0e19ada63e8cd4a00161c": "8f00248410b69ead8adbd6d7d3953188",
".git/objects/2e/3e5072cae472977e59a1c724dbe8139658be4e": "b71f0b954e2c641eda9a551b1c2212ca",
".git/objects/2f/804ca3167546f337d5e8665cd5359149a531d6": "37cf727f2856691f4b78fa961232a121",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3d/dae467817e688166616179b68c1b0f213fa6cc": "cdfb3a8dbfcc03d18ac68af571c7771b",
".git/objects/40/af651332a05a5ec106911407f498b032ba538e": "54cfda86fb5665b359337acb1a814051",
".git/objects/45/c7c1773d2dcc3cf8cbd544459168e9f3e742a4": "97248b8234162351c7eb1d3f821a1d53",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/6dd2797574f143a6811bd3ca977f3b9f93a24e": "1288797343e49a07475e0ac5f27ad48b",
".git/objects/4d/5e4fcffee70e5cd2a6bb4f2329719bb1c92a88": "47609024d9b5ec766f0845d1656d0a96",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/bdfaade4ca4011505ac4ac1bfcb20effb39eb6": "d7dd786ec24bacd9a87b00ccfd9a8808",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/cdbc97c8891d68dd57d84b51dd97c87c8cc222": "b6d20245c6d17290bfc60191ca962be2",
".git/objects/55/5d65f98905cc00c2bde9282fb870fe1c12bb7a": "450e801385ff69c909aacd102f7b5119",
".git/objects/5a/fc6fe2e4265373bd5d1506c61d6b606a01e4ac": "95a05d6b59bd2f4fcfc424f87316588e",
".git/objects/60/62f5e020a3ece9f16255f37e5041177ad06401": "0752b0ac03480acb62cafb699f5a5996",
".git/objects/60/a59599222150c09e7cfdeb6403dcc61ff89744": "5c3349ae571c18749131e75fbf7c1f5e",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/67/b087f4c5b7bf462452717405a50850b90274ec": "96ab7423ac6b0604260505f1a3cb8148",
".git/objects/6b/8f086c35326286b033134773589f2a059e0bbe": "08f6738a35016936145def219889e529",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/72/113ce5a157695ce2cbd95c01b06b4a227ca930": "d3e5d6c300c4caef390d324075218faa",
".git/objects/72/8d6a3720fb708a2e39e64e6cb0f550e6eebeac": "417aa5c8d708787106fe73600cbdbb6f",
".git/objects/76/6011b913a56dccd6f152b0538c38064cc77d2b": "33a5173e805eddac7d5c9fd473530adf",
".git/objects/7a/c778bd36b957c92e6cc6691b7108eb32cbed62": "04ded1e31853cfb88adad9986c48d040",
".git/objects/81/78e6b5527eeb5ad160236c9618a89470ebac00": "b924219ac0840315943313d5e33c058f",
".git/objects/83/25c09cb9a153d51b92f390927656d4c84ea7c2": "f25f34cd4da4c11c1c55fd18f9e65437",
".git/objects/87/80649061f99cf6dccd381f155809b28ca6b103": "8fc3fd0c31afc6f2836ee27f51fca9a6",
".git/objects/88/41101dc6d004f431d2c6e83507281435df3b87": "8c337191611895cc592145f6b082e9f5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/91/076a07af6120490903317d3667a9a26c44881e": "e14b7b1d974b63ecf2f1305a52d70aa3",
".git/objects/94/8c9032b3b86b7577ecdf7785f18b9152bb4450": "ab6e3821e8699942798927e386505868",
".git/objects/94/eb2937d9f0cac5d165cb70fd14fae04536dadb": "67b0c7ef6b0f8c839e93217d982f552b",
".git/objects/95/a89ac1bdd3e3b7a8a2f3d6fa4470a46610e6c1": "aafcf9b16cd2aa4beaf8b331880a8842",
".git/objects/97/144dc2a573a1ce8f1a4ca6b70cd5a48cce6eaa": "5fa477f6c14c12392f5b8af488b78a56",
".git/objects/98/850653bad910061b5806073241422ea92d388f": "ef119ffb322f328c7188dc6f6ec5c758",
".git/objects/98/a3878adb30884eae4f00c1057bd8d542c85200": "dba297836dcf4102e8ad450495286798",
".git/objects/9a/41f2cabd819f47fd7c06f47946c356a482599d": "3d11e088d00d27d2a95a0080849ec842",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9d/f347766861d61f056c9ec046cde1de284dbdc7": "5464f8f820629b24fcb6d6c60342e6b4",
".git/objects/9e/88715a68f129282e126ea16bd3508f4f8edf92": "409bcc34d4d722b8fd2c260e6fb52344",
".git/objects/a4/d16d2629c9a307c3a27b0d6bd6854b91144ee8": "6254b5b0a130b403a6454728abdbd8fb",
".git/objects/a5/773679a8c8c9d9c824d8fcc5db0a7b360103ff": "23badeacd1fb981dfc7fe4671aee1d5e",
".git/objects/a7/e433be7aa5f6675b834d655f761cbba01a37e0": "06faacc8c943b6f61f8eb0d63a465f7f",
".git/objects/a9/156bb4175297361d82fb1399f98c2d5f39b9d7": "d99b18b789abd55a0153ab954daa1f43",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/7e27dc2fb4f46924dc76d72417c359b8321ebd": "5580bbe59e96a684b45811a8604d4663",
".git/objects/c1/b003644f91a6070887aa25f9415312c7b35adc": "b229bfd28749618d90a721955fe0abc8",
".git/objects/c1/f34d62ecc760d68d372339e97a22956d7e25d9": "4cd10e7a8242250c53bc12809a58628b",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c3/12d625aba7c518524304a4fb049bb7e2b6b45b": "6d20bb2a40daa48f4ddd63d8ed96c017",
".git/objects/c6/7b72ce268ecea5ecfaabe29683b586fd706b78": "b46dff848c8ecd378524db1491369e91",
".git/objects/c6/e74e1a8d7c1d8d699834ad79734d9ae352ffbe": "7ad33f7956909902dad243aca4345c7f",
".git/objects/cb/2b482b2d7e9bc8983b07b80aa3d5cb210b9be0": "ea025b8f3a5f1da5de2fb59aeb595dd2",
".git/objects/d0/d15ba49c978f37af203abbb2a760ee3abf305a": "eaba6702a5ba5dbc84c6fad25623cdc4",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/ffa8cbe8f6a49df7cc82bacca474527a8b0827": "8a5ca6a3a0e340a6dc75af507ec7666b",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/85233283f234de7a5e8c6770963ed758972d83": "718e6043b3947872fd48bc3033e4855f",
".git/objects/da/9a82fb4cf8e14a52128b2204f79a5ba12e8e12": "3b2f41b1591283f8111aa9312d9f5e99",
".git/objects/df/2a0454c19b1a98eb94a261d9ebf7c6fd5dc846": "a285a6cbc41b75eac39a2cd2ab6752c1",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/328bd00d37cada4861aa41f7dcbecab493738e": "d19dccf5f07a83d80008a27f76e4f10a",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e1/44af6c2d0d89ac02d93c7573145ca3f87a9aa3": "9e6c11da6cbea14bbdbd854ca0290a3b",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e5/e48738b8698c1c3fcd78b55ca5c2cbc4fbdf80": "902045617bdcf59f9f67909a4effe4dd",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/eeacb64918e865dec6845bc65d9766e775b74f": "4a6afc881e46fff653cc6ec2158886ea",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/ebabff0e71c8a003248417b4af2756a5a78643": "acb7fe7e835fc4d1a9d42ca725289d39",
".git/objects/f1/358f2b28bd267cd1b9e8f9e90702b37dc317fe": "82108702c94ca97ef198c9eeed8f1243",
".git/objects/f7/5bfc1b2ac995b7d7d5fc06e8c4a466ab31ec02": "d31ef123766c90286dfddfb26b572a73",
".git/objects/f7/eabcd33c94ac330e62c0c23e960a041b52ede9": "b6ec4b053b69eab9e8ea4e98836eeef0",
".git/objects/f8/71ae32975072f75e265a879702ef7b7fb164f1": "f32258420ca6d85b8ed5ab38a7e86de0",
".git/objects/fa/b727b96bfeae87132a5c2b4e246ad205d918d5": "6502d77a05c66e96977aa8a214a2d2b1",
".git/objects/fb/12aec037a3090a9896c59f76f237dbb49750e7": "e34ad7c6aee29182ab480039ac0c88e7",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/ORIG_HEAD": "a65410cc4ccefb884594496d8bd9aca2",
".git/refs/heads/master": "a65410cc4ccefb884594496d8bd9aca2",
".git/refs/heads/test": "bfd9be2d631b2e499a807ce9e15b9b8b",
".git/refs/remotes/origin/master": "a65410cc4ccefb884594496d8bd9aca2",
".git/refs/remotes/origin/test": "bfd9be2d631b2e499a807ce9e15b9b8b",
"assets/AssetManifest.bin": "8f58cbebad171149003958a9d69a6a7e",
"assets/AssetManifest.json": "b576b82d6b4f71b81984cfb17ce224cb",
"assets/assets/images/asset.png": "af4a6929d9248c7fb93de82a0827f2f8",
"assets/assets/images/asset2.png": "24130ed7d2f8d898fcfb61339daa184d",
"assets/assets/images/category.png": "eab25cc3fded9ac8d3a26c6355c63c71",
"assets/assets/images/delete.png": "de6afa9221f123b5846e8b6099693766",
"assets/assets/images/folder.png": "6e5054c8da7b78783f9a1c389c80443e",
"assets/assets/images/group.png": "b93c5551fdbe9e412c98c0d7fcc8d9d8",
"assets/assets/images/home.jpg": "6d587c7ae1ad89b55bd2b2ea55c3d352",
"assets/assets/images/logo.png": "b1cf45b8f3c44e9dce07cb0db52bee5d",
"assets/assets/images/tenant.png": "236650e6337a8cfce3f6e692ab807e1a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f3a8d606dbc04e100228b5b14f7859d0",
"assets/NOTICES": "b965611ffd720657fa7b01266d03c480",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3852c348e69bd97f8bec2ac9788c4c00",
"/": "3852c348e69bd97f8bec2ac9788c4c00",
"main.dart.js": "e022549541658b89ef4f9105f7867ed8",
"manifest.json": "0644252c67677ea6b0a74e41d949fc2b",
"version.json": "942fa55ff310c8ad3f83ae3c1ab0021c"};
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
