'use strict';

const labels = {
  ar: {
    padel: 'بادل', strength: 'حديد', theme: 'الوضع', light: 'نهاري', dark: 'ليلي', offline: 'بدون إنترنت',
    useGPS: 'تسجيل المسار والمسافة بالـGPS', trackingNoGPS: 'الجلسة جارية. تسجيل المسافة والمسار متوقف.',
    distanceChart: 'المسافة مع الوقت', distanceEmpty: 'يظهر المخطط بعد تسجيل مسافة بالـGPS.', distanceHelp: 'حرّك المؤشر لعرض نقطة المسافة على الخريطة.',

    workouts: 'التمارين', nutrition: 'التغذية', navigation: 'التنقل الرئيسي',
    googleEndpoint: 'افتح نقطة نهاية المسار في خرائط Google',
    pace: 'دقيقة / كم', speed: 'كم / ساعة', heartLive: 'النبض (نبضة/د)', heartAverage: 'متوسط النبض',
    heartMax: 'أقصى نبض', cadence: 'خطوة / دقيقة', splits: 'تقسيمات الكيلومتر', splitTime: 'زمن كل كم',
    sessionSummary: 'ملخص النشاط', sensorHelp: 'فعّل بث النبض أو وتيرة الخطوات من الساعة ثم ابحث عنها هنا. يدعم التطبيق أجهزة Bluetooth LE التي تبثّ HR أو RSC. لساعة Apple Watch يمكنك استيراد المسار.',
    sensorReady: 'جاهز للبحث عن ساعة أو حساس.', sensorStarting: 'جارٍ تهيئة Bluetooth…',
    sensorScanning: 'جارٍ البحث عن الأجهزة القريبة…', sensorChoose: 'اختر الجهاز الذي تريد ربطه.',
    sensorConnecting: 'جارٍ ربط الجهاز…', sensorConnected: 'متصل', sensorDisconnected: 'انقطع اتصال الجهاز.',
    sensorNone: 'لم يُعثر على جهاز متوافق. فعّل البث من الساعة أو الحساس وأعد البحث.',
    sensorFailed: 'تعذّر ربط الجهاز أو قراءة بياناته.', sensorOff: 'شغّل Bluetooth في الآيفون.',
    sensorDenied: 'اسمح لـ I42FIT باستخدام Bluetooth من الإعدادات.', sensorUnsupported: 'Bluetooth LE غير متاح على هذا الجهاز.',
    sensorUnnamed: 'حساس Bluetooth', searchWatch: 'البحث عن ساعة أو حساس',

    nativeReady: 'يستمر تسجيل النشاط عند قفل الشاشة. ارجع إلى الصفحة لإنهاء الجلسة.',
    nativeTracking: 'يجري تسجيل النشاط، بما في ذلك أثناء قفل الشاشة.',
    nativeSaving: 'جارٍ استرداد خطوات الجلسة وحفظها…',
    nativeInterrupted: 'استُعيد الجزء المحفوظ من جلسة انقطع تسجيلها.',
    nativeSaveFailed: 'تعذّر حفظ بيانات الجلسة على الجهاز.',
    nativeSteps: 'الخطوات من عدّاد الحركة في الآيفون.',
    nativeLocationDenied: 'اسمح لـ I42FIT باستخدام الموقع أثناء استخدام التطبيق من إعدادات الآيفون.',

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
    padel: 'Padel', strength: 'Strength training', theme: 'Theme', light: 'Light', dark: 'Dark', offline: 'Offline',
    useGPS: 'Record route and distance with GPS', trackingNoGPS: 'Session in progress. Distance and route recording are off.',
    distanceChart: 'Distance over time', distanceEmpty: 'The chart appears after recording GPS distance.', distanceHelp: 'Move the slider to show that point on the map.',

    workouts: 'Workouts', nutrition: 'Nutrition', navigation: 'Main navigation',
    googleEndpoint: 'Open route endpoint in Google Maps',
    pace: 'Min / km', speed: 'Km / h', heartLive: 'Heart rate (bpm)', heartAverage: 'Avg. heart rate',
    heartMax: 'Peak heart rate', cadence: 'Steps / min', splits: 'Kilometer splits', splitTime: 'Time per km',
    sessionSummary: 'Activity summary', sensorHelp: 'Enable heart rate or cadence broadcasting on your device, then scan. I42FIT supports Bluetooth LE devices broadcasting HR or RSC. For Apple Watch, you can import a route.',
    sensorReady: 'Ready to scan for a watch or sensor.', sensorStarting: 'Starting Bluetooth…',
    sensorScanning: 'Searching for nearby devices…', sensorChoose: 'Select the device to connect.',
    sensorConnecting: 'Connecting…', sensorConnected: 'Connected', sensorDisconnected: 'Device disconnected.',
    sensorNone: 'No compatible device found. Enable broadcasting on the watch or sensor, then try again.',
    sensorFailed: 'Could not connect or read sensor data.', sensorOff: 'Turn on Bluetooth on your iPhone.',
    sensorDenied: 'Allow I42FIT to use Bluetooth in Settings.', sensorUnsupported: 'Bluetooth LE is unavailable on this device.',
    sensorUnnamed: 'Bluetooth sensor', searchWatch: 'Find a watch or sensor',

    nativeReady: 'Recording continues when the screen locks. Return here to finish the session.',
    nativeTracking: 'Recording continues while the screen is locked.',
    nativeSaving: 'Retrieving and saving session steps…',
    nativeInterrupted: 'Recovered the saved portion of an interrupted workout.',
    nativeSaveFailed: 'Could not save session data on this device.',
    nativeSteps: 'Steps come from the iPhone pedometer.',
    nativeLocationDenied: 'Allow I42FIT to access location while using the app in iPhone Settings.',

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
const nativeTracker = window.webkit?.messageHandlers?.i42Workout;
let nativeSaving = false;
let nativeSensorState = {};
const storageKey = 'i42-activity-sessions';
const maxPoints = 6000;
const kindOptions = [...$('kind').querySelectorAll('input[type="radio"]')];
const activityKinds = kindOptions.map(option => option.value);
const chosenKind = () => kindOptions.find(option => option.checked).value;
function selectKind(kind) {
  const option = kindOptions.find(choice => choice.value === kind);
  if (option) option.checked = true;
}
const read = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
};
let lang = read('lang', 'ar') === 'en' ? 'en' : 'ar';
const t = key => labels[lang][key];
let formatNumber;
let formatKm;
let formatDate;
const themePreference = matchMedia('(prefers-color-scheme: dark)');
const theme = read('theme', null);
if (theme === 'light' || theme === 'dark') document.documentElement.dataset.theme = theme;

function paintTheme() {
  const active = document.documentElement.dataset.theme || (themePreference.matches ? 'dark' : 'light');
  document.querySelectorAll('#themeSeg button').forEach(button => {
    const selected = button.dataset.themeSet === active;
    button.classList.toggle('on', selected);
    button.setAttribute('aria-pressed', selected);
  });
}

function applyLanguage() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  formatNumber = new Intl.NumberFormat(lang);
  formatKm = new Intl.NumberFormat(lang, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  formatDate = new Intl.DateTimeFormat(lang, { dateStyle: 'medium', timeStyle: 'short' });
  document.title = t('activity') + ' | I42FIT';
  document.querySelectorAll('[data-label], #app-header [data-i18n]').forEach(element => {
    element.textContent = t(element.dataset.label ?? element.dataset.i18n);
  });
  $('app-navigation').setAttribute('aria-label', t('navigation'));
  $('route-preview').setAttribute('aria-label', t('mapAlt'));
  $('distance-scrubber').setAttribute('aria-label', t('distanceChart'));
  $('themeSeg').setAttribute('aria-label', t('theme'));
  document.querySelectorAll('#themeSeg button').forEach(button => {
    button.title = t(button.dataset.themeSet);
    button.setAttribute('aria-label', button.title);
  });
  document.querySelectorAll('#langSeg button').forEach(button => {
    const selected = button.dataset.lang === lang;
    button.classList.toggle('on', selected);
    button.setAttribute('aria-pressed', selected);
  });
}

function storePreference(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
}
applyLanguage();
paintTheme();

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
let chartSession = null;
let chartIndex = null;
let chartSamples = [];
let chartMarker = null;

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
  const km = (session?.meters ?? 0) / 1000;
  const cycling = session?.kind === 'bike' || !session && chosenKind() === 'bike';
  $('pace-label').textContent = t(cycling ? 'speed' : 'pace');
  $('pace').textContent = km >= .02 && seconds > 0
    ? (cycling ? formatKm.format(km * 3600 / seconds) : elapsed(seconds / km)) : '—';

  const rate = current
    ? (Date.now() - (current.heartRateAt ?? 0) <= 15000 ? current.heartRate : null)
    : session?.averageHeartRate;
  $('heart').textContent = Number.isFinite(rate) ? formatNumber.format(rate) : '—';
  $('heart-label').textContent = t(current || !session ? 'heartLive' : 'heartAverage');
  $('cadence').textContent = current && Number.isFinite(nativeSensorState.cadence) &&
    Date.now() - (nativeSensorState.cadenceAt ?? 0) <= 15000 ? formatNumber.format(nativeSensorState.cadence) : '—';
  $('source').hidden = !session;
  if (session) {
    const peak = !current && Number.isFinite(session.maxHeartRate)
      ? ' · ' + t('heartMax') + ' ' + formatNumber.format(session.maxHeartRate) : '';
    $('source').textContent = t(labels[lang][session.source] ? session.source : 'noSteps') + peak;
  }
}

function renderSplits(session) {
  const times = Array.isArray(session?.splits)
    ? session.splits.filter(seconds => Number.isFinite(seconds) && seconds >= 0).slice(0, 500) : [];
  $('split-section').hidden = !times.length;
  const longest = Math.max(1, ...times);
  $('splits').replaceChildren(...times.map((seconds, i) => {
    const row = document.createElement('li');
    const lap = document.createElement('span');
    lap.textContent = formatNumber.format(i + 1);
    const bar = document.createElement('span');
    bar.className = 'split-bar';
    bar.setAttribute('aria-hidden', 'true');
    bar.style.inlineSize = Math.max(5, seconds / longest * 100) + '%';
    const time = document.createElement('strong');
    time.textContent = elapsed(seconds);
    row.append(lap, bar, time);
    return row;
  }));
}

function renderDistance(session) {
  if (chartSession !== session?.id) {
    chartSession = session?.id;
    chartIndex = null;
  }
  chartSamples = Array.isArray(session?.distanceSamples)
    ? session.distanceSamples.filter(sample => Array.isArray(sample) && sample.length === 4 &&
        sample.every(Number.isFinite) && sample[0] >= 0 && sample[1] >= 0 && validPoint(sample.slice(2)))
    : [];
  const hasDistance = chartSamples.length >= 2 && chartSamples.at(-1)[1] > 0;
  $('distance-data').hidden = !hasDistance;
  $('distance-empty').hidden = hasDistance;
  if (!hasDistance) {
    $('distance-sample').textContent = '';
    return;
  }
  const scrubber = $('distance-scrubber');
  scrubber.max = String(chartSamples.length - 1);
  scrubber.value = String(Math.min(chartIndex ?? chartSamples.length - 1, chartSamples.length - 1));
  drawDistanceChart();
}

function drawDistanceChart() {
  if ($('distance-data').hidden) return;
  const sample = chartSamples[Number($('distance-scrubber').value)];
  if (!sample) return;
  const caption = elapsed(sample[0]) + ' · ' + formatKm.format(sample[1] / 1000) + ' ' + t('km');
  $('distance-sample').textContent = caption;
  $('distance-scrubber').setAttribute('aria-valuetext', caption);

  const canvas = $('distance-chart');
  const [width, height] = [canvas.clientWidth, canvas.clientHeight];
  if (!width || !height) return;
  const scale = Math.min(devicePixelRatio || 1, 3);
  canvas.width = width * scale;
  canvas.height = height * scale;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const styles = getComputedStyle(document.documentElement);
  const accent = styles.getPropertyValue('--accent').trim();
  const [endSeconds, endMeters] = chartSamples.at(-1);
  const left = 12;
  const baseline = height - 12;
  const x = seconds => left + seconds / Math.max(1, endSeconds) * (width - left * 2);
  const y = meters => baseline - meters / Math.max(1, endMeters) * (height - 24);
  ctx.scale(scale, scale);
  ctx.strokeStyle = styles.getPropertyValue('--line').trim();
  [0, .5, 1].forEach(tick => {
    ctx.beginPath();
    ctx.moveTo(left, y(endMeters * tick));
    ctx.lineTo(width - left, y(endMeters * tick));
    ctx.stroke();
  });
  ctx.beginPath();
  ctx.moveTo(left, baseline);
  chartSamples.forEach(([seconds, meters]) => ctx.lineTo(x(seconds), y(meters)));
  ctx.lineWidth = 3;
  ctx.lineJoin = 'round';
  ctx.strokeStyle = accent;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x(sample[0]), y(sample[1]), 5, 0, Math.PI * 2);
  ctx.fillStyle = accent;
  ctx.fill();
}

function syncChartMarker() {
  const place = chartIndex === null ? null : chartSamples[chartIndex]?.slice(2);
  if (!map) return;
  if (!place) {
    chartMarker?.remove();
    chartMarker = null;
    return;
  }
  if (chartMarker) chartMarker.setLatLng(place);
  else chartMarker = L.circleMarker(place, {
    radius: 8, color: '#fff', weight: 2, fillColor: '#c65017', fillOpacity: 1,
  }).addTo(map);
  chartMarker.bringToFront();
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
  const place = chartIndex === null ? null : chartSamples[chartIndex]?.slice(2);
  if (place) {
    const [lat, lon] = place;
    const [x, y] = project([(((lon - origin[1]) + 540) % 360 - 180) * centerLatitude, origin[0] - lat]);
    ctx.beginPath();
    ctx.arc(x, y, 7, 0, Math.PI * 2);
    ctx.fillStyle = '#c65017';
    ctx.fill();
  }
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
  const mapLink = $('google-endpoint');
  const endpoint = points.at(-1);
  mapLink.hidden = !endpoint || Boolean(current);
  if (!mapLink.hidden) {
    const url = new URL('https://www.google.com/maps/search/');
    url.searchParams.set('api', '1');
    url.searchParams.set('query', endpoint.join(','));
    mapLink.href = url.href;
  }
  $('map-empty').hidden = Boolean(points.length);
  $('map').hidden = !map || !points.length;
  $('route-preview').hidden = Boolean(map) || !points.length;
  if (!points.length) {
    syncChartMarker();
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
  if (points.length > 1) L.circleMarker(points[0], { radius: 5, color: '#fff', fillColor: '#137c5c', fillOpacity: 1 }).addTo(mapLayer);
  L.circleMarker(points.at(-1), { radius: 6, color: '#fff', fillColor: '#086ba8', fillOpacity: 1 }).addTo(mapLayer);
  if (points.length === 1) map.setView(points[0], 16);
  else map.fitBounds(points, { maxZoom: 17, padding: [22, 22] });
  syncChartMarker();
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
      selectKind(session.kind);
      updateView();
      $('session-title').focus();
    };
    li.append(button);
    return li;
  }));
}

function save(session, statusId) {
  selected = session;
  let persisted = false;
  try {
    const sessions = [session, ...savedSessions().filter(s => s.id !== session.id)];
    localStorage.setItem(storageKey, JSON.stringify(sessions));
    $(statusId).textContent = t('saved');
    persisted = true;
  } catch {
    $(statusId).textContent = t('saveFailed');
  }
  updateView();
  return persisted;
}

function updateView() {
  $('session-title').textContent = t(selected && !current && !pendingImport ? 'sessionSummary' : 'session');
  $('start').hidden = Boolean(current);
  if (current) selectKind(current.kind);
  $('start').disabled = Boolean(pendingImport);
  $('stop').hidden = !current;
  $('stop').disabled = nativeSaving;
  $('kind').disabled = Boolean(current);
  $('use-gps').disabled = Boolean(current);
  $('import').disabled = Boolean(current || pendingImport);
  $('import-details').hidden = !pendingImport;
  const session = current ?? pendingImport ?? selected;
  showStats(session);
  renderSplits(session);
  renderDistance(session);
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
  session.distanceSamples.push([Math.max(0, Math.round((position.timestamp - session.started) / 1000)),
    Math.round(session.meters), ...point]);
  lastFix = { point, accuracy, time: position.timestamp };
  pointCount++;
  $('tracking-status').textContent = t('tracking');
  showStats(session);
  renderDistance(session);
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
  const kind = chosenKind();
  const useGPS = $('use-gps').checked;
  if (nativeTracker) {
    nativeTracker.postMessage({ action: 'start', kind, gps: useGPS ? 'on' : 'off' });
    return;
  }
  current = { id: crypto.randomUUID(), started: Date.now(), seconds: 0, kind, meters: 0, steps: null, paths: [], distanceSamples: [],
    source: kind === 'bike' ? 'bikeSteps' : 'noSteps' };
  const session = current;
  pointCount = 0;
  lastFix = lastSignal = motionSample = cadenceSample = null;
  enableMotion(session);
  $('tracking-status').textContent = t(useGPS ? 'gpsWaiting' : 'trackingNoGPS');
  if (useGPS && navigator.geolocation) {
    fixId = navigator.geolocation.watchPosition(position => recordPosition(session, position), error => {
      if (current === session) $('tracking-status').textContent = t(error.code === 1 ? 'gpsDenied' : 'gpsUnavailable');
    }, { enableHighAccuracy: true, maximumAge: 0, timeout: 20000 });
  } else if (useGPS) {
    $('tracking-status').textContent = t('gpsUnavailable');
  }
  timer = setInterval(() => showStats(current), 500);
  updateView();
  $('stop').focus({ preventScroll: true });
}

function finishTracking() {
  if (!current) return;
  if (nativeTracker) {
    nativeTracker.postMessage({ action: 'stop' });
    return;
  }
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
    if (session.kind) selectKind(session.kind);
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
$('watch-shortcut').onclick = () => $('watch-title').focus();
$('kind').onchange = () => showStats(current ?? pendingImport ?? selected);
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
  session.kind = chosenKind();
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

$('distance-scrubber').oninput = event => {
  chartIndex = Number(event.target.value);
  drawDistanceChart();
  syncChartMarker();
  if (!map) renderRoute();
  if (map && chartMarker && !map.getBounds().contains(chartMarker.getLatLng())) {
    map.panTo(chartMarker.getLatLng());
  }
};

$('langSeg').onclick = event => {
  const button = event.target.closest('button[data-lang]');
  if (!button || lang === button.dataset.lang) return;
  const previous = labels[lang];
  const statuses = ['tracking-status', 'watch-status'].map(id => [
    id, Object.keys(previous).find(key => previous[key] === $(id).textContent),
  ]);
  lang = button.dataset.lang;
  storePreference('lang', lang);
  applyLanguage();
  for (const [id, key] of statuses) if (key) $(id).textContent = t(key);
  if (nativeTracker) {
    document.querySelector('[data-label="watchHelp"]').textContent = t('sensorHelp');
    window.i42NativeSensors(nativeSensorState);
  }
  updateView();
};

$('themeSeg').onclick = event => {
  const button = event.target.closest('button[data-theme-set]');
  if (!button) return;
  document.documentElement.dataset.theme = button.dataset.themeSet;
  storePreference('theme', button.dataset.themeSet);
  paintTheme();
  drawDistanceChart();
  if (!map) renderRoute();
};
themePreference.addEventListener?.('change', () => {
  paintTheme();
  drawDistanceChart();
});
const updateNetwork = () => { $('netPill').hidden = navigator.onLine; };
window.addEventListener('online', updateNetwork);
window.addEventListener('offline', updateNetwork);
updateNetwork();
window.addEventListener('resize', () => {
  renderRoute();
  drawDistanceChart();
});
window.addEventListener('pagehide', () => {
  if (!nativeTracker) finishTracking();
  watchDevice?.gatt.disconnect();
});
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
updateView();

if (nativeTracker) {
  const connect = $('connect');
  document.querySelector('[data-label="watchHelp"]').textContent = t('sensorHelp');
  window.i42NativeSensors = state => {
    nativeSensorState = state;
    const connected = state.status === 'sensorConnected';
    connect.textContent = t(connected ? 'disconnect' : 'searchWatch');
    connect.disabled = ['sensorStarting', 'sensorConnecting', 'sensorScanning'].includes(state.status);
    const status = $('sensor-status');
    status.hidden = false;
    status.textContent = [t(state.status) ?? t('sensorReady'), state.name].filter(Boolean).join(' · ');
    const devices = Array.isArray(state.devices) ? state.devices : [];
    const list = $('sensor-list');
    list.hidden = !devices.length;
    list.replaceChildren(...devices.map(device => {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = device.name || t('sensorUnnamed');
      button.onclick = () => nativeTracker.postMessage({ action: 'sensorSelect', id: device.id });
      const item = document.createElement('li');
      item.append(button);
      return item;
    }));
    if (current) showStats(current);
  };
  connect.onclick = () => nativeTracker.postMessage({
    action: nativeSensorState.status === 'sensorConnected' ? 'sensorDisconnect' : 'sensorScan',
  });
  let lastAcknowledged = null;
  const convert = workout => ({
    ...workout,
    steps: workout.steps ?? null,
    source: workout.kind === 'bike' ? 'bikeSteps' : workout.steps == null ? 'noSteps' : 'nativeSteps',
  });
  window.i42NativeActivity = state => {
    current = state.current ? convert(state.current) : null;
    nativeSaving = state.status === 'nativeSaving';
    $('tracking-status').textContent = t(state.status) ?? t('nativeReady');
    if (state.completed && lastAcknowledged !== state.completed.id) {
      if (save(convert(state.completed), 'tracking-status')) {
        lastAcknowledged = state.completed.id;
        if (state.status === 'nativeInterrupted') $('tracking-status').textContent = t(state.status);
        nativeTracker.postMessage({ action: 'ack', id: lastAcknowledged });
      }
    } else {
      updateView();
    }
  };
  $('tracking-status').textContent = t('nativeReady');
  setInterval(() => { if (current) showStats(current); }, 500);
  nativeTracker.postMessage({ action: 'snapshot' });
}
