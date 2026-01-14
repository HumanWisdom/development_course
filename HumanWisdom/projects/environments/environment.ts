// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiURL: "https://staging.humanwisdom.info/api",
  clientUrl: "https://staging.happierme.app/",
  appleSignInAPIAdults: "https://staging.humanwisdom.info/api/verifyAppleToken_htmlAdults",
  appleSignInAPITeenagers: "https://staging.humanwisdom.info/api/verifyAppleToken_htmlTeens",
  appleSignInHtmlLocal: "https://staging.humanwisdom.info/api/verifyAppleToken_htmlLocal",
  googleClientId: "907009432190-v7bpjvuurie68eakqf5neovb5oj3h0b0.apps.googleusercontent.com",
  facebookAppId: "238869214957032",
  stripeKey: "pk_test_51IDyEyLodCYBgHN86w4iS8izVNRW5BrBHRvNR5hamoNsCx1ccQWEMKVSSONQKVqHyFh5FWuUXTEFqyPdMjc2Nld200mJgPGVrl",
  ADULT_CHATBOT_URL: 'https://adults-staging-dev.happierme.app/chat',
  TEEN_CHATBOT_URL: 'https://teenagers-staging-dev.happierme.app/api/chat',
  HEALTH_CHECK_URL_ADULT: 'https://adults-staging-dev.happierme.app/api/health',
  HEALTH_CHECK_URL_TEEN: 'https://teenagers-staging-dev.happierme.app/api/health',
  HISTORY_URL_ADULT: 'https://adults-staging.happierme-dev.app/api/history',
  HISTORY_URL_TEEN: 'https://teenagers-staging.happierme-dev.app/api/history',
  RELATED_CONTENT_URL_ADULT: 'https://adults-staging-dev.happierme.app/related',
  RELATED_CONTENT_URL_TEEN: 'https://teenagers-staging-dev.happierme.app/related',
  FEEDBACK_URL_ADULT: 'https://adults-staging-dev.happierme.app/feedback',
  FEEDBACK_URL_TEEN: 'https://teenagers-staging-dev.happierme.app/feedback',
  TRACK_CLICK_URL_ADULT: 'https://adults-staging-dev.happierme.app/track-click',
  TRACK_CLICK_URL_TEEN: 'https://teenagers-staging-dev.happierme.app/track-click',


  firebase: {
    apiKey: "AIzaSyD4ll7dKbi1JtHBr7Raqmgpz_Xve2bDDX0",
    authDomain: "hwp-development-303708.firebaseapp.com",
    projectId: "hwp-development-303708",
    storageBucket: "hwp-development-303708.appspot.com",
    messagingSenderId: "604395199513",
    appId: "1:604395199513:web:33865830c234bc7840de88",
    measurementId: "G-1B7PE7GN89"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
