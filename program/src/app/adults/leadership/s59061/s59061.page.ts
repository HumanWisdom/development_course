import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s59061',
  templateUrl: './s59061.page.html',
  styleUrls: ['./s59061.page.scss'],
})
export class S59061Page implements OnInit {

    bg="blue_w12"
  
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
      "ScreenNos":"59037,59038,59039,59040,59041,59042,59043,59044,59045,59046,59047,59048,59049,59050,59051,59052,59053,59054,59055,59056,59057,59058,59059,59060"})
      .subscribe(res=>
        {console.log("points",res)
        this.points=res
      })
     
  
    }
  
    submitProgress(){
      this.router.navigate(['/leadership/s59062'])
    }
    prev(){
      this.router.navigate(['/leadership/s59060'])
  
    }
  
  }
  