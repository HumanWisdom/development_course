import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { Location } from '@angular/common';
import { SharedService } from '../../services/shared.service';
import { Constant } from '../../services/constant';
import { NavigationService } from '../../services/navigation.service';
import { ProgramType } from '../../models/program-model';
import { CommonService } from '../../services/common.service';
import { ContentCard, ContentSection } from '../home/home.component';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-wisdom-exercise-s75001',
  templateUrl: './wisdom-exercise-s75001.component.html',
  styleUrls: ['./wisdom-exercise-s75001.component.scss'],
  animations: [
    trigger('slideDown', [
      state(
        'collapsed',
        style({
          height: '0px',
          overflow: 'hidden',
          opacity: 0,
        })
      ),
      state(
        'expanded',
        style({
          height: '*',
          overflow: 'visible',
          opacity: 1,
        })
      ),
      transition('collapsed <=> expanded', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class WisdomExerciseS75001Component implements OnInit {
  tocImage =
    'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/wisdom_exercise.svg';
  tocColor = 'white';
  isGuest: boolean = true;
  isAdults: boolean = true;
  urlT: any;
  userId: any;
  userName = localStorage.getItem('userName');
  groupedCardList = [];
  cardList = [];
  introTitle: string = '';
  dashboardType: string = '';
  dashboardData: any = {};
  introData: any = {};
  contentSections: ContentSection[] = [];

  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  constructor(
    public ngNavigatorShareService: NgNavigatorShareService,
    private navigationService: NavigationService,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private service: CommonService
  ) {}

  ngOnInit() {
    this.service.setmoduleID(75);
    this.isGuest = !SharedService.isSubscriber();
    this.isAdults = SharedService.ProgramId === ProgramType.Adults;

    SharedService.ProgramId == ProgramType.Adults
      ? (this.isAdults = true)
      : (this.isAdults = false);
    this.dashboardType = this.route.snapshot.paramMap.get('type');
    if (!this.dashboardType) {
      this.dashboardType = 'wisdom-exercise';
    }

    this.dashboardData = SharedService.contentIdData(this.dashboardType);
    if (this.dashboardData && this.dashboardData.id) {
      console.log('Calling GetIntroContents with ID:', this.dashboardData.id);
      this.service.GetIntroContents(this.dashboardData.id).subscribe((res) => {
        if (res) {
          this.cardList = res.content;
          this.introData = res;
          this.introTitle = res.introPara;
          this.processContentIntoSections();
        }
      });
    } else {
      console.error('Dashboard data not found for type:', this.dashboardType);
    }
  }

  processContentIntoSections(): void {
    const sectionMap = new Map<string, ContentCard[]>();

    this.cardList.forEach((item: any) => {
      // skip unwanted modules
      if (item.module === 'WELLNESS SURVEY' || item.module === 'FORUM') return;

      const sectionName = item.section_name || 'Other';
      if (!sectionMap.has(sectionName)) sectionMap.set(sectionName, []);

      const card: ContentCard = {
        id: item.path || '',
        imageUrl: item.image_path || '',
        title: item.title || '',
        subtitle: item.subtitle || '',
        mediaType: item.module as any,
        duration: item.timing && item.timing.trim() ? item.timing : '',
        overlayIcon: `https://d1tenzemoxuh75.cloudfront.net${
          item.overlay_icon || '/assets/svgs/v_1_4/play.svg'
        }`,
        path: item.path || '',
        moduleType: item.module || '',
        isFree: item.isFree !== undefined ? String(item.isFree) : '1',
        isRead: item.isRead !== undefined ? String(item.isRead) : '0',
      };

      sectionMap.get(sectionName)!.push(card);
    });

    let sectionId = 1;
    this.contentSections = Array.from(sectionMap.entries()).map(([name, cards]) => {
      const section: ContentSection = {
        id: String(sectionId++),
        title: name === 'Start here' ? 'Begin Here' : name,
        subtitle: '',
        isExpanded: false,
        cards: cards,
        isInlineSection: false,
        isVerticalCards: false,
        childSections: [],
      };
      return section;
    });

    this.contentSections.sort((a, b) => {
      if (a.title === 'Begin Here') return -1;
      if (b.title === 'Begin Here') return 1;
      return a.title.localeCompare(b.title);
    });

    // // ── keep the only section open by default ──
    // if (this.contentSections.length === 1) {
    //   this.contentSections[0].isExpanded = true;
    // }
  }

  onSectionToggle(section: ContentSection): void {
    section.isExpanded = !section.isExpanded;
  }

  onCardClick(card: ContentCard): void {
    if (card.path) {
      this.router.navigate([card.path]);
    }
  }
  share() {
    this.ngNavigatorShareService
      .share({
        title: 'HappierMe Program',
        text: 'Hey, check out the HappierMe Program',
        url: 'https://humanwisdom.me' + this.path,
      })
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  }

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      url = SharedService.getDataFromLocalStorage(Constant.NaviagtedFrom);
      if (url && url != null && url != 'null') {
        this.router.navigateByUrl(url);
      } else {
        this.location.back();
      }
    } else {
      this.router.navigateByUrl(url);
    }
  }

  routeTointroDash() {
    this.router.navigate(['/adults/dashboard/wisdom-exercise']);
  }

  goToSubscribe(): void {
    const prefix = SharedService.getprogramName();
    this.router.navigate([prefix, 'subscription', 'start-your-free-trial']);
  }
}