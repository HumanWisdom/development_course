import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s134078',
  templateUrl: './s134078.page.html',
  styleUrls: ['./s134078.page.scss'],
})
export class S134078Page implements OnInit {

  bg_tn = "bg_blue_pink"
  bg_cft = "bg_blue_pink"
  bg = "blue_pink_w9"

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  points: any
  overallPercentage: any


  constructor(private router: Router,
    private service: TeenagersService,
    private location: Location) { }

  ngOnInit() {
    if (this.saveUsername == false) { this.userId = JSON.parse(sessionStorage.getItem("userId")) }
    else { this.userId = JSON.parse(localStorage.getItem("userId")) }
    this.sessionPoints()
  }

  sessionPoints() {
    this.service.sessionPoints({
      "UserId": this.userId,
      "ScreenNos": "134046,134047,134048,134049,134050,134051,134052,134053,134054,134055,134056,134057,134058,134059,134060,134061,1340134,134063,134064,134065,134066,134067,134068,134069,134070,134071,134072,134073,134074,134075,134076"
    })
      .subscribe(res => {
        console.log("points", res)
        this.points = res
      })


  }

  submitProgress() {
    this.router.navigate(['/love/s134079'])
  }
  prev() {
    this.router.navigate(['/love/s134077'])

  }

}
