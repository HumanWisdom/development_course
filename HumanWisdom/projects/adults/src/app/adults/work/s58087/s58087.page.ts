import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s58087',
  templateUrl: './s58087.page.html',
  styleUrls: ['./s58087.page.scss'],
})
export class S58087Page implements OnInit {

  bg_tn="bg_dark_blue"
  bg_cft="bg_dark_blue"
  bg="dark_blue_w8"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any


  constructor(private router: Router,
    private service:AdultsService,
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
    // "ScreenNos":"58049,58050,58051,58052,58053,58054,58055,58056,58057,58058,58059,58060,58061,58062,58063,58064,58065,58066,58067,58068,58069,58070,58071,58072,58073,58074,58075,58076,58077,58078,58079,58080,58081,58082,58083,58084,58085,58086"})
    "ScreenNos":"58081p6"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/adults/work/s58088'])
  }
  prev(){
    this.router.navigate(['/adults/work/s58086'])

  }

}
