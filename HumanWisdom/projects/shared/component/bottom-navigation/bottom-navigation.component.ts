import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ProgramType } from '../../models/program-model';
import { SharedService, UrlConstant } from '../../services/shared.service';
import { OnboardingService } from '../../services/onboarding.service';
import { Subscription } from 'rxjs';
import { LogEventService } from '../../services/log-event.service';
import { OwlStore } from '../../../shared/stores/owl.store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

/**
 * Enum for navigation states in bottom navigation
 */
export enum NavigationState {
  None = 'none',
  Home = 'home',
  Search = 'search',
  Journal = 'journal',
  Forum = 'forum',
  Profile = 'profile'
}


@Component({
  selector: 'app-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.scss'],
})
export class BottomNavigationComponent implements OnInit, OnDestroy, OnChanges {
  // Enum-based navigation state
  NavigationState = NavigationState;
  currentNavigationState: NavigationState = NavigationState.None;

  // Keep @Input properties for backward compatibility
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
  routerSubscription: Subscription;
  disableClick = false;
  isAdults = false;
  isDataRecieved = false;
  
    // Observable for owl component state management
    owlEnable$: Observable<boolean>;
  constructor(private router: Router,private onboardingService: OnboardingService, 
    private logeventservice: LogEventService,
        private owlStore: OwlStore,
    
  ) {
// IMPORTANT: Reset owl state to clear any previous localStorage data
    // Comment this line back after first successful run
    this.owlStore.reset();
    
    // Initialize owl state from store (after reset)
    this.owlEnable$ = this.owlStore.shouldShow$;
    
    // Debug: Check owl state
    console.log('Owl Store State (after reset):', {
      isEnabled: this.owlStore.getIsEnabled(),
      isInitialized: this.owlStore.getIsInitialized(),
      shouldShow: this.owlStore.getShouldShow()
    });
    
    // Debug: Subscribe to owl state changes
    this.owlEnable$.subscribe(shouldShow => {
      console.log('Owl shouldShow$ emitted:', shouldShow);
    });



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
          this.url = this.userdetail['UserImagePath'].replace('\\', '/') + '?' + (new Date()).getTime();
        }
      }
    }
  }

    ngOnInit() {
      this.onboardingService.updateUserDetails.next(true);

      this.onboardingService.getUserDetails.subscribe(res => {
        if (res) {
          this.userdetail = res[0];
          this.isDataRecieved = true;
          if (this.userdetail && this.userdetail['UserImagePath'] != '') {
            this.url = this.userdetail['UserImagePath'].replace('\\', '/') + '?' + (new Date()).getTime();
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
            this.url = this.userdetail['UserImagePath'].replace('\\', '/') + '?' + (new Date()).getTime();
          }
          this.profile = true;
        } else {
          this.profile = true;
        }
      }

      // Update navigation state based on current URL
      this.updateNavigationState(this.router.url);


      this.toursubscription = this.onboardingService.getEnableTour().subscribe((value) => {
        this.disableClick = value;
      });

      // Listen to router navigation events to update navigation state
      this.routerSubscription = this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          this.updateNavigationState(event.url);
        });
    }

    /**
     * Update navigation state based on current URL
     */
    private updateNavigationState(url: string): void {
      let newState: NavigationState = NavigationState.None;

      // Check for home FIRST to ensure it takes precedence
      if (url == `/${SharedService.getprogramName()}/home` || url.includes("/home")) {
        newState = NavigationState.Home;
      }
      // Then check for search (only if not on home page)
      else if (url == SharedService.getUrlfromFeatureName(UrlConstant.search)
        || url.includes(SharedService.getUrlfromFeatureName(UrlConstant.sitesearch)) ||
        url.includes(SharedService.getUrlfromFeatureName(UrlConstant.search))) {
        newState = NavigationState.Search;
      }
      // Check for journal
      else if ((url == `/${SharedService.getprogramName()}/journal`) ||
        url.includes('/journal') || url.includes('/guidedquestions') ||
        (url.indexOf(`/${SharedService.getprogramName()}/note`) > -1)) {
        newState = NavigationState.Journal;
      }
      // Check for forum
      else if (new RegExp('forum').test(url)) {
        newState = NavigationState.Forum;
      }
      // Check for profile
      else if (url == `/${SharedService.getprogramName()}/onboarding/user-profile`
        || url.includes('/profile-edit')) {
        newState = NavigationState.Profile;
      }

      // Update enum state
      this.currentNavigationState = newState;

      // Update boolean properties for backward compatibility with template
      this.dash = newState === NavigationState.Home;
      this.search = newState === NavigationState.Search;
      this.journal = newState === NavigationState.Journal;
      this.fourm = newState === NavigationState.Forum;
      this.enableprofile = newState === NavigationState.Profile;
    }

    routeDash() {
      this.logeventservice.logEvent("footer_home")
      this.router.navigateByUrl(SharedService.getDashboardUrls());
    }

    routeJournal() {
      this.logeventservice.logEvent("footer_Journal")

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
      this.logeventservice.logEvent("footer_Forum")

      // if(localStorage.getItem('isloggedin') === 'T')
      this.router.navigate([SharedService.getUrlfromFeatureName(UrlConstant.forum)], { state: { programType: this.programType } })
    }

    saveQuestionButton() {
      this.saveQuestion.emit();
    }

    ngOnDestroy(): void {
      this.toursubscription?.unsubscribe();
      this.routerSubscription?.unsubscribe();
    }

    
 openChat(){
  if(this.isAdults){
    this.router.navigate(['/adults/chat-bot']);
  } else {
    this.router.navigate(['/teenagers/chat-bot']);
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
