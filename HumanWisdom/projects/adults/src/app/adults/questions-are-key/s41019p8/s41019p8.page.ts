import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'HumanWisdom-s41019p8',
  templateUrl: './s41019p8.page.html',
  styleUrls: ['./s41019p8.page.scss'],
})
export class S41019p8Page implements OnInit {

  // bg_tn="bg_blue_pink"
  // bg_cft="bg_blue_pink"
  // bg="module1_so_s1"
  bg_tn="bg_blue_pink"
  bg_cft="bg_blue_pink"
  bg="blue_pink_w2"

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
    "ScreenNos":"41019p2,41019p3,41019p4,41019p5,41019p6,41019p7"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
    

  }
  submitProgress(){
    this.router.navigate(['/adults/questions-are-key/s41020'])

  }
  prev(){
    this.router.navigate(['/adults/questions-are-key/s41019p7'])

  }


}