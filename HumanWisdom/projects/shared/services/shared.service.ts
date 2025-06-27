
import { Platform } from '@angular/cdk/platform';
import { ProgramType } from './../models/program-model';
import { Constant } from './constant';

export class SharedService {
  public static ProgramId: any = ProgramType.Adults;
  public static TeenagerBaseUrl: string = 'https://happierme.app/';
  public static AdultsBaseUrl: string = 'https://happierme.app/';
  public static UrlToRedirect: string = null;
  public static ClientUrl: string = 'https://staging.happierme.app/';
  public static enablebanner = false;
  public static isIos = false;
  public static isFromAdults = false;
  public static isRoutedFromLogin = false;
  public static FirstLoginOfTheDay = false;
  constructor() {
  }

  public static isAdultProgram() {
    if (SharedService.ProgramId == ProgramType.Adults) {
      return true;
    }
    return false;
  }


  public static setDataInLocalStorage(key: string, value: string) {
    if (key && key != null) {
      localStorage.setItem(key, value);
    }
  }

  public static getDataFromLocalStorage(key: string): string {
    if (key && key != null) {
      return localStorage.getItem(key);
    }
    return null;
  }

  public static setDataInSessionStorage(key: string, value: string) {
    if (key && key != null) {
      sessionStorage.setItem(key, value);
    }
  }

  public static getPartnerInfo() {
    if (localStorage.getItem('isPartner')) {
      return localStorage.getItem('isPartner');
    }
    return '0';
  }

  public static getDataFromSessionStorage(key: string): string {
    if (key && key != null) {
      return sessionStorage.getItem(key);
    }
    return null;
  }

  public static isSubscriber(): boolean {
    return this.getDataFromLocalStorage(Constant.subscriber) == Constant.One.toString();
  }



  public static GetExerciseClassName(day, currentDay, vistedScreens, nextDay) {
    var dayclass = "";
    var className = "";
    if (day.includes("p0")) {
      dayclass = "0";
    } else if (day.includes("p1")) {
      dayclass = "1";
    } else if (day.includes("p2")) {
      dayclass = "2";
    } else if (day.includes("p3")) {
      dayclass = "3";
    } else if (day.includes("p4")) {
      dayclass = "4";
    } else if (day.includes("p5")) {
      dayclass = "5";
    } else if (day.includes("p6")) {
      dayclass = "6";
    } else if (day.includes("p7")) {
      dayclass = "7";
    } else if (day.includes("p8")) {
      dayclass = "8";
    } else if (day.includes("p9")) {
      dayclass = "9";
    } else if (day.includes("p10")) {
      dayclass = "10";
    } else if (day.includes("p11")) {
      dayclass = "11";
    }

    if (currentDay.toString() == dayclass) {
      className += " editable ";
    }
    else if (vistedScreens.some((x) => x.ScreenNo == day)) {
      className += " uneditable";
    }
    if (nextDay == +dayclass) {
      className = " active";
    }
    else if (vistedScreens.some((x) => x.ScreenNo != day)) {
      className += " inactive";
    }
    return className;
  }

  public static DisabledComment(item) {
    return (parseInt(item.TagIds) == 5 || item.TagName == 'Ask a coach') && SharedService.getDataFromLocalStorage('RoleID')?.toString() != '1';
  }

  public static initializeIosCheck(platform: Platform) {
    if (platform.IOS || platform.SAFARI || this.iOS()) {
      return true;
    }
    return false;
  }

  public static isIOSApp() {
    return this.iOS();
  }

  public static formatToDecimal(value) {
    if (Number.isInteger(value)) {
      return `${value}.00`;
    }
    return value.toFixed(2);
  }

  public static isAndroid(): boolean {
    const userAgent = navigator.userAgent || navigator.vendor;
    return /android/i.test(userAgent);
  }

  private static iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
      // iPad on iOS 13 detection
      || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  }


  public static setProgramId(value: string) {
    this.ProgramId = value;
  }

  public static getprogramName() {
    switch (this.ProgramId) {
      case ProgramType.Adults:
        return 'adults';
      case ProgramType.Teenagers:
        return 'teenagers';
      case ProgramType.Young_Adults:
        return 'youngadults';
      default:
        return 'adults';
    }
  }

  public static getDashboardUrls() {
    switch (this.ProgramId) {
      case ProgramType.Adults:
        return '/adults/adult-dashboard';
      case ProgramType.Teenagers:
        return '/teenagers/teenager-dashboard';
      case ProgramType.Young_Adults:
        return '/teenagers/teenager-dashboard';
      default:
        return '/adults/adult-dashboard';
    }
  }

  public static getUrlfromFeatureName(name: UrlConstant) {
    switch (this.ProgramId) {
      case ProgramType.Adults:
        return `/adults/${name}`;
      case ProgramType.Teenagers:
        return `/teenagers/${name}`;
      case ProgramType.Young_Adults:
        return '/adults/journal';
      default:
        return `/adults/${name}`;
    }
  }
  public static getPreferenceData() {
    if (this.ProgramId == ProgramType.Adults) {
      return [
        /*  {
           id: "88",
           displayName: "Voices",
           active: false,
           name: 'Voices'
         }, */
        {
          id: "999",
          displayName: "All",
          active: true,
          name: 'All'
        },
        {
          id: "1",
          displayName: "Work",
          active: false,
          name: 'Work and Leadership'
        },
        {
          id: "2",
          displayName: "Mental health",
          active: false,
          name: 'Manage your mental health'
        },
        {
          id: "3",
          displayName: "Relationships",
          active: false,
          name: 'Relationships'
        },
        {
          id: "4",
          displayName: "Happiness",
          active: false,
          name: 'Be happier'
        },
        {
          id: "5",
          displayName: "Addiction",
          active: false,
          name: 'Habits and Addictions'
        },
        {
          id: "6",
          displayName: "Sorrow and Loss",
          active: false,
          name: 'Deal with Sorrow and loss'
        },
        {
          id: "7",
          displayName: "Meditation",
          active: false,
          name: 'Meditation',
        },
        {
          id: "8",
          displayName: "Emotions",
          active: false,
          name: 'Manage your emotions',
        },
         {
          id: "18",
          displayName: "Parent-hub",
          active: false,
          name: 'Parent hub',
        },
        {
          id: "0",
          active: false,
          displayName: "Wisdom",
          name: 'Wisdom',
        }
      ]
    } else {
      return [
        /*  {
           id: "88",
           displayName: "Voices",
           active: false,
           name: 'Voices'
         }, */
        {
          id: "999",
          displayName: "All",
          active: true,
          name: 'All'
        },
        {
          id: "14",
          displayName: "Emotions",
          active: false,
          name: 'Manage your emotions',
        },
        {
          id: "11",
          active: false,
          displayName: "Relationships",
          name: 'Relationships'
        },
        {
          id: "13",
          active: false,
          displayName: "Happiness",
          name: 'Be happier'
        },
        {
          id: "15",
          displayName: "Habits",
          active: false,
          name: 'Overcome unhelpful habits'
        },
        {
          id: "16",
          active: false,
          displayName: "Understand yourself",
          name: 'Understand yourself'
        },
        {
          id: "12",
          active: false,
          displayName: "Feel calm",
          name: 'Feel calm',
        },
        {
          id: "10",
          active: false,
          displayName: "Mental health",
          name: 'Manage your mental health'
        },
        {
          id: "17",
          active: false,
          displayName: "Success",
          name: 'Succeed in life'
        },
        {
          id: "0",
          active: false,
          displayName: "Wisdom",
          name: 'Wisdom',
        }
      ]
    }
  }

  public static isMobileDevice(): boolean {
    const userAgent = window.navigator.userAgent || window.navigator.vendor;
    return /android|iphone|ipad|ipod|opera mini|iemobile|mobile/i.test(userAgent);
  }

  public static contentIdData(name) {
    if (this.ProgramId == ProgramType.Adults) {
      let data = [
        { "id": 1, "name": "adult-dashboard" ,"title":"Adult Dashboard"},       
        { "id": 3, "name": "work-and-leadership" ,"title":"Work and Leadership" },
        { "id": 4, "name": "mental-health" ,"title":"Manage your mental health" },
        { "id": 5, "name": "relationships" ,"title":"Relationships" },
        { "id": 6, "name": "be-happier" ,"title":"Be happier" },
        { "id": 7, "name": "habits-and-addiction" ,"title":"Habits and Addictions" },
        { "id": 8, "name": "deal-with-loss" ,"title":"Deal with loss" },
        { "id": 9, "name": "meditation" ,"title":"Meditation" },
        { "id": 10, "name": "manage-your-emotions" ,"title":"Manage your emotions" },
        { "id": 19, "name": "parent-hub" ,"title":"Parent hub" }
      ]
      return data.filter(x => x.name == name)[0];
    }
    else {
      let data = [
        { "id": 2, "name": "teenager-dashboard" ,"title":"Teenager Dashboard"},
        { "id": 11, "name": "mental-health" ,"title":"Manage your mental health"},
        { "id": 12, "name": "relationships"  ,"title":"Relationships"},
        { "id": 13, "name": "feel-calm"  ,"title":"Feel Calm"},
        { "id": 14, "name": "be-happier" ,"title":"Be happier"},
        { "id": 15, "name": "manage-your-emotions"  ,"title":"Manage your emotions"},
        { "id": 16, "name": "overcome-unhelpful-habits"  ,"title":"Overcome Unhelpful Habits"},
        { "id": 17, "name": "understand-yourself" ,"title":"Understand yourself"},
        { "id": 18, "name": "succeed-in-life" ,"title":"Succeed in Life"}]
      return data.filter(x => x.name == name)[0];
    }
  }

  public static contentIdDataUsingTitle(name) {
    if (this.ProgramId == ProgramType.Adults) {
      let data = [
        { "id": 1, "name": "adult-dashboard" ,"title":"Adult Dashboard"},       
        { "id": 3, "name": "work-and-leadership" ,"title":"Work and Leadership" },
        { "id": 4, "name": "mental-health" ,"title":"Manage your mental health" },
        { "id": 5, "name": "relationships" ,"title":"Relationships" },
        { "id": 6, "name": "be-happier" ,"title":"Be happier" },
        { "id": 7, "name": "habits-and-addiction" ,"title":"Habits and Addiction" },
        { "id": 8, "name": "deal-with-loss" ,"title":"Deal with loss" },
        { "id": 9, "name": "meditation" ,"title":"Meditation" },
        { "id": 10, "name": "manage-your-emotions" ,"title":"Manage your emotions" }
      ]
      return data.filter(x => x.title == name)[0];
    }
    else {
      let data = [
        { "id": 2, "name": "teenager-dashboard" ,"title":"Teenager Dashboard"},
        { "id": 11, "name": "mental-health" ,"title":"Manage your mental health"},
        { "id": 12, "name": "relationships"  ,"title":"Relationships"},
        { "id": 13, "name": "feel-calm"  ,"title":"Feel calm"},
        { "id": 14, "name": "be-happier" ,"title":"Be happier"},
        { "id": 15, "name": "manage-your-emotions"  ,"title":"Manage your emotions"},
        { "id": 16, "name": "overcome-unhelpful-habits"  ,"title":"Overcome unhelpful habits"},
        { "id": 17, "name": "understand-yourself" ,"title":"Understand yourself"},
        { "id": 18, "name": "succeed-in-life" ,"title":"Succeed in life"}]
      return data.filter(x => x.title == name)[0];
    }
  }


  public static setUserId(userId: string) {
    localStorage.setItem('userID', userId)
  }

  public static setUsername(username: string) {
    localStorage.setItem('userName', username)
  }

  public static setEmail(email: string) {
    localStorage.setItem('email', email)
  }

  public static getUserId() {
    let userId = this.getDataFromLocalStorage(Constant.userId);
    if (userId && userId != null) {
      return parseInt(userId);
    }
    return 0
  }

  public static getUserName() {
    let username = this.getDataFromLocalStorage('username');
    if (username && username != null) {
      return username;
    }
    return '';
  }

  public static getEmail() {
    let email = this.getDataFromLocalStorage('email');
    if (email && email != null) {
      return email;
    }
    return '';
  }



  public static getDashboardId(type: string) {
    if (this.ProgramId == ProgramType.Adults) {
      if (type.toString().toLocaleLowerCase() == 'mental-health') {
        return 4;
      }
    } else {
      if (type.toString().toLocaleLowerCase() == 'mental-health') {
        return 4;
      }
    }
  }


  public static getScreenConfiguration(name="") {
      if(name =='SoundCapes'){
        return {
          moduleName: "Soundscapes",
          shortDescription: "Explore a variety of soundscapes designed to help you relax, focus, and sleep better.",
          preferenceData: [
              {
                id: "999",
                active: true,
                name: 'All'
              },
              {
                id: "1",
                active: false,
                name: 'Sound For Relaxation'
              },
              {
                id: "2",
                active: false,
                name: 'Sound For Sleep'
              }
            ],
            apiMethod: "getSoundsCapesList",
  filterByProgramId: "ProgIDs",
  sort: null,
  transform: null,
  localStorageKey: "soundsCapes",
  shareBaseUrl: "https://happierme.app",
  shareTitle: "HappierMe Program",
  shareText: "Hey, check out the HappierMe Program",
  checkIsFreeMethod: "CheckShortsIsFree",
  tocImage:"https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/sounndscapes.webp",
  searchFields: ["Title", "searchtags"],
  videoUrlField: "VideoUrl",
  titleField: "Title"
        };
      }

  }
}



export class UrlConstant {
  public static journal = "journal";
  public static search = 'search';
  public static login = 'onboarding/login';
  public static userProfile = 'onboarding/user-profile';
  public static forum = 'forum';
  public static sitesearch = 'site-search';
  public static notification = 'notification';
  public static startFreeTrial = '/subscription/start-your-free-trial';
}
