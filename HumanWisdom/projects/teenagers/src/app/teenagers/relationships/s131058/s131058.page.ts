import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s131058',
  templateUrl: './s131058.page.html',
  styleUrls: ['./s131058.page.scss'],
})
export class S131058Page implements OnInit {

  bg_tn="bg_purple"
  bg_cft="bg_purple"
  bg="purple_w9"

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
    "ScreenNos":"131031,131032,131033,131034,131035,131036,131037,131038,131039,131040,131041,131042,131043,131044,131045,131046,1310131,131048,131049,131050,131051,131052,131053,131054,131055,131056,131057"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/relationships/s131059'])
  }
  prev(){
    this.router.navigate(['/relationships/s131057'])

  }

}

