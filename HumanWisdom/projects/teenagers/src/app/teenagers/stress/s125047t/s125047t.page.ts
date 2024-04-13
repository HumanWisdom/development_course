import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s125047t',
  templateUrl: './s125047t.page.html',
  styleUrls: ['./s125047t.page.scss'],
})
export class S125047tPage implements OnInit {

  bg_tn="bg_dark_blue"
  bg_cft="bg_dark_blue"
  bg="dark_blue_w8"    

  bookmark=0
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
<<<<<<< HEAD
  audioPage="teenagers/stress/s125047"
=======
  audioPage="/stress/s125047"
>>>>>>> 5bf63073094facf5d8a4d68631859365156c688e
  toc="teenagers/stress/s125001"
  progName= "teenagers";
  screenType=localStorage.getItem("audio")
avDuration:any
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=125047
  startTime:any
  endTime:any
  totalTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))

  
 
  
  constructor(private router: Router,
    private service:TeenagersService,
    private location:Location) { }


  ngOnInit() {
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
  submitProgress(){
<<<<<<< HEAD
    this.router.navigate(['teenagers/stress/s125048'])
=======
    this.router.navigate(['/teenagers/stress/s125048'])
>>>>>>> 5bf63073094facf5d8a4d68631859365156c688e
    this.service.submitProgressAv({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":0,
       "avDuration":this.avDuration
    }).subscribe(res=>
      {
        
      })

<<<<<<< HEAD
    // this.router.navigate(['teenagers/stress/s125048'])
  }
  previous(){
    this.router.navigate(['teenagers/stress/s125046'])
=======
    // this.router.navigate(['/teenagers/stress/s125048'])
  }
  previous(){
    this.router.navigate(['/teenagers/stress/s125046'])
>>>>>>> 5bf63073094facf5d8a4d68631859365156c688e
  }

}
