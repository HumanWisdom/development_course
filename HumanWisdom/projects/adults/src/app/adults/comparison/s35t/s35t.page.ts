import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s35t',
  templateUrl: './s35t.page.html',
  styleUrls: ['./s35t.page.scss'],
})
export class S35tPage implements OnInit {

  bg_tn="bg_green_yellow"
  bg_cft="bg_green_yellow"
  bg="comparison_envy_w5"  

  
  audioPage="/comparison/s35"
  toc="/comparison/s0"
  screenNumber=35

  bookmark=0
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  avDuration:any
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("audio")
  moduleId=localStorage.getItem("moduleId")
  startTime:any
  endTime:any
  totalTime:any
  bookmarkList=[]

  
  
  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }
 
 
  ngOnInit() {
    this.avDuration=localStorage.getItem("avDuration35")
    this.totalTime=localStorage.getItem("totalTime35")
    
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
   this.startTime = Date.now();
 
    this.startTime = Date.now();
    this.getBookmarks()
   
  }
  getBookmarks(){
    this.service.getBookmarks(this.userId)
    .subscribe(res=>{
      
      
      this.bookmarkList=res
      this.bookmarkList = this.bookmarkList.map(a => parseInt(a.ScrNo));
      localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))
   
     
    },
    error=>{
      console.log(error)
    },
    ()=>{
      
      console.log(JSON.parse(sessionStorage.getItem("bookmark35")))
    if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark35"))==1)
      this.bookmark=1

    })
    
  
  }

  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
   {
    
    this.bookmark=1

   }
   
    else 
    {
      
      this.bookmark=0

    }
      
    
    sessionStorage.setItem("bookmark35",JSON.stringify(this.bookmark))
    
  }
  submitProgress(){
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    this.router.navigate(['/adults/comparison/s36'])
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
        
      })
    
   
   
    
  }
  prev(){
    this.router.navigate(['/adults/comparison/s34'])
  }


}
