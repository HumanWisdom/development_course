import { Component, OnInit, OnDestroy } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'


@Component({
  selector: 'app-s36',
  templateUrl: './s36.page.html',
  styleUrls: ['./s36.page.scss'],
})
export class S36Page implements OnInit,OnDestroy {

  bg_tn="bg_green_yellow"
  bg_cft="bg_green_yellow"
  bg="comparison_envy_w6"  
  
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("text")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=36
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  toc="comparison/s0"
  path=this.router.url
  bookmarkList=[]
  

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
   
    
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
   this.startTime = Date.now();

    this.startTime = Date.now();
    this.getBookmarks()
    this.createScreen()
  }

  getBookmarks(){
    this.service.getBookmarks(this.userId)
    .subscribe(res=>{
      
      
      this.bookmarkList=res
      this.bookmarkList = this.bookmarkList.map(a => parseInt(a.ScrNo));
      marked screens",this.bookmarkList)
      localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))
   
     
    },
    error=>{
      console.log(error)
    },
    ()=>{
      console.log(this.bookmarkList)
      console.log(JSON.parse(sessionStorage.getItem("bookmark36")))
    if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark36"))==1)
      this.bookmark=1

    })
    
  
  }
  createScreen(){
    this.service.createScreen({
      "ScrId":0,
      "ModuleId":this.moduleId,
      "GSetID":this.screenType,
      "ScreenNo":this.screenNumber
    }).subscribe(res=>
      {
        
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
      
    console.log(this.bookmark)
    sessionStorage.setItem("bookmark36",JSON.stringify(this.bookmark))
    
  }


  submitProgress(){
    
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;

    this.router.navigate(['/adults/comparison/s37'])
    this.service.submitProgressText({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime
    }).subscribe(res=>
      {
        
      },
      error=>{console.log(error)},
      ()=>{
        //this.router.navigate(['/adults/conditioning/s234'])
      })
     
    

  }
  prev(){
    this.router.navigate(['/adults/comparison/s35'])

  }
  

  

  ngOnDestroy(){
    



  }

}
