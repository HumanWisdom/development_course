
  import {ProgramType} from './../models/program-model';
import { Constant } from './constant';

   export class  SharedService {
    public static ProgramId:ProgramType=ProgramType.Adults;
    public static TeenagerBaseUrl:string='https://staging.humanwisdom.me/teenagers/#/';
    public static AdultsBaseUrl:string='https://humanwisdom.me/';
 
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

}