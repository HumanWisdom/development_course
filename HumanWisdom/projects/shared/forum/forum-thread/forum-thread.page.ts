import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ForumService } from '../forum.service';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { filter } from 'rxjs/operators';
import { ProgramType } from '../../models/program-model';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-forum-thread',
  templateUrl: './forum-thread.page.html',
  styleUrls: ['./forum-thread.page.scss'],
})
export class ForumThreadPage implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer!: ToastContainerDirective;
  @ViewChild('toastContainerRef', { static: true }) toastContainerRef!: ElementRef;
  @ViewChild('postModal') postModal: any;
  list: any;
  isPostEditable: boolean = true;
  editCommentId: string = '';
  activereply;
  PostComment = '';
  UserName = '';
  replyflag = false;
  programType: ProgramType.Adults;
  commentflag = false;
  isLoggedIn = false;
  enableAlert = false;
  commenttext = '';
  isEditPost = false;
  activecomment;
  isEditComment = true;
  sub: Subscription;
  userID = '107';
  posttread = {
    PostID: '',
    POST: '',
    PostDate: '',
    ParentPOstID: '',
    PostLikeCount: '',
    ReplyCount: '',
    UserImage: null,
    UserName: '',
    Followed: '0',
    Liked: '0',
    UserId: '',
    Anonymous: '0',
    TagName: '',
    ImagePath: '',
    isEditPost:false,
    TagIds:''
  }
  posttext = '';
  reportText = '';
  address = "";
  token = "";
  urlT = "";
  path = "";
  sharedPostId = '';
  isReportPost = false;
  isAdults: boolean = true; 

  constructor(private service: ForumService, private router: Router, private activateRoute: ActivatedRoute, private ngNavigatorShareService: NgNavigatorShareService,) {
    this.userID = localStorage.getItem('userId');
    this.token = localStorage.getItem("shareToken");
    this.sharedPostId = this.activateRoute.snapshot.paramMap.get('sharedPostId');
    this.address = this.router.url;
    this.UserName = localStorage.getItem('name');
    this.isLoggedIn = localStorage.getItem('isloggedin') == 'T' ? true : false;
    this.service.toastrService.overlayContainer = this.toastContainer;
    this.router.events
      .pipe(filter(e => e instanceof NavigationStart))
      .subscribe((e: NavigationStart) => {
        const navigation = this.router.getCurrentNavigation();
        this.programType = navigation.extras.state ? navigation.extras.state.programType : ProgramType.Adults;
      });

      if (SharedService.ProgramId == ProgramType.Adults) {
        this.isAdults = true;
      } else {
        this.isAdults = false;
      }
  }

  ngOnInit() {
    this.getPostData()
  }
  enableCommentTextBox() {
    this.isReportPost = false;
    this.PostComment = "";
    if (this.isLoggedIn) {
      /* if (this.isEditComment) {
        this.isEditComment = false;
      } else {s
        this.isEditComment = true;
      } */
      this.isEditComment = true;
    }
  }

  DisabledComment(item){
    return SharedService.DisabledComment(item);
  }

  getPostData() {
    if (this.sharedPostId != '' && this.sharedPostId != null) {
      this.service.getPostDetail(this.sharedPostId).subscribe(res => {
        if (res) {
          this.list = [];
          this.list = res;
          if (this.list.ReplyPost == null) {
            this.list.ReplyPost = [];
          }
          this.setValueForParentPost(res.ParentPost[0])
          this.service.postdataSource.next(this.posttread);
        }
      })
    } else {
      this.reploadpage();
    }
  }

  setValueForParentPost(parentPost: any) {
    this.posttread = {
      PostID: parentPost.ParentPostID,
      POST: parentPost.ParentPost,
      PostDate: parentPost.ParentPostDate,
      ParentPOstID: '',
      PostLikeCount: parentPost.ParentPostLikeCount,
      ReplyCount: parentPost.ParentPostReplyCount,
      UserImage: '',
      UserName: parentPost.ParentPostUserName,
      Followed: parentPost.Followed,
      Liked: parentPost.Liked,
      UserId: parentPost.ParentPostUserID,
      Anonymous: parentPost.ParentPostAnonymous,
      TagName: parentPost.ParentPostTagName,
      ImagePath: parentPost.ParentPostImagePath,
      isEditPost:false,
      TagIds:parentPost.TagIds
    }
  }

  toggle(item) {
    if (this.isLoggedIn) {
    this.replyflag = !this.replyflag;
    this.activereply = item;
    }
    else {
      this.enableAlert = true;
    }
  }
  navi() {
    localStorage.setItem('postid', this.posttread.PostID);
    this.router.navigateByUrl(SharedService.getUrlfromFeatureName('/forum/forum-thread-start-new'));

  }
  routeToLanding(){
    this.router.navigate([SharedService.getUrlfromFeatureName("/forum/forum-landing/")])
  }
  like(PostID, ParentPOstID = null, index: number) {
    if (this.isLoggedIn) {
      this.service.likePost({ PostID: PostID, UserID: this.userID }).subscribe(res => {
        if (res) {
          if (ParentPOstID != null && this.list.ReplyPost.length > 0) {
            this.list.ReplyPost[index].ReplyPostLikeCount = res;
            this.list.ReplyPost[index].Liked = this.list.ReplyPost[index].Liked == "1" ? "0" : "1";
            // this.refreshPage(ParentPOstID);
          } else {
            this.posttread.PostLikeCount = res;
            this.posttread.Liked = this.posttread.Liked == "1" ? "0" : "1";
          }
        }
      });
    } else {
      this.enableAlert = true;
    }
  }

  share() {
    this.shareOnThread({ PostID: this.sharedPostId });
  }

  onChange($event) {
    this.isEditPost = false;
    var model = {
      "PostId": this.posttread.PostID,
      "Post": this.posttread.POST,
      "UserId": this.posttread.UserId,
      "ParentPostID": "0",
      "ReflectionID": "0",
      "TagIds": "0",
      "ProgID": SharedService.ProgramId
    };
    this.service.UpdatePost(model).subscribe(res => {
      if (res) {
        this.service.toastrService.success('', 'Updated Successfully');
      }
    });
  }

  editComment(ReplyPostID) {
    this.editCommentId = ReplyPostID;
  }

  getAlertcloseEvent($event) {
    if ($event == 'cancel') {
      this.enableAlert = false;
    } else {
      this.enableAlert = false;
      this.router.navigate(['/login'])
    }
  }

  onChangeComment(item) {
    this.editCommentId = "";
    var model = {
      "PostId": item.ReplyPostID,
      "Post": item.ReplyPost,
      "UserId": item.ReplyPostUserID,
      "ReflectionID": "0",
      "TagIds": "0",
      "ProgID": SharedService.ProgramId
    };
    this.service.UpdatePost(model).subscribe(res => {
      if (res) {
        this.service.toastrService.success('', 'Updated Successfully !');
      }
    });
  }

  editPost() {
    var model = {
      "PostId": this.posttread.PostID,
      "Post": this.posttread.POST,
      "UserId":this.posttread.UserId,
      "ParentPostID": "0",
      "ReflectionID": "0",
      "TagIds": this.posttread.TagIds
    };
    this.posttread.isEditPost = false;
    this.service.UpdatePost(model).subscribe(res => {
      if (res) {
      this.posttread.POST = model.Post;
      }
    });
  }


  reploadpage() {
    this.sub = this.service.postdatavalue.subscribe(res => {
      if (res) {
        this.posttread = res;
        this.sharedPostId = this.posttread.PostID;
        this.service.getPostDetail(res.PostID).subscribe(res => {
          if (res) {
            this.list = [];
            this.list = res;
            if (this.list.ReplyPost == null) {
              this.list.ReplyPost = [];
            }
            if (this.list.ReplyPost != null && this.list.ReplyPost.length > 0) {
              this.isPostEditable = false;
            } else {
              this.isPostEditable = true;
            }
          }
        })
      }
    })
  }

  deletePost() {
    this.service.deletePost(this.posttread.PostID).subscribe(res => {
      if (res == null || res == "1") {
        this.service.toastrService.success('', 'Deleted Successfully !');
        this.router.navigate(['/forum']);
      } else {
        this.service.toastrService.error('', 'Error!');
      }
    });
  }

  deleteComment(ReplyPostID) {
    this.service.deletePost(ReplyPostID).subscribe(res => {
      if (res == null || res == "1") {
        this.service.toastrService.success('', 'Deleted Successfully !');
        this.reploadpage();
      } else {
        this.service.toastrService.error('', 'Error!');
      }
    });
  }

  onFocusOut() {
    this.service.reportPost({ PostID: this.posttread.PostID, UserID: this.userID, Comment: this.commenttext }).subscribe(res => {
      if (res) {
        this.replyflag = !this.replyflag;
        this.reploadpage();
        this.commenttext = '';
      }
    });
  }

  replyPost() {
    this.list.ReplyPost.sort(function (a, b) {
      return b.ReplyPostID - a.ReplyPostID;
    });
    return this.list.ReplyPost
  }

  refreshPage(PostID) {
    this.service.getPostDetail(PostID).subscribe(res => {
      if (res) {
        ;
        this.posttread.Liked = res.ParentPost[0].Liked;
        this.posttread.PostLikeCount = res.ParentPost[0].PostLikeCount;
        this.list = res;
      }
    })
  }
  reloadthread(item) {

    let temp = item;
    temp.PostID = item.ReplyPostID;
    this.sub.unsubscribe();

    this.service.postdataSource.next(temp);
    this.reploadpage();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.sub){
      this.sub.unsubscribe();
    }
  }

  reportpost() {
    if (this.isLoggedIn) {
          this.isEditComment = false;
          this.PostComment = "";
          if (this.isLoggedIn) {
            this.isReportPost =true;
          }
    }
    else {
      this.enableAlert = true;
    }
  }

  shareOnThread(item) {
    this.path = `http://humanwisdom.me/${SharedService.getprogramName()}/forum/forum-thread/${item.PostID}`;
    // } else {
    //   this.path = "http://humanwisdom.me/"  + this.address+"/"+item.PostID;
    // }

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

  report(item) {
    console.log(item);
    if (this.isLoggedIn) {
      this.service.reportPost({ PostID: item.PostID, UserID: this.userID, Comment: this.commenttext }).subscribe(res => {
        if (res) {
          this.isReportPost = !this.isReportPost;
        }
      });
    }
  }

  commentPost() {
    if (this.isLoggedIn) {
      this.service.submitPost({ POST: this.PostComment, UserId: this.userID, ParentPostID: this.posttread.PostID }).subscribe(res => {
        if (res) {
          this.isReportPost =  false;
          this.isEditComment = false;
          this.postModal.nativeElement.click();
          this.getPostData();
          this.PostComment = '';
        }
      })
    }
    else {
      this.enableAlert = true;
    }
    
  }


  closePost(){

  }
  post(item) {
    if (this.isLoggedIn) {
      this.service.submitPost({ POST: this.posttext, UserId: item.userID, ParentPostID: item.ReplyPostID }).subscribe(res => {
        if (res) {
          this.postModal.nativeElement.click();
          this.reploadpage();
        }
      })
    }
    else {
      this.enableAlert = true;
    }
  }

  gotToProfile(UserId) {
    this.router.navigate([SharedService.getprogramName()+'/forum/profile/', UserId]);
  }

  reportComment(item) {
      if(this.isLoggedIn) 
      {
            this.service.reportPost({ PostID: this.posttread.PostID, UserID: this.userID, Comment: this.reportText }).subscribe(res => {
              if (res) {
                this.replyflag = !this.replyflag;
                this.activereply = null;
                this.reploadpage();
                this.reportText = '';
              }
            });
      }
      else 
      {
          this.enableAlert = true;
      }
    }

  callEditPost(){
    this.posttread.isEditPost =  true;
  }



  follow(item) {
    if (this.isLoggedIn) {
      this.service.followPost({ PostID: item.PostID, UserID: this.userID }).subscribe(res => {
        if (res == "1") {
          this.posttread.Followed = this.posttread.Followed == '1' ? '0' : '1';
        }
      });
    } else {
      this.enableAlert = true;
    }
  }
  getLocalPostDate(date: string) {
    return this.service.getLocalPostDate(date);
  }



  submitComment() {
    if (this.isLoggedIn) {
      let parentPostId = 0;
      if (this.list.ParentPost[0] && this.list.ParentPost[0].ParentPostID) {
        parentPostId = +this.list.ParentPost[0].ParentPostID;
      } else {
        parentPostId = +this.posttread.PostID;
      }
      this.service.submitPost({ POST: this.PostComment, UserId: this.userID, ParentPostID: parentPostId }).subscribe(res => {
        if (res) {
          this.postModal.nativeElement.click();
          this.isEditComment = false;
          this.isReportPost = false;
          this.PostComment = '';
          this.reploadpage();
        }
      })
    } else {
      this.enableAlert = true;
    }
  }
  GetReplyCount() {
    return this.list.ReplyPost.length;
  }
}
