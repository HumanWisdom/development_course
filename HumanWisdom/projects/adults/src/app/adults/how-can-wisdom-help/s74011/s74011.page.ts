import { Component, OnInit } from '@angular/core';
import { AdultsService } from "../../adults.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s74011',
  templateUrl: './s74011.page.html',
  styleUrls: ['./s74011.page.scss'],
})
export class S74011Page implements OnInit {

  bg_tn="bg_purple_blue"
  bg_cft="bg_purple_blue"
  bg="purple_blue_w11"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

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
    "ScreenNos":"74001,74002,74003,74004,74005,74006,74007,74008,74009,74010"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
      })
  }
 
  submitProgress()
  {
    this.router.navigate(['/adults/how-can-wisdom-help/s74012'])
  }
  prev(){
    localStorage.setItem("pageaction", 'prev')
    this.router.navigate(['/adults/how-can-wisdom-help/s74010'])
  }
}