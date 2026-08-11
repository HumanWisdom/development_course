import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramType } from '../../models/program-model';
import { SharedService, UrlConstant } from '../../services/shared.service';
import { OnboardingService } from '../../services/onboarding.service';
import { Subscription } from 'rxjs';
import { LogEventService } from '../../services/log-event.service';
import { OwlStore } from '../../../shared/stores/owl.store';
import { CommonService } from '../../services/common.service';
import { Observable } from 'rxjs';


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
  @Input() learn = false
  isloggedIn = false
  @Input() enableprofile = false
  @Input() search = false
  @Input() showOwl = true;
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
  isAdults = false;
  isDataRecieved = false;
  isSearchActive = false;
  private searchActiveSubscription: Subscription;
  
    // Observable for owl component state management
    owlEnable$: Observable<boolean>;
  private footerOwlSubscription: Subscription;
  constructor(private router: Router, private onboardingService: OnboardingService, 
    private logeventservice: LogEventService,
    private owlStore: OwlStore,
    private commonService: CommonService,
  ) {
    // Drive footer owl visibility from the scroll signal emitted by pages that
    // have an in-page Olly (e.g. Today page). Default to true for all other pages.
    this.owlEnable$ = this.commonService.isFooterOwlVisible$;



    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      // if (this.userdetail['UserImagePath'] != '') {
      // }
      let userdetail = localStorage.getItem("userDetails");
      if(userdetail){
        this.userdetail = JSON.parse(userdetail);
        if (this.userdetail && this.userdetail['UserImagePath'] != '') {
          this.url = this.userdetail['UserImagePath'].replace(/\\/g, '/').replace(/^\/+/, '').replace(/\/+/g, '/') + '?' + (new Date()).getTime();
        }
      }
    }
  }

    ngOnInit() {
      this.searchActiveSubscription = this.commonService.isSearchActive$.subscribe(active => {
        this.isSearchActive = active;
      });

      this.onboardingService.updateUserDetails.next(true);

      this.onboardingService.getUserDetails.subscribe(res => {
        if (res) {
          this.userdetail = res[0];
          this.isDataRecieved = true;
          if (this.userdetail && this.userdetail['UserImagePath'] != '') {
            this.url = this.userdetail['UserImagePath'].replace(/\\/g, '/').replace(/^\/+/, '').replace(/\/+/g, '/') + '?' + (new Date()).getTime();
          }
          this.isDataRecieved = false;
        }
      });

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
            this.url = this.userdetail['UserImagePath'].replace(/\\/g, '/').replace(/^\/+/, '').replace(/\/+/g, '/') + '?' + (new Date()).getTime();
          }
          this.profile = true;
        } else {
          this.profile = true;
        }
      }

      if (this.router.url.includes('/repeat-user/my-daily-practice') || this.router.url.includes('/today') || this.router.url.includes('/olly-landing')) {
        this.dash = true;
        this.journal = false;
        this.search = false;
        this.fourm = false;
        this.learn = false;
        this.enableprofile = false;
      }
      else if (this.router.url == SharedService.getDashboardUrls() || this.router.url == `/${SharedService.getprogramName()}/home` || this.router.url.includes('/explore')) {
        this.dash = false;
        this.journal = false;
        this.search = true;
        this.fourm = false;
        this.learn = false;
        this.enableprofile = false;
      }
      else if (this.router.url == SharedService.getUrlfromFeatureName(UrlConstant.search)
        || this.router.url.includes(SharedService.getUrlfromFeatureName(UrlConstant.sitesearch)) ||
        this.router.url.includes(SharedService.getUrlfromFeatureName(UrlConstant.search)) || this.router.url.includes('/learn') || this.router.url.includes('/search') || this.router.url.includes('/pathway')) {
        this.dash = false
        this.journal = false
        this.fourm = false;
        this.search = false;
        this.learn = true;
        this.enableprofile = false;
      }
      else if ((this.router.url == `/${SharedService.getprogramName()}/journal`) ||
        this.router.url.includes('/journal') || this.router.url.includes('/guidedquestions') ||
        (this.router.url.indexOf(`/${SharedService.getprogramName()}/note`) > -1)) {
        this.dash = false
        this.journal = true;
        this.search = false;
        this.fourm = false;
        this.learn = false;
        this.enableprofile = false;
      }
    else if (this.router.url.includes('/forum')) {
        this.dash = false
        this.journal = false
        this.fourm = true;
        this.enableprofile = false;
        this.learn = false;
        this.journal = false;
      }
      else if (this.router.url == `/${SharedService.getprogramName()}/onboarding/user-profile`
        || this.router.url.includes('/profile-edit')) {
        this.dash = false
        this.journal = false
        this.fourm = false;
        this.learn = false;
        this.enableprofile = true;
        this.search = false;
      }

      this.toursubscription = this.onboardingService.getEnableTour().subscribe((value) => {
        this.disableClick = value;
      });
    }

    routeToday() {
      this.logeventservice.logEvent("footer_today")
      this.router.navigateByUrl(`/${SharedService.getprogramName()}/today`);
    }

    routeExplore() {
      if (!this.isAdults) {
        this.logeventservice.logEvent('teenager_click_explore_footer');
      } else {
        this.logeventservice.logEvent('adult_click_explore_footer');
      }
      this.router.navigateByUrl(SharedService.getDashboardUrls());
    }

    routeDash() {
      this.logeventservice.logEvent("footer_home")
      this.router.navigateByUrl(SharedService.getDashboardUrls());
    }

    routeLearn() {
      if (!this.isAdults) {
        this.logeventservice.logEvent('teenager_click_learnicon_footer');
      } else {
        this.logeventservice.logEvent('adult_click_learnicon_footer');
      }
      this.router.navigateByUrl(SharedService.getUrlfromFeatureName(UrlConstant.search));
    }

    routeJournal() {
      if (!this.isAdults) {
        this.logeventservice.logEvent('teenager_click_Journal_footer');
      } else {
        this.logeventservice.logEvent('adult_click_Journal_footer');
      }
      localStorage.setItem('NaviagtedFrom', this.router.url);
      this.router.navigate([SharedService.getUrlfromFeatureName(UrlConstant.journal)]);
    }


    routeSearch() {
      this.logeventservice.logEvent("footer_Explore")

      this.router.navigate([SharedService.getUrlfromFeatureName(UrlConstant.search)]);
    }
    profileclickevent() {

      if (localStorage.getItem('isloggedin') === 'T') {
        this.logeventservice.logEvent('footer_profile')
        this.router.navigate([SharedService.getUrlfromFeatureName(UrlConstant.userProfile)]);
      } else {
        // if(localStorage.getItem('acceptcookie') !== null)  {
        this.logeventservice.logEvent('footer_login')
        localStorage.setItem('btnclick', 'F')
        this.router.navigate([SharedService.getUrlfromFeatureName(UrlConstant.login)]);
        // }

      }
    }

    routeForum() {
      if (!this.isAdults) {
        this.logeventservice.logEvent('teenager_click_forum_footer');
      } else {
        this.logeventservice.logEvent('adult_click_forum_footer');
      }
      localStorage.setItem('NaviagtedFrom', this.router.url);
      // if(localStorage.getItem('isloggedin') === 'T')
      this.router.navigate([SharedService.getUrlfromFeatureName(UrlConstant.forum)], { state: { programType: this.programType } })
    }

    saveQuestionButton() {
      this.saveQuestion.emit();
    }

    ngOnDestroy(): void {
      this.toursubscription?.unsubscribe();
      this.footerOwlSubscription?.unsubscribe();
      this.searchActiveSubscription?.unsubscribe();
    }

    
 openChat(){
  if(this.isAdults){
    this.logeventservice.logEvent('adult_click_ollyai');
    this.logeventservice.logEvent('Click_olly_chat');
    this.router.navigate(['/adults/chat-bot'], { state: { startWithChat: true } });
  } else {
    this.logeventservice.logEvent('teenager_click_ollyai');
    this.router.navigate(['/teenagers/chat-bot'], { state: { startWithChat: true } });
  }
 }

 /**
  * Reset owl animation state - useful for testing or re-showing the animation
  * Call this method if you want to show the owl animation again
  */
 resetOwlAnimation() {
   this.owlStore.reset();
 }


  }