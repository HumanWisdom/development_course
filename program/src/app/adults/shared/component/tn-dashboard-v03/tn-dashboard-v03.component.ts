import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingService } from 'src/app/onboarding/onboarding.service';
import {
  getSupportedInputTypes,
  Platform,
  supportsPassiveEventListeners,
  supportsScrollBehavior,
} from '@angular/cdk/platform';

@Component({
  selector: 'app-tn-dashboard-v03',
  templateUrl: './tn-dashboard-v03.component.html',
  styleUrls: ['./tn-dashboard-v03.component.scss'],
})
export class TnDashboardV03Component implements OnInit {
  supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
  supportsPassiveEventListeners = supportsPassiveEventListeners();
  supportsScrollBehavior = supportsScrollBehavior();

  isloggedIn = false;
  name = ''
  roleid = 0
  url = '';
  subscriber= false;
  @Input()
  enableplaystore = true
  @Input()
  routeid = ''

  constructor(private router: Router, private Onboardingservice: OnboardingService, public platform: Platform) {
    this.roleid = JSON.parse(localStorage.getItem('RoleID'));
    let userid = localStorage.getItem('isloggedin');
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
    setTimeout(() => {
      let sub: any = localStorage.getItem("Subscriber")
    if(sub === '1' || sub === 1) {
      this.subscriber = true;
    }
    }, 5000)
  }

  routeGuide() {
    this.router.navigate([`/adults/program-guide/s35001`])
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

  closeplaystore() {
    this.enableplaystore = false;
  }
}