import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s32014',
  templateUrl: './s32014.page.html',
  styleUrls: ['./s32014.page.scss'],
})
export class S32014Page implements OnInit {

  bg_tn="bg_purple_blue"
  bg_cft="bg_purple_blue"
  bg="purple_blue_w2"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any
  bookmark=0
  toc="benefits-of-wisdom/s32001"
  path=this.router.url


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
    "ScreenNos":"32001,32002,32003,32004,32005,32006,32007,32008,32009,32010,32011,32012,32013"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }
  submitProgress(){
    localStorage.setItem("pageaction", 'next')
    this.router.navigate(['/adults/benefits-of-wisdom/s32015'])

  }
  prev(){
    localStorage.setItem("pageaction", 'prev')
    this.router.navigate(['/adults/benefits-of-wisdom/s32013'])

  }

}


