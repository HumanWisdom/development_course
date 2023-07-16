import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s132092',
  templateUrl: './s132092.page.html',
  styleUrls: ['./s132092.page.scss'],
})
export class S132092Page implements OnInit {

  bg_tn="bg_blue"
  bg_cft="bg_blue"
  bg="blue_w5"

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
    "ScreenNos":"132048,132049,132050,132051,132052,1320132,132054,132055,132056,132057,132058,132059,132060,132061,132062,132063,132064,132065,132066,132067,132068,132069,132070,132071,132072,132073,132074,132075,132076,132077,132078,132079,132080,132081,132082,132083,132084,132085,132086,132087,132088,132089,132090,132091,132092"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    localStorage.setItem("pageaction", 'next')
    this.router.navigate(['/communication/s132093'])
  }
  prev(){
    localStorage.setItem("pageaction", 'prev')
    this.router.navigate(['/communication/s132091'])

  }

}
