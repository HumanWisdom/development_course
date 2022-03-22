import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s44055',
  templateUrl: './s44055.page.html',
  styleUrls: ['./s44055.page.scss'],
})
export class S44055Page implements OnInit {

  bg="dark_blue_w6"

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
    "ScreenNos":"44035,44036,44037,44038,44039,44040,44041,44042,44043,44044,44045,44046,44047,44048,44049,44050,44051,44052,44053,44054"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/adults/stress/s44056'])
  }
  prev(){
    this.router.navigate(['/adults/stress/s44054'])

  }

}
