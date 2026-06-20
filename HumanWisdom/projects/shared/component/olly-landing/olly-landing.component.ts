import { Component, OnInit, OnDestroy, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../../services/shared.service';
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
  showWhyOllyPopup: boolean = false;
  
  showQuestionsView: boolean = false;
  topicsList: OllyTopic[] = [];
  expandedTopics: { [fragment: string]: boolean } = {};

  private readonly OLLY_GIF_URL =
    'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/onboarding/olly_singleloop.gif';
  private readonly OLLY_HI_URL =
    'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/icons/Olly_Hi.svg';
  private readonly INTRO_SHOWN_KEY = 'olly_landing_intro_shown';
  private readonly DIALOGUE_SHOWN_KEY = 'olly_landing_dialogue_shown';
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
    private services: AdultsService
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
    // 3. From user's saved preference in localStorage
    let topicId = this.topicIdFromNav;

    if (!topicId) {
      // Fallback: window.history.state persists even after lazy-load navigation completes
      const historyState = window.history.state;
      if (historyState && historyState['topicId']) {
        topicId = historyState['topicId'].toString();
      }
    }

    if (!topicId) {
      // Fallback: read the user's saved preference
      const savedPref = localStorage.getItem('userPreference');
      if (savedPref) {
        topicId = savedPref;
      }
    }

    const topicMap = this.isAdults ? this.adultTopics : this.teenTopics;

    if (topicId && topicMap[topicId]) {
      this.selectedTopic = topicMap[topicId];
    } else {
      // Final fallback to first topic
      const firstKey = Object.keys(topicMap)[0];
      this.selectedTopic = topicMap[firstKey];
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
  }

  private initOllyAnimation(): void {
    this.showOllyGif = true;
    this.ollyGifUrl = this.OLLY_GIF_URL;
  }

  private scheduleTimer(callback: () => void, delay: number): void {
    const timer = setTimeout(callback, delay);
    this.timers.push(timer);
  }

  onOllyGifLoad(): void {
    if (this.gifLoadedOnce || this.isIntegrated) {
      return;
    }
    if (localStorage.getItem(this.INTRO_SHOWN_KEY) === 'true') {
      return;
    }
    this.gifLoadedOnce = true;
    this.triggerCloudIfNeeded();
  }

  private triggerCloudIfNeeded(): void {
    if (this.cloudSequenceStarted) {
      return;
    }
    if (localStorage.getItem(this.DIALOGUE_SHOWN_KEY) === 'true') {
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
      localStorage.setItem(this.DIALOGUE_SHOWN_KEY, 'true');
      localStorage.setItem(this.INTRO_SHOWN_KEY, 'true');
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

  openWhyOllyPopup(): void {
    this.showWhyOllyPopup = true;
  }

  closeWhyOllyPopup(): void {
    this.showWhyOllyPopup = false;
  }
}
