import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  search=false
  Subscriber: any;
  constructor(private router: Router) { }

  ngOnInit() {
    let userid = localStorage.getItem('isloggedin');
    if(userid === 'T') {
      this.isloggedIn = true
      this.Subscriber = localStorage.getItem('Subscriber')
    }
    if(this.router.url=="/adults/adult-dashboard")
    {
      this.dash=true
      this.journal=false
      this.profile=false
      this.search = false;
    }else {
      this.dash=false
      this.journal=false
      this.profile=false
      this.fourm = false;
      this.search = false;
    }
    if(this.router.url=="/adults/search") {
      this.dash=false
      this.journal=false
      this.profile=false
      this.fourm = false;
      this.search = true;
    }
    if((this.router.url=="/adults/journal")||(this.router.url.indexOf('/adults/note') > -1))
    {
      this.dash=false
      this.profile=false
      this.journal=true
    }
    let reg = new RegExp('forum')
    if((reg.test(this.router.url)))
    {
      this.dash=false
      this.journal=false
      this.profile=false
      this.fourm = true;
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
    // if(localStorage.getItem('isloggedin') === 'T')
      this.router.navigate(['/adults/journal'])
   
  }
  routeSearch(){
    this.router.navigate(['/adults/search']);
  } 
  profileclickevent() {
    if(localStorage.getItem('isloggedin') === 'T') {
      this.router.navigate(['/onboarding/user-profile'])
    } else {
      // if(localStorage.getItem('acceptcookie') !== null)  {
        localStorage.setItem('btnclick', 'T')
        this.router.navigate(['/onboarding/login'],{replaceUrl:true,skipLocationChange:true})
      // }
      
    }
  }

  routeForum(){
    // if(localStorage.getItem('isloggedin') === 'T')
       this.router.navigate(['/forum'])
   
  }

}
