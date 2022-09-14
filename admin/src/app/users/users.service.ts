import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpBackend,
  HttpParams
} from "@angular/common/http";
import { Number } from './interfaces/number'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
// path="http://18.132.47.231/api";
//path="https://www.humanwisdom.info/api"
//path="http://ec2-18-132-47-231.eu-west-2.compute.amazonaws.com:88/api"
path="https://staging.humanwisdom.info/api"

  constructor(
    private http: HttpClient,
    handler: HttpBackend) { // this.http = new HttpClient(handler);
  }
  getAllPosts(index): Observable<any> {
    switch (index) {
      case '0':
        return this.http.get(this.path + '/GetAllPosts_Admin')
        break;

        case '1':
          return this.http.get(this.path + '/GetAllPosts_Admin/0')
          break;

          case '2':
            return this.http.get(this.path + '/GetAllPosts_Admin/1')
            break;
            case '3':
              return this.http.get(this.path + '/GetAllPosts_Admin/2')
              break;

 case '4':
                return this.http.get(this.path + '/GetAllPosts_Admin/3')
                break;
      default:
        return this.http.get(this.path + '/GetAllPosts_Admin')
        break;
    }

  }
  approvepost(data: any): Observable<any> {
    return this.http.post(this.path + '/ApprovePost', data)
  }
  getPrograms(): Observable<any> {
    return this.http.get(this.path + '/Programs')
  }
  addProgram(data: any): Observable<any> {
    return this.http.post(this.path + '/AddProgram', data)
  }
  deleteProgram(n: Number): Observable<any> {
    return this.http.post(this.path + `/DeleteProgram/${n.Id}`, null)
  }


  getSections(): Observable<any> {
    return this.http.get(this.path + '/Sections')
  }
  addSection(data: any): Observable<any> {
    return this.http.post(this.path + '/AddSection', data)
  }
  deleteSection(n: Number): Observable<any> {
    return this.http.post(this.path + `/DeleteSection/${n.Id}`, null)
  }



  getModules(): Observable<any> {
    return this.http.get(this.path + '/Modules')
  }
  addModule(data: any): Observable<any> {
    return this.http.post(this.path + '/AddModule', data)
  }
  deleteModule(n: Number): Observable<any> {
    return this.http.post(this.path + `/DeleteModule/${n.Id}`, null)
  }

  getSiteSections(): Observable<any> {
    return this.http.get(this.path + '/SiteSections')
  }
  addFaq(data: any): Observable<any> {
    return this.http.post(this.path + '/AddFaq', data)
  }
  getFaqs(): Observable<any> {
    return this.http.get(this.path + '/Faqs')
  }
  deleteFaq(n: Number): Observable<any> {
    return this.http.post(this.path + `/DeleteFaq/${n.Id}`, null)
  }

  addRate(data: any): Observable<any> {
    return this.http.post(this.path + '/AddRate', data)
  }
  getRates(): Observable<any> {
    return this.http.get(this.path + '/Rates')
  }
  deleteRate(n: Number): Observable<any> {
    return this.http.post(this.path + `/DeleteRate/${n.Id}`, null)
  }

  addReflection(data: any): Observable<any> {
    return this.http.post(this.path + '/AddReflection', data)
  }
  getReflections(): Observable<any> {
    return this.http.get(this.path + '/Reflections')
  }
  deleteReflection(n: Number): Observable<any> {
    return this.http.post(this.path + `/Deletereflection/${n.Id}`, null)
  }

  addUser(data: any): Observable<any> {
    return this.http.post(this.path + '/AddUser', data)
  }
  getUsers(): Observable<any> {
    return this.http.get(this.path + '/Users')
  }
  deleteUser(n: Number): Observable<any> {
    return this.http.post(this.path + `/DeleteUser/${n.Id}`, null)
  }

  getSubscribers(): Observable<any> {
    return this.http.get(this.path + '/SubScriptions')
  }
  deleteSubscriber(n: Number): Observable<any> {
    return this.http.post(this.path + `/DeleteSubScription/${n.Id}`, null)
  }

  getAssessmentType(): Observable<any> {
    return this.http.get(this.path + '/AssessTypes')
  }
  addQuestion(data: any): Observable<any> {
    return this.http.post(this.path + '/AddQuestion', data)
  }
  getQuestions(): Observable<any> {
    return this.http.get(this.path + '/Questions')
  }
  getQuestionsByAssessment(data: any): Observable<any> {

    return this.http.get(this.path + `/Questions/${data.AssessmentId}`)
  }
  deleteQuestion(n: Number): Observable<any> {
    return this.http.post(this.path + `/DeleteQuestion/${n.Id}`, null)
  }

  addOption(data: any): Observable<any> {
    return this.http.post(this.path + '/AddOption', data)
  }
  getOptions(n: Number): Observable<any> {
    return this.http.get(this.path + `/Options/${n.Id}`)
  }
  deleteOption(n: Number): Observable<any> {
    return this.http.post(this.path + `/DeleteOption/${n.Id}`, null)
  }

  addAssessment(data: any): Observable<any> {
    return this.http.post(this.path + '/AddAssessment', data)
  }
  getAssessments(): Observable<any> {
    return this.http.get(this.path + `/Assessments`)
  }

  deleteAssessment(n: Number): Observable<any> {
    return this.http.post(this.path + `/DeleteAssessment/${n.Id}`, null)
  }
  getCategories(): Observable<any> {
    return this.http.get(this.path + `/DiscussCategories`)
  }
  addCategory(data: any): Observable<any> {
    return this.http.post(this.path + '/AddDiscussCategory', data)
  }
  deleteCategory(n: Number): Observable<any> {
    return this.http.post(this.path + `/DeleteDiscussCategory/${n.Id}`, null)
  }
  getGroups(): Observable<any> {
    return this.http.get(this.path + `/WisdomGroups`)
  }
  addGroup(data: any): Observable<any> {
    return this.http.post(this.path + '/AddWisdomGr', data)
  }
  deleteGroup(n: Number): Observable<any> {
    return this.http.post(this.path + `/DeleteWisdomGr/${n.Id}`, null)
  }
  addCoupon(data: any): Observable<any> {
    return this.http.post(this.path + '/AddCoupon', data)
  }
  deleteCoupon(n: Number): Observable<any> {
    return this.http.post(this.path + `/DeleteCoupon/${n.Id}`, null)
  }
  getCoupon(): Observable<any> {
    return this.http.get(this.path + `/Coupons`)
  }
  addPoint(data: any): Observable<any> {
    return this.http.post(this.path + '/AddSetting', data)
  }
  deletePoint(n: Number): Observable<any> {
    return this.http.post(this.path + `/DeleteSetting/${n.Id}`, null)
  }
  getPoints(): Observable<any> {
    return this.http.get(this.path + `/Settings`)
  }
  addTag(data: any): Observable<any> {
    return this.http.post(this.path + '/AddTag', data)
  }
  deleteTag(n: Number): Observable<any> {
    return this.http.post(this.path + `/DeleteTag/${n.Id}`, null)
  }
  getTags(): Observable<any> {
    return this.http.get(this.path + `/Tags`)
  }
  addScenario(data: any): Observable<any> {
    return this.http.post(this.path + '/AddScenario', data)
  }
  deleteScenario(n: Number): Observable<any> {
    return this.http.post(this.path + `/DeleteScenario/${n.Id}`, null)
  }
  getScenarios(): Observable<any> {
    return this.http.get(this.path + `/Scenarios`)
  }
  addKey(data: any): Observable<any> {
    return this.http.post(this.path + '/GenerateActKeys', data)
  }
  deleteKey(n: Number): Observable<any> {
    return this.http.post(this.path + `/DeleteActivationKey/${n.Id}`, null)
  }
  getKeys(): Observable<any> {
    return this.http.get(this.path + `/ActivationKeys`)
  }
  addTestimonial(data: any): Observable<any> {
    return this.http.post(this.path + '/AddTestimonial', data)
  }
  deleteTestimonial(n: Number): Observable<any> {
    return this.http.post(this.path + `/DeleteTestimonial/${n.Id}`, null)
  }
  getTestimonials(): Observable<any> {
    return this.http.get(this.path + `/Testimonials`)
  }

  getCountries(): Observable<any> {
    return this.http.get(this.path + `/Countries`)
  }
  addSiteSection(data: any): Observable<any> {
    return this.http.post(this.path + '/AddSiteSection', data)
  }
  deleteSiteSection(n: Number): Observable<any> {
    return this.http.post(this.path + `/DeleteSiteSection/${n.Id}`, null)
  }
  getSiteSetions(): Observable<any> {
    return this.http.get(this.path + `/SiteSections`)
  }
  getScreens(): Observable<any> {
    return this.http.get(this.path + `/GetScreenDtls`)
  }
  addScreen(data: any): Observable<any> {
    return this.http.post(this.path + '/AddScreen', data)
  }
  deleteScreen(n: Number): Observable<any> {
    return this.http.post(this.path + `/DeleteScreen/${n.Id}`, null)
  }
  getDailyQuestion(): Observable<any> {
    return this.http.get(this.path + `/dailyQuestionAdmin`)
  }
  getModulePercent(): Observable<any> {
    return this.http.get(this.path + `/Modules`)
  }

  getSessions(): Observable<any> {
    return this.http.get(this.path + `/getSessions`)
  }

  addModulePercent(id, sp, mp): Observable<any> {
    return this.http.post(this.path + `/setModulePercent/${id}/${sp}/${mp}`, null)
  }
  setSession(number, name, from, to): Observable<any> {
    return this.http.post(this.path + `/SetSessionBetweenScreenNos/${number}/${name}/${from}/${to}`, null)
  }
  updateSession(oldNumber, newNumber, name, from, to): Observable<any> {
    return this.http.post(this.path + `/SetSessionBetweenScreenNos/${oldNumber}/${newNumber}/${name}/${from}/${to}`, null)
  }
  getModuleScreens(): Observable<any> {
    return this.http.get(this.path + `/GetModulesScreens`)
  }
  setModuleScreen(number, from, to): Observable<any> {
    return this.http.post(this.path + `/SetModuleBetweenScreenNos/${number}/${from}/${to}`, null)
  }

  addPopupContent(data): Observable<any> {
    return this.http.post(this.path + `/AdminSetting`, data)
  }

  getAllAffiliate(){
    return this.http.get(this.path + `/GetAllAffliates`)
  }
  getParentAffiliates(){
    return this.http.get(this.path + `/GetAffUsers`)
  }
  getUserByID(Id){
    return this.http.get(this.path + `/GetAffUsers/${Id}`)
  }

  getPopupContent(): Observable<any> {
    return this.http.get(this.path + `/GetAdminSetting`)
  }

  getAffliateCommision(){
    return this.http.get(this.path + `/GetAffliateCommision_Admin`)
  }

  getAffliateCommisionById(id){
    return this.http.get(this.path + `/GetAffliateCommision/${id}`)
  }

  setAffliateCommision(id:any): Observable<any> {
    return this.http.put(this.path + `/SetCommisionPaid/${id}`,null)
  }


  getAffliateList(){
    return this.http.get(this.path + `/GetAffList_Report`)
  }

  getAffliateReferralReport(Id){
    return this.http.get(this.path + `/GetAffReferral_Report/${Id}`)
  }
  addBlog(data: any): Observable<any> {
    return this.http.post(this.path + '/AddBlogs', data)
  }
  deleteBlog(n: Number): Observable<any> {
    return this.http.post(this.path + `/DeleteBlogs/${n.Id}`, null)
  }
  getBlog(): Observable<any> {
    return this.http.get(this.path + `/GetBlogs`)
  }
  getdailypracticetype(): Observable<any> {
    return this.http.get(this.path + `/GetPractiseType`)
  }
  getdailypractice(): Observable<any> {
    return this.http.get(this.path + `/GetDailyPractise`)
  }
  adddailypractice(data: any): Observable<any> {
    return this.http.post(this.path + '/AddDailyPractise', data)
  }
  deletedailypractice(n: Number): Observable<any> {
    return this.http.post(this.path + `/DelDailyPractise?PractiseID=${n}`, null)
  }
  updatedailypractice(data: any): Observable<any> {
    return this.http.post(this.path + '/AddDailyPractise', data)
  }
  addGuidedTopics(data:any): Observable<any> {
    return this.http.post(this.path + '/AddGuidedQs_Topics', data);
  }
 addGuidedQuestion(data:any): Observable<any> {
   return this.http.post(this.path + '/AddGuidedQuestions', data);
 }
   getGuidedQuestionTopics(): Observable<any> {
    return this.http.get(this.path + '/GetGuidedQs_Topics');
   }
   getGuidedQuestion(id:any): Observable<any> {
    return this.http.get(this.path + '/GetGuidedQuestions/'+id);
   }
   deleteGuidedQuestion(n: Number): Observable<any> {
    return this.http.post(this.path + `/DelGuidedQuestions/${n.Id}`, null)
  }
  deleteTopic(n: Number): Observable<any> {
    return this.http.post(this.path + `/DelGuidedQs_Topics/${n.Id}`, null)
  }
  getNotificationTypeList(): Observable<any> {
    return this.http.get(this.path + '/GetNotificationType');
   }
   
   addNotificationType(data:any): Observable<any> {
    return this.http.post(this.path + '/addNotificationType', data);
  }
  DelnotificationType(n: Number): Observable<any> {
    return this.http.post(this.path + `/DelnotificationType/${n.Id}`, null)
  }

  Delnotification(n: Number): Observable<any> {
    return this.http.post(this.path + `/DelNotifications/${n.Id}`, null)
  }

  NotificationList(): Observable<any> {
    return this.http.get(this.path + `/GetAllNotifications/`)
  }

  addNotification(data:any): Observable<any> {
    return this.http.post(this.path + '/AddNotifications', data);
  }

  NotificationTypeList(): Observable<any> {
    return this.http.get(this.path + `/GetNotificationType/`)
  }
  
  
}

