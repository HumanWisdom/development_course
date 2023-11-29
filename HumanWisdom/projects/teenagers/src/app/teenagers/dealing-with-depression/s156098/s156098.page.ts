import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s156098',
  templateUrl: './s156098.page.html',
  styleUrls: ['./s156098.page.scss'],
})
export class S156098Page implements OnInit {

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
    "ScreenNos":"156068,156069,156070,156071,156072,156073,156074,156075,156076,156077,156078,156079,156080,156081,156082,156083,156084,156085,156086,156087,156088,156089,156090,156091,156092,156093,156094,156095,156096,156097"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/dealing-with-depression/s156099'])
  }

  prev()
  {
    this.router.navigate(['/dealing-with-depression/s156097'])
  }

}