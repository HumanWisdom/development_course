import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s133185',
  templateUrl: './s133185.page.html',
  styleUrls: ['./s133185.page.scss'],
})
export class S133185Page implements OnInit {

  bg_tn="bg_red_pink"
  bg_cft="bg_red_pink"
  bg="red_pink_w5"

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
    "ScreenNos":"133142,133143,133144,133145,133146,133147,133148,133149,133150,133151,133152,133153,133154,133155,133156,133157,133158,133159,133160,133161,133162,133163,133164,133165,133166,133167,133168,133169,133170,133171,133172,133173,133174,133175,133176,133177,133178,133179,133180,133181,133182,133183,133184"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    localStorage.setItem("pageaction", 'next')
   // this.router.navigate(['/adults/happiness/s133183'])
   this.router.navigate(['/adults/happiness/s133183'])

  }
  prev(){
    localStorage.setItem("pageaction", 'prev')
    this.router.navigate(['/adults/happiness/s133181p4'])

  }

}
