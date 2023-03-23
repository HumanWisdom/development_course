import { Component, OnInit } from '@angular/core';
import { AdultsService } from "../../adults.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s91083',
  templateUrl: './s91083.page.html',
  styleUrls: ['./s91083.page.scss'],
})
export class S91083Page implements OnInit {

  bg_tn="bg_blue"
  bg_cft="bg_blue"
  bg="blue_flat"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() 
  {
    if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
    this.sessionPoints()
  }

  sessionPoints()
  {
    this.service.sessionPoints({"UserId":this.userId,
    "ScreenNos":"91050,91051,91052,91053,91054,91055,91056,91057,91058,91059,91060,91061,91062,91063,91064,91065,91066,91067,91068,91069,91070,91071,91072,91073,91074,91075,91076,91077,91078,91079,91080,91081,91082"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/adults/external-approval/s91084'])
  }

  prev()
  {
    this.router.navigate(['/adults/external-approval/s91082'])
  }

}