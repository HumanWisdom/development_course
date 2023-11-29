import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s133031',
  templateUrl: './s133031.page.html',
  styleUrls: ['./s133031.page.scss'],
})
export class S133031Page implements OnInit {

  bg_tn="bg_red_pink"
  bg_cft="bg_red_pink"
  bg="red_pink_w11"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any


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

  sessionPoints(){
    this.service.sessionPoints({"UserId":this.userId,
    "ScreenNos":"133002,133003,133004,133005,133006,133007,133008,133009,133010,133011,133012,133013,133014,133015,133016,133017,133018,133019,133020,133021,133022,1330133,133024,133025,133026,133027,133028,133029,133030"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    localStorage.setItem("pageaction", 'next')
    this.router.navigate(['/happiness/s133032'])
  }
  prev(){
    localStorage.setItem("pageaction", 'prev')
    this.router.navigate(['/happiness/s133030'])

  }

}
