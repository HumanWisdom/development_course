import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { OLLY_QUESTIONS, OllyTopic } from './olly-questions';

@Component({
  selector: 'app-olly-landing',
  templateUrl: './olly-landing.component.html',
  styleUrls: ['./olly-landing.component.scss']
})
export class OllyLandingComponent implements OnInit {
  @Input() isIntegrated: boolean = false;
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

  constructor(private router: Router) {
    // Must read getCurrentNavigation() in the constructor — it returns null by the time ngOnInit fires for lazy-loaded modules
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state && navigation.extras.state['topicId']) {
      this.topicIdFromNav = navigation.extras.state['topicId'].toString();
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

    // If on standalone landing page route, navigate to the chatbot page with the query
    const currentUrl = this.router.url;
    if (currentUrl.includes('olly-landing')) {
      const program = this.isAdults ? 'adults' : 'teenagers';
      this.router.navigate([`/${program}/chat-bot`], { state: { query: query } });
    }
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
      if (this.selectedTopic) {
        this.expandedTopics[this.selectedTopic.fragment] = true;
        this.scrollToActiveTopic(this.selectedTopic.fragment);
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
    this.expandedTopics[fragment] = !this.expandedTopics[fragment];
    if (this.expandedTopics[fragment]) {
      this.scrollToActiveTopic(fragment);
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
