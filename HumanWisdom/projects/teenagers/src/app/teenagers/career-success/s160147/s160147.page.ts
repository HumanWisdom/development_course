import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s160147',
  templateUrl: './s160147.page.html',
  styleUrls: ['./s160147.page.scss'],
})
export class S160147Page implements OnInit {

  bg_tn="bg_dark_blue"
  bg_cft="bg_dark_blue"
  bg="dark_blue_flat"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any

  constructor(private router: Router,
    private service:TeenagersService,
    private location:Location) { }

  ngOnInit() 
  {
    if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
    this.sessionPoints()
  }

  sessionPoints()
  {
    this.service.sessionPoints({"UserId":this.userId,
    "ScreenNos":"160114,160115,160116,160117,160118,160119,160120,160121,160122,160123,160124,160125,160126,160127,160128,160129,160130,160131,160132,160133,160134,160135,160136,160137,160138,160139,160140,160141,160142,160143,160144,160145,160146"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/teenagers/career-success/s160148'])
  }

  prev()
  {
    this.router.navigate(['/teenagers/career-success/s160146'])
  }

}