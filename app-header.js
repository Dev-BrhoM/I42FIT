'use strict';

document.getElementById('app-header').innerHTML = `<header class="app-header">
    <div class="brand">
      <img class="logo" src="icon.png" width="40" height="40" alt="">
      <h1 class="word">I42<span>FIT</span></h1>
    </div>
    <div class="tools">
      <span class="pill" id="netPill" hidden data-i18n="offline"></span>
      <div class="seg" id="langSeg" role="group" aria-label="Language">
        <button data-lang="ar">ع</button><button data-lang="en">EN</button>
      </div>
      <div class="seg" id="themeSeg" role="group" data-i18n-aria="theme">
        <button data-theme-set="light" data-i18n-title="light"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg></button>
        <button data-theme-set="dark" data-i18n-title="dark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg></button>
      </div>
    </div>
  </header>
  <nav class="tabs" id="app-navigation" aria-label="التنقل الرئيسي" data-i18n-aria="navigation">
    <a class="tab" href="gym-app.html?tab=workout" data-t="workout" data-i18n="workouts">التمارين</a>
    <a class="tab" href="gym-app.html?tab=nutrition" data-t="nutrition" data-i18n="nutrition">التغذية</a>
    <a class="tab" href="activity.html" data-i18n="activity">النشاط</a>
  </nav>`;


const appNavigation = document.getElementById('app-navigation');
const activityTab = appNavigation.querySelector('[href="activity.html"]');
if (document.body.dataset.page === 'activity') {
  activityTab.classList.add('on');
  activityTab.setAttribute('aria-current', 'page');
  activityTab.onclick = event => event.preventDefault();
}
