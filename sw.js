// I42FIT — يخزّن التطبيق ليعمل بدون إنترنت
const VERSION = 'i42-v4';
const SHELL = ['gym-app.html', 'manifest.json', 'icon.png'];
const EXTRA = ['https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION)
    .then(c => c.addAll(SHELL).then(() => Promise.all(EXTRA.map(u => c.add(u).catch(() => {})))))
    .then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

const put = (req, res) => { if (res && (res.ok || res.type === 'opaque')) caches.open(VERSION).then(c => c.put(req, res)); return res; };

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // بيانات الأطعمة: من الإنترنت أولاً، وإن لم يتوفر فمن آخر نسخة محفوظة
  if (url.hostname.endsWith('openfoodfacts.org')) {
    e.respondWith(fetch(req).then(r => put(req, r.clone()) && r).catch(() => caches.match(req)
      .then(r => r || new Response(JSON.stringify({ products: [] }), { headers: { 'Content-Type': 'application/json' } }))));
    return;
  }
  // صفحة التطبيق: من الإنترنت أولاً للتحديث، ثم من التخزين
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => put(req, r.clone()) && r)
      .catch(() => caches.match(req).then(r => r || caches.match('gym-app.html'))));
    return;
  }
  // الباقي (الخطوط، المكتبات، الصور، الأيقونة): من التخزين أولاً
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => put(req, r.clone()) && r)));
});
