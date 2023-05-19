import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s116042',
  templateUrl: './s116042.page.html',
  styleUrls: ['./s116042.page.scss'],
})
export class S116042Page implements OnInit {

  bg_tn="bg_purple"
  bg_cft="bg_purple"
  bg="purple_flat"

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
    "ScreenNos":"116002,116003,116004,116005,116006,116007,116008,116009,116010,116011,116012,116013,116014,116015,116016,116017,116018,116019,116020,116021,116022,116023,116024,116025,116026,116027,116028,116029,116030,116031,116032,116033,116034,116035,116036,116037,116038,116039,116040,1111641"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/sorrow/s116043'])
  }
  prev(){
    this.router.navigate(['/sorrow/s116041'])

  }

}
