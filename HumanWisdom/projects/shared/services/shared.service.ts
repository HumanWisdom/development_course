
  import { Platform } from '@angular/cdk/platform';
import {ProgramType} from './../models/program-model';
import { Constant } from './constant';

   export class  SharedService {
    public static ProgramId:any=ProgramType.Adults;
    public static TeenagerBaseUrl:string='https://happierme.app/';
    public static AdultsBaseUrl:string='https://happierme.app/';
    public static UrlToRedirect:string= null;
    public static ClientUrl:string = 'https://staging.happierme.app/adults/';
    public static enablebanner = false;
    public static isIos = false;
    public static previousUrl = '';
    public static currentUrl = '';
  constructor() {
  }

  public static setDataInLocalStorage(key:string,value:string){
    if(key && key !=null){
      localStorage.setItem(key,value);
    }
  }

  public static getDataFromLocalStorage(key:string) : string{
     if(key && key!=null ){
      return localStorage.getItem(key);
     }
     return  null;
  }

  public static setDataInSessionStorage(key:string,value:string){
    if(key && key !=null){
      sessionStorage.setItem(key,value);
    }
  }

  public static getDataFromSessionStorage(key:string) : string{
    if(key && key!=null){
     return sessionStorage.getItem(key);
    }
    return  null;
 }

  public static isSubscriber() :boolean {
    return this.getDataFromLocalStorage(Constant.subscriber) == Constant.One.toString();
  }

  public static getUserId(){
    let userId= this.getDataFromLocalStorage(Constant.userId);
    if(userId && userId!=null){
      return parseInt(userId);
    }
    return 0
  }

  public static GetExerciseClassName(day,currentDay,vistedScreens,nextDay){
    var dayclass = "";
    var className = "";
    if (day.includes("p0")) {
      dayclass = "0";
    } else if (day.includes("p1")) {
      dayclass = "1";
    } else if(day.includes("p2")) {
      dayclass = "2";
    } else if(day.includes("p3")) {
      dayclass = "3";
    } else if(day.includes("p4")) {
      dayclass = "4";
    } else if(day.includes("p5")) {
      dayclass = "5";
    } else if(day.includes("p6")) {
      dayclass = "6";
    } else if(day.includes("p7")) {
      dayclass = "7";
    } else if(day.includes("p8")) {
      dayclass = "8";
    } else if(day.includes("p9")) {
      dayclass = "9";
    } else if(day.includes("p10")) {
      dayclass = "10";
    } else if(day.includes("p11")) {
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

  public static DisabledComment(item){
    return (parseInt(item.TagIds)==5 || item.TagName == 'Ask a coach') && SharedService.getDataFromLocalStorage('RoleID')?.toString() != '1';
  }

  public static initializeIosCheck(platform:Platform){
   if(platform.IOS || platform.SAFARI || this.iOS()){
       return true;
   }
   return false;
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


  public static setProgramId(value:string){
    this.ProgramId = value;
  }


}
