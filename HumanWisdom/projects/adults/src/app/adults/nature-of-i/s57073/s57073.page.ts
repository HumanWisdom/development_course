import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s57073',
  templateUrl: './s57073.page.html',
  styleUrls: ['./s57073.page.scss'],
})
export class S57073Page implements OnInit {

  bg_tn="bg_green"
  bg_cft="bg_green"
  bg="green_w9"

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
    "ScreenNos":"57040,57041,57042,57043,57044,57045,57046,57047,57048,57049,57050,57051,57052,57053,57054,57055,57056,57057,57058,57059,57060,57061,57062,57063,57064,57065,57066,57067,57068,57069,57070,57071,57072"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/adults/nature-of-i/s57074'])
  }
  prev(){
    this.router.navigate(['/adults/nature-of-i/s57072'])

  }

}
