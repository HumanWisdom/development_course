import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s73042',
  templateUrl: './s73042.page.html',
  styleUrls: ['./s73042.page.scss'],
})
export class S73042Page implements OnInit {

  bg="red_pink_w6"

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
    "ScreenNos":"73002,73003,73004,73005,73006,73007,73008,73009,73010,73011,73012,73013,73014,73015,73016,73017,73018,73019,73020,73021,73022,73023,73024,73025,73026,73027,73028,73029,73030,73031,73032,73033,73034,73035,73036,73037,73038,73039,73040,73041"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/money/s73043'])
  }
  prev(){
    this.router.navigate(['/money/s73041'])

  }

}
