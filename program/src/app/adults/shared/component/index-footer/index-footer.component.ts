import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AdultsService} from "../../../../adults/adults.service"
@Component({
  selector: 'app-index-footer',
  templateUrl: './index-footer.component.html',
  styleUrls: ['./index-footer.component.scss'],
})
export class IndexFooterComponent implements OnInit {
  dash=false
  journal=false
  fourm=false
  profile = false
  isloggedIn=false
  enableprofile=false
  Subscriber: any;

  constructor(private router: Router, private service:AdultsService) { }

  ngOnInit() {
    let userid = localStorage.getItem('isloggedin');
    if(userid === 'T') {
      this.isloggedIn = true
      this.Subscriber = localStorage.getItem('Subscriber')
    }
    console.log("url",this.router.url)
    if(this.router.url=="/adults/adult-dashboard")
    {
      this.dash=true
      this.journal=false
      this.profile=false
    }
    if((this.router.url=="/adults/journal")||(this.router.url.indexOf('/adults/note') > -1))
    {
      this.dash=false
      this.profile=false
      this.journal=true
    }
    let reg = new RegExp('forum')
    if((reg.test(this.router.url))||(this.router.url.indexOf('/adults/note') > -1))
    {
      this.dash=false
      this.journal=true
      this.profile=false
      this.fourm = false;
    }
    if(this.router.url=="/onboarding/user-profile") {
      this.dash=false
      this.journal=false
      this.fourm = false;
      this.profile = true
      if(this.Subscriber === '1') {
        this.enableprofile = true;
      }
    }
  }

  routeDash(){
    this.router.navigate(['/adults/adult-dashboard'])
  }

  routeJournal(){
    this.router.navigate(['/adults/journal'])
  }

  profileclickevent() {
    if(localStorage.getItem('isloggedin') === 'T') {
      this.router.navigate(['/onboarding/user-profile'])
    } 
    else {
      // if(localStorage.getItem('acceptcookie') !== null)  {
        localStorage.setItem('btnclick', 'T')
        this.router.navigate(['/onboarding/login'])
      // }
    }
  }

  routeForum(){
    if(localStorage.getItem('isloggedin') === 'T')
      this.router.navigate(['/forum'])
  }
}