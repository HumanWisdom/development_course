import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s59085',
  templateUrl: './s59085.page.html',
  styleUrls: ['./s59085.page.scss'],
})
export class S59085Page implements OnInit {

    bg_tn="bg_blue"
  bg_cft="bg_blue"
  bg="blue_w9"
  
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
      "ScreenNos":"59063,59064,59065,59066,59067,59068,59069,59070,59071,59072,59073,59074,59075,59076,59077,59078,59079,59080,59081,59082,59083,59084"})
      .subscribe(res=>
        {console.log("points",res)
        this.points=res
      })
     
  
    }
  
    submitProgress(){
      this.router.navigate(['/adults/leadership/s59086'])
    }
    prev(){
      this.router.navigate(['/adults/leadership/s59084'])
  
    }
  
  }
  