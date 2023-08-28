import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s136111',
  templateUrl: './s136111.page.html',
  styleUrls: ['./s136111.page.scss'],
})
export class S136111Page implements OnInit {

  bg_tn="bg_green"
  bg_cft="bg_green"
  bg="green_w9"
  comparison:any
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any
  bookmark=0


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
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
  }

 
  sessionPoints(){
    this.service.sessionPoints({"UserId":this.userId,
    "ScreenNos":" 136097, 136098, 136099, 136100, 136101, 136102, 136103, 136104, 136105, 136106, 136107, 136108, 136109, 136110"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
    

  }
  submitProgress(){
    this.router.navigate(['/criticism/s136112'])
  }
  prev(){
    this.router.navigate(['/criticism/s136110'])
  }
  


}
