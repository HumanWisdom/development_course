import { Component, OnInit } from '@angular/core';
import { Platform } from "@angular/cdk/platform";
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { ForumService } from '../forum.service';
import { OnboardingService } from "../../services/onboarding.service";
import { ProgramType } from "../../models/program-model";
import { environment } from '../../../environments/environment';
import { SharedService } from '../../services/shared.service';
import { NavigationService } from '../../services/navigation.service';
import { Constant } from '../../../shared/services/constant';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {
  UserID = "107";
  activereply;
  commenttext = '';
  PostComment = ''
  replyflag = false;
  selectthread;
  searchText = '';
  path = '';
  posts = [];
  selectIndex = 0;
  token = localStorage.getItem("shareToken");
  urlT: any
  address: any;
  isLoggedIn: boolean = false;
  activeCommentPost;
  actionType: string = '';
  buttonText: string = "All threads"
  searchinp = '';
  public user: any
  public userId = "";
  public idToken: any
  public email: any;
  public showAlert = false
  public userName: any;
  public video = 3;
  public audio = 4;
  public password: any;
  public saveUsername = false;
  public mediaAudio = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com"
  public mediaVideo = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com"
  public moduleList = [];
  public resume = []
  public bookmarkLength: any;
  profileData: any = [];
  profileImage: string='';
  enableAlert: boolean;
  profileUsername:string="";
  programType = ProgramType.Adults
  isAdults:boolean = false;
  isProcessing: boolean = false;
  submissionState: 'processing' | 'success' | 'error' | '' = '';
  modalText: string = '';
  constructor(private route: ActivatedRoute, private forumService: ForumService,
     public platform: Platform, private router: Router,
    private ngNavigatorShareService: NgNavigatorShareService, 
    private location: Location, public onboardingService: OnboardingService,
    private navigationService:NavigationService,
    private modalService: ModalService
  ) {
    this.userId= this.route.snapshot.paramMap.get('userId');
    this.address = this.router.url;
    this.userName = localStorage.getItem('name');
    this.isLoggedIn = localStorage.getItem('isloggedin') == 'T' ? true : false;
    if (this.userId != null) {
      setTimeout(() => {
        this.onboardingService.getuser(this.userId).subscribe((res) => {
          // this.profileImage = res[0]['UserImagePath'].split('\\')[1] + '?' + (new Date()).getTime();
          this.profileImage = res[0]['UserImagePath'].replace('\\','/')+ '?' + (new Date()).getTime();
        })
      }, 100);
    }
  }

  ngOnInit() {
    SharedService.setDataInLocalStorage(Constant.NaviagtedFrom, this.router.url);

    this.isAdults = SharedService.isAdultProgram();
    this.getAllPosts(2, this.userId);
  }


  shareOnThread(item){
    if(environment.production){
      this.path = "https://humanwisdom.me/forum/forum-thread/"+item.PostID;
    }else{
      this.path = "https://staging.happierme.app/forum/forum-thread/"+item.PostID;
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


  share() {
    if (this.urlT) {
      this.path = "https://humanwisdom.me/" + this.address + `?t=${this.urlT}`
    }
    else {
      this.path = "https://humanwisdom.me/" + this.address + `?t=${this.token}`
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


  getLocalPostDate(date: string) {
    var dateLocal = new Date(date);
    var newDate = new Date(dateLocal.getTime() - dateLocal.getTimezoneOffset() * 60 * 1000);
    return newDate;
  }

  reportpost(item, actionType) {
    if (this.isLoggedIn) {
      if (this.actionType == '' || this.actionType == actionType) {
        this.replyflag = !this.replyflag;
      }
      this.actionType = actionType;
      this.activereply = item;
      console.log(item);
    } else {
      this.enableAlert = true;
    }
  }

  DeletePost(item) {
    this.forumService.deletePost(item.PostID).subscribe(res => {
      if (res) {
        this.getAllPosts(2, this.userId)
      }
    })
  }

  commentPost(item) {
    this.replyflag = !this.replyflag;
    this.activeCommentPost = item;
  }
  commentPostSave(item) {

  }
  getAllPosts(index, userID) {
    this.forumService.getposts(index, null, userID).subscribe((res) => {
      if (res) {
        this.posts = this.forumService.FormatForumPostData(res);
        this.profileUsername = this.posts[0].UserName;
      }
    });
  }

  DisabledComment(item){
   return SharedService.DisabledComment(item);
 }

  postreport(item, actionType) {
    console.log(item);
    this.replyflag = !this.replyflag;
    this.isProcessing = true;
    this.submissionState = 'processing';
    this.modalText = 'Submitting...';

    if (this.actionType == 'report') {
      this.forumService.reportPost({ PostID: item.PostID, UserID: this.UserID, Comment: this.commenttext }).subscribe(res => {
        if (res) {
          this.replyflag = !this.replyflag;
          this.getAllPosts(2, this.userId);
          this.actionType = '';
          this.submissionState = 'success';
          this.modalText = 'submitted successfully';
          this.isProcessing = false;
          this.openPostedSuccessfullyModal();
        }
      }, _ => {
        this.submissionState = 'error';
        this.modalText = 'Something went wrong. Please try again';
        this.isProcessing = false;
        this.openPostedSuccessfullyModal();
      });
    }
    else {
      this.forumService.submitPost({ POST: this.PostComment, UserId: this.UserID, ParentPostID: item.PostID }).subscribe(res => {
        if (res) {
          this.getAllPosts(2, this.userId);
          this.actionType = '';
          this.PostComment = '';
          this.submissionState = 'success';
          this.modalText = 'Submitted successfully. Your comment will be visible after moderation';
          this.isProcessing = false;
          this.openPostedSuccessfullyModal();
        }
      }, _ => {
        this.submissionState = 'error';
        this.modalText = 'Something went wrong. Please try again';
        this.isProcessing = false;
        this.openPostedSuccessfullyModal();
      })
    }
  }
  follow(item, index) {
    if (this.isLoggedIn) {
      this.forumService.followPost({ PostID: item.PostID, UserID: this.UserID }).subscribe(res => {
        if (res == "1") {
          this.posts[index].Followed = item.Followed == '1' ? '0' : '1';
        }
      });
    }
    else {
      this.enableAlert = true;
    }
  }

  like(item, index) {
    if (this.isLoggedIn) {
      this.forumService.likePost({ PostID: item.PostID, UserID: this.UserID }).subscribe(res => {
        if (res) {
          this.posts[index].PostLikeCount = res;
          this.posts[index].Liked = this.posts[index].Liked == "1" ? "0" : "1";
        }
      });
    } else {
      this.enableAlert = true;
    }
  }


  postnavigate(item) {
    this.forumService.postdataSource.next(item);
    this.router.navigateByUrl('/forum/forum-thread/'+item.PostID);
    // this.router.navigateByUrl('/forum/forum-thread',{ state: { programType: this.programType }});
  }

  goBack() {
    var url = this.navigationService.goBack();
    if (url == null) {
      this.location.back();
    }else{
      this.router.navigate([url]);
    }
  }

  // Modal service methods
  openPostedSuccessfullyModal(event?: Event) {
    this.modalService.openModal('posted_successfully', event);
  }

  closePostedSuccessfullyModal() {
    this.modalService.closeModal('posted_successfully');
  }

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
}
