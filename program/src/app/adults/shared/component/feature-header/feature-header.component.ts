import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location } from '@angular/common'
import {AdultsService} from "../../../../adults/adults.service"

@Component({
  selector: 'app-feature-header',
  templateUrl: './feature-header.component.html',
  styleUrls: ['./feature-header.component.scss'],
})
export class FeatureHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() sharedPath: string;

  urlT:any
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  token=JSON.parse(localStorage.getItem("token"))
  socialShare=false
  path:any
  address=this.router.url

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location,
    private ac:ActivatedRoute) {
      this.urlT=this.router.getCurrentNavigation()?.extractedUrl.queryParams.t
     }

  ngOnInit() {
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
   
  }

  addToken(){
    // history.replaceState(null, null, 'Course#'+this.address+`?t=${this.token}`);
    this.socialShare=true

    if(this.title=="Wisdom Stories")
    {
      if(this.urlT)
    {
      console.log("url story")
     this.path="https://humanwisdom.me/course/#/"+this.address+`&t=${this.urlT}`
 
    }
    else{
      console.log("local story")
     this.path="https://humanwisdom.me/course/#/"+this.address+`&t=${this.token}`
    }


      

    }
    else{
      
      if(this.urlT)
    {
      console.log("url")
     this.path="https://humanwisdom.me/course/#/"+this.address+`?t=${this.urlT}`
 
    }
    else{
      console.log("local")
     this.path="https://humanwisdom.me/course/#/"+this.address+`?t=${this.token}`
    }

    }
    
    
   
   }
   goBack(){
     this.location.back()
   }
 

}
