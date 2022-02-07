import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s58047',
  templateUrl: './s58047.page.html',
  styleUrls: ['./s58047.page.scss'],
})
export class S58047Page implements OnInit {

  bg="dark_blue_w2"

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
    "ScreenNos":"58002,58003,58004,58005,58006,58007,58008,58009,58010,58011,58012,58013,58014,58015,58016,58017,58018,58019,58020,58021,58022,58023,58024,58025,58026,58027,58028,58029,58030,58031,58032,58033,58034,58035,58036,58037,58038,58039,58040,58041,58042,58043,58044,58045,58046"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/adults/work/s58048'])
  }
  prev(){
    this.router.navigate(['/adults/work/s58046'])

  }

}
