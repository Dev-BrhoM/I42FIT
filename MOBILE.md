# I42FIT Mobile

Node.js 22+, Xcode 26+ on macOS for iOS; Android Studio 2025.2.1+ for Android.
Run npm install, then npm run add:ios and/or npm run add:android once. Run npm run sync after changes. Open using npm run open:ios or npm run open:android.

iOS: add HealthKit capability in Xcode to the App target; set NSHealthShareUsageDescription to explain reading daily step totals, and NSHealthUpdateUsageDescription if required by the plugin (the app requests no write access). Configure location and camera usage descriptions for existing features. Select your signing team and test on a physical iPhone.

Android: configure Health Connect following https://github.com/Cap-go/capacitor-health#android-setup, including permission rationale and privacy policy activity/alias. Limit merged health permissions to READ_STEPS for this release; inspect the merged manifest and remove unnecessary read/write permissions. Configure location and camera permissions for existing features. Test on a real device with Health Connect and a connected health data source.

The native sync button requests only steps read access, queries today's aggregate, and replaces the manual daily total; it does not add GPS estimates. The plugin is not available on the web. Apple Watch and Galaxy Watch data must already be synchronized to the system health store. No direct watch pairing or background sync is implemented. Health totals are stored locally; existing JSON backup may contain step totals. Never upload them without explicit consent.

Acceptance tests: build both platforms; check permission grant/denial/revocation, no samples, repeated sync, local midnight, system health totals, GPS and camera, offline mode and language switching. Verify native data remains on device. Native build, signing, and physical-device tests remain outstanding.
