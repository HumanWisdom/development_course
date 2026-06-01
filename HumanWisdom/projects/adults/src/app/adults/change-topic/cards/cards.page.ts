import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdultsService } from '../../adults.service';
import { SharedService } from '../../../../../../shared/services/shared.service';
import { ProgramType } from '../../../../../../shared/models/program-model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {
  id: any;
  topicName: string = '';
  cardsList: any[] = [];
  isAdults: boolean = true;
  isRoutedFromLogin: boolean = false;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AdultsService
  ) {
    this.isAdults = SharedService.ProgramId === ProgramType.Adults;
    this.id = this.route.snapshot.paramMap.get('id');

    // Retrieve state passed from routing navigation
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.isRoutedFromLogin = navigation.extras.state.routedFromLogin;
    } else {
      // Fallback logic check
      let loginResponse = JSON.parse(localStorage.getItem("loginResponse") || sessionStorage.getItem("loginResponse") || "null");
      if (loginResponse && loginResponse.NoOfVisits) {
        this.isRoutedFromLogin = loginResponse.NoOfVisits.toString() === '1';
      }
    }
  }

  ngOnInit() {
    this.getTopicInfo();
    this.getOnboardingCards();
  }

  getTopicInfo() {
    const list = this.service.personalisedforyoulist;
    const match = list.find(item => item.id.toString() === this.id.toString());
    if (match) {
      this.topicName = this.getTopicDisplayName(match.name);
    } else {
      this.topicName = 'Recommendations';
    }
  }

  getTopicDisplayName(name: string): string {
    const map = {
      'Work and Leadership': 'Succeed at work',
      'Manage your mental wellbeing': 'Improve your mental health',
      'Relationships': 'Strengthen your relationships',
      'Habits and Addiction': 'Break addictive habits',
      'For Parents': 'Be a better parent',
      'Develop your self awareness': 'Build your self awareness',
      'Be happier': 'Be happier',
      'Deal with loss': 'Deal with loss',
      'Meditation': 'Meditation',
      'Manage your emotions': 'Manage your emotions'
    };
    return map[name] || name;
  }

  getOnboardingCards() {
    this.isLoading = true;
    this.service.GetOnboardingPrefData(this.id).subscribe(
      (res: any) => {
        if (res && Array.isArray(res)) {
          const viewed = JSON.parse(sessionStorage.getItem('viewed_onboarding_cards') || '[]');
          this.cardsList = res.map(item => {
            const isViewed = viewed.includes(item.Url);
            const rawImg = item.ImgPath || item.imgPath || item.imgUrl || item.ImageUrl;
            return {
              ...item,
              ImgPath: this.getImgUrl(rawImg),
              formattedSubTitle: this.formatSubTitle(item.SubTitle),
              isViewed: isViewed
            };
          });
        }
        this.isLoading = false;
      },
      error => {
        console.error('Error fetching onboarding pref data:', error);
        this.isLoading = false;
      }
    );
  }

  getImgUrl(url: string) {
    if (!url) return 'https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/51.webp';
    url = url.trim();
    if (url.startsWith('https://') || url.startsWith('http://')) return url;
    if (url.startsWith('/')) return `https://d1tenzemoxuh75.cloudfront.net${url}`;
    return `https://d1tenzemoxuh75.cloudfront.net/${url}`;
  }

  formatSubTitle(subtitle: string): string {
    if (!subtitle) return '';
    // Format "Video, 1 min" to "SHORT VIDEO • 01:00" or similar
    const parts = subtitle.split(',');
    if (parts.length === 2) {
      const type = parts[0].trim().toUpperCase();
      const duration = parts[1].trim().toUpperCase();
      let displayType = type;
      if (type === 'VIDEO') displayType = 'SHORT VIDEO';
      else if (type === 'PODCAST') displayType = 'PODCAST';
      else if (type === 'AUDIO MEDITATION') displayType = 'AUDIO MEDITATION';
      else if (type === 'MICROLEARNING') displayType = 'MICROLEARNING';
      
      return `${displayType} • ${duration}`;
    }
    return subtitle.toUpperCase();
  }

  getMediaIcon(card: any): string | null {
    const sub = (card.SubTitle || '').toLowerCase();
    if (sub.includes('video')) {
      return 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/play.svg';
    }
    if (sub.includes('podcast') || sub.includes('audio') || sub.includes('meditation') || sub.includes('soundscape')) {
      return 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/audio_play.svg';
    }
    if (sub.includes('module') || sub.includes('session') || sub.includes('microlearning')) {
      return 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/pathway.svg';
    }
    return null;
  }

  get allViewed(): boolean {
    if (this.cardsList.length === 0) return false;
    return this.cardsList.every(card => card.isViewed);
  }

  navigateToResource(card: any) {
    // Mark card as viewed
    const viewed = JSON.parse(sessionStorage.getItem('viewed_onboarding_cards') || '[]');
    if (!viewed.includes(card.Url)) {
      viewed.push(card.Url);
      sessionStorage.setItem('viewed_onboarding_cards', JSON.stringify(viewed));
      card.isViewed = true;
    }

    // Dynamic program route prefix
    const program = SharedService.getprogramName();
    let targetUrl = card.Url;
    if (targetUrl.startsWith('/')) {
      targetUrl = `/${program}${targetUrl}`;
    } else {
      targetUrl = `/${program}/${targetUrl}`;
    }

    this.router.navigateByUrl(targetUrl);
  }

  goBack() {
    this.router.navigate(['/adults/change-topic']);
  }

  onSkipOrContinue() {
    if (this.isRoutedFromLogin) {
      localStorage.setItem('isFromSignupFlow', 'T');
      SharedService.isRoutedFromLogin = true;
      this.router.navigate([`${SharedService.getprogramName()}/wisdom-survey`]);
    } else {
      // Regular navigation based on preference
      const program = SharedService.getprogramName();
      let redirectUrl = `/${program}/adult-dashboard`;
      const idNum = parseInt(this.id);
      
      if (idNum === 8) {
        localStorage.setItem('curatedurl', `/${program}/curated/manage-your-emotions`);
        redirectUrl = `/${program}/curated/manage-your-emotions`;
      } else if (idNum === 2) {
        localStorage.setItem('curatedurl', `/${program}/curated/overcome-stress-anxiety`);
        redirectUrl = `/${program}/curated/overcome-stress-anxiety`;
      } else if (idNum === 1) {
        localStorage.setItem('curatedurl', `/${program}/curated/wisdom-for-workplace`);
        redirectUrl = `/${program}/curated/wisdom-for-workplace`;
      } else if (idNum === 3) {
        localStorage.setItem('curatedurl', `/${program}/curated/have-fulfilling-relationships`);
        redirectUrl = `/${program}/curated/have-fulfilling-relationships`;
      } else if (idNum === 4) {
        localStorage.setItem('curatedurl', `/${program}/curated/be-happier`);
        redirectUrl = `/${program}/curated/be-happier`;
      } else if (idNum === 5) {
        localStorage.setItem('curatedurl', `/${program}/curated/change-unhelpful-habits`);
        redirectUrl = `/${program}/curated/change-unhelpful-habits`;
      } else if (idNum === 6) {
        localStorage.setItem('curatedurl', `/${program}/curated/deal-with-sorrow-loss`);
        redirectUrl = `/${program}/curated/deal-with-sorrow-loss`;
      } else if (idNum === 7) {
        localStorage.setItem('curatedurl', `/${program}/curated/have-calm-mind`);
        redirectUrl = `/${program}/curated/have-calm-mind`;
      } else if (idNum === 18) {
        localStorage.setItem('curatedurl', `/${program}/curated/parent-hub`);
        redirectUrl = `/${program}/curated/parent-hub`;
      } else if (idNum === 19) {
        localStorage.setItem('curatedurl', `/${program}/wisdom-exercise`);
        redirectUrl = `/${program}/wisdom-exercise`;
      }

      this.router.navigate([redirectUrl]);
    }
  }
}
