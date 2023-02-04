import { Component, OnInit } from '@angular/core';
import {TeenagersService} from "../../teenagers.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s78018',
  templateUrl: './s78018.page.html',
  styleUrls: ['./s78018.page.scss'],
})
export class S78018Page implements OnInit {

  bg_tn="bg_purple_blue"
  bg_cft="bg_purple_blue"
  bg="purple_blue_w2"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any
  bookmark=0
  toc="start-here/s78001"
  path=this.router.url


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
  receiveBookmark(e)
{
  console.log(e)
 if(e==true)
  this.bookmark=1
  else
    this.bookmark=0
}

  sessionPoints(){
    this.service.sessionPoints({"UserId":this.userId,
    "ScreenNos":"78001,78002,78003,78004,78005,78006,78007,78008,78009,78010,78011,78012,78013,78014,78015,78016,78017"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }
  submitProgress(){
    this.router.navigate(['/teenagers/start-here/s78019'])

  }
  prev(){
    // this.router.navigate(['/teenagers/start-here/s78016'])
    this.router.navigate(['/teenagers/start-here/s78011p0'])
  }

}


