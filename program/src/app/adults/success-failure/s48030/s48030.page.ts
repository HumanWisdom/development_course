import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s48030',
  templateUrl: './s48030.page.html',
  styleUrls: ['./s48030.page.scss'],
})
export class S48030Page implements OnInit {

  bg="light_blue_w3"

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
    "ScreenNos":"48002,48003,48004,48005,48006,48007,48008,48009,48010,48011,48012,48013,48014,48015,48016,48017,48018,48019,48020,48021,48022,48023,48024,48025,48026,48027,48028,48029"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/adults/success-failure/s48031'])
  }
  prev(){
    this.router.navigate(['/adults/success-failure/s48029'])

  }

}
