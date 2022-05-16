import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s47324',
  templateUrl: './s47324.page.html',
  styleUrls: ['./s47324.page.scss'],
})
export class S47324Page implements OnInit {

  bg_tn="bg_purple"
  bg_cft="bg_purple"
  bg="purple_w7"

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
    "ScreenNos":"47277,47278,47279,47280,47281,47282,47283,47284,47285,47286,47287,47288,47289,47290,47291,47292,47293,47294,47295,47296,47297,47298,47299,47300,47301,47302,47303,47304,47305,47306,47307,47308,47309,47310,47311,47312,47313,47314,47315,47316,47317,47318,47319,47320,47321,47322,47323"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/adults/relationships/s47325'])
  }
  prev(){
    this.router.navigate(['/adults/relationships/s47323'])

  }

}

