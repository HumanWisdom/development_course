import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s322',
  templateUrl: './s322.page.html',
  styleUrls: ['./s322.page.scss'],
})
export class S322Page implements OnInit {

  // bg_tn="bg_pink_orange"
  // bg_cft="bg_pink_orange"
  // bg="module1_so_s1"
  bg_tn="bg_pink_orange"
  bg_cft="bg_pink_orange"
  bg="pink_orange_w3"

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
    "ScreenNos":"305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
    

  }
  submitProgress(){
    this.router.navigate(['/adults/conditioning/s323p1'])

  }
  prev(){
    this.router.navigate(['/adults/conditioning/s321p3'])

  }


}
