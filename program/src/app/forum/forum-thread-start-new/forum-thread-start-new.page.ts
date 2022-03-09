import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForumService } from '../forum.service';

@Component({
  selector: 'app-forum-thread-start-new',
  templateUrl: './forum-thread-start-new.page.html',
  styleUrls: ['./forum-thread-start-new.page.scss'],
})
export class ForumThreadStartNewPage implements OnInit {
thread='';
userID="107";
postID='0';
userinfo={
  userimage:null,
  username:'',
};
  constructor(private service: ForumService,private router: Router) {
     this.userID =localStorage.getItem('userId');
     this.getuserDetails();
    let p= localStorage.getItem('postid');
    if(p!=='null'){
      console.log(p);
    this.postID=p; 
    }
   }

  ngOnInit() {
      }
      ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        localStorage.setItem('postid',null);
      }
      getuserDetails(){
        this.service.getUserDetail(this.userID).subscribe(res=>{
          if(res){
            ;
            this.userinfo.username= res[0].FName+' '+res[0].LName;
            this.userinfo.userimage= res[0].UserImage;
          }
        });
      }
  post(){
    this.service.submitPost({Post: this.thread,UserId:this.userID, ParentPostID:this.postID,ReflectionID:'0',TagIds:'0' }).subscribe(res=>{
      if(res){
        localStorage.setItem('postid',null);
        this.router.navigateByUrl('/forum');
      }
    })

  }

}
