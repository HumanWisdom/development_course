import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s132260',
  templateUrl: './s132260.page.html',
  styleUrls: ['./s132260.page.scss'],
})
export class S132260Page implements OnInit {

  bg_tn="bg_blue"
  bg_cft="bg_blue"
  bg="blue_flat"

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
    "ScreenNos":"132225,132226,132227,132228,132229,132230,132231,132232,132233,132234,132235,132236,132237,132238,132239,132240,132241,132242,132243,132244,132245,132246,132247,132248,132249,132250,132251,132252,132253,132254,132255"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/communication/s132261'])
  }
  prev(){
    this.router.navigate(['/communication/s132259'])

  }

}
