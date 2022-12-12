import { Component, OnInit } from '@angular/core';
import { AdultsService } from "../../adults.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'HumanWisdom-s77042',
  templateUrl: './s77042.page.html',
  styleUrls: ['./s77042.page.scss'],
})
export class S77042Page implements OnInit {

  bg_tn="bg_light_blue"
  bg_cft="bg_light_blue"
  bg="light_blue_flat"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any

  constructor(private router: Router,
    private service:AdultsService,
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
    "ScreenNos":"77002,77003,77004,77005,77006,77007,77008,77009,77010,77011,77012,77013,77014,77015,77016,77017,77018,77019,77020,77021,77022,77023,77024,77025,77026,77027,77028,77029,77030,77031,77032,77033,77034,77035,77036,77037,77038,77039,77040,77041"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/adults/making-better-decisions/s77043'])
  }

  prev()
  {
    this.router.navigate(['/adults/making-better-decisions/s77041'])
  }

}