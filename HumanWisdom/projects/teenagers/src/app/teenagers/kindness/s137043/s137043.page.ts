import { Component, OnInit ,ViewChild,  ElementRef, AfterViewInit,OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import * as jQuery from 'jquery';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'HumanWisdom-s137043',
  templateUrl: './s137043.page.html',
  styleUrls: ['./s137043.page.scss'],
})
export class S137043Page implements OnInit {

  bg_tn="bg_pink_orange"
  bg_cft="bg_pink_orange"
  bg="pink_orange_flat"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any

  constructor
  (
    private router: Router,
    private service:TeenagersService,
    private location:Location
  ) 
  { }

  ngOnInit() 
  {
    if(this.saveUsername==false)
    {
      this.userId=JSON.parse(sessionStorage.getItem("userId"))
    }
    else
    {
      this.userId=JSON.parse(localStorage.getItem("userId"))
    }
    this.sessionPoints()
  
  }

  sessionPoints()
  {
    this.service.sessionPoints({"UserId":this.userId,
    "ScreenNos":"137025,137026,137027,137028,137029,137030,137031,137032,137033,137034,137035,137036,137037,137038,137039,137040,137041,137042"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/kindness/s137044'])
  }

  prev()
  {
    this.router.navigate(['/kindness/s137042'])
  }
}