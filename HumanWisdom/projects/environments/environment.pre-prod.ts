export const environment = {
    production: true,
    apiURL: "https://staging.humanwisdom.info/api",
    clientUrl: "https://humanwisdom.me/",
  appleSignInAPIAdults:"https://staging.humanwisdom.info/api/verifyAppleToken_htmlAdults",
  appleSignInAPITeenagers:"https://staging.humanwisdom.info/api/verifyAppleToken_htmlTeens",
    stripeKey: "pk_test_51IDyEyLodCYBgHN86w4iS8izVNRW5BrBHRvNR5hamoNsCx1ccQWEMKVSSONQKVqHyFh5FWuUXTEFqyPdMjc2Nld200mJgPGVrl",
    firebase: {
        apiKey: "AIzaSyBvrX8WpyA4YoqdzwhNOmCG4tDP34_92Nc",
        authDomain: "human-wisdom-program-303708.firebaseapp.com",
        projectId: "human-wisdom-program-303708",
        storageBucket: "human-wisdom-program-303708.appspot.com",
        messagingSenderId: "907009432190",
        appId: "1:907009432190:web:5855b9c076f6d0ff86d62f",
        measurementId: "G-1WBHRGL7VH"
    },
    awsCognito: {
        authority: 'https://cognito-idp.eu-west-2.amazonaws.com/eu-west-2_rnYMiKepu',
        userPoolId: 'eu-west-2_rnYMiKepu',
        clientId: '3j1uskvlpsggkl16pmr380v1ok',
        domain: 'eu-west-2rnymikepu.auth.eu-west-2.amazoncognito.com',
        scope: 'openid email',
        redirectUrlAdults: 'https://humanwisdom.me/adults/onboarding/login',
        redirectUrlTeenagers: 'https://humanwisdom.me/teenagers/onboarding/login',
        logoutUrlAdults: 'https://humanwisdom.me/adults/onboarding/login',
        logoutUrlTeenagers: 'https://humanwisdom.me/teenagers/onboarding/login',
    }
};
