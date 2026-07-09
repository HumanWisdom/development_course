import { Component, OnInit, OnDestroy, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { CommonService } from '../../services/common.service';
import { ProgramType } from '../../models/program-model';
import { OLLY_QUESTIONS, OllyTopic } from './olly-questions';
import { OnboardingService } from '../../services/onboarding.service';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';

@Component({
  selector: 'app-olly-landing',
  templateUrl: './olly-landing.component.html',
  styleUrls: ['./olly-landing.component.scss']
})
export class OllyLandingComponent implements OnInit, OnDestroy, OnChanges {
  @Input() isIntegrated: boolean = false;
  @Input() startInQuestionsView: boolean = false;
  @Output() startChat = new EventEmitter<string>();
  @Output() viewChanged = new EventEmitter<boolean>();
  
  username: string = '';
  isAdults: boolean = true;
  searchQuery: string = '';
  selectedTopic: { name: string; displayName: string; fragment: string } | null = null;
  fromImNotSure: boolean = false;
  fromBasicAccessSignup: boolean = false;
  
  showQuestionsView: boolean = false;
  topicsList: OllyTopic[] = [];
  expandedTopics: { [fragment: string]: boolean } = {};

  private readonly OLLY_GIF_URL =
    'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/onboarding/olly_singleloop.gif';
  private readonly OLLY_HI_URL =
    'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/icons/Olly_Hi.svg';
  private readonly INTRO_SHOWN_KEY = 'olly_landing_intro_shown';
  private readonly DIALOGUE_SHOWN_KEY = 'olly_landing_dialogue_shown';
  // Integrated mode is used on the Today page (embedded inside the dashboard).
  // We keep separate keys so the dialogue can appear on both Olly landing and Today.
  private readonly INTEGRATED_INTRO_SHOWN_KEY = 'olly_today_intro_shown';
  private readonly INTEGRATED_DIALOGUE_SHOWN_KEY = 'olly_today_dialogue_shown';
  // Footer owl (app-owl-animation) uses this key to decide whether to show the dialogue cloud.
  private readonly OWL_DIALOGUE_SHOWN_KEY = 'owl_dialogue_shown';
  private readonly CLOUD_FADE_IN_MS = 1800;
  private readonly CLOUD_DISPLAY_MS = 5000;

  showOllyGif = true;
  showCloudMessage = false;
  cloudFadeIn = false;
  isSpeaking = false;
  isDisappearing = false;
  ollyGifUrl = this.OLLY_GIF_URL;
  cloudImageUrl = this.OLLY_HI_URL;

  private timers: ReturnType<typeof setTimeout>[] = [];
  private gifLoadedOnce = false;
  private cloudSequenceStarted = false;

  // Topic mappings for Adults
  private adultTopics: { [id: string]: { name: string; displayName: string; fragment: string } } = {
    '1': { name: 'Work and Leadership', displayName: 'Success at work', fragment: 'success-at-work' },
    '2': { name: 'Manage your mental wellbeing', displayName: 'Mental health', fragment: 'mental-health' },
    '3': { name: 'Relationships', displayName: 'Relationships', fragment: 'relationships' },
    '4': { name: 'Be happier', displayName: 'Happiness', fragment: 'happiness' },
    '5': { name: 'Habits and Addiction', displayName: 'Addiction', fragment: 'addiction' },
    '6': { name: 'Deal with loss', displayName: 'Sorrow and loss', fragment: 'sorrow-and-loss' },
    '7': { name: 'Meditation', displayName: 'Meditation', fragment: 'meditation' },
    '8': { name: 'Manage your emotions', displayName: 'Emotions', fragment: 'emotions' },
    '18': { name: 'For Parents', displayName: 'For parents', fragment: 'for-parents' },
    '19': { name: 'Develop your self awareness', displayName: 'Self-awareness', fragment: 'self-awareness' }
  };

  // Topic mappings for Teenagers
  private teenTopics: { [id: string]: { name: string; displayName: string; fragment: string } } = {
    '17': { name: 'Succeed in life', displayName: 'Success', fragment: 'success' },
    '14': { name: 'Manage your emotions', displayName: 'Emotions', fragment: 'emotions' },
    '11': { name: 'Relationships', displayName: 'Relationships', fragment: 'relationships' },
    '13': { name: 'Be happier', displayName: 'Happiness', fragment: 'happiness' },
    '15': { name: 'Overcome unhelpful habits', displayName: 'Habits', fragment: 'habits' },
    '16': { name: 'Understand yourself', displayName: 'Understand yourself', fragment: 'self-awareness' },
    '12': { name: 'Feel calm', displayName: 'Feel calm', fragment: 'feel-calm' },
    '10': { name: 'Manage your mental wellbeing', displayName: 'Mental health', fragment: 'mental-health' },
    '20': { name: 'Develop your self awareness', displayName: 'Self-awareness', fragment: 'self-awareness' }
  };

  private topicIdFromNav: string | null = null;

  userId: any;
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"));
  text = 2;
  video = 3;
  audio = 4;
  question = 6;
  reflection = 5;
  feedbackSurvey = 7;
  mediaAudio = "https://d1tenzemoxuh75.cloudfront.net";
  mediaVideo = "https://d1tenzemoxuh75.cloudfront.net";

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: OnboardingService,
    private services: AdultsService,
    private commonService: CommonService
  ) {
    // Must read getCurrentNavigation() in the constructor — it returns null by the time ngOnInit fires for lazy-loaded modules
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state && navigation.extras.state['topicId']) {
      this.topicIdFromNav = navigation.extras.state['topicId'].toString();
    }

    this.activatedRoute.queryParams.subscribe(params => {
      const authtoken = params?.authtoken;

      if (authtoken) {
        this.service.setDataRecievedState(false);
        localStorage.setItem('socialLogin', 'T');
        localStorage.setItem("token", JSON.stringify(authtoken));
        this.services.verifytoken(authtoken).subscribe((res) => {
          if (res) {
            localStorage.setItem("email", res['Email']);
            localStorage.setItem("name", res['Name']);
            let namedata = localStorage.getItem('name')?.split(' ');
            localStorage.setItem("FnName", namedata?.[0] || '');
            localStorage.setItem("LName", namedata?.[1] || '');
            localStorage.setItem("Subscriber", res['Subscriber']);
            this.userId = res['UserId'];
            localStorage.setItem("userId", JSON.stringify(this.userId));
            localStorage.setItem('isloggedin', 'T');
            localStorage.setItem('guest', 'F');
            localStorage.setItem("remember", 'T');
            localStorage.setItem('adult', 'T');
            this.loginadult(res);
            this.service.setDataRecievedState(true);
            
            // Set the username dynamically so it displays immediately without reload
            if (res['Name']) {
              let namedata = res['Name'].split(' ');
              this.username = namedata[0];
              if (this.username) {
                this.username = this.username.charAt(0).toUpperCase() + this.username.slice(1).toLowerCase();
              }
            }
          } else {
            localStorage.setItem("email", 'guest@humanwisdom.me');
            localStorage.setItem("pswd", '12345');
            localStorage.setItem('guest', 'T');
            localStorage.setItem('isloggedin', 'F');
            this.service.setDataRecievedState(true);
          }
        }, error => {
          localStorage.setItem("email", 'guest@humanwisdom.me');
          localStorage.setItem("pswd", '12345');
          localStorage.setItem('guest', 'T');
          localStorage.setItem('isloggedin', 'F');
          this.service.setDataRecievedState(true);
        });
      } else {
        this.service.setDataRecievedState(true);
      }
    });
  }

  loginadult(res: any) {
    let loginResponse = res;
    this.userId = res.UserId;
    if (res['Email'] === "guest@humanwisdom.me") localStorage.setItem('guest', 'T');
    else localStorage.setItem("guest", 'F');
    sessionStorage.setItem("loginResponse", JSON.stringify(loginResponse));
    localStorage.setItem("loginResponse", JSON.stringify(loginResponse));
    localStorage.setItem("token", JSON.stringify(res.access_token));
    localStorage.setItem("Subscriber", res.Subscriber);
    localStorage.setItem("userId", JSON.stringify(this.userId));
    localStorage.setItem("email", res['Email']);
    localStorage.setItem("name", res.Name);
    localStorage.setItem("text", JSON.stringify(this.text));
    localStorage.setItem("video", JSON.stringify(this.video));
    localStorage.setItem("audio", JSON.stringify(this.audio));
    localStorage.setItem("question", JSON.stringify(this.question));
    localStorage.setItem("reflection", JSON.stringify(this.reflection));
    localStorage.setItem("feedbackSurvey", JSON.stringify(this.feedbackSurvey));
    localStorage.setItem("mediaAudio", JSON.stringify(this.mediaAudio));
    localStorage.setItem("mediaVideo", JSON.stringify(this.mediaVideo));
    if (res.UserId === 0) {
      // Handle guest case
    } else {
      sessionStorage.setItem("loginResponse", JSON.stringify(loginResponse));
      localStorage.setItem("userId", JSON.stringify(res.UserId));
      localStorage.setItem("token", JSON.stringify(res.access_token));
      if (this.saveUsername) {
        localStorage.setItem("userId", JSON.stringify(res.UserId));
        localStorage.setItem("userEmail", JSON.stringify(res.Email));
        localStorage.setItem("userName", JSON.stringify(res.Name));
      } else {
        sessionStorage.setItem("userId", JSON.stringify(res.UserId));
        sessionStorage.setItem("userEmail", JSON.stringify(res.Email));
        sessionStorage.setItem("userName", JSON.stringify(res.Name));
      }
    }
  }

  ngOnInit(): void {
    // Check if user came from "I'm not sure" link
    this.fromImNotSure = localStorage.getItem('fromImNotSure') === 'T';

    // Check if user arrived from the basic-access sign-up flow — suppress topic link in that case
    this.fromBasicAccessSignup = sessionStorage.getItem('fromBasicAccessSignup') === 'T';
    if (this.fromBasicAccessSignup) {
      sessionStorage.removeItem('fromBasicAccessSignup');
    }
    
    // Determine program type (Adults vs Teenagers)
    this.isAdults = SharedService.ProgramId === ProgramType.Adults;
    this.topicsList = this.isAdults ? OLLY_QUESTIONS.adults : OLLY_QUESTIONS.teens;

    // Get username - try multiple sources to find the actual user name
    let userNameVal = SharedService.FnName();

    // If FnName returns Guest or empty, try other sources
    if (!userNameVal || userNameVal === "null" || userNameVal === "undefined" || userNameVal.toLowerCase() === "guest") {
      userNameVal = SharedService.getUserName();
    }
    if (!userNameVal || userNameVal === "null" || userNameVal === "undefined" || userNameVal.toLowerCase() === "guest") {
      const fullName = SharedService.getDataFromLocalStorage('name');
      if (fullName && fullName !== "null" && fullName !== "undefined") {
        userNameVal = fullName.split(' ')[0];
      }
    }

    if (!userNameVal || userNameVal === "null" || userNameVal === "undefined" || userNameVal === "" || userNameVal.toLowerCase() === "guest") {
      this.username = '';
    } else {
      try {
        this.username = JSON.parse(userNameVal);
      } catch {
        this.username = userNameVal;
      }
      
      // Capitalize the username
      if (this.username) {
        this.username = this.username.charAt(0).toUpperCase() + this.username.slice(1).toLowerCase();
      }
    }

    // Resolve topicId with multiple fallbacks:
    // 1. From router navigation state (set in constructor)
    // 2. From window.history.state (Angular persists router state here)
    // 3. From GetUserPreference API call (works even when login is from native app)
    let topicId = this.topicIdFromNav;

    if (!topicId) {
      // Fallback: window.history.state persists even after lazy-load navigation completes
      const historyState = window.history.state;
      if (historyState && historyState['topicId']) {
        topicId = historyState['topicId'].toString();
      }
    }

    const topicMap = this.isAdults ? this.adultTopics : this.teenTopics;

    if (topicId && topicMap[topicId]) {
      // Topic came from navigation state — use it directly
      this.selectedTopic = topicMap[topicId];
    } else {
      this.selectedTopic = null;

      // Fetch the user's preference from the API (same as home page)
      this.fetchUserPreferenceFromApi(topicMap);
    }

    this.initOllyAnimation();

    if (this.startInQuestionsView) {
      this.toggleQuestionsView(true);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['startInQuestionsView'] && changes['startInQuestionsView'].currentValue) {
      this.toggleQuestionsView(true);
    }
  }

  ngOnDestroy(): void {
    this.timers.forEach((timer) => clearTimeout(timer));
    this.timers = [];
    // Clear the flag when component is destroyed
    localStorage.removeItem('fromImNotSure');
    // Ensure overlay is removed if popup was open when component destroyed
    this.removeGlobalOverlay();
  }

  private initOllyAnimation(): void {
    this.showOllyGif = true;
    this.ollyGifUrl = this.OLLY_GIF_URL;
  }

  private scheduleTimer(callback: () => void, delay: number): void {
    const timer = setTimeout(callback, delay);
    this.timers.push(timer);
  }

  private getIntroShownKey(): string {
    return this.isIntegrated ? this.INTEGRATED_INTRO_SHOWN_KEY : this.INTRO_SHOWN_KEY;
  }

  private getDialogueShownKey(): string {
    return this.isIntegrated ? this.INTEGRATED_DIALOGUE_SHOWN_KEY : this.DIALOGUE_SHOWN_KEY;
  }

  onOllyGifLoad(): void {
    if (this.gifLoadedOnce) {
      return;
    }
    if (localStorage.getItem(this.getIntroShownKey()) === 'true') {
      return;
    }
    this.gifLoadedOnce = true;
    this.triggerCloudIfNeeded();
  }

  private triggerCloudIfNeeded(): void {
    if (this.cloudSequenceStarted) {
      return;
    }
    if (localStorage.getItem(this.getDialogueShownKey()) === 'true') {
      return;
    }
    this.cloudSequenceStarted = true;
    this.startCloudSequence();
  }

  private startCloudSequence(): void {
    this.scheduleTimer(() => {
      this.showCloudMessage = true;
      this.cloudFadeIn = true;
      this.isSpeaking = true;
      this.isDisappearing = false;
      // Suppress footer owl dialogue once the in-page dialogue has started showing.
      localStorage.setItem(this.OWL_DIALOGUE_SHOWN_KEY, 'true');
    }, 1000);

    this.scheduleTimer(() => {
      this.cloudFadeIn = false;
    }, 1000 + this.CLOUD_FADE_IN_MS);

    this.scheduleTimer(() => {
      this.hideCloudWithAnimation();
    }, 1000 + this.CLOUD_DISPLAY_MS);
  }

  private hideCloudWithAnimation(): void {
    if (!this.showCloudMessage || this.isDisappearing) {
      return;
    }

    this.isDisappearing = true;
    this.isSpeaking = false;

    this.scheduleTimer(() => {
      this.showCloudMessage = false;
      this.isDisappearing = false;
      localStorage.setItem(this.getDialogueShownKey(), 'true');
      localStorage.setItem(this.getIntroShownKey(), 'true');
      // Ensure the footer owl dialogue does not re-appear after the in-page Olly dialogue.
      localStorage.setItem(this.OWL_DIALOGUE_SHOWN_KEY, 'true');
    }, 600);
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.handleChatStart(this.searchQuery.trim());
    }
  }

  onSuggestionClick(query: string): void {
    this.handleChatStart(query);
  }

  private handleChatStart(query: string): void {
    this.startChat.emit(query);

    // When embedded in chat-bot, the parent handles the emitted query.
    if (this.router.url.includes('chat-bot')) {
      return;
    }

    const program = this.isAdults ? 'adults' : 'teenagers';
    this.router.navigate([`/${program}/chat-bot`], { state: { query }, replaceUrl: true });
  }

  private fetchUserPreferenceFromApi(topicMap: { [id: string]: { name: string; displayName: string; fragment: string } }): void {
    this.commonService.getUserpreference().subscribe({
      next: (res) => {
        if (res) {
          const preferenceId = res.toString();
          // Treat "0" or empty string as "no preference selected"
          if (preferenceId && preferenceId !== '0' && topicMap[preferenceId]) {
            this.selectedTopic = topicMap[preferenceId];
            localStorage.setItem('userPreference', preferenceId);
          } else {
            this.selectedTopic = null;
          }
        } else {
          this.selectedTopic = null;
        }
      },
      error: (err) => {
        console.warn('Failed to fetch user preference from API:', err);
        this.selectedTopic = null;
      }
    });
  }

  onTopicLinkClick(): void {
    if (this.selectedTopic) {
      const program = this.isAdults ? 'adults' : 'teenagers';
      this.router.navigate([`/${program}/home`], { fragment: this.selectedTopic.fragment });
    }
  }

  toggleQuestionsView(show: boolean): void {
    this.showQuestionsView = show;
    this.viewChanged.emit(show);
    if (show) {
      this.expandedTopics = {};
      this.topicsList.forEach(topic => {
        this.expandedTopics[topic.fragment] = false;
      });
      
      // Restore the last expanded topic in this session if it exists
      const lastExpanded = sessionStorage.getItem('olly_last_expanded_topic');
      if (lastExpanded && this.expandedTopics[lastExpanded] !== undefined) {
        this.expandedTopics[lastExpanded] = true;
        this.scrollToActiveTopic(lastExpanded);
      }
      
      // Autofocus the questions search input
      setTimeout(() => {
        const inputEl = document.querySelector('.questions-search-input') as HTMLInputElement;
        if (inputEl) {
          inputEl.focus();
        }
      }, 100);
    }
  }

  toggleTopic(fragment: string): void {
    const isNowExpanded = !this.expandedTopics[fragment];
    
    // Close all other topics
    Object.keys(this.expandedTopics).forEach(key => {
      this.expandedTopics[key] = false;
    });
    
    this.expandedTopics[fragment] = isNowExpanded;
    
    if (isNowExpanded) {
      sessionStorage.setItem('olly_last_expanded_topic', fragment);
      this.scrollToActiveTopic(fragment);
    } else {
      sessionStorage.removeItem('olly_last_expanded_topic');
    }
  }

  scrollToActiveTopic(fragment: string): void {
    setTimeout(() => {
      const el = document.getElementById(`topic-${fragment}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  }

  private globalOverlay: HTMLElement | null = null;

  openWhyOllyPopup(): void {
    this.createGlobalOverlay();
  }

  closeWhyOllyPopup(): void {
    this.removeGlobalOverlay();
  }

  private createGlobalOverlay(): void {
    if (this.globalOverlay) { return; }

    const isAdults = this.isAdults;
    const headerBg   = isAdults ? '#FFE8BB' : '#0C2B5F';
    const titleColor = isAdults ? '#000000' : '#ffffff';
    const contentBg  = isAdults ? '#FFF7E6' : '#183C79';
    const textColor  = isAdults ? '#000000' : 'rgba(255,255,255,0.9)';
    const closeBtnBg = isAdults
      ? 'linear-gradient(180deg, #ED7D6F 0%, #D7586B 100%)'
      : 'linear-gradient(180deg, #EE9596 0%, #F17071 100%)';

    const overlay = document.createElement('div');
    overlay.id = 'olly-global-overlay';
    overlay.style.cssText = [
      'position:fixed', 'top:0', 'left:0', 'width:100%', 'height:100%',
      'background:rgba(0,0,0,0.7)', 'z-index:99999',
      'display:flex', 'justify-content:center', 'align-items:center',
      'pointer-events:auto'
    ].join(';');

    overlay.innerHTML = `
      <div id="olly-popup-card" style="
        width:335px; max-height:90vh; display:flex; flex-direction:column;
        box-shadow:0 8px 24px rgba(0,0,0,0.15); border-radius:10px;
        overflow:hidden; box-sizing:border-box; pointer-events:auto;">
        <div style="
          background:${headerBg}; padding:15px 30px;
          display:flex; flex-direction:column; align-items:center;
          border-radius:10px 10px 0 0;">
          <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/onboarding/olly_popup.webp"
               alt="Olly Owl" style="width:50px; height:auto; margin-bottom:10px;">
          <h2 style="
            font-family:Poppins; font-weight:600; font-size:18px;
            line-height:150%; text-align:center; color:${titleColor}; margin:0;">
            Meet Olly AI
          </h2>
        </div>
        <div style="
          background:${contentBg}; padding:20px 30px 30px;
          display:flex; flex-direction:column; align-items:center;
          border-radius:0 0 10px 10px;">
          <p style="font-size:12px; line-height:150%; color:${textColor}; margin:0 0 6px; width:100%;">Olly was created to support you in a more human way.</p>
          <p style="font-size:12px; line-height:150%; color:${textColor}; margin:0 0 6px; width:100%;">Unlike many AI tools, Olly doesn't pull advice from the internet. It draws from trusted content created by experts.</p>
          <p style="font-size:12px; line-height:150%; color:${textColor}; margin:0 0 6px; width:100%;">Olly listens, helps you reflect, and gently guides you toward relevant support.</p>
          <p style="font-size:12px; line-height:150%; color:${textColor}; margin:0 0 20px; width:100%;">Your conversations with Olly are private and not shared with anyone.</p>
          <button id="olly-popup-close-btn" style="
            width:100%; padding:14px; border:none; border-radius:30px; cursor:pointer;
            background: ${closeBtnBg};
            color:#fff; font-size:16px; font-weight:600; font-family:Poppins;">
            Close
          </button>
        </div>
      </div>`;

    // Close on overlay backdrop click (not on the card itself)
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) { this.closeWhyOllyPopup(); }
    });

    document.body.appendChild(overlay);
    this.globalOverlay = overlay;

    // Attach close button listener after DOM insertion
    const closeBtn = document.getElementById('olly-popup-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeWhyOllyPopup());
    }
  }

  private removeGlobalOverlay(): void {
    if (this.globalOverlay) {
      this.globalOverlay.remove();
      this.globalOverlay = null;
    }
  }
}
