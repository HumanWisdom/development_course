import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s43034',
  templateUrl: './s43034.page.html',
  styleUrls: ['./s43034.page.scss'],
})
export class S43034Page implements OnInit {

  bg="teal_flat"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any
  bookmark=0
  toc="obstacles-enquiry/s43000"
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
    "ScreenNos":"43002,43003,43004,43005,43006,43007,43008,43009,43010,43011,43012,43013,43014,43015,43016,43017,43018,43019,43020,43021,43022,43023,43024,43025,43026,43027,43028,43029,43030,43031,43032,43033"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }
  submitProgress(){
    this.router.navigate(['/adults/obstacles-enquiry/s43035'])

  }
  prev(){
    this.router.navigate(['/adults/obstacles-enquiry/s43029p4'])

  }

}


