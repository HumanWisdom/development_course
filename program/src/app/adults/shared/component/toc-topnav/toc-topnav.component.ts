import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingService } from 'src/app/onboarding/onboarding.service';

@Component({
  selector: 'app-toc-topnav',
  templateUrl: './toc-topnav.component.html',
  styleUrls: ['./toc-topnav.component.scss'],
})
export class TocTopnavComponent implements OnInit {
  isloggedIn = false;
  name = ''
  roleid = 0
  url = '';
  subscriper= false;

  @Input()
  enableplaystore = true

  constructor(private router: Router, private Onboardingservice: OnboardingService) {
    this.roleid = JSON.parse(localStorage.getItem('RoleID'));
    let userid = localStorage.getItem('isloggedin');
    let sub: any = localStorage.getItem("Subscriber")
    if(sub === '1') {
      this.subscriper = true;
    }
    this.name = localStorage.getItem('name');
    if(userid === 'T') {
      this.isloggedIn = true
    }
    let userId=JSON.parse(localStorage.getItem("userId"))
    this.Onboardingservice.getuser(userId).subscribe((res)=>{
      let userdetail = res[0];
      this.url = userdetail['UserImagePath'].split('\\')[1] 
    })
   }

  ngOnInit() {
  }

  routeGuide(value: any) {

  }

  getevent() {
    this.name = localStorage.getItem('name');
  }

  routeAffiliate() {
      let userId = JSON.parse(localStorage.getItem("userId"))
      window.location.href = `https://humanwisdom.me/Admin/#/frameworks/affiliate-s01-a/${userId}`;
      return false;
  }
 
  logout() {
    // localStorage.clear();
    localStorage.setItem('isloggedin', 'F')
    localStorage.setItem('guest', 'T')
    this.router.navigate(['/onboarding/login'])
  }

  loginroute() {
    this.router.navigate(['/onboarding/login'])
  }

  giftwisdom() {
    localStorage.setItem('giftwisdom', 'T')
  }

}