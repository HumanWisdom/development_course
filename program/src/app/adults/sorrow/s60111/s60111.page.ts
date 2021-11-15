import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s60111',
  templateUrl: './s60111.page.html',
  styleUrls: ['./s60111.page.scss'],
})
export class S60111Page implements OnInit {

  bg="purple_w8"

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
    "ScreenNos":"60068,60069,60070,60071,60072,60073,60074,60075,60076,60077,60078,60079,60080,60081,60082,60083,60084,60085,60086,60087,60088,60089,60090,60091,60092,60093,60094,60095,60096,60097,60098,60099,60100,60101,60102,60103,60104,60105,60106,60107,60108,60109,60110"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/sorrow/s60112'])
  }
  prev(){
    this.router.navigate(['/sorrow/s60110'])

  }

}
