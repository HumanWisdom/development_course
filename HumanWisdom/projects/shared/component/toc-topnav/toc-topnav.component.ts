import {
  getSupportedInputTypes,
  Platform,
  supportsPassiveEventListeners,
  supportsScrollBehavior
} from '@angular/cdk/platform';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingService } from '../../services/onboarding.service';
import { ProgramType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-toc-topnav',
  templateUrl: './toc-topnav.component.html',
  styleUrls: ['./toc-topnav.component.scss'],
})
export class TocTopnavComponent implements OnInit {
  supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
  supportsPassiveEventListeners = supportsPassiveEventListeners();
  supportsScrollBehavior = supportsScrollBehavior();

  isloggedIn = false;
  name = ''
  roleid = 0
  url = '';
  subscriber = false;
  @Input()
  enableplaystore = true
  isAdults: boolean = true; 

  constructor(private router: Router, private Onboardingservice: OnboardingService, public platform: Platform) {
    this.roleid = JSON.parse(localStorage.getItem('RoleID'));
    let userid = localStorage.getItem('isloggedin');
    this.name = localStorage.getItem('name');
    if (userid === 'T') {
      this.isloggedIn = true
    }
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
  }

  ngOnInit() {
    setTimeout(() => {
      let sub: any = localStorage.getItem("Subscriber")
      if (sub === '1' || sub === 1) {
        this.subscriber = true;
      }
      let userId = JSON.parse(localStorage.getItem("userId"))
      this.Onboardingservice.getuser(userId).subscribe((res) => {
        let userdetail = res[0];
        this.url = userdetail['UserImagePath'].split('\\')[1]
      })
    }, 5000)
  }

  routeGuide() {
    this.router.navigate([`/adults/program-guide/s35001`])
  }

  handleReferFriendClick() {
    const url = this.isAdults ? '/adults/refer-friend' : '/teenagers/refer-friend';
    this.router.navigate([url]);
  }
  
  handleTreeSisterClick() {
    const url = this.isAdults ? '/adults/treesisters' : '/teenagers/treesisters';
    this.router.navigate([url]);
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
    this.router.navigate(['/onboarding/login'],{replaceUrl:true,skipLocationChange:true})
  }

  loginroute() {
    this.router.navigate(['/onboarding/login'],{replaceUrl:true,skipLocationChange:true})
  }

  giftwisdom() {
    localStorage.setItem('giftwisdom', 'T')
  }
  navigate(url){
    this.router.navigate([url],{replaceUrl:true,skipLocationChange:true});
  }
}