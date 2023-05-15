import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s112091',
  templateUrl: './s112091.page.html',
  styleUrls: ['./s112091.page.scss'],
})
export class S112091Page implements OnInit {

  bg_tn="bg_purple_red"
  bg_cft="bg_purple_red"
  bg="purple_red_w8"

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
    "ScreenNos":"112063,112064,112065,112066,112067,112068,112069,112070,112071,112072,112073,112074,112075,112076,112077,112078,112079,112080,112081,112082,112083,112084,112085,112086,112087,112088,112089,112090"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/fear-anxiety/s112092'])
  }
  prev(){
    this.router.navigate(['/fear-anxiety/s112090'])

  }

}
