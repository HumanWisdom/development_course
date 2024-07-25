import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramType } from '../../models/program-model';
import { SharedService, UrlConstant } from '../../services/shared.service';
import { OnboardingService } from '../../services/onboarding.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.scss'],
})
export class BottomNavigationComponent implements OnInit, OnDestroy, OnChanges {
  @Input() dash = false;
  @Input() programType: ProgramType = ProgramType.Adults;
  @Input() journal = false
  @Input() fourm = false
  @Input() profile = true
  isloggedIn = false
  @Input() enableprofile = false
  @Input() search = false
  Subscriber: any;
  guest: any;
  @Input() userdetail: any;
  url: string = '';
  defaultUrl = "https://d1tenzemoxuh75.cloudfront.net/assets/svgs/icons/footer/dashboard/profile_inactive.svg";
  @Input() isGuidedQuestion?: boolean = false;
  @Output() saveQuestion = new EventEmitter();
  @Output() journalclick = new EventEmitter();
  toursubscription: Subscription;
  disableClick = false;

  constructor(private router: Router, private onboardingService: OnboardingService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      // if (this.userdetail['UserImagePath'] != '') {
      // }
      let userdetail = localStorage.getItem("userDetails");
      if(userdetail){
        this.userdetail = JSON.parse(userdetail);
        if (this.userdetail && this.userdetail['UserImagePath'] != '') {
          this.url = this.userdetail['UserImagePath'].replace('\\', '/') + '?' + (new Date()).getTime();
        }
      }
    }
  }

    ngOnInit() {

      let userid = localStorage.getItem('isloggedin');
      if (userid === 'T') {
        this.isloggedIn = true
        this.Subscriber = localStorage.getItem('Subscriber')
        this.guest = localStorage.getItem('guest')
      }

      if (this.isloggedIn) {
        var loggedInUserId = SharedService.getUserId();
        if (loggedInUserId > 0 && this.userdetail) {
          if (this.userdetail['UserImagePath'] != '') {
            this.url = this.userdetail['UserImagePath'].replace('\\', '/') + '?' + (new Date()).getTime();
          }
          this.profile = true;
        } else {
          this.profile = true;
        }
      }

      if (this.router.url == SharedService.getUrlfromFeatureName(UrlConstant.search)
        || this.router.url.includes(SharedService.getUrlfromFeatureName(UrlConstant.sitesearch)) ||
        this.router.url.includes(SharedService.getUrlfromFeatureName(UrlConstant.search))) {
        this.dash = false
        this.journal = false
        this.fourm = false;
        this.search = true;
        this.enableprofile = false;
      }
      if (this.router.url == SharedService.getDashboardUrls()) {
        this.dash = true;
        this.journal = false;
        this.search = false;
        this.fourm = false;
        this.enableprofile = false;
      }
      if ((this.router.url == `/${SharedService.getprogramName()}/journal`) ||
        this.router.url.includes('/journal') || this.router.url.includes('/guidedquestions') ||
        (this.router.url.indexOf(`/${SharedService.getprogramName()}/note`) > -1)) {
        this.dash = false
        this.journal = true;
        this.search = false;
        this.fourm = false;
        this.enableprofile = false;
      }
      let reg = new RegExp('forum')
      if ((reg.test(this.router.url))) {
        this.dash = false
        this.journal = false
        this.fourm = true;
        this.enableprofile = false;
        this.journal = false;
      }
      if (this.router.url == `/${SharedService.getprogramName()}/onboarding/user-profile`
        || this.router.url.includes('/profile-edit')) {
        this.dash = false
        this.journal = false
        this.fourm = false;
        this.enableprofile = true;
        this.search = false;
      }


      this.toursubscription = this.onboardingService.getEnableTour().subscribe((value) => {
        this.disableClick = value;
      });
    }

    routeDash() {
      this.router.navigateByUrl(SharedService.getDashboardUrls());
    }

    routeJournal() {
      this.router.navigate([SharedService.getUrlfromFeatureName(UrlConstant.journal)]);
    }


    routeSearch() {
      this.router.navigate([SharedService.getUrlfromFeatureName(UrlConstant.search)]);
    }
    profileclickevent() {

      if (localStorage.getItem('isloggedin') === 'T') {
        //this.logeventservice.logEvent('click_profile')
        this.router.navigate([SharedService.getUrlfromFeatureName(UrlConstant.userProfile)]);
      } else {
        // if(localStorage.getItem('acceptcookie') !== null)  {
        //this.logeventservice.logEvent('click_login')
        localStorage.setItem('btnclick', 'F')
        this.router.navigate([SharedService.getUrlfromFeatureName(UrlConstant.login)]);
        // }

      }
    }

    routeForum() {
      // if(localStorage.getItem('isloggedin') === 'T')
      this.router.navigate([SharedService.getUrlfromFeatureName(UrlConstant.forum)], { state: { programType: this.programType } })
    }

    saveQuestionButton() {
      this.saveQuestion.emit();
    }

    ngOnDestroy(): void {
      this.toursubscription.unsubscribe();
    }


  }
