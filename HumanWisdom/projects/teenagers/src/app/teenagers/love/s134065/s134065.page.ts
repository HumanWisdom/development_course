import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s134065',
  templateUrl: './s134065.page.html',
  styleUrls: ['./s134065.page.scss'],
})
export class S134065Page implements OnInit,OnDestroy {

  bg_tn="bg_blue_pink"
  bg_cft="bg_blue_pink"
  bg="red_pink_overlay_footer"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("text")
  
  moduleId=localStorage.getItem("moduleId")
  screenNumber=134065
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  toc="teenagers/love/s134001"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  

  constructor(
    private router: Router,
    private service:TeenagersService,
    private location:Location
  ) { }

  ngOnInit() {
    this.createScreen()
    
    if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
  else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
    this.startTime = Date.now();
  
    this.startTime = Date.now();
   


    
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
  }
  toggleBookmark(){
    if(this.bookmark==0)
      this.bookmark=1
    else
      this.bookmark=0

  }
  createScreen(){
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    this.service.createScreen({
      "ScrId":0,
      "ModuleId":this.moduleId,
      "GSetID":this.screenType,
      "ScreenNo":this.screenNumber
    }).subscribe(res=>
      {
        
      })
    

  }


  submitProgress(){
<<<<<<< HEAD
    this.router.navigate(['teenagers/love/s134066'])
=======
    this.router.navigate(['/teenagers/love/s134066'])
>>>>>>> 5bf63073094facf5d8a4d68631859365156c688e
    if (this.userId === 563) return;
    
    this.service.submitProgressText({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime
    }).subscribe(res=>
      {
        
      })
   
    

  }
  prev(){

<<<<<<< HEAD
    this.router.navigate(['teenagers/love/s134064'])
=======
    this.router.navigate(['/teenagers/love/s134064'])
>>>>>>> 5bf63073094facf5d8a4d68631859365156c688e
    
  }

  ngOnDestroy(){
   



  }

}
