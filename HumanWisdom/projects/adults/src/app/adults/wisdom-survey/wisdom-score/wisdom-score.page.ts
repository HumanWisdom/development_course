import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-wisdom-score',
  templateUrl: './wisdom-score.page.html',
  styleUrls: ['./wisdom-score.page.scss'],
})
export class WisdomScorePage implements OnInit {


  bg="purple_blue_w2"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  
  overallPercentage:any
  bookmark=0
  toc=""
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  points=localStorage.getItem("wisdomScore")

isUseCloseButton:boolean;
  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
      const {isUseCloseButton} = window.history.state;
      this.isUseCloseButton=isUseCloseButton;
  }
  receiveBookmark(e)
{
  console.log(e)
 if(e==true)
  this.bookmark=1
  else
    this.bookmark=0
}

  
  submitProgress(){
    
    this.router.navigate(['/adults/discovering-wisdom/s27032'])

  }
  prev(){
    this.router.navigate(['/adults/discovering-wisdom/s27020'])

  }

}


