import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s59035',
  templateUrl: './s59035.page.html',
  styleUrls: ['./s59035.page.scss'],
})
export class S59035Page implements OnInit {

  bg="blue_w8"

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
    "ScreenNos":"59002,59003,59004,59005,59006,59007,59008,59009,59010,59011,59012,59013,59014,59015,59016,59017,59018,59019,59020,59021,59022,59023,59024,59025,59026,59027,59028,59029,59030,59031,59032,59033,59034"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/adults/leadership/s59036'])
  }
  prev(){
    this.router.navigate(['/adults/leadership/s59034'])

  }

}
