import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'


@Component({
  selector: 'app-s164t',
  templateUrl: './s164t.page.html',
  styleUrls: ['./s164t.page.scss'],
})
export class S164tPage implements OnInit {

  bg="anger_w3"
  screenType=localStorage.getItem("audio")

  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=164
  
  
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))

  bookmark=0
  path=this.router.url
  audioPage="/anger/s164"
  toc="/anger/s162p0"
  avDuration=localStorage.getItem("av164")
  totalTime=localStorage.getItem("totalTime164")
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  
  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }


  ngOnInit() {
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}

    if(JSON.parse(sessionStorage.getItem("bookmark164"))==0)
    this.bookmark=0
  else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark164"))==1)
    this.bookmark=1
  
   
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark164",JSON.stringify(this.bookmark))
  }
  submitProgress(){
    this.router.navigate(['/anger/s165'])
    this.service.submitProgressAv({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime,
      "avDuration":this.avDuration
    }).subscribe(res=>
      {
        console.log(res)
      })

    // this.router.navigate(['/anger/s165'])
  }
  previous(){
    this.router.navigate(['/anger/s164'])
  }

}
