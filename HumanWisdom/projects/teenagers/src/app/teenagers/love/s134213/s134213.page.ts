import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s134213',
  templateUrl: './s134213.page.html',
  styleUrls: ['./s134213.page.scss'],
})
export class S134213Page implements OnInit {

    bg_tn="bg_blue_pink"
  bg_cft="bg_blue_pink"
  bg="blue_pink_w10"
  
    userId:any
    saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
    points:any
    overallPercentage:any
  
  
    constructor(private router: Router,
      private service:TeenagersService,
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
      "ScreenNos":"134178,134179,134180,134181,134182,134183,134184,134185,134186,134187,134188,134189,134190,134191,134192,134193,134194,134195,134196,134197,134198,134199,134200,134201,134202,134203,134204,134205,134206,134207"})
      .subscribe(res=>
        {console.log("points",res)
        this.points=res
      })
     
  
    }
  
    submitProgress(){
      localStorage.setItem("pageaction", 'next')
      this.router.navigate(['/love/s134214'])
    }
    prev(){
      localStorage.setItem("pageaction", 'prev')
      this.router.navigate(['/love/s134213'])
  
    }
  
  }
  