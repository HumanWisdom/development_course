import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s104034',
  templateUrl: './s104034.page.html',
  styleUrls: ['./s104034.page.scss'],
})
export class S104034Page implements OnInit {

  bg_tn="bg_teal"
  bg_cft="bg_teal"
  bg="teal_flat"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any
  bookmark=0
  toc="obstacles-enquiry/s104000"
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
    "ScreenNos":"104002,104003,104004,104005,104006,104007,104008,104009,104010,104011,104012,104013,104014,104015,104016,104017,104018,104019,104020,104021,104022,104023,104024,104025,104026,104027,104028,104029,104030,104031,104032,104033"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }
  submitProgress(){
    this.router.navigate(['/obstacles-enquiry/s104035'])

  }
  prev(){
    this.router.navigate(['/obstacles-enquiry/s104033'])

  }

}


