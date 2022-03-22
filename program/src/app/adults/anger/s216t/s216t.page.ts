import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'
@Component({
  selector: 'app-s216t',
  templateUrl: './s216t.page.html',
  styleUrls: ['./s216t.page.scss'],
})
export class S216tPage implements OnInit {

  bg="anger_w4"  

  bookmark=0
  path=this.router.url
  audioPage="/anger/s216"
  toc="/anger/s0"
  
  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }


  ngOnInit() {
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
    this.router.navigate(['/adults/anger/s217'])
  }
  previous(){
    this.router.navigate(['/adults/anger/s215'])
  }
}
