import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common';

@Component({
  selector: 'HumanWisdom-s38019p8',
  templateUrl: './s38019p8.page.html',
  styleUrls: ['./s38019p8.page.scss'],
})
export class S38019p8Page implements OnInit {

  // bg_tn="bg_dark_blue"
  // bg_cft="bg_dark_blue"
  // bg="module1_so_s1"
  bg_tn="bg_dark_blue"
  bg_cft="bg_dark_blue"
  bg="dark_blue_w2"

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
    "ScreenNos":"38019"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
    

  }
  submitProgress(){
    this.router.navigate(['/adults/insight/s38020'])

  }
  prev(){
    this.router.navigate(['/adults/insight/s38019p7'])

  }


}