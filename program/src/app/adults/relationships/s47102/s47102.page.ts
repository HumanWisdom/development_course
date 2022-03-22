import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s47102',
  templateUrl: './s47102.page.html',
  styleUrls: ['./s47102.page.scss'],
})
export class S47102Page implements OnInit {

  bg="purple_w8"

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
    "ScreenNos":"47058,47059,47060,47061,47062,47063,47064,47065,47066,47067,47068,47069,47070,47071,47072,47073,47074,47075,47076,47077,47078,47079,47080,47081,47082,47083,47084,47085,47086,47087,47088,47089,47090,47091,47092,47093,47094,47095,47096,47097,47098,47099,47100,47101"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/adults/relationships/s47103'])
  }
  prev(){
    this.router.navigate(['/adults/relationships/s47101'])

  }

}

