import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s134180',
  templateUrl: './s134180.page.html',
  styleUrls: ['./s134180.page.scss'],
})
export class S134180Page implements OnInit {

  bg_tn = "bg_blue_pink"
  bg_cft = "bg_blue_pink"
  bg = "blue_pink_w12"

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
      "ScreenNos": "134152,134153,134154,134155,134156,134157,134158,134159,134160,134161,1341134,134163,134164,134165,134166,134167,134168,134169,134170,134171,134172,134173,134174,134176,134177,134178,134179"
    })
      .subscribe(res => {
        console.log("points", res)
        this.points = res
      })


  }

  submitProgress() {
    this.router.navigate(['/love/s134181'])
  }
  prev() {
    this.router.navigate(['/love/s134179'])

  }

}
