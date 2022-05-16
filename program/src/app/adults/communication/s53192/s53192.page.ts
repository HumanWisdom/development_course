import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s53192',
  templateUrl: './s53192.page.html',
  styleUrls: ['./s53192.page.scss'],
})
export class S53192Page implements OnInit {

  bg_tn="bg_blue"
  bg_cft="bg_blue"
  bg="blue_w1"

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
    "ScreenNos":"53165,53166,53167,53168,53169,53170,53171,53172,53173,53174,53175,53176,53177,53178,53179,53180,53181,53182,53183,53184,53185,53186,53187,53188,53189,53190,53191"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/adults/communication/s53193'])
  }
  prev(){
    this.router.navigate(['/adults/communication/s53191'])

  }

}
