import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'HumanWisdom-s159127',
  templateUrl: './s159127.page.html',
  styleUrls: ['./s159127.page.scss'],
})
export class S159127Page implements OnInit {

  bg_tn=""
  bg_cft=""
  bg=""

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any

  constructor
  (
    private router: Router,
    private service:AdultsService,
    private location:Location
  ) 
  { }

  ngOnInit() 
  {
    if(this.saveUsername==false)
    {
      this.userId=JSON.parse(sessionStorage.getItem("userId"))
    }
    else
    {
      this.userId=JSON.parse(localStorage.getItem("userId"))
    }
    this.sessionPoints()
  }

  sessionPoints()
  {
    this.service.sessionPoints({"UserId":this.userId,
    "ScreenNos":"1,2,3,4,5,6,7,8,9,10,11,12,13,14,15"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/social-media/s159128'])
  }

  prev()
  {
    this.router.navigate(['/social-media/s159126'])
  }
}