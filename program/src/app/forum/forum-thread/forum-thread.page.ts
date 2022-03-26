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

  like(PostID,ParentPOstID?){
    if(this.isLoggedIn){
      this.service.likePost({PostID: PostID,UserID: this.userID}).subscribe(res=>{
        if(res=="1"){
          if(ParentPOstID){
           this.refreshPage(ParentPOstID);
          }else{
            this.refreshPage(PostID);

          }
        }
      });
    }
  }

  reploadpage(){
    this.sub = this.service.postdatavalue.subscribe(res=>{
      if(res){
        ;
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

  follow(item,index){
    this.service.followPost({PostID: item.PostID,UserID: this.userID}).subscribe(res=>{
      if(res=="1"){
        this.posttread.Followed=this.posttread.Followed=='1'?'0':'1';
      }
    });
  }

  submitComment(){
    this.service.submitPost({POST:this.PostComment,UserId: this.userID, ParentPostID:this.list.ParentPost[0].ParentPostID}).subscribe(res=>{
      if(res){
        this.PostComment='';
        this.reploadpage();
      }
    })
  }

}
