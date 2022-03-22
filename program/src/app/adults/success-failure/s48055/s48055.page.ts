import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s48055',
  templateUrl: './s48055.page.html',
  styleUrls: ['./s48055.page.scss'],
})
export class S48055Page implements OnInit {

  bg="light_blue_w2"

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
    "ScreenNos":"48032,48033,48034,48035,48036,48037,48038,48039,48040,48041,48042,48043,48044,48045,48046,48047,48048,48049,48050,48051,48052,48053,48054"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/adults/success-failure/s48056'])
  }
  prev(){
    this.router.navigate(['/adults/success-failure/s48054'])

  }

}
