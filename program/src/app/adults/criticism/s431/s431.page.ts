import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'
@Component({
  selector: 'app-s431',
  templateUrl: './s431.page.html',
  styleUrls: ['./s431.page.scss'],
})
export class S431Page implements OnInit {

  bg="green_w9"
  comparison:any
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any
  bookmark=0


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
    "ScreenNos":"418,419,420,421,422,423,424,425,426,427,428,429,430"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
    

  }
  submitProgress(){
    this.router.navigate(['/adults/criticism/s432'])
  }
  prev(){
    this.router.navigate(['/adults/criticism/s430'])
  }
  


}
