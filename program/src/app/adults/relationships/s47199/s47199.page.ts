import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s47199',
  templateUrl: './s47199.page.html',
  styleUrls: ['./s47199.page.scss'],
})
export class S47199Page implements OnInit {

  bg="purple_w9"

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
    "ScreenNos":"47173,47174,47175,47176,47177,47178,47179,47180,47181,47182,47183,47184,47185,47186,47187,47188,47189,47190,47191,47192,47193,47194,47195,47196,47197,47198"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/adults/relationships/s47200'])
  }
  prev(){
    this.router.navigate(['/adults/relationships/s47198'])

  }

}

