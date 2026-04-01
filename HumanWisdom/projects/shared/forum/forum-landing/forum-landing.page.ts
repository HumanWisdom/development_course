import { Platform } from "@angular/cdk/platform";
import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, HostListener, Input, OnInit, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationStart, Router } from '@angular/router';
// import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from "angularx-social-login";
import { NgNavigatorShareService } from 'ng-navigator-share';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { LogEventService } from "./../../services/log-event.service";
import { OnboardingService } from "../../services/onboarding.service";
import { ForumService } from '../forum.service';
import { ProgramType } from "../../models/program-model";
import { NavigationService } from "../../../shared/services/navigation.service";
import { ModalService } from '../../services/modal.service';

import { SharedService } from '../../services/shared.service';
import { ShareService } from "ngx-sharebuttons";
import { Constant } from '../../../shared/services/constant';
@Component({
  selector: 'app-forum-landing',
  templateUrl: './forum-landing.page.html',
  styleUrls: ['./forum-landing.page.scss'],
})
export class ForumLandingPage implements OnInit, OnChanges {
  @ViewChild('enablepopup') enablepopup: ElementRef;
  @ViewChild('closepopup') closepopup: ElementRef;
  @ViewChild('closeCategory') closeCategory: any;
  @ViewChild('threadsearch', { static: true }) threadsearch: ElementRef;
  UserID = "107";
  @Input() defaultShow = true;
  @Input() search = ''
  activereply;
  commenttext = '';
  PostComment = ''
  replyflag = false;
  selectthread;
  searchText = '';
  isAdults: boolean = true; 
  
  path = '';
  posts = [];
  selectIndex = 0;
  token = '';
  urlT: any
  address :any;
  isLoggedIn: boolean = false;
  activeCommentPost;
  actionType: string = '';
  buttonText:string ="All threads"
  startRecord=1;
  endRecord=20;
  threadlist = [{
    value: 0, label: 'All threads'
  }, {
    value: 1, label: 'Threads I’m following'
  }, {
    value: 2, label: 'My threads'
  }, {
    value: 3, label: 'Reflections'
  }];
  categoryList= [];
  isloggedIn = false;
  searchinp = '';
  public user: any
  public userId = 100
  public idToken: any
  public email: any;
  public showAlert = false
  public loginResponse: any
  public socialFirstName: any;
  public socialLastName: any;
  public socialEmail: any;
  public userName: any;
  public video = 3;
  public audio = 4;
  public password: any;
  public saveUsername = false;
  public mediaAudio = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com"
  public mediaVideo = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com"
  public moduleList = [];
  public alertMsg: any
  public enableAlert:any=false;
  public qrList: any
  public goToPage: any
  public benefitsWisdomP: any
  public discoveringP: any
  public guideP: any
  public identityP: any
  public keyP: any
  public fiveCirclesP: any
  public hcwhP: any
  public percentage: any
  searchInput : any='';
  mediaPercent: any
  freeScreens = []
  isWelcomePopup = false;
  public isSubscribe = false
  public modaldata = {}
  public x = []
  public text = 2
  public question = 6
  public reflection = 5
  public feedbackSurvey = 7
  public moduleId = 7
  public bookmarks = []
  public resume = []
  public bookmarkLength: any;
  public isLoading:boolean = false;
  public programType :ProgramType.Adults;
  isFreeTrialEnable = false;
  openDropdownIndex: number | null = null;
  editingPostIndex: number | null = null;
  editingItem: any = null;
  editingPostText: string = '';
  isProcessing: boolean = false;
  submissionState: 'processing' | 'success' | 'error' | '' = '';
  modalText: string = '';
  getTagClass(name: string): string {
    if (!name) return '';
    const n = name.trim().toLowerCase();
    switch (n) {
      case 'manage your mental health':
        return 'tag-mental-health';
      case 'relationships':
        return 'tag-relationships';
      case 'work & leadership':
      case 'work and leadership':
        return 'tag-work-leadership';
      case 'be happier':
        return 'tag-be-happier';
      case 'habits & addiction':
      case 'habits and addiction':
        return 'tag-habits-addiction';
      case 'deal with loss':
      case 'dealing with loss':
        return 'tag-dealing-loss';
      case 'meditation':
        return 'tag-meditation';
      case 'manage your emotions':
      case 'managing emotions':
        return 'tag-managing-emotions';
      case 'nuggets of inspiration':
        return 'tag-nuggets-inspiration';
      case 'ask our expert coaches':
      case 'ask a coach':
        return 'tag-ask-coach';
      case 'other':
        return 'tag-other';
      default:
        return '';
    }
  }

  constructor(private serivce: ForumService, public platform: Platform, private router: Router,
    private ngNavigatorShareService: NgNavigatorShareService, private location: Location,  private navigationService:NavigationService,
    private meta: Meta, private title: Title, public service: OnboardingService, public logeventservice: LogEventService,
    public cd: ChangeDetectorRef, private modalService: ModalService) {
      this.router.events
      .pipe(filter(e => e instanceof NavigationStart))
      .subscribe((e: NavigationStart) => {
       const navigation  = this.router.getCurrentNavigation();
       this.programType = navigation.extras.state ? navigation.extras.state.programType : ProgramType.Adults;
      });
    this.UserID = localStorage.getItem('userId');
    
    this.token = localStorage.getItem("shareToken");
    this.address = this.router.url;
    this.isLoggedIn = localStorage.getItem('isloggedin') == 'T' ? true : false;

    this.isloggedIn = localStorage.getItem('isloggedin') == 'T' ? true : false;
    this.categoryList = this.serivce.GetTagList();
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
  }
  ngOnInit() {
    this.title.setTitle('Online Community for Wisdom Exchange')
    this.meta.updateTag({ property: 'title', content: 'Online Community for Wisdom Exchange' })
    this.meta.updateTag({ property: 'description', content: 'Join our discussion forum for inspirational discussions and exchange of wisdom on personal growth and mental wellness. Find emotional support and engage in mindful conversations.' })
    this.meta.updateTag({ property: 'keywords', content: 'Online community,Discussion forum,Wisdom exchange,Inspirational discussions,Self-improvement forum,Personal growth community,Mental wellness community,Mindful conversations,Emotional support forum,Personal development discussions' })
    this.userName = localStorage.getItem('name');
    this.selectthread = this.threadlist[0].value;
    if(this.defaultShow){
      this.getLazyLoadedRecords();
    }else{
        this.getForumSearchData();
    }

    SharedService.setDataInLocalStorage(Constant.NaviagtedFrom, this.router.url);
    this.isSubscribe = localStorage.getItem('Subscriber') === '1' ? true : false;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.search && !changes.search.firstChange) {
      if (!this.defaultShow) {
        this.getForumSearchData();
      }
    }
  }
  like(item, index) {
    if (this.isLoggedIn) {
      this.serivce.likePost({ PostID: item.PostID, UserID: this.UserID }).subscribe(res => {
        if (res) {
          this.posts[index].PostLikeCount = res;
          this.posts[index].Liked = this.posts[index].Liked == "1" ? "0" : "1";
        }
      });
    }else{
      this.enableAlert = true;
    }
  }

  reportpost(item, actionType) {
    if(this.isLoggedIn){
    if (this.actionType == '' || this.actionType == actionType) {
      this.replyflag = !this.replyflag;
    }
    this.actionType = actionType;
    this.activereply = item;
    console.log(item);
  } else{
    this.enableAlert = true;
  }
  }

  getForumSearchData() {
    this.isLoading = true;
    this.serivce.getposts(0,this.search,null).subscribe((res) => {
      if (res) {
       this.posts = this.serivce.FormatForumPostData(res);
      }
      this.isLoading = false;
    }, _ => {
      this.isLoading = false;
    });
  }

  list(data) {
    if (data) {
      let temp = [];
      let flag = false;
      data.forEach(element => {
        temp.forEach((res) => {
          if (res.PostID === Number(element.ParentPOstID)) {
            res.child.push(element);
            flag = true;
          }
        })
        if (!flag) {
          element.child = [];
          temp.push(element);
          flag = false;
        } else {
          flag = false;
        }

      });
      temp.sort(function (a, b) {
        return b.PostID - a.PostID;
      });
      this.posts = temp;
    }
  }



  DeletePost(item, index?: number){
    item.isDeleting = true;
    this.openDropdownIndex = null;
    this.serivce.deletePost(item.PostID).subscribe(res=>{
      if(res){
          const idx = (typeof index === 'number') ? index : this.posts.findIndex(p => p.PostID === item.PostID);
          if (idx > -1) {
            this.posts.splice(idx, 1);
          }
      } else {
        item.isDeleting = false;
      }
    }, _ => {
      item.isDeleting = false;
    })
  }

  commentPost(item) {
    this.replyflag = !this.replyflag;
    this.activeCommentPost = item;
  }
  commentPostSave(item) {
  }

  postreport(item, actionType) {
    console.log(item);
    this.isProcessing = true;
    this.submissionState = 'processing';
    this.modalText = 'Submitting...';
    
    if (this.actionType == 'report') {
      this.serivce.reportPost({ PostID: item.PostID, UserID: this.UserID, Comment: this.commenttext }).subscribe(res => {
        if (res) {
          this.replyflag = false;
          this.getAllposts(0);
          this.actionType = '';
          this.submissionState = 'success';
          this.modalText = 'submitted successfully.';
          this.isProcessing = false;
          this.openPostedSuccessfullyModal();
        }
      }, _ => { 
        this.submissionState = 'error';
        this.modalText = 'Something went wrong. Please try again.';
        this.isProcessing = false; 
        this.openPostedSuccessfullyModal();
      });
    }
    else {
      this.serivce.submitPost({ POST: this.PostComment, UserId: this.UserID, ParentPostID: item.PostID }).subscribe(res => {
        if (res) {
          this.getAllposts(0);
          this.actionType = '';
          this.PostComment = '';
          this.replyflag = false;
          this.submissionState = 'success';
          this.modalText = 'Submitted successfully. Your comment will be visible after moderation.';
          this.isProcessing = false;
          this.openPostedSuccessfullyModal();
        }
      }, _ => { 
        this.submissionState = 'error';
        this.modalText = 'Something went wrong. Please try again.';
        this.isProcessing = false; 
        this.openPostedSuccessfullyModal();
      })
    }
  }

  follow(item, index) {
    if(this.isLoggedIn){
      this.serivce.followPost({ PostID: item.PostID, UserID: this.UserID }).subscribe(res => {
        if (res == "1") {
          this.posts[index].Followed = item.Followed == '1' ? '0' : '1';
        }
      });
    }
    else{
      this.enableAlert=true;
    }
  }

  postnavigate(item) {
    this.serivce.postdataSource.next(item);
    this.router.navigateByUrl(SharedService.getUrlfromFeatureName('forum/forum-thread')+'/'+item.PostID);
  }

  onFocusOutEvent(){
    this.logeventservice.logEvent("Search")
    if(this.searchInput==''){
       this.getAllRecords();
    }else{
      this.serivce.getposts(0,this.searchInput,null).subscribe((res) => {
        if (res) {
         this.posts = this.serivce.FormatForumPostData(res);
        }
      });
    }
  }

  shareOnThread(item){
      this.path = `https://happierme.app/${SharedService.getprogramName()}/forum/forum-thread/${item.PostID}`;
    // } else {
    //   this.path = "http://humanwisdom.me/"  + this.address+"/"+item.PostID;
    // }

    this.ngNavigatorShareService.share({
      title: 'HappierMe Program',
      text: "Hi! I've been using the HappierMe app and wanted to share something you may find interesting. Let me know what you think",
      url: this.path
    }).then((response) => {
      
    })
      .catch((error) => {
        console.log(error);
      });
  }

  gotToProfile(item){
    //localStorage.setItem('forumUserID',item.UserId);

    //this.router.navigate(['/forum/profile', concat, '1', 'T', title])
    this.logeventservice.logEvent("click_UserProfile")
    this.router.navigate([SharedService.getUrlfromFeatureName('/forum/profile/'),item.UserId]);
  }

  getAllposts(index) {
    this.serivce.getposts(this.selectthread, null, this.UserID).subscribe((res) => {
      if (res) {
       this.posts=this.serivce.FormatForumPostData(res);

      }
    });
  }

  getAllRecords(){
    this.startRecord=1;
    this.endRecord = 20;
    this.buttonText ="All threads";
    this.searchInput ='';
    setTimeout(() => {
      this.closeCategoryModal();
    }, 100);
    this.posts= [];
    this.getLazyLoadedRecords();
  }

  getLazyLoadedRecords(){
    if(this.posts.length==0){
       this.isLoading =  true;
    }
    this.serivce.getForumRecords(this.startRecord,this.endRecord).subscribe((res) => {
      if (res) {
        this.posts = [...this.posts, ...this.serivce.FormatForumPostData(res)];
        this.isLoading = false;
       }
    });
  }

  DisabledComment(item){
    return SharedService.DisabledComment(item);
  }


  filterBasedOnTags(tagId,name){
    this.logeventservice.logEvent("click_AllThread")
    const data = this.categoryList.filter(x=>x.value==tagId);
    /* if(data!=null && data.length>0){
      this.buttonText =  data[0].label;
    } */
    this.buttonText =name;

    setTimeout(() => {
      this.closeCategoryModal();
    }, 100);
    this.serivce.getposts(0, null, this.UserID).subscribe((res) => {
      if (res) {
        const filteredData = res.filter(x=>parseInt(x.TagIds) == tagId);
      this.posts =  this.serivce.FormatForumPostData(filteredData);

      }
    });
  }

  onChange(e) {
    this.selectIndex = e;
    this.selectthread= e;
    const data = this.threadlist.filter(x=>x.value==e);
    if(data!=null && data.length>0){
      this.buttonText=data[0].label;
    }else{
      this.buttonText = "All threads";
    }
    this.getAllposts(e);
    setTimeout(() => {
      this.closeCategoryModal();
    }, 100);
  }


  share() {

    /*  if (!this.ngNavigatorShareService.canShare() &&  (this.platform.isBrowser) ) {
       alert(`This service/api is not supported in your Browser`);
       return;
     } */
    if (this.urlT) {
      console.log("url")
      this.path = "https://happierme.app/" + this.address + `?t=${this.urlT}`

    }
    else {
      console.log("local")
      this.path = "https://happierme.app/" + this.address + `?t=${this.token}`
    }

    this.ngNavigatorShareService.share({
      title: 'HappierMe Program',
      text: "Hi! I've been using the HappierMe app and wanted to share something you may find interesting. Let me know what you think",
      url: this.path
    }).then((response) => {
      
    })
      .catch((error) => {
        console.log(error);
      });
  }
  onEnterKey(event: Event): void {
    event.preventDefault();
    this.onFocusOutEvent();
  }

  shareLandingPage(){
     if (this.urlT) {
      console.log("url")
      this.path = "https://happierme.app/" + this.address + `?t=${this.urlT}`

    }
    else {
      console.log("local")
      this.path = "https://happierme.app/" + this.address + `?t=${this.token}`
    }

    this.ngNavigatorShareService.share({
      title: 'HappierMe Program',
      text: "Hi! I've been using the HappierMe app and wanted to share something you may find interesting. Let me know what you think",
      url: this.path
    }).then((response) => {
      
    })
      .catch((error) => {
        console.log(error);
      });
  }

  clearSearch(){
    this.searchInput = '';
    this.getAllposts(0);
  }

  getOrderbyLatestPost(childs) {
    childs.sort(function (a, b) {
      return b.PostID - a.PostID;
    });
    return childs;
  }

  goBack() {
      var url = this.navigationService.navigateToBackLink();
      if (url == null) {
        this.location.back();
      }else{
        this.router.navigate([url]);
      }
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.openSignuploginModal();
    }
  }

  fbLogin(){

  }

  googleLogin(){
    
  }

  // fbLogin() {
  //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  //   this.authService.authState.subscribe((user) => {
  //     // this.user = user;
  //     this.user = user;
  //     this.idToken = user.authToken
  //     this.socialFirstName = user.firstName
  //     this.socialLastName = user.lastName
  //     this.socialEmail = user.email
  //     if (user.email !== undefined) {
  //       this.service.verifyFb({
  //         "TokenID": this.idToken,
  //         "FName": this.socialFirstName,
  //         "LName": this.socialLastName,
  //         "Email": this.socialEmail,
  //         "VCode": "",
  //         "Pwd": ""
  //       })
  //         .subscribe(res => {
  //           if (res) {
  //             this.loginResponse = res
  //             localStorage.setItem('socialLogin', 'T');
  //             localStorage.setItem("mediaAudio", JSON.stringify(this.mediaAudio))
  //             localStorage.setItem("mediaVideo", JSON.stringify(this.mediaVideo))
  //             localStorage.setItem("video", JSON.stringify(this.video))
  //             localStorage.setItem("audio", JSON.stringify(this.audio))
  //             localStorage.setItem("remember", 'T')
  //             localStorage.setItem('guest', 'F');
  //             localStorage.setItem('btnclick', 'F')
  //             localStorage.setItem("FnName", this.socialFirstName)
  //             localStorage.setItem("LName", this.socialLastName)
  //             localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
  //             sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
  //             localStorage.setItem("token", JSON.stringify(this.loginResponse.access_token))
  //             localStorage.setItem("Subscriber", this.loginResponse.Subscriber)
  //             localStorage.setItem("userId", JSON.stringify(this.userId))
  //             localStorage.setItem("RoleID", JSON.stringify(res.RoleID))
  //             localStorage.setItem("email", this.socialEmail)
  //             localStorage.setItem("pswd", '')
  //             localStorage.setItem("name", this.loginResponse.Name)
  //             localStorage.setItem("first", 'T')
  //             if (parseInt(this.loginResponse.UserId) == 0) {
  //               this.showAlert = true
  //               window.alert('You have enetered wrong credentials. Please try again.')
  //               this.email = ""
  //               this.password = ""
  //             }
  //             else {
  //               this.showAlert = false
  //               this.userId = this.loginResponse.UserId
  //               this.userName = this.loginResponse.Name
  //               localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
  //               sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
  //               localStorage.setItem("userId", JSON.stringify(this.userId))
  //               localStorage.setItem("token", JSON.stringify(this.loginResponse.access_token))
  //               if (this.saveUsername == true) {
  //                 localStorage.setItem("userId", JSON.stringify(this.userId))
  //                 localStorage.setItem("userEmail", JSON.stringify(this.socialEmail))
  //                 localStorage.setItem("userName", JSON.stringify(this.userName))

  //               }
  //               else {
  //                 sessionStorage.setItem("userId", JSON.stringify(this.userId))
  //                 sessionStorage.setItem("userEmail", JSON.stringify(this.socialEmail))
  //                 sessionStorage.setItem("userName", JSON.stringify(this.userName))
  //               }
  //               let acceptCookie = localStorage.getItem('activeCode');
  //               let subscribePage = localStorage.getItem('subscribepage');
  //               if (acceptCookie === 'T' || subscribePage === 'T') {
  //                 localStorage.setItem("isloggedin", 'T')
  //                 if (acceptCookie === 'T') {
  //                   localStorage.setItem("activeCode", 'F')
  //                 }
  //                 if (subscribePage === 'T') {
  //                   localStorage.setItem("subscribepage", 'F')
  //                 }
  //               } else {
  //                 localStorage.setItem("isloggedin", 'T')
  //               }
  //             }
  //             window.location.reload();
  //           }

  //         })
  //     } else {
  //       window.alert('Please ensure that you use an email based authentication with your Auth provider or try another method')
  //     }
  //   });
  // }

  // googleLogin() {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  //   this.authService.authState.subscribe((user) => {
  //     this.user = user;
  //     this.idToken = user.idToken
  //     this.socialFirstName = user.firstName
  //     this.socialLastName = user.lastName
  //     this.socialEmail = user.email
  //     this.service.verifyGoogle({
  //       "TokenID": this.idToken,
  //       "FName": this.socialFirstName,
  //       "LName": this.socialLastName,
  //       "Email": this.socialEmail,
  //       "VCode": "",
  //       "Pwd": ""
  //     })
  //       .subscribe(res => {
  //         if (res) {
  //           this.loginResponse = res
  //           localStorage.setItem('guest', 'F');
  //           localStorage.setItem("remember", 'T')
  //           localStorage.setItem('socialLogin', 'T');
  //           localStorage.setItem("mediaAudio", JSON.stringify(this.mediaAudio))
  //           localStorage.setItem("mediaVideo", JSON.stringify(this.mediaVideo))
  //           localStorage.setItem("video", JSON.stringify(this.video))
  //           localStorage.setItem("audio", JSON.stringify(this.audio))
  //           localStorage.setItem('btnclick', 'F')
  //           localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
  //           sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
  //           localStorage.setItem("token", JSON.stringify(this.loginResponse.access_token))
  //           localStorage.setItem("Subscriber", this.loginResponse.Subscriber)
  //           localStorage.setItem("userId", JSON.stringify(this.userId))
  //           localStorage.setItem("email", this.socialEmail)
  //           localStorage.setItem("FnName", this.socialFirstName)
  //           localStorage.setItem("RoleID", JSON.stringify(res.RoleID))
  //           localStorage.setItem("LName", this.socialLastName)
  //           localStorage.setItem("pswd", '')
  //           localStorage.setItem("name", this.loginResponse.Name)
  //           localStorage.setItem("first", 'T')
  //           if (parseInt(this.loginResponse.UserId) == 0) {
  //             this.showAlert = true
  //             window.alert('You have enetered wrong credentials. Please try again.')
  //             this.email = ""
  //             this.password = ""
  //           }
  //           else {
  //             this.showAlert = false
  //             this.userId = this.loginResponse.UserId
  //             this.userName = this.loginResponse.Name
  //             localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
  //             sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
  //             localStorage.setItem("userId", JSON.stringify(this.userId))
  //             localStorage.setItem("token", JSON.stringify(this.loginResponse.access_token))
  //             if (this.saveUsername == true) {
  //               localStorage.setItem("userId", JSON.stringify(this.userId))
  //               localStorage.setItem("userEmail", JSON.stringify(this.socialEmail))
  //               localStorage.setItem("userName", JSON.stringify(this.userName))

  //             }
  //             else {
  //               sessionStorage.setItem("userId", JSON.stringify(this.userId))
  //               sessionStorage.setItem("userEmail", JSON.stringify(this.socialEmail))
  //               sessionStorage.setItem("userName", JSON.stringify(this.userName))
  //             }
  //             let acceptCookie = localStorage.getItem('activeCode');
  //             let subscribePage = localStorage.getItem('subscribepage');
  //             if (acceptCookie === 'T' || subscribePage === 'T') {
  //               localStorage.setItem("isloggedin", 'T')
  //               if (acceptCookie === 'T') {
  //                 localStorage.setItem("activeCode", 'F')
  //               }
  //               if (subscribePage === 'T') {
  //                 localStorage.setItem("subscribepage", 'F')
  //               }
  //             } else {
  //               localStorage.setItem("isloggedin", 'T')
  //             }
  //           }
  //           window.location.reload();
  //         }
  //       })
  //   },
  //     error => console.log(error),
  //     () => {
  //     });
  // }

  signInWithApple() {
    const CLIENT_ID = "humanwisdom.web.service"
    const REDIRECT_API_URL = "https://www.humanwisdom.info/api/verifyAppleToken_html"


    window.open(
      `https://appleid.apple.com/auth/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_API_URL)}&response_type=code id_token&scope=name email&response_mode=form_post`,
      '_self'
    );
  }

  loginpage() {
    this.closepopup.nativeElement.click();
    this.router.navigate([SharedService.getUrlfromFeatureName('/onboarding/login')])
  }

  getAlertcloseEvent($event) {
    this.isFreeTrialEnable = false;
    if ($event == 'cancel') {
      this.enableAlert = false;
    }
    else if ($event == 'ok') {
      this.enableAlert = false;
      this.loginpage();
    }
    else {
      this.enableAlert = false;
        // this.loginpage();
    }
  }

  closeCategoryModal(){
    this.closeCategory.nativeElement.click();
  }

  // Modal service methods
  openSignuploginModal(event?: Event) {
    this.modalService.openModal('signuplogin', event);
  }

  closeSignuploginModal() {
    this.modalService.closeModal('signuplogin');
  }

  openChooseCategoryModal(event?: Event) {
    this.modalService.openModal('choose_category', event);
  }

  closeChooseCategoryModal() {
    this.modalService.closeModal('choose_category');
  }

  openPostedSuccessfullyModal(event?: Event) {
    this.modalService.openModal('posted_successfully', event);
  }

  closePostedSuccessfullyModal() {
    this.modalService.closeModal('posted_successfully');
  }

  editPost(modelData,index) {
    var model = {
      "PostId": modelData.PostID,
      "Post": modelData.POST,
      "UserId":modelData.UserId,
      "ParentPostID": "0",
      "ReflectionID": "0",
      "TagIds": modelData.TagIds
    };
    this.posts[index].isEditPost = false;
    this.serivce.UpdatePost(model).subscribe(res => {
      if (res) {
       this.posts[index].Post = model.Post;
      }
    });
  }

  callEditPost(item,index){
    this.openEditPostModal(item, index);
  }

  onEditClick(event: Event, item: any, index: number) {
    event.stopPropagation();
    event.preventDefault();
    this.openEditPostModal(item, index, event);
    this.openDropdownIndex = null;
  }

  onDeleteClick(event: Event, item: any) {
    event.stopPropagation();
    event.preventDefault();
    this.DeletePost(item);
  }

  toggleDropdown(index: number, event?: Event) {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    this.openDropdownIndex = this.openDropdownIndex === index ? null : index;
  }

  startNewThread(tagId){
    if(tagId==5)
      this.logeventservice.logEvent("click_AskExpert")
    else
      this.logeventservice.logEvent("click_NewThread")

    if(this.isSubscribe){
      localStorage.setItem('tagId',tagId);
      this.router.navigate([SharedService.getUrlfromFeatureName('forum/forum-thread-start-new')]);
    }else  
      if(!this.isLoggedIn || !this.isSubscribe){
      this.isFreeTrialEnable = true;
      this.enableAlert= true;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    // Check if the user has scrolled to the bottom of the page
    if (this.defaultShow && this.isScrolledToBottom() && this.searchInput == '' && this.buttonText == "All threads") {
      this.isLoading=true;
     this.startRecord = this.startRecord+20;
     this.endRecord = this.startRecord+ 20;
     this.getLazyLoadedRecords();
    }
  }

  private isScrolledToBottom(): boolean {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const scrollTop = 'pageYOffset' in window ? window.pageYOffset : document.documentElement.scrollTop || body.scrollTop;

    return docHeight - scrollTop - windowHeight < 1;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (target && (target as any).closest && (target as any).closest('.dropdown')) {
      return;
    }
    this.openDropdownIndex = null;
  }

  openEditPostModal(item: any, index: number, event?: Event) {
    this.editingItem = item;
    this.editingPostIndex = index;
    this.editingPostText = item && (item.POST ?? item.Post ?? '');
    this.modalService.openModal('edit_post', event);
  }

  closeEditPostModal() {
    this.modalService.closeModal('edit_post');
    this.editingItem = null;
    this.editingPostIndex = null;
    this.editingPostText = '';
  }

  saveEditedPost() {
    if (this.editingItem == null || this.editingPostIndex == null) {
      return;
    }
    const updated = this.editingPostText?.trim() ?? '';
    const model = {
      PostId: this.editingItem.PostID,
      Post: updated,
      UserId: this.editingItem.UserId,
      ParentPostID: '0',
      ReflectionID: '0',
      TagIds: this.editingItem.TagIds
    } as any;
    const idx = this.editingPostIndex;
    this.serivce.UpdatePost(model).subscribe(res => {
      if (res) {
        if (this.posts[idx]) {
          this.posts[idx].POST = updated;
          this.posts[idx].Post = updated;
          this.posts[idx].isEditPost = false;
        }
        this.closeEditPostModal();
      }
    });
  }
}
