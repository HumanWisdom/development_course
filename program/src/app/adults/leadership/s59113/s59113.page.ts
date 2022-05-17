import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s59113',
  templateUrl: './s59113.page.html',
  styleUrls: ['./s59113.page.scss'],
})
export class S59113Page implements OnInit {

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
      "ScreenNos":"59087,59088,59089,59090,59091,59092,59093,59094,59095,59096,59097,59098,59099,59100,59101,59102,59103,59104,59105,59106,59107,59108,59109,59110,59111,59112"})
      .subscribe(res=>
        {console.log("points",res)
        this.points=res
      })
     
  
    }
  
    submitProgress(){
      this.router.navigate(['/adults/leadership/s59114'])
    }
    prev(){
      this.router.navigate(['/adults/leadership/s59112'])
  
    }
  
  }
  