import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s117038',
  templateUrl: './s117038.page.html',
  styleUrls: ['./s117038.page.scss'],
})
export class S117038Page implements OnInit {

  bg_tn="bg_green_yellow"
  bg_cft="bg_green_yellow"
  bg="green_yellow_w11"

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
    "ScreenNos":"117002,117003,117004,117005,117006,117007,117008,117009,117010,117011,117012,117013,117014,117015,117016,117017,117018,117019,117020,117021,117022,117023,117024,117025,117026,117027,117028,117029,117030,117031,117032,117033,117034,117035,117036,117037"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/loneliness/s117039'])
  }
  prev(){
    this.router.navigate(['/loneliness/s117037'])

  }

}
