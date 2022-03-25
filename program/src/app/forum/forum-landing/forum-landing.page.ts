import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { ForumService } from '../forum.service';
import { NgNavigatorShareService } from 'ng-navigator-share';

@Component({
  selector: 'app-forum-landing',
  templateUrl: './forum-landing.page.html',
  styleUrls: ['./forum-landing.page.scss'],
})
export class ForumLandingPage implements OnInit {
  @ViewChild('threadsearch', { static: true }) threadsearch: ElementRef;
  UserID="107";
  activereply;
  commenttext='';
  PostComment=''
  replyflag=false;
  selectthread;
  searchText='';
  path='';
  posts=[];
  selectIndex=0;
  token='';
  urlT:any
  address=this.router.url;
  isLoggedIn:boolean=false;
  activeCommentPost;
  actionType:string='';
  threadlist=[{
    value:0,label:'All threads'
  },{
    value:1,label:'Threads I’m following'
  },{
    value:2,label:'My threads'
  },{
    value:3,label:'Reflections'
  }];
  constructor(private serivce: ForumService,private router: Router, private ngNavigatorShareService: NgNavigatorShareService  ) { 
     this.UserID= localStorage.getItem('userId');
     console.log(this.UserID);
    this.token=JSON.parse(localStorage.getItem("token"));

    this.isLoggedIn=localStorage.getItem('isloggedin') == 'T'?true:false;
  }
  like(item,index){
    if(this.isLoggedIn){
      this.serivce.likePost({PostID: item.PostID,UserID: this.UserID}).subscribe(res=>{
        if(res=="1"){
          this.getAllposts(0);
        }
      });
    }
  }
list(data){
  if(data){
    let temp= [];
    let flag=false;
    data.forEach(element => {      
      temp.forEach((res)=>{
        if(res.PostID === Number(element.ParentPOstID)){
          res.child.push(element);
          flag=true;
        }
      })
      if(!flag){
        element.child=[];
        temp.push(element);
        flag=false;
      }else{
        flag=false;
      }
      
    });
    temp.sort(function (a, b) {
      return b.PostID - a.PostID;
     });
    this.posts=temp;    
  }
}
reportpost(item,actionType){
  if(this.actionType==''|| this.actionType==actionType){
    this.replyflag= !this.replyflag ;
  }
    this.actionType=actionType;
  this.activereply=item;
  console.log(item);
}


commentPost(item){
this.replyflag= !this.replyflag;
this.activeCommentPost=item;
}
commentPostSave(item){

}

postreport(item,actionType){
  console.log(item);
  this.replyflag=!this.replyflag;
  if(this.actionType=='report'){
    this.serivce.reportPost({PostID: item.PostID,UserID: this.UserID,Comment: this.commenttext}).subscribe(res=>{
      if(res){
        ;
        this.replyflag=!this.replyflag;
        this.getAllposts(0);
        this.actionType='';
      }
    });
  }
 else{ 
  this.serivce.submitPost({POST:this.PostComment,UserId: this.UserID, ParentPostID:item.PostID}).subscribe(res=>{
    if(res){
      this.getAllposts(0);
      this.actionType='';
      this.PostComment='';
    }
  })
 }
}
follow(item,index){
  this.serivce.followPost({PostID: item.PostID,UserID: this.UserID}).subscribe(res=>{
    if(res=="1"){
      this.posts[index].Followed=item.Followed=='1'?'0':'1';
    }
  });
}
postnavigate(item){
  this.serivce.postdataSource.next(item);
  this.router.navigateByUrl('/forum/forum-thread');
}
getAllposts(index){
  this.serivce.getposts(this.selectthread,null).subscribe((res)=>{
    if(res){
      this.list(res);
    }
  });
}
onChange(e){
 
  this.selectIndex=this.selectthread;  
  this.getAllposts(e);
}
  ngOnInit() {
    this.selectthread= this.threadlist[0].value;
    this.getAllposts(0);
    fromEvent(this.threadsearch.nativeElement, 'keyup').pipe(

      // get value
      map((event: any) => {
        return event.target.value;
      })
      // if character length greater then 2
      , filter(res => res.length > 2)

      // Time in milliseconds between key events
      , debounceTime(1000)

      // If previous query is diffent from current   
      , distinctUntilChanged()

      // subscription for response
    ).subscribe((text: string) => {

      console.log(text);
      this.serivce.getposts(this.selectIndex,text).subscribe((res)=>{
        if(res){
          
          this.list(res);
          
        }
      });

    });

  }

  share() {
    
    if (!this.ngNavigatorShareService.canShare()) {
      alert(`This service/api is not supported in your Browser`);
      return;
    }
    if(this.urlT)
   {
     console.log("url")
    this.path="https://humanwisdom.me/course/#/"+this.address+`?t=${this.urlT}`

   }
   else{
     console.log("local")
    this.path="https://humanwisdom.me/course/#/"+this.address+`?t=${this.token}`
   }
 
    this.ngNavigatorShareService.share({
      title: 'Human Wisdom Program',
      text: 'Hey, check out the Human Wisdom Program',
      url: this.path
    }).then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }
  getLocalPostDate(date:string){
    var dateLocal = new Date(date);
    var newDate = new Date(dateLocal.getTime() - dateLocal.getTimezoneOffset()*60*1000);
    return newDate;
  }

  getOrderbyLatestPost(childs){
    childs.sort(function (a, b) {
        return b.PostID - a.PostID;
       });
return childs;
  }
}
