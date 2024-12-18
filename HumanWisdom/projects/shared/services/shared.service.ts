
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

  public static getUserId() {
    let userId = this.getDataFromLocalStorage(Constant.userId);
    if (userId && userId != null) {
      return parseInt(userId);
    }
    return 0
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

   public static isIOSApp(){
      return this.iOS();
   }

  public static formatToDecimal(value) {
    if (Number.isInteger(value)) {
      return `${value}.00`;
    }
    return value.toFixed(2);
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
          name: 'Addiction'
        },
        {
          id: "6",
          displayName: "Sorrow and Loss",
          active: false,
          name: 'Deal with loss'
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
          id: "",
          active: false,
          displayName: "Wisdom",
          name: 'Wisdom',
        }
      ]
    } else {
      return [
        {
          id: "999",
          displayName: "All",
          active: true,
          name: 'All'
        },
      {
        id: "14",
        displayName: "Emotions",
        active: true,
        name: 'Manage your emotions',
      },
      {
        id: "11",
        active: true,
        displayName: "Relationships",
        name: 'Relationships'
      },
      {
        id: "13",
        active: true,
        displayName: "Happiness",
        name: 'Be happier'
      },
      {
        id: "15",
        displayName: "Habits",
        active: true,
        name: 'Overcome unhelpful habits'
      },
      {
        id: "16",
        active: true,
        displayName: "Understand yourself",
        name: 'Understand yourself'
      },
      {
        id: "12",
        active: true,
        displayName: "Feel calm",
        name: 'Feel calm',
      },
      {
        id: "10",
        active: true,
        displayName: "Mental health",
        name: 'Manage your mental health'
      },
      {
        id: "17",
        active: true,
        displayName: "Success",
        name: 'Succeed in life'
      }
      ]
    }
  }

  public static isMobileDevice(): boolean {
    const userAgent = window.navigator.userAgent || window.navigator.vendor;
    return /android|iphone|ipad|ipod|opera mini|iemobile|mobile/i.test(userAgent);
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
