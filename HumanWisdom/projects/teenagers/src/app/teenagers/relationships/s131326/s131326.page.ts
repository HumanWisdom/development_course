import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s131326',
  templateUrl: './s131326.page.html',
  styleUrls: ['./s131326.page.scss'],
})
export class S131326Page implements OnInit {

  bg_tn="bg_purple"
  bg_cft="bg_purple"
  bg="purple_flat"

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
    "ScreenNos":"131277,131278,131279,131280,131281,131282,131283,131284,131285,131286,131287,131288,131289,131290,131291,131292,131293,131294,131295,131296,131297,131298,131299,131300,131301,131302,131303,131304,131305,131306,131307,131308,131309,131310,131311,131312,131313,131314,131315,131316,131317,131318,131319,131320,131321,131322,131323,131326,131325"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/relationships/s131327'])
  }
  prev(){
    this.router.navigate(['/relationships/s131325'])

  }

}

