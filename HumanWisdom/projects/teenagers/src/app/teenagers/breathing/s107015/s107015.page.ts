import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import {Location } from '@angular/common'


@Component({
  selector: 'app-s107015',
  templateUrl: './s107015.page.html',
  styleUrls: ['./s107015.page.scss'],
})
export class S107015Page implements OnInit {

  bg_tn="bg_teal"
  bg_cft="bg_teal"
  bg="teal_flat"
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
    "ScreenNos":"107002,107003,107004,107005,107006,107007,107008,107009,107009,107010,107011,107012,107013,107014"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    localStorage.setItem("pageaction", 'next')
     this.router.navigate(['/teenagers/breathing/s107016'])
  }
  prev(){
    localStorage.setItem("pageaction", 'prev')
     this.router.navigate(['/teenagers/breathing/s107014'])


  }

}