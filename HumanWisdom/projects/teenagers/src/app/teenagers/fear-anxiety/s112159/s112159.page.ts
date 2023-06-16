import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s112159',
  templateUrl: './s112159.page.html',
  styleUrls: ['./s112159.page.scss'],
})
export class S112159Page implements OnInit {

  bg_tn="bg_purple_red"
  bg_cft="bg_purple_red"
  bg="purple_red_flat"

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
    "ScreenNos":"112119,112120,112121,112122,112123,112124,112125,112126,112127,112128,112129,112130,112131,112132,112133,112134,112135,112136,112137,112138,112139,112140,112141,112142,112143,112144,112145,112146,112147,112148,112149,112150,112151,112152,112153,112154,112155,112156,112157,112158"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/fear-anxiety/s112160'])
  }
  prev(){
    this.router.navigate(['/fear-anxiety/s112158'])

  }

}
