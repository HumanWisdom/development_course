import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ForumService } from '../forum.service';

@Component({
  selector: 'app-forum-thread',
  templateUrl: './forum-thread.page.html',
  styleUrls: ['./forum-thread.page.scss'],
})
export class ForumThreadPage implements OnInit {
list:any;
activereply;
PostComment='';
replyflag=false;
commentflag=false;
isLoggedIn=false;
commenttext='';
activecomment;
sub: Subscription;
userID='107';
posttread={
  PostID:'',
  POST:'',
  PostDate:'',
  ParentPOstID:'',
  PostLikeCount:'',
  ReplyCount:'',
  UserImage:null,
  UserName:'',
  Followed:'0',
  Liked:'0'
}
posttext='';
  constructor(private service: ForumService,private router: Router) {
    this.userID =localStorage.getItem('userId');
    this.isLoggedIn=localStorage.getItem('isloggedin') == 'T'?true:false;
   }
  toggle(item){
    this.replyflag=!this.replyflag;
    this.activereply=item;
  }
  navi(){
    localStorage.setItem('postid', this.posttread.PostID);
    this.router.navigateByUrl('/forum/forum-thread-start-new');
    
  }

  like(PostID,ParentPOstID=null,index:number){
    if(this.isLoggedIn){
      this.service.likePost({PostID: PostID,UserID: this.userID}).subscribe(res=>{
        if(res){
          if(ParentPOstID!=null){
            this.list.ReplyPost[index].ReplyPostLikeCount=res;
            this.list.ReplyPost[index].Liked= this.list.ReplyPost[index].Liked=="1"?"0":"1";
          // this.refreshPage(ParentPOstID);
          }else{
            this.posttread.PostLikeCount=res;
            this.posttread.Liked=this.posttread.Liked=="1"?"0":"1";
          }
        }
      });
    }
  }

  reploadpage(){
    this.sub = this.service.postdatavalue.subscribe(res=>{
      if(res){
        this.posttread=res;
        this.service.getPostDetail(res.PostID).subscribe(res=>{
          if(res){
            ;            
            this.list =res;      
           
          }
        })
      }
    })
  }
replyPost(){
  this.list.ReplyPost.sort(function (a, b) {
    return b.ReplyPostID - a.ReplyPostID;
   });
 return this.list.ReplyPost
}
  
  refreshPage(PostID){
        this.service.getPostDetail(PostID).subscribe(res=>{
          if(res){
            ;            
            this.posttread.Liked =res.ParentPost[0].Liked; 
            this.posttread.PostLikeCount=res.ParentPost[0].PostLikeCount; 
            this.list=res;
          }
        })
  }
  reloadthread(item){
   
    let temp = item;
    temp.PostID= item.ReplyPostID;
    this.sub.unsubscribe();
   
    this.service.postdataSource.next(temp);
    this.reploadpage();
  }
  ngOnInit() {
   this.reploadpage();
    
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }
  reportpost(item){
    this.commentflag= !this.commentflag;
    this.activecomment=item;
    console.log(item);
  }
  postreport(item){
    console.log(item);
    this.service.reportPost({PostID: item.ReplyPostID,UserID: this.userID,Comment: this.commenttext}).subscribe(res=>{
      if(res){
        ;
        this.commentflag=!this.commentflag;        
      }
    });
  }
  post(item){
    this.service.submitPost({POST: this.posttext,UserId:item.userID, ParentPostID:item.ReplyPostID }).subscribe(res=>{
      if(res){
        this.reploadpage();
      }
    })
  }

  follow(item){
    this.service.followPost({PostID: item.PostID,UserID: this.userID}).subscribe(res=>{
      if(res=="1"){
        this.posttread.Followed=this.posttread.Followed=='1'?'0':'1';
      }
    });
  }
  getLocalPostDate(date:string){
    var dateLocal = new Date(date);
    var newDate = new Date(dateLocal.getTime() - dateLocal.getTimezoneOffset()*60*1000);
    return newDate;
  }
  submitComment(){
    let parentPostId=0;
    if(this.list.ParentPost[0] && this.list.ParentPost[0].ParentPostID){
       parentPostId=+this.list.ParentPost[0].ParentPostID;
    }else{
      parentPostId=+this.posttread.PostID;
    }
    this.service.submitPost({POST:this.PostComment,UserId: this.userID, ParentPostID:parentPostId}).subscribe(res=>{
      if(res){
        this.PostComment='';
        this.reploadpage();
      }
    })
  }
  GetReplyCount(){
     return this.list.ReplyPost.length;
  }
}
