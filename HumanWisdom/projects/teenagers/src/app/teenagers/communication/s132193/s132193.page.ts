import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s132193',
  templateUrl: './s132193.page.html',
  styleUrls: ['./s132193.page.scss'],
})
export class S132193Page implements OnInit {

  bg_tn="bg_blue"
  bg_cft="bg_blue"
  bg="blue_w1"

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
    "ScreenNos":"132165,132166,132167,132168,132169,132170,132171,132172,132173,132174,132175,132176,132177,132178,132179,132180,132181,132182,132183,132184,132185,132186,132187,132188,132189,132190,132191,132192"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/communication/s132194'])
  }
  prev(){
    localStorage.setItem("pageaction", 'prev')
    this.router.navigate(['/communication/s132192'])

  }

}
