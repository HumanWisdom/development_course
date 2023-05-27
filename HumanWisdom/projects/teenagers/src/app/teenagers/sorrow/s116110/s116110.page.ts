import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s116110',
  templateUrl: './s116110.page.html',
  styleUrls: ['./s116110.page.scss'],
})
export class S116110Page implements OnInit {

  bg_tn="bg_purple"
  bg_cft="bg_purple"
  bg="purple_w8"

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
    "ScreenNos":"116068,116069,116070,116071,116072,116073,116074,116075,116076,116077,116078,116079,116080,116081,116082,116083,116084,116085,116086,116087,116088,116089,116090,116091,116092,116093,116094,116095,116096,116097,116098,116099,116100,116101,116102,116103,116104,116105,116106,116107,116108,116109,116110"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/sorrow/s116111'])
  }
  prev(){
    this.router.navigate(['/sorrow/s116009'])

  }

}
