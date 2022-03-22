import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s41019',
  templateUrl: './s41019.page.html',
  styleUrls: ['./s41019.page.scss'],
})
export class S41019Page implements OnInit {

  bg="blue_pink_w2"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any
  bookmark=0
  toc="questions-are-key/s41000"
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
    "ScreenNos":"41002,41003,41004,41005,41006,41007,41008,41009,41010,41011,41012,41013,41014,41015,41016,41017,41018"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }
  submitProgress(){
    this.router.navigate(['/adults/questions-are-key/s41019p1'])

  }
  prev(){
    this.router.navigate(['/adults/questions-are-key/s41018'])

  }

}


