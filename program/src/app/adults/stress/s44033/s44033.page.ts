import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s44033',
  templateUrl: './s44033.page.html',
  styleUrls: ['./s44033.page.scss'],
})
export class S44033Page implements OnInit {

  bg="dark_blue_w8"

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
    "ScreenNos":"44002,44003,44004,44005,44006,44007,44008,44009,44010,44011,44012,44013,44014,44015,44016,44017,44018,44019,44020,44021,44022,44023,44024,44025,44026,44027,44028,44029,44030,44031,44032"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/stress/s44034'])
  }
  prev(){
    this.router.navigate(['/stress/s44032'])

  }

}
