import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s62075',
  templateUrl: './s62075.page.html',
  styleUrls: ['./s62075.page.scss'],
})
export class S62075Page implements OnInit {

    bg_tn="bg_blue_pink"
  bg_cft="bg_blue_pink"
  bg="blue_pink_w9"
  
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
      "ScreenNos":"62046,62047,62048,62049,62050,62051,62052,62053,62054,62055,62056,62057,62058,62059,62060,62061,62062,62063,62064,62065,62066,62067,62068,62069,62070,62071,62072,62073,62074"})
      .subscribe(res=>
        {console.log("points",res)
        this.points=res
      })
     
  
    }
  
    submitProgress(){
      localStorage.setItem("pageaction", 'next')
      this.router.navigate(['/adults/love/s62076'])
    }
    prev(){
      localStorage.setItem("pageaction", 'prev')
      this.router.navigate(['/adults/love/s62074'])
  
    }
  
  }
  