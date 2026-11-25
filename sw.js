// I42FIT v1.1 — scoped offline cache
const VERSION = 'i42-v8';
const SHELL = ['index.html','gym-app.html','manifest.json','icon.png'];
const EXTRA = ['https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js'];
const scope = new URL(self.registration.scope);
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(async c => {
    await c.addAll(SHELL);
    await Promise.all(EXTRA.map(u => c.add(u).catch(() => {})));
  }).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => /^i42-v\d+$/.test(k) && k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
async function cacheResponse(req,res){
  if(res.ok || res.type==='opaque'){
    try { const c = await caches.open(VERSION); await c.put(req,res.clone()); } catch(e){}
  }
  return res;
}
async function match(req){return (await caches.open(VERSION)).match(req);}
self.addEventListener('fetch', e => {
  const req=e.request, url=new URL(req.url);
  if(req.method!=='GET') return;
  if(url.hostname==='world.openfoodfacts.org'){
    e.respondWith(fetch(req).then(res=>{if(res.status===404)return res;if(!res.ok)throw Error('HTTP');return cacheResponse(req,res);}).catch(async()=>await match(req)||new Response(JSON.stringify({error:'offline'}),{status:503,headers:{'Content-Type':'application/json'}})));
    return;
  }
  const local=url.origin===scope.origin && url.pathname.startsWith(scope.pathname);
  if(req.mode==='navigate' && local){
    e.respondWith(fetch(req).then(res=>cacheResponse(req,res)).catch(async()=>await match(req)||await match('gym-app.html')||Response.error()));
    return;
  }
  const allowed=local || ['fonts.googleapis.com','fonts.gstatic.com','unpkg.com'].includes(url.hostname);
  if(allowed) e.respondWith(match(req).then(hit=>hit||fetch(req).then(res=>cacheResponse(req,res))));
});
