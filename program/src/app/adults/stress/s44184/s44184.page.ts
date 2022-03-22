import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s44184',
  templateUrl: './s44184.page.html',
  styleUrls: ['./s44184.page.scss'],
})
export class S44184Page implements OnInit {

  bg="dark_blue_w3"

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
    "ScreenNos":"44154,44155,44156,44157,44158,44159,44160,44161,44162,44163,44164,44165,44166,44167,44168,44169,44170,44171,44172,44173,44174,44175,44176,44177,44178,44179,44180,44181,44182,44183"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/adults/stress/s44185'])
  }
  prev(){
    this.router.navigate(['/adults/stress/s44183'])

  }

}
