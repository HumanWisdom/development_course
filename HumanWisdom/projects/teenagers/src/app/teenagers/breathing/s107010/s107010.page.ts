import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import {Location } from '@angular/common'


@Component({
  selector: 'app-s107010',
  templateUrl: './s107010.page.html',
  styleUrls: ['./s107010.page.scss'],
})
export class S107010Page implements OnInit {

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
    "ScreenNos":"107002,107003,107004,107005,107006,107007,107008,107009"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    localStorage.setItem("pageaction", 'next')
    this.router.navigate(['/breathing/s107011'])
  }
  prev(){
    localStorage.setItem("pageaction", 'prev')
    this.router.navigate(['/breathing/s107009'])


  }

}
