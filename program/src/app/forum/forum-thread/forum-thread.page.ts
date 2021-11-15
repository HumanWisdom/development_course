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
replyflag=false;
commentflag=false;
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

}
posttext='';
  constructor(private service: ForumService,private router: Router) {
    this.userID =localStorage.getItem('userId');
   }
  toggle(item){
    this.replyflag=!this.replyflag;
    this.activereply=item;
  }
  navi(){
    localStorage.setItem('postid', this.posttread.PostID);
    this.router.navigateByUrl('/forum/forum-thread-start-new');
    
  }
  reploadpage(){
    this.sub = this.service.postdatavalue.subscribe(res=>{
      if(res){
        console.log(res);
        this.posttread=res;
        this.service.getPostDetail(res.PostID).subscribe(res=>{
          if(res){
            console.log(res);            
            this.list =res;      
           
          }
        })
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
        console.log(res);
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

}
