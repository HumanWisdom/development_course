import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s111055',
  templateUrl: './s111055.page.html',
  styleUrls: ['./s111055.page.scss'],
})
export class S111055Page implements OnInit 
{
  bg_tn="bg_green_yellow"
  bg_cft="bg_green_yellow"
  bg="green_yellow_flat"
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
    "ScreenNos":"111018,111019,111020,111021,111022,111023,111024,111025,111026,111027,111028,111029,111030,111031,111032,111033,111034,111035,111036,111037,111038,111039,111040,111041,111042,111043,111044,111045,111046,111047,111048,111049,111050,111051,111052,111053,111054"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/comparison/s111056'])
  }

  prev()
  {
    this.router.navigate(['/comparison/s111054'])
  }
}