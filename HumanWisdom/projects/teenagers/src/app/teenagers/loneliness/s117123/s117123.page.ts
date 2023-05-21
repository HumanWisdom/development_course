import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s117123',
  templateUrl: './s117123.page.html',
  styleUrls: ['./s117123.page.scss'],
})
export class S117123Page implements OnInit {

  bg_tn="bg_green_yellow"
  bg_cft="bg_green_yellow"
  bg="green_yellow_flat"

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
    "ScreenNos":"117062,117063,117064,117065,117066,117067,117068,117069,117070,117071,117072,117073,117074,117075,117076,117077,117078,117079,117080,117081,117082,117083,117084,117085,117086,117087,117088,117089,117090,117091,117092,117093,117094,117095,117096,117097,117098,117099,117100,117101,117102,117103,117104,117117,117106,117107,117108,117109,117110,117122"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/loneliness/s117124'])
  }
  prev(){
    this.router.navigate(['/loneliness/s117122'])

  }

}
