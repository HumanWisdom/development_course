import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s136095',
  templateUrl: './s136095.page.html',
  styleUrls: ['./s136095.page.scss'],
})
export class S136095Page implements OnInit {

  bg_tn="bg_green"
  bg_cft="bg_green"
  bg="green_w9"

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
    "ScreenNos":"136071, 136072, 136073, 136074, 136075,  136076, 136077,  136078, 136079, 136080, 136081, 136082, 136083,136084,136085, 136086, 136087, 136088, 136089, 136090, 136091, 136092, 136093, 136094,"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
    

  }
  submitProgress(){
    this.router.navigate(['/teenagers/criticism/s136096'])

  }
  prev(){
    this.router.navigate(['/teenagers/criticism/s136094'])
  }


}
