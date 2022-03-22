import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s57038',
  templateUrl: './s57038.page.html',
  styleUrls: ['./s57038.page.scss'],
})
export class S57038Page implements OnInit {

  bg="green_w10"

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
    "ScreenNos":"57002,57003,57004,57005,57006,57007,57008,57009,57010,57011,57012,57013,57014,57015,57016,57017,57018,57019,57020,57021,57022,57023,57024,57025,57026,57027,57028,57029,57030,57031,57032,57033,57034,57035,57036,57037"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/adults/nature-of-i/s57039'])
  }
  prev(){
    this.router.navigate(['/adults/nature-of-i/s57037'])

  }

}
