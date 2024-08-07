import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s35018',
  templateUrl: './s35018.page.html',
  styleUrls: ['./s35018.page.scss'],
})
export class S35018Page implements OnInit {

  bg_tn="bg_purple_blue"
  bg_cft="bg_purple_blue"
  bg="purple_blue_w2"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any
  bookmark=0
  toc="program-guide/s35001"
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);


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
    "ScreenNos":"35001,35002,35003,35004,35005,35006,35007,35008,35009,35010,35011,35012,35013,35014,35015,35016,35017"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }
  submitProgress(){
    localStorage.setItem("pageaction", 'next')
    this.router.navigate(['/adults/program-guide/s35019'])

  }
  prev(){
    localStorage.setItem("pageaction", 'prev')
    // this.router.navigate(['/adults/program-guide/s35016'])
    this.router.navigate(['/adults/program-guide/s35011p0'])
  }

}


