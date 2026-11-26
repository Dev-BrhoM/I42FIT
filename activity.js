'use strict';

const labels = {
  ar: {
    activity: 'النشاط', session: 'جلسة النشاط', type: 'نوع النشاط', walk: 'مشي', run: 'جري', hike: 'تنزّه', bike: 'دراجة',
    steps: 'الخطوات', km: 'كيلومتر', elapsed: 'المدة', start: 'ابدأ التسجيل', stop: 'إنهاء وحفظ',
    ready: 'أبقِ صفحة النشاط مفتوحة والشاشة قيد التشغيل أثناء التسجيل.',
    route: 'خريطة المسار', mapEmpty: 'ابدأ التسجيل أو استورد مسارًا لعرضه هنا.', mapAlt: 'رسم المسار',
    mapFallback: 'تعذّر تحميل خريطة الشوارع. رسم المسار متاح.',
    watch: 'الساعة الذكية', watchHelp: 'استورد مسار GPX أو TCX من تطبيق ساعتك. الربط المباشر متاح للأجهزة التي تبثّ وتيرة الخطوات عبر Bluetooth RSC وفي المتصفحات الداعمة. على Apple Watch استخدم الاستيراد.',
    import: 'استيراد مسار', connect: 'ربط Bluetooth', disconnect: 'فصل الجهاز', watchSteps: 'خطوات الساعة (اختياري)',
    saveImport: 'حفظ النشاط المستورد', cancel: 'إلغاء', history: 'سجل النشاط', historyEmpty: 'ستظهر الجلسات المحفوظة هنا.',
    gpsWaiting: 'جارٍ تحديد الموقع… أبقِ الصفحة مفتوحة.', gpsWeak: 'بانتظار إشارة GPS أدقّ…',
    gpsDenied: 'إذن الموقع غير متاح. يمكنك متابعة عدّ الخطوات إذا كان حساس الحركة متاحًا.',
    gpsUnavailable: 'تعذّر تحديد الموقع حاليًا.', tracking: 'يجري تسجيل المسار. أبقِ الصفحة مفتوحة.',
    motion: 'الخطوات تقديرية من حركة الهاتف.', watchEstimate: 'الخطوات تقديرية باستخدام وتيرة جهاز Bluetooth.',
    watchEntered: 'الخطوات التي أدخلتها من الساعة.', noSteps: 'بيانات الخطوات غير متاحة.', bikeSteps: 'يُقاس مسار الدراجة ومدته.',
    saved: 'تم حفظ النشاط على هذا الجهاز.', saveFailed: 'تعذّر حفظ النشاط على هذا الجهاز. يبقى معروضًا إلى أن تغلق الصفحة.',
    invalidFile: 'تعذّرت قراءة الملف. اختر ملف GPX أو TCX صالحًا يتضمن نقاط مسار أو مسافة.',
    fileLarge: 'ملف المسار كبير. الحد الأقصى 10 ميغابايت.',
    importReady: 'المسار جاهز للمراجعة. اختر نوع النشاط ثم احفظه.',
    bluetoothUnavailable: 'هذا المتصفح لا يدعم الربط المباشر. يمكنك استيراد ملف المسار.',
    connecting: 'اختر جهازًا يبثّ وتيرة الخطوات عبر Bluetooth RSC.',
    connected: 'الجهاز متصل. ابدأ جلسة مشي أو جري لتقدير الخطوات من وتيرته.',
    disconnected: 'انقطع الاتصال بالجهاز.', connectionFailed: 'لم يكتمل الاتصال. تأكد من تشغيل بثّ Bluetooth RSC على الجهاز.',
    trackLimit: 'تم بلوغ حد نقاط المسار. احفظ الجلسة وابدأ جلسة جديدة لمتابعة رسم المسار.',
  },
  en: {
    activity: 'Activity', session: 'Activity session', type: 'Activity type', walk: 'Walk', run: 'Run', hike: 'Hike', bike: 'Cycle',
    steps: 'Steps', km: 'Kilometers', elapsed: 'Duration', start: 'Start recording', stop: 'Finish and save',
    ready: 'Keep this page open and your screen awake while recording.',
    route: 'Route map', mapEmpty: 'Start recording or import a route to see it here.', mapAlt: 'Route preview',
    mapFallback: 'The street map could not load. Your route is still visible.',
    watch: 'Smartwatch', watchHelp: 'Import a GPX or TCX route from your watch app. Direct pairing requires a device that broadcasts Bluetooth RSC cadence and a supported browser. For Apple Watch, use file import.',
    import: 'Import route', connect: 'Pair via Bluetooth', disconnect: 'Disconnect', watchSteps: 'Watch steps (optional)',
    saveImport: 'Save imported activity', cancel: 'Cancel', history: 'Activity history', historyEmpty: 'Saved sessions will appear here.',
    gpsWaiting: 'Finding your location… Keep this page open.', gpsWeak: 'Waiting for a stronger GPS signal…',
    gpsDenied: 'Location permission is unavailable. Step counting can continue if motion sensing is available.',
    gpsUnavailable: 'Location is currently unavailable.', tracking: 'Recording your route. Keep this page open.',
    motion: 'Steps are estimated from phone motion.', watchEstimate: 'Steps are estimated using Bluetooth cadence.',
    watchEntered: 'Steps entered from your watch.', noSteps: 'Step data is unavailable.', bikeSteps: 'Cycling records the route and duration.',
    saved: 'Activity saved on this device.', saveFailed: 'Could not save on this device. The activity stays visible until you close this page.',
    invalidFile: 'Could not read the file. Choose a valid GPX or TCX file with route points or distance.',
    fileLarge: 'The route file exceeds the 10 MB limit.',
    importReady: 'Review the route, choose an activity type, then save it.',
    bluetoothUnavailable: 'Direct pairing is unavailable in this browser. You can still import a route.',
    connecting: 'Choose a device broadcasting Bluetooth RSC cadence.',
    connected: 'Device connected. Start a walk or run to estimate steps from its cadence.',
    disconnected: 'Device disconnected.', connectionFailed: 'Pairing did not finish. Check that the device is broadcasting Bluetooth RSC.',
    trackLimit: 'Route point limit reached. Save and start a new session to continue mapping.',
  },
};

const $ = id => document.getElementById(id);
const storageKey = 'i42-activity-sessions';
const maxPoints = 6000;
const activityKinds = ['walk', 'run', 'hike', 'bike'];
const read = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
};
const lang = read('lang', 'ar') === 'en' ? 'en' : 'ar';
const t = key => labels[lang][key];
const formatNumber = new Intl.NumberFormat(lang);
const formatKm = new Intl.NumberFormat(lang, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const formatDate = new Intl.DateTimeFormat(lang, { dateStyle: 'medium', timeStyle: 'short' });

document.documentElement.lang = lang;
document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
const theme = read('theme', null);
if (theme === 'light' || theme === 'dark') document.documentElement.dataset.theme = theme;
document.title = t('activity') + ' | I42FIT';
document.querySelectorAll('[data-label]').forEach(el => el.textContent = t(el.dataset.label));
$('route-preview').setAttribute('aria-label', t('mapAlt'));

let current = null;
let pendingImport = null;
let selected = null;
let watchDevice = null;
let watchMeasurement = null;
let cadenceSample = null;
let timer = null;
let fixId = null;
let lastFix = null;
let lastSignal = null;
let pointCount = 0;
let motionSample = null;
let map = null;
let mapLayer = null;
let mapLibrary = null;
let mapFailed = false;

function distanceBetween(a, b) {
  const rad = Math.PI / 180;
  const lat = (b[0] - a[0]) * rad;
  const lon = (b[1] - a[1]) * rad;
  const h = Math.sin(lat / 2) ** 2 + Math.cos(a[0] * rad) * Math.cos(b[0] * rad) * Math.sin(lon / 2) ** 2;
  return 12742000 * Math.asin(Math.sqrt(Math.min(1, h)));
}

function validPoint(point) {
  return Array.isArray(point) && point.length === 2 && point.every(Number.isFinite) &&
    Math.abs(point[0]) <= 90 && Math.abs(point[1]) <= 180;
}

function savedSessions() {
  const saved = read(storageKey, []);
  if (!Array.isArray(saved)) return [];
  return saved.filter(s => s && typeof s.id === 'string' && activityKinds.includes(s.kind) &&
    Number.isFinite(s.started) && Math.abs(s.started) <= 8.64e15 &&
    Number.isFinite(s.seconds) && s.seconds >= 0 && Number.isFinite(s.meters) && s.meters >= 0 &&
    (s.steps === null || Number.isFinite(s.steps) && s.steps >= 0) &&
    Array.isArray(s.paths) && s.paths.every(path => Array.isArray(path) && path.every(validPoint)));
}

function elapsed(seconds) {
  const minutes = String(Math.floor(seconds / 60) % 60).padStart(2, '0');
  const remainder = String(Math.floor(seconds) % 60).padStart(2, '0');
  const hours = Math.floor(seconds / 3600);
  return hours ? hours + ':' + minutes + ':' + remainder : minutes + ':' + remainder;
}

function showStats(session) {
  $('steps').textContent = session?.steps == null ? '—' : formatNumber.format(Math.round(session.steps));
  $('distance').textContent = formatKm.format((session?.meters ?? 0) / 1000);
  const seconds = current ? (Date.now() - current.started) / 1000 : session?.seconds ?? 0;
  $('elapsed').textContent = elapsed(Math.max(0, seconds));
  $('source').hidden = !session;
  if (session) $('source').textContent = t(labels[lang][session.source] ? session.source : 'noSteps');
}

function drawPreview(paths) {
  const canvas = $('route-preview');
  const points = paths.flat();
  const [width, height] = [canvas.clientWidth, canvas.clientHeight];
  if (!width || !height) return;
  const scale = Math.min(devicePixelRatio || 1, 3);
  canvas.width = width * scale;
  canvas.height = height * scale;
  const ctx = canvas.getContext('2d');
  ctx.scale(scale, scale);
  const origin = points[0];
  const centerLatitude = Math.max(.01, Math.cos(origin[0] * Math.PI / 180));
  const projected = paths.filter(path => path.length).map(path => path.map(([lat, lon]) => [
    (((lon - origin[1]) + 540) % 360 - 180) * centerLatitude, origin[0] - lat,
  ]));
  const flat = projected.flat();
  const xs = flat.map(point => point[0]);
  const ys = flat.map(point => point[1]);
  const [minX, maxX] = [Math.min(...xs), Math.max(...xs)];
  const [minY, maxY] = [Math.min(...ys), Math.max(...ys)];
  const fit = Math.min((width - 40) / Math.max(maxX - minX, .00001), (height - 40) / Math.max(maxY - minY, .00001));
  const project = ([x, y]) => [width / 2 + (x - (minX + maxX) / 2) * fit, height / 2 + (y - (minY + maxY) / 2) * fit];
  ctx.strokeStyle = ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
  ctx.lineWidth = 4;
  ctx.lineJoin = ctx.lineCap = 'round';
  projected.forEach(path => {
    ctx.beginPath();
    path.forEach((point, index) => index ? ctx.lineTo(...project(point)) : ctx.moveTo(...project(point)));
    ctx.stroke();
    const [x, y] = project(path.at(-1));
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
  });
}

function loadMap() {
  if (mapLibrary) return mapLibrary;
  const base = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet';
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = base + '.css';
  css.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
  css.crossOrigin = 'anonymous';
  const js = document.createElement('script');
  js.src = base + '.js';
  js.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
  js.crossOrigin = 'anonymous';
  const loaded = element => new Promise((resolve, reject) => {
    element.onload = resolve;
    element.onerror = reject;
    document.head.append(element);
  });
  mapLibrary = Promise.all([loaded(css), loaded(js)]).then(() => {
    $('map').hidden = false;
    map = L.map('map', { scrollWheelZoom: false });
    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    });
    mapLayer = L.layerGroup().addTo(map);
    tiles.on('tileerror', () => {
      $('map-status').textContent = t('mapFallback');
      $('map-status').hidden = false;
    });
    tiles.on('tileload', () => { $('map-status').hidden = true; });
    renderRoute();
    tiles.addTo(map);
  }).catch(() => {
    mapFailed = true;
    map?.remove();
    map = null;
    renderRoute();
  });
  return mapLibrary;
}

function renderRoute() {
  const paths = (current ?? pendingImport ?? selected)?.paths ?? [];
  const points = paths.flat();
  $('map-empty').hidden = Boolean(points.length);
  $('map').hidden = !map || !points.length;
  $('route-preview').hidden = Boolean(map) || !points.length;
  if (!points.length) {
    $('map-status').hidden = true;
    return;
  }
  if (!map) {
    drawPreview(paths);
    if (mapFailed) {
      $('map-status').textContent = t('mapFallback');
      $('map-status').hidden = false;
    } else {
      loadMap();
    }
    return;
  }
  map.invalidateSize();
  mapLayer.clearLayers();
  L.polyline(paths, { color: '#087cb9', weight: 5 }).addTo(mapLayer);
  L.circleMarker(points.at(-1), { radius: 6, color: '#fff', fillColor: '#086ba8', fillOpacity: 1 }).addTo(mapLayer);
  if (points.length === 1) map.setView(points[0], 16);
  else map.fitBounds(points, { maxZoom: 17, padding: [22, 22] });
}

function renderHistory() {
  const sessions = savedSessions();
  $('history-empty').hidden = Boolean(sessions.length);
  $('sessions').replaceChildren(...sessions.map(session => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.type = 'button';
    button.disabled = Boolean(current || pendingImport);
    if (selected?.id === session.id) button.setAttribute('aria-current', 'true');
    const name = document.createElement('strong');
    name.textContent = t(session.kind) + ' · ' + formatKm.format(session.meters / 1000) + ' ' + t('km');
    const date = document.createElement('small');
    date.textContent = formatDate.format(session.started);
    button.append(name, date);
    button.onclick = () => {
      selected = session;
      updateView();
      const active = $('sessions').querySelector('[aria-current="true"]');
      active?.focus({ preventScroll: true });
    };
    li.append(button);
    return li;
  }));
}

function save(session, statusId) {
  selected = session;
  try {
    const sessions = [session, ...savedSessions().filter(s => s.id !== session.id)];
    localStorage.setItem(storageKey, JSON.stringify(sessions));
    $(statusId).textContent = t('saved');
  } catch {
    $(statusId).textContent = t('saveFailed');
  }
  updateView();
}

function updateView() {
  $('start').hidden = Boolean(current);
  if (selected && !current && !pendingImport) $('kind').value = selected.kind;
  $('start').disabled = Boolean(pendingImport);
  $('stop').hidden = !current;
  $('kind').disabled = Boolean(current);
  $('import').disabled = Boolean(current || pendingImport);
  $('import-details').hidden = !pendingImport;
  showStats(current ?? pendingImport ?? selected);
  renderRoute();
  renderHistory();
}

function recordPosition(session, position) {
  if (current !== session) return;
  const { latitude, longitude, accuracy } = position.coords;
  if (!validPoint([latitude, longitude]) || !Number.isFinite(accuracy) || accuracy < 0 || accuracy > 35) {
    $('tracking-status').textContent = t('gpsWeak');
    return;
  }
  if (pointCount >= maxPoints) {
    $('tracking-status').textContent = t('trackLimit');
    return;
  }
  const point = [Number(latitude.toFixed(6)), Number(longitude.toFixed(6))];
  const deltaTime = lastFix ? (position.timestamp - lastFix.time) / 1000 : 0;
  if (!Number.isFinite(position.timestamp) || (lastSignal !== null && position.timestamp <= lastSignal)) return;
  const gap = lastSignal === null || (position.timestamp - lastSignal) / 1000 > 60;
  lastSignal = position.timestamp;
  if (gap) {
    session.paths.push([point]);
  } else {
    const meters = distanceBetween(lastFix.point, point);
    const jitterLimit = Math.max(4, Math.min(16, (accuracy + lastFix.accuracy) * .45));
    if (meters < jitterLimit || meters / deltaTime > (session.kind === 'bike' ? 45 : 16)) return;
    session.paths.at(-1).push(point);
    session.meters += meters;
  }
  lastFix = { point, accuracy, time: position.timestamp };
  pointCount++;
  $('tracking-status').textContent = t('tracking');
  showStats(session);
  renderRoute();
}

function processMotion(event) {
  if (!current || current.kind === 'bike' || current.source === 'watchEstimate') return;
  const a = event.accelerationIncludingGravity;
  if (!a || ![a.x, a.y, a.z].every(Number.isFinite)) return;
  const magnitude = Math.hypot(a.x, a.y, a.z);
  const now = performance.now();
  if (!motionSample) motionSample = { baseline: magnitude, above: false, stepTime: now - 400 };
  motionSample.baseline += (magnitude - motionSample.baseline) * .12;
  const delta = magnitude - motionSample.baseline;
  if (delta > 1.65 && !motionSample.above) {
    motionSample.above = true;
    if (now - motionSample.stepTime >= (current.kind === 'run' ? 235 : 300)) {
      current.steps = (current.steps ?? 0) + 1;
      motionSample.stepTime = now;
    }
  }
  if (delta < .45) motionSample.above = false;
  current.steps ??= 0;
  current.source = 'motion';
}

async function enableMotion(session) {
  if (session.kind === 'bike' || !window.DeviceMotionEvent) return;
  try {
    if (typeof DeviceMotionEvent.requestPermission === 'function' &&
      await DeviceMotionEvent.requestPermission() !== 'granted') return;
    if (current === session) window.addEventListener('devicemotion', processMotion);
  } catch {
    // GPS recording can continue independently.
  }
}

function startTracking() {
  if (current || pendingImport) return;
  const kind = $('kind').value;
  current = { id: crypto.randomUUID(), started: Date.now(), seconds: 0, kind, meters: 0, steps: null, paths: [],
    source: kind === 'bike' ? 'bikeSteps' : 'noSteps' };
  const session = current;
  pointCount = 0;
  lastFix = lastSignal = motionSample = cadenceSample = null;
  enableMotion(session);
  $('tracking-status').textContent = t('gpsWaiting');
  if (navigator.geolocation) {
    fixId = navigator.geolocation.watchPosition(position => recordPosition(session, position), error => {
      if (current === session) $('tracking-status').textContent = t(error.code === 1 ? 'gpsDenied' : 'gpsUnavailable');
    }, { enableHighAccuracy: true, maximumAge: 0, timeout: 20000 });
  } else {
    $('tracking-status').textContent = t('gpsUnavailable');
  }
  timer = setInterval(() => showStats(current), 500);
  updateView();
  $('stop').focus({ preventScroll: true });
}

function finishTracking() {
  if (!current) return;
  const session = current;
  current = null;
  if (fixId !== null) navigator.geolocation.clearWatch(fixId);
  fixId = null;
  clearInterval(timer);
  window.removeEventListener('devicemotion', processMotion);
  session.seconds = Math.max(0, (Date.now() - session.started) / 1000);
  if (session.steps !== null) session.steps = Math.round(session.steps);
  save(session, 'tracking-status');
  if (!document.hidden) $('start').focus({ preventScroll: true });
}

const descendants = (element, name) => Array.from(element.getElementsByTagNameNS('*', name));
const childText = (element, name) => Array.from(element.children).find(child => child.localName === name)?.textContent.trim();

function parseRoute(xml) {
  const root = new DOMParser().parseFromString(xml, 'application/xml').documentElement;
  const gpx = root.localName === 'gpx';
  const tcx = root.localName === 'TrainingCenterDatabase';
  if (!gpx && !tcx) throw new Error('format');
  const source = tcx ? descendants(root, 'Activity')[0] ?? root : root;
  const segments = gpx
    ? [...descendants(source, 'trkseg'), ...descendants(source, 'rte')]
    : descendants(source, 'Track');

  let first = Infinity;
  let last = -Infinity;
  let routeMeters = 0;
  const paths = segments.map(segment => {
    const pointType = gpx ? (segment.localName === 'rte' ? 'rtept' : 'trkpt') : 'Trackpoint';
    const path = [];
    for (const item of descendants(segment, pointType)) {
      const timestamp = Date.parse(childText(item, gpx ? 'time' : 'Time'));
      if (Number.isFinite(timestamp)) {
        first = Math.min(first, timestamp);
        last = Math.max(last, timestamp);
      }
      const position = gpx ? item : descendants(item, 'Position')[0];
      if (!position) continue;
      const lat = gpx ? item.getAttribute('lat') : childText(position, 'LatitudeDegrees');
      const lon = gpx ? item.getAttribute('lon') : childText(position, 'LongitudeDegrees');
      if (!lat?.trim() || !lon?.trim()) continue;
      const point = [Number(lat), Number(lon)];
      if (!validPoint(point)) continue;
      if (path.length) routeMeters += distanceBetween(path.at(-1), point);
      path.push(point.map(value => Number(value.toFixed(6))));
    }
    return path;
  }).filter(path => path.length);

  const laps = tcx ? descendants(source, 'Lap') : [];
  const lapDistance = laps.map(lap => Number(childText(lap, 'DistanceMeters')));
  const lapTime = laps.map(lap => Number(childText(lap, 'TotalTimeSeconds')));
  const sum = values => {
    const total = values.reduce((result, value) => result + value, 0);
    return Number.isFinite(total) && values.every(value => Number.isFinite(value) && value >= 0) ? total : 0;
  };
  const meters = sum(lapDistance) || routeMeters;
  if (!paths.length && !meters) throw new Error('empty');
  const totalPoints = paths.reduce((total, path) => total + path.length, 0);
  const drawingPaths = paths.slice(0, maxPoints);
  const drawingPoints = drawingPaths.reduce((total, path) => total + path.length, 0);
  const reducedPaths = totalPoints <= maxPoints ? paths : drawingPaths.map(path => {
    const pointBudget = 1 + Math.floor((path.length - 1) * (maxPoints - drawingPaths.length) /
      Math.max(1, drawingPoints - drawingPaths.length));
    return pointBudget === 1 ? [path[0]] : Array.from({ length: pointBudget }, (_, i) =>
      path[Math.round(i * (path.length - 1) / (pointBudget - 1))]);
  });
  const tcxStart = Date.parse(laps[0]?.getAttribute('StartTime') ?? '');
  const sport = (source.getAttribute('Sport') ?? '').toLowerCase();
  const kind = { walking: 'walk', running: 'run', biking: 'bike', cycling: 'bike', hiking: 'hike' }[sport];
  return {
    id: crypto.randomUUID(), kind,
    started: Number.isFinite(tcxStart) ? tcxStart : Number.isFinite(first) ? first : Date.now(),
    seconds: sum(lapTime) || (Number.isFinite(first) ? (last - first) / 1000 : 0),
    meters, steps: null, paths: reducedPaths, source: 'noSteps',
  };
}

async function readRoute(file) {
  if (!file || current || pendingImport) return;
  if (file.size > 10 * 1024 * 1024) {
    $('watch-status').textContent = t('fileLarge');
    return;
  }
  try {
    const session = parseRoute(await file.text());
    if (current || pendingImport) return;
    pendingImport = session;
    if (session.kind) $('kind').value = session.kind;
    $('watch-steps').value = '';
    $('watch-status').textContent = t('importReady');
    updateView();
    $('watch-steps').focus({ preventScroll: true });
  } catch {
    $('watch-status').textContent = t('invalidFile');
  }
}

function receiveCadence(event) {
  if (!current || current.kind === 'bike') return;
  const value = event.target.value;
  if (value.byteLength < 4) return;
  const time = performance.now();
  const rate = value.getUint8(3);
  const previous = cadenceSample;
  cadenceSample = { rate, time };
  if (current.source !== 'watchEstimate') {
    current.source = 'watchEstimate';
    current.steps ??= 0;
  }
  const interval = previous ? (time - previous.time) / 1000 : 0;
  if (interval > 0 && interval <= 5) current.steps += (previous.rate + rate) * interval / 120;
}

function disconnected() {
  watchDevice?.removeEventListener('gattserverdisconnected', disconnected);
  watchMeasurement?.removeEventListener('characteristicvaluechanged', receiveCadence);
  watchDevice = watchMeasurement = null;
  cadenceSample = null;
  $('connect').textContent = t('connect');
  $('watch-status').textContent = t('disconnected');
}

async function connectWatch() {
  if (watchDevice) {
    watchDevice.gatt.disconnect();
    disconnected();
    return;
  }
  if (!navigator.bluetooth) {
    $('watch-status').textContent = t('bluetoothUnavailable');
    return;
  }
  $('connect').disabled = true;
  $('watch-status').textContent = t('connecting');
  let device;
  try {
    device = await navigator.bluetooth.requestDevice({ filters: [{ services: [0x1814] }] });
    const server = await device.gatt.connect();
    const service = await server.getPrimaryService(0x1814);
    const measurement = await service.getCharacteristic(0x2a53);
    await measurement.startNotifications();
    measurement.addEventListener('characteristicvaluechanged', receiveCadence);
    watchDevice = device;
    watchMeasurement = measurement;
    device.addEventListener('gattserverdisconnected', disconnected);
    $('connect').textContent = t('disconnect');
    $('watch-status').textContent = t('connected');
  } catch {
    device?.gatt.disconnect();
    $('watch-status').textContent = t('connectionFailed');
  } finally {
    $('connect').disabled = false;
  }
}

$('start').onclick = startTracking;
$('stop').onclick = finishTracking;
$('connect').onclick = connectWatch;
$('import').onclick = () => $('route-file').click();
$('route-file').onchange = event => {
  readRoute(event.target.files[0]);
  event.target.value = '';
};
$('import-details').onsubmit = event => {
  event.preventDefault();
  if (!pendingImport) return;
  const session = pendingImport;
  pendingImport = null;
  session.kind = $('kind').value;
  const input = $('watch-steps');
  if (input.value !== '') {
    session.steps = input.valueAsNumber;
    session.source = 'watchEntered';
  }
  save(session, 'watch-status');
};
$('cancel-import').onclick = () => {
  pendingImport = null;
  $('watch-status').textContent = '';
  updateView();
  $('import').focus();
};

window.addEventListener('resize', renderRoute);
window.addEventListener('pagehide', () => {
  finishTracking();
  watchDevice?.gatt.disconnect();
});
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
updateView();
