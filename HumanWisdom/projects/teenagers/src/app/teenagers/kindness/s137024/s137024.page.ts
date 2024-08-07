import { Component, OnInit ,ViewChild,  ElementRef, AfterViewInit,OnDestroy} from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s137024',
  templateUrl: './s137024.page.html',
  styleUrls: ['./s137024.page.scss'],
})
export class S137024Page implements OnInit 
{
  bg_tn="bg_pink_orange"
  bg_cft="bg_pink_orange"
  bg="pink_orange_w4"
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  userName:any
  progressPercent:any
  progressText="1/3"
  link="teenagers/kindness/s137025"
  name="#2  What gets in the way of being kind?"
  progressImg=""
  toc="teenagers/kindness/s137001"

  constructor
  (
    private router: Router, 
    private location:Location,
    private service: TeenagersService
  ) 
  { }

  ngOnInit() 
  {
    if(this.saveUsername==false)
    {
      this.userId=JSON.parse(sessionStorage.getItem("userId"))
      this.userName=JSON.parse(sessionStorage.getItem("userName"))
    }
    else
    {
      this.userId=JSON.parse(localStorage.getItem("userId"))
      this.userName=JSON.parse(localStorage.getItem("userName"))
    }
    this.getProgress()
  }

  getProgress()
  {
    this.service.getPoints(this.userId)
    .subscribe(res=>{
     this.progressPercent=parseInt(res.ModUserScrPc.find(e=>e.ModuleId==137).Percentage)
     
    })
  }
}