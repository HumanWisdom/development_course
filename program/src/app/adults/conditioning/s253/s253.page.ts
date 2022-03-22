import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s253',
  templateUrl: './s253.page.html',
  styleUrls: ['./s253.page.scss'],
})
export class S253Page implements OnInit {

  // bg="module1_so_s1"
  bg="pink_orange_w7"

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
    "ScreenNos":"232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
    

  }
  submitProgress(){
    this.router.navigate(['/adults/conditioning/s254'])

  }
  prev(){
    this.router.navigate(['/adults/conditioning/s252'])

  }


}
