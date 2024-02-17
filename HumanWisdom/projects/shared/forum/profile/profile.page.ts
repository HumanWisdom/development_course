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
  constructor(private route: ActivatedRoute, private forumService: ForumService, public platform: Platform, private router: Router,
    private ngNavigatorShareService: NgNavigatorShareService, private location: Location, public onboardingService: OnboardingService
  ) {
    this.userId= this.route.snapshot.paramMap.get('userId');
    this.address = this.router.url;
    this.userName = localStorage.getItem('name');
    this.isLoggedIn = localStorage.getItem('isloggedin') == 'T' ? true : false;
    if (this.userId != null) {
      setTimeout(() => {
        this.onboardingService.getuser(this.userId).subscribe((res) => {
          this.profileImage = res[0]['UserImagePath'].split('\\')[1] + '?' + (new Date()).getTime();
        })
      }, 100);
    }
  }

  ngOnInit() {
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
    console.log(response);
  })
    .catch((error) => {
      console.log(error);
    });
}


  share() {
    if (this.urlT) {
      console.log("url")
      this.path = "https://humanwisdom.me/" + this.address + `?t=${this.urlT}`
    }
    else {
      console.log("local")
      this.path = "https://humanwisdom.me/" + this.address + `?t=${this.token}`
    }

    this.ngNavigatorShareService.share({
      title: 'HappierMe Program',
      text: "Hi! I've been using the HappierMe app and wanted to share something you may find interesting. Let me know what you think",
      url: this.path
    }).then((response) => {
      console.log(response);
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
    if (this.actionType == 'report') {
      this.forumService.reportPost({ PostID: item.PostID, UserID: this.UserID, Comment: this.commenttext }).subscribe(res => {
        if (res) {
          this.replyflag = !this.replyflag;
          this.getAllPosts(2, this.userId);
          this.actionType = '';
        }
      });
    }
    else {
      this.forumService.submitPost({ POST: this.PostComment, UserId: this.UserID, ParentPostID: item.PostID }).subscribe(res => {
        if (res) {
          this.getAllPosts(2, this.userId);
          this.actionType = '';
          this.PostComment = '';
        }
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
    this.router.navigateByUrl('/forum/forum-thread',{ state: { programType: this.programType }});
  }
}
