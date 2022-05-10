import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {Location } from '@angular/common'
import {AdultsService} from '../../adults.service'

@Component({
  selector: 'app-s507',
  templateUrl: './s507.page.html',
  styleUrls: ['./s507.page.scss'],
})
export class S507Page implements OnInit {

  bg_tts = "bg_purple_red"
  bg_tn="bg_purple_red"
  bg_cft="bg_purple_red"
  bg="fear_anxiety_flat"  
  toc="fear-anxiety/s486"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("text")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=507
    startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  path=this.router.url
  

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
    this.createScreen()
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
    this.bookmark=1
    else
      this.bookmark=0
  }


  submitProgress(){
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
        //this.router.navigate(['/adults/fear-anxiety/s433'])
      })
    

  }

  goNext(){
    this.router.navigate(['/adults/fear-anxiety/s508'])
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    
    this.submitProgress()

  }

  ngOnDestroy(){
    



  }




}
