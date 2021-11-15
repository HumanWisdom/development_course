import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service'
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.css']
})
export class ForumsComponent implements OnInit {
  programList=JSON.parse(localStorage.getItem("programList"))
  selectthread=0;
  posts=[];
  threadlist=[{
    value:0,label:'All threads'
  },{
    value:1,label:'Pending'
  },{
    value:2,label:'Approved'
  },{
    value:3,label:'Deleted'
  },{
    value:4,label:'Reported Post'
  }];
  UserID='';
  selectindex=0;

  constructor(private router: Router,private service:UsersService, private location:Location) { }

  ngOnInit() {
    this.UserID=  localStorage.getItem("userID");
    this.selectthread = this.threadlist[0].value;
    this.getAllPosts(0);

  }
  onChange(e){
    console.log(e);
    this.selectindex=e;

   this.getAllPosts(e);
  }
  deletePost(item,index){
    console.log(item);
    this.service.approvepost({PostId:item.PostID,Approved:index,UserId:this.UserID}).subscribe(res=>{
      if(res){
        console.log(res);
        this.getAllPosts(this.selectindex);
      }
    })
  }
  getAllPosts(index){
    this.service.getAllPosts(index).subscribe(res=>{
      if(res){
        console.log(res);
        this.posts =res;
      }
    })
  }

}
