import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s132227',
  templateUrl: './s132227.page.html',
  styleUrls: ['./s132227.page.scss'],
})
export class S132227Page implements OnInit {

  bg_tn="bg_blue"
  bg_cft="bg_blue"
  bg="blue_w5"

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
    "ScreenNos":"132194,132195,132196,132197,132198,132199,132200,132201,132202,132203,132204,132205,132206,132207,132208,132209,132210,132211,132212,132213,132214,132215,132216,132217,132218,132219,132220,132221,132222"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    localStorage.setItem("pageaction", 'next')
    this.router.navigate(['/communication/s132228'])
  }
  prev(){
    localStorage.setItem("pageaction", 'prev')
    this.router.navigate(['/communication/s132226'])

  }

}
