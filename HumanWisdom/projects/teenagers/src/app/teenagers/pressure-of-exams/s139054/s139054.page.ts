import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s139054',
  templateUrl: './s139054.page.html',
  styleUrls: ['./s139054.page.scss'],
})
export class S139054Page implements OnInit {

 
  bg_tn=""
  bg_cft=""
  bg=""

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
    "ScreenNos":"139001,139002,139003,139004,139005,139006,139007,139008,139009,139010,139011,139012,139013,139014,139015,139016,139017,139018,139019,139020,139021,139022,139023,139024,139025,139026,139027,139028,139029,139030,139031,139032,139033,139034,139035,139036,139037,139038,139039,139040,139041,139042,139043,139044,139045,139046,139047,139048,139049,139050,139051,139052"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/pressure-of-exams/s139055'])
  }

  prev()
  {
    this.router.navigate(['/pressure-of-exams/s139053'])
  }

}