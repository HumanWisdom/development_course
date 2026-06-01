import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';
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
  isAdults: boolean = false;
  isRoutedFromLogin: boolean = false;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TeenagersService
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
      'Succeed in life': 'Succeed in life',
      'Manage your emotions': 'Manage your emotions',
      'Relationships': 'Strengthen your relationships',
      'Be happier': 'Be happier',
      'Overcome unhelpful habits': 'Overcome unhelpful habits',
      'Understand yourself': 'Understand yourself',
      'Feel calm': 'Feel calm',
      'Manage your mental wellbeing': 'Improve your mental health',
      'Develop your self awareness': 'Build your self awareness'
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
    this.router.navigate(['/teenagers/change-topic']);
  }

  onSkipOrContinue() {
    if (this.isRoutedFromLogin) {
      localStorage.setItem('isFromSignupFlow', 'T');
      SharedService.isRoutedFromLogin = true;
      this.router.navigate([`${SharedService.getprogramName()}/wisdom-survey`]);
    } else {
      // Regular navigation based on preference
      const program = SharedService.getprogramName();
      let redirectUrl = `/${program}/teenagers-dashboard`;
      const idNum = parseInt(this.id);
      
      if (idNum === 14) {
        localStorage.setItem('curatedurl', `/${program}/curated/manage-your-emotions`);
        redirectUrl = `/${program}/curated/manage-your-emotions`;
      } else if (idNum === 10) {
        localStorage.setItem('curatedurl', `/${program}/curated/overcome-stress-anxiety`);
        redirectUrl = `/${program}/curated/overcome-stress-anxiety`;
      } else if (idNum === 17) {
        localStorage.setItem('curatedurl', `/${program}/curated/succeed-in-life`);
        redirectUrl = `/${program}/curated/succeed-in-life`;
      } else if (idNum === 11) {
        localStorage.setItem('curatedurl', `/${program}/curated/have-fulfilling-relationships`);
        redirectUrl = `/${program}/curated/have-fulfilling-relationships`;
      } else if (idNum === 13) {
        localStorage.setItem('curatedurl', `/${program}/curated/be-happier`);
        redirectUrl = `/${program}/curated/be-happier`;
      } else if (idNum === 16) {
        localStorage.setItem('curatedurl', `/${program}/curated/understand-yourself`);
        redirectUrl = `/${program}/curated/understand-yourself`;
      } else if (idNum === 12) {
        localStorage.setItem('curatedurl', `/${program}/curated/feel-calm`);
        redirectUrl = `/${program}/curated/feel-calm`;
      } else if (idNum === 15) {
        localStorage.setItem('curatedurl', `/${program}/curated/overcome-unhelpful-habits`);
        redirectUrl = `/${program}/curated/overcome-unhelpful-habits`;
      } else if (idNum === 20) {
        localStorage.setItem('curatedurl', `/${program}/wisdom-exercise`);
        redirectUrl = `/${program}/wisdom-exercise`;
      }

      this.router.navigate([redirectUrl]);
    }
  }
}
