import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'
@Component({
  selector: 'app-s366',
  templateUrl: './s366.page.html',
  styleUrls: ['./s366.page.scss'],
})
export class S366Page implements OnInit {

  bg_tn="bg_green"
  bg_cft="bg_green"
  bg="green_w6"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any
  bookmark=0


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
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
  }


  sessionPoints(){
    this.service.sessionPoints({"UserId":this.userId,
    "ScreenNos":"347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
    

  }
  submitProgress(){
    this.router.navigate(['/adults/criticism/s366p0'])
  }
  prev(){
    this.router.navigate(['/adults/criticism/s365'])
  }


}

