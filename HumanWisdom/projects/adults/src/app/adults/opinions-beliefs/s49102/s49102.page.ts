import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s49102',
  templateUrl: './s49102.page.html',
  styleUrls: ['./s49102.page.scss'],
})
export class S49102Page implements OnInit {

  bg_tn="bg_purple_red"
  bg_cft="bg_purple_red"
  bg="purple_red_w8"

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
    "ScreenNos":"49050,49051,49052,49053,49054,49055,49056,49057,49058,49059,49060,49061,49062,49063,49064,49065,49066,49067,49068,49069,49070,49071,49072,49073,49074,49075,49076,49077,49078,49079,49080,49081,49082,49083,49084,49085,49086,49087,49088,49089,49090,49091,49092,49093,49094,49095,49096,49097,49098,49099,49100,49101"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/adults/opinions-beliefs/s49103'])
  }
  prev(){
    this.router.navigate(['/adults/opinions-beliefs/s49101'])

  }

}
