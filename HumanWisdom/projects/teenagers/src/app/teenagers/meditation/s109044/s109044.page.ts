import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s109044',
  templateUrl: './s109044.page.html',
  styleUrls: ['./s109044.page.scss'],
})
export class S109044Page implements OnInit {

  bg_tn="bg_blue"
  bg_cft="bg_blue"
  bg="blue_w2"

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
    "ScreenNos":"109019,109020,109021,1090109,109023,109024,109025,109026,109027,109028,109029,109030,109031,109031,109033"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/meditation/s109045'])
  }
  prev(){
    this.router.navigate(['/meditation/s109042'])

  }

}
