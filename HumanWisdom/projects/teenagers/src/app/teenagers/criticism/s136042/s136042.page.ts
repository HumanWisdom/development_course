import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s136042',
  templateUrl: './s136042.page.html',
  styleUrls: ['./s136042.page.scss'],
})
export class S136042Page implements OnInit {

  bg_tn="bg_green"
  bg_cft="bg_green"
  bg="green_w6"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any
  bookmark=0


  constructor(private router: Router,
    private service:TeenagersService,
    private location:Location) { }

  ngOnInit() {
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
    this.sessionPoints()
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
  }


  sessionPoints(){
    this.service.sessionPoints({"UserId":this.userId,
    "ScreenNos":"136024,136025,136026,136027,136028,136029,136030,136031,136032,136033,136034,136035,136036,136037,136038,136039,136040,136041"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
    

  }
  submitProgress(){
    this.router.navigate(['/criticism/s136043'])
  }
  prev(){
    this.router.navigate(['/criticism/136041'])
  }


}

