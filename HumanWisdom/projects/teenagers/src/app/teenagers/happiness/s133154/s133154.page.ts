import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s133154',
  templateUrl: './s133154.page.html',
  styleUrls: ['./s133154.page.scss'],
})
export class S133154Page implements OnInit {

  bg_tn="bg_red_pink"
  bg_cft="bg_red_pink"
  bg="red_pink_w9"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any


  constructor(private router: Router,
    private service:TeenagersService,
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
    "ScreenNos":"133106,133107,133108,133109,133110,133111,133112,133113,133114,133115,133116,133117,133118,133119,133120,133121,133122,1331133,133124,133125,133126,133127,133128,133129,133130,133131,133132,133133,133134,133135,133136,133137,133138,133139,133140,133141,133142,133143,133144,133145,133146,133147,133148,133149,133150,133151,133152,133153"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    localStorage.setItem("pageaction", 'next')
    this.router.navigate(['/happiness/s133155'])
  }
  prev(){
    localStorage.setItem("pageaction", 'prev')
    this.router.navigate(['/happiness/s133153'])

  }

}
