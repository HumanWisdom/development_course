import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s156244',
  templateUrl: './s156244.page.html',
  styleUrls: ['./s156244.page.scss'],
})
export class S156244Page implements OnInit {

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
    "ScreenNos":"156183,156184,156185,156186,156187,156188,156189,156190,156191,156192,156193,156194,156195,156196,156197,156198,156199,156200,156201,156202,156203,156204,156205,156206,156207,156208,156209,156210,156211,156212,156213,156214,156215,156216,156217,156218,156219,156220,156221,156222,156223,156224,156225,156226,156227,156228,156229,156230,156231,156232,156233,156234,156235,156236,156237,156238,156239,156240,156241,156242,156243"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/dealing-with-depression/s156245'])
  }

  prev()
  {
    this.router.navigate(['/dealing-with-depression/s156243'])
  }

}