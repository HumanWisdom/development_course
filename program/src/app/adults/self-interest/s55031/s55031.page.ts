import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s55031',
  templateUrl: './s55031.page.html',
  styleUrls: ['./s55031.page.scss'],
})
export class S55031Page implements OnInit {

  bg="purple_red_w11"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any


  constructor(private router: Router,
    private service:AdultsService,
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
    "ScreenNos":"55002,55003,55004,55005,55006,55007,55008,55009,55010,55011,55012,55013,55014,55015,55016,55017,55018,55019,55020,55021,55022,55023,55024,55025,55026,55027,55028,55029,55030"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/adults/self-interest/s55032'])
  }
  prev(){
    this.router.navigate(['/adults/self-interest/s55030'])

  }

}
