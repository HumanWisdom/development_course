import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'HumanWisdom-s135090',
  templateUrl: './s135090.page.html',
  styleUrls: ['./s135090.page.scss'],
})
export class S135090Page implements OnInit {

  bg_tn="bg_pink_orange"
  bg_cft="bg_pink_orange"
  bg="pink_orange_flat"

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
    "ScreenNos":"135060,135061,135062,135063,135064,135065,135066,135067,135068,135069,135070,135071,135072,135073,135074,135075,1350135,135077,135078,135079,135080,135081,135082,135083,135084,135085,135086,135087,135088,135089,135090,135091"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/teenagers/bullying/s135091'])
  }

  prev()
  {
    this.router.navigate(['/teenagers/bullying/s135089'])
  }

}