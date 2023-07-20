import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s130036',
  templateUrl: './s130036.page.html',
  styleUrls: ['./s130036.page.scss'],
})
export class S130036Page implements OnInit 
{
  bg_tn="bg_teal"
  bg_cft="bg_teal"
  bg="teal_flat"
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
    "ScreenNos":"130002,130003,130004,130005,130006,130007,130008,130009,130010,130011,130012,130013,130014,130015,130016,130017,130018,130019,130020,130021,130022,130023,130024,130025,130026,130027,130028,130029,130030,130031,130032,130033,130034,130035,130036"})
    .subscribe(res=>
    {
      console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/dealing-with-death/s130037'])
  }

  prev()
  {
    this.router.navigate(['/dealing-with-death/s130035'])
  }
}