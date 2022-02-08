import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'
@Component({
  selector: 'app-s345',
  templateUrl: './s345.page.html',
  styleUrls: ['./s345.page.scss'],
})
export class S345Page implements OnInit {

  bg="green_w6"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any
  bookmark=0


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
    "ScreenNos":"325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
    

  }
  submitProgress(){
    this.router.navigate(['/adults/criticism/s346'])

  }
  prev(){
    this.router.navigate(['/adults/criticism/s344'])
  }


}
