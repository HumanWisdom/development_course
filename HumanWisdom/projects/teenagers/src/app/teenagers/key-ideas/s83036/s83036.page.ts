import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s83036',
  templateUrl: './s83036.page.html',
  styleUrls: ['./s83036.page.scss'],
})
export class S83036Page implements OnInit {

  bg_tn="bg_purple_blue"
  bg_cft="bg_purple_blue"
  bg="purple_blue_flat"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any

  constructor(private router: Router,
    private service:TeenagersService,
    private location:Location) { }

  ngOnInit() 
  {
    if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
    this.sessionPoints()
  }

  sessionPoints()
  {
    this.service.sessionPoints({"UserId":this.userId,
    "ScreenNos":"83001,83002,83003,83004,83005,83006,83007,83008,83009,83010,83011,83012,83013,83014,83015,83016,83017,83018,83019,83020,83021,83022,83023,83024,83025,83026,83027,83028,83029,83030,83031,83032,83033,83034,83035"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/key-ideas/s83037'])
  }

  prev()
  {
    this.router.navigate(['/key-ideas/s83035'])
  }

}