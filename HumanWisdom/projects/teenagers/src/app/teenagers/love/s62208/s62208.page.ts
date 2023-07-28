import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s62208',
  templateUrl: './s62208.page.html',
  styleUrls: ['./s62208.page.scss'],
})
export class S62208Page implements OnInit {

    bg_tn="bg_blue_pink"
  bg_cft="bg_blue_pink"
  bg="blue_pink_w10"
  
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
      "ScreenNos":"62178,62179,62180,62181,62182,62183,62184,62185,62186,62187,62188,62189,62190,62191,62192,62193,62194,62195,62196,62197,62198,62199,62200,62201,62202,62203,62204,62205,62206,62207"})
      .subscribe(res=>
        {console.log("points",res)
        this.points=res
      })
     
  
    }
  
    submitProgress(){
      localStorage.setItem("pageaction", 'next')
      this.router.navigate(['/adults/love/s62209'])
    }
    prev(){
      localStorage.setItem("pageaction", 'prev')
      this.router.navigate(['/adults/love/s62207'])
  
    }
  
  }
  