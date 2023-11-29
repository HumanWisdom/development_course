import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s131283',
  templateUrl: './s131283.page.html',
  styleUrls: ['./s131283.page.scss'],
})
export class S131283Page implements OnInit {

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
    "ScreenNos":"131227,131228,131229,131230,131231,131232,131233,131234,131235,131236,131237,131238,131239,131240,131241,131242,131243,131244,131245,131246,1312131,131248,131249,131250,131251,131252,131253,131254,131255,131256,131257,131258,131259,131260,131261,131262,131263,131264,131265,131266,131267,131268,131269,131270,131271,131272,131273,131274,131275,131276,131277,131278,131279,131280"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/relationships/s131284'])
  }
  prev(){
    this.router.navigate(['/relationships/s131282'])

  }

}

