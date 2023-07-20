import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s59170',
  templateUrl: './s59170.page.html',
  styleUrls: ['./s59170.page.scss'],
})
export class S59170Page implements OnInit {

    bg_tn="bg_blue"
  bg_cft="bg_blue"
  bg="blue_w7"
  
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
      "ScreenNos":"59115,59116,59117,59118,59119,59120,59121,59122,59123,59124,59125,59126,59127,59128,59129,59130,59131,59132,59133,59134,59135,59136,59137,59138,59139,59140,59141,59142,59143,59144,59145,59146,59147,59148,59149,59150,59151,59152,59153,59154,59155,59156,59157,59158,59159,59160,59161,59162,59163,59164,59165,59166,59167,59168,59169"})
      .subscribe(res=>
        {console.log("points",res)
        this.points=res
      })
     
  
    }
  
    submitProgress(){
      localStorage.setItem("pageaction", 'next')
      this.router.navigate(['/adults/leadership/s59170p1'])
    }
    prev(){
      localStorage.setItem("pageaction", 'prev')
      this.router.navigate(['/adults/leadership/s59169'])
  
    }
  
  }
  