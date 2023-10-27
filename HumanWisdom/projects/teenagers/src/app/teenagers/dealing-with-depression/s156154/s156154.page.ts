import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s156154',
  templateUrl: './s156154.page.html',
  styleUrls: ['./s156154.page.scss'],
})
export class S156154Page implements OnInit {

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
    "ScreenNos":"156119,156120,156121,156122,156123,156124,156125,156126,156127,156128,156129,156130,156131,156132,156133,156134,156135,156136,156137,156138,156139,156140,156141,156142,156143,156144,156145,156146,156147,156148,156149,156150,156151,156152,156153"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/dealing-with-depression/s156155'])
  }

  prev()
  {
    this.router.navigate(['/dealing-with-depression/s156153'])
  }

}