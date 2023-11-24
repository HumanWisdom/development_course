import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';
import { OnboardingService } from '../../services/onboarding.service';
//import { LogEventService } from 'src/app/log-event.service';

@Component({
  selector: 'app-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.scss'],
})
export class BottomNavigationComponent implements OnInit {
  @Input() dash = false;
  @Input() programType :ProgramType = ProgramType.Adults;
  journal = false
  fourm = false
  profile = true
  isloggedIn = false
  enableprofile = false
  search = false
  Subscriber: any;
  guest: any;
  userdetail:any;
  url:string='';
  defaultUrl = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/profile_active.svg";
  @Input() isGuidedQuestion?: boolean = false;
  @Output() saveQuestion = new EventEmitter();
  @Output() journalclick = new EventEmitter();
  constructor(private router: Router,private onboardingService: OnboardingService) { }

  ngOnInit() {
    let userid = localStorage.getItem('isloggedin');
    if (userid === 'T') {
      this.isloggedIn = true
      this.Subscriber = localStorage.getItem('Subscriber')
      this.guest = localStorage.getItem('guest')
    }
    if (this.router.url == "/adults/search"
      || this.router.url.includes('/adults/site-search/') ||
      this.router.url.includes('/adults/search')) {
      this.dash = false
      this.journal = false
      this.fourm = false;
      this.search = true;
    }
    if (this.router.url == "/adults/adult-dashboard") {
      this.dash = true
      this.journal = false
      this.search = false;
    }
    if ((this.router.url == "/adults/journal") ||
      this.router.url.includes('/journal') || this.router.url.includes('/guidedquestions') ||
      (this.router.url.indexOf('/adults/note') > -1)) {
      this.dash = false
      this.journal = true
    }
    let reg = new RegExp('forum')
    if ((reg.test(this.router.url))) {
      this.dash = false
      this.journal = false
      this.fourm = true;
    }
    if (this.router.url == "/onboarding/user-profile"
      || this.router.url.includes('/onboarding/payment-details') || this.router.url.includes('/profile-edit') ||
      this.router.url.includes('/onboarding/myprogram')) {
      this.dash = false
      this.journal = false
      this.fourm = false;
    }
  
    if (this.isloggedIn) {
      var loggedInUserId = SharedService.getUserId();
      if(loggedInUserId>0){
        this.onboardingService.getuser(loggedInUserId).subscribe((res) => {
          this.userdetail = res[0];
          this.url = this.userdetail['UserImagePath'].split('\\')[1] + '?' + (new Date()).getTime();
          this.enableprofile = true;
          this.profile = true;
        });
      }else{
        this.enableprofile = true;
        this.profile = true;
      }
    }
  }

  routeDash() {
    if(ProgramType.Teenagers==this.programType || 
      SharedService.ProgramId == ProgramType.Teenagers){
      this.router.navigate(['/teenager-dashboard/']);
    }else{
      this.router.navigate(['/adults/adult-dashboard'])
    }
    //this.logeventservice.logEvent('click_home')
  }

  routeJournal() {
    if(ProgramType.Teenagers==this.programType || 
      SharedService.ProgramId == ProgramType.Teenagers){
      this.router.navigate(['/journal/']);
    }else{
      this.router.navigate(['/adults/journal']);
    }
  }
  

  routeSearch() {
    if(ProgramType.Teenagers==this.programType || 
      SharedService.ProgramId == ProgramType.Teenagers){
      this.router.navigate(['/search/']);
    }else{
      this.router.navigate(['/adults/search']);
    }
    //this.logeventservice.logEvent('click_for_you')
  }
  profileclickevent() {

    if (localStorage.getItem('isloggedin') === 'T') {
      //this.logeventservice.logEvent('click_profile')
      this.router.navigate(['/onboarding/user-profile'])
    } else {
      // if(localStorage.getItem('acceptcookie') !== null)  {
      //this.logeventservice.logEvent('click_login')
      localStorage.setItem('btnclick', 'T')
      this.router.navigate(['/onboarding/login'], { replaceUrl: true, skipLocationChange: true })
      // }

    }
  }

  routeForum() {
    // if(localStorage.getItem('isloggedin') === 'T')
    this.router.navigate(['/forum'],{ state: { programType: this.programType } })
  }

  saveQuestionButton() {
    this.saveQuestion.emit();
  }
}
