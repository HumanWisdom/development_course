import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s52p1',
  templateUrl: './s52p1.page.html',
  styleUrls: ['./s52p1.page.scss'],
})
export class S52p1Page implements OnInit {

  bg="green_yellow_w9"

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
    "ScreenNos":"17,18,19,20,21,22,23,24,25,26,27,27,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51"})
    .subscribe(res=>
       {console.log("points",res)
       this.points=res
     })
  

  }
  submitProgress(){
    this.router.navigate(['/adults/comparison/s52p2'])
  }
  prev(){
    this.router.navigate(['/adults/comparison/s51'])

  }

}
