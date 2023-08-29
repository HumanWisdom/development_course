import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s136022',
  templateUrl: './s136022.page.html',
  styleUrls: ['./s136022.page.scss'],
})
export class S136022Page implements OnInit {

  bg_tn="bg_green"
  bg_cft="bg_green"
  bg="green_w6"

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
    "ScreenNos":"136001,136002,136003,136004,136005,136006,136007,136008,136009,136010,136011,136012,136013,136014,136015,136016,136017,136018,136019,136020,136021"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
    

  }
  submitProgress(){
    this.router.navigate(['/criticism/s136023'])

  }
  prev(){
    this.router.navigate(['/criticism/s136021'])
  }


}
