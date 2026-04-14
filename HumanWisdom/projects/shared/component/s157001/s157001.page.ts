import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { Location } from '@angular/common';
import {  Input } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { SharedService } from '../../services/shared.service';
import { TeenagersService } from '../../../teenagers/src/app/teenagers/teenagers.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonService } from '../../services/common.service';
import { ContentCard } from '../home/home.component';
@Component({
  selector: 'HumanWisdom-s157001',
  templateUrl: './s157001.page.html',
  styleUrls: ['./s157001.page.scss'],
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
export class S157001Page implements OnInit {
  tocImage="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/wisdom_exercise.svg"
  tocColor="white"
  @Input() isHome = true;
  isGuest : boolean =  true;
  beginIsExpanded: boolean = false;
  beginHereCards: ContentCard[] = [];
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  constructor(
    private navigationService:NavigationService,
    public ngNavigatorShareService: NgNavigatorShareService,
    private router: Router,
    private service: TeenagersService,
    private location: Location,
    private commonService: CommonService
 ) 
    { }
 
  ngOnInit() {
    this.service.setmoduleID(157);
    this.isGuest = !SharedService.isSubscriber();
    const dashboardData = SharedService.contentIdData('wisdom-exercise');
    if (dashboardData && dashboardData.id) {
      this.commonService.GetIntroContents(dashboardData.id).subscribe((res) => {
        if (res && res.content) {
          const list = res.content as any[];
          const startHere = list.filter(
            (item) =>
              (item.section_name || '').toLowerCase() === 'start here' ||
              (item.section_name || '').toLowerCase() === 'begin here'
          );
          this.beginHereCards = startHere.map((item) => {
            return {
              id: item.path || '',
              imageUrl: item.image_path || '',
              title: item.title || '',
              subtitle: item.subtitle || '',
              mediaType: item.module,
              duration: item.timing && item.timing.trim() ? item.timing : '',
              overlayIcon: `https://d1tenzemoxuh75.cloudfront.net${
                item.overlay_icon || '/assets/svgs/v_1_4/play.svg'
              }`,
              path: item.path || '',
              moduleType: item.module || '',
              isFree: item.isFree !== undefined ? String(item.isFree) : '1',
              isRead: item.isRead !== undefined ? String(item.isRead) : '0',
            } as ContentCard;
          });
        }
      });
    }
  }
  share(){
    this.ngNavigatorShareService.share({
      title: 'HappierMe Program',
      text: 'Hey, check out the HappierMe Program',
      url: "https://humanwisdom.me"+this.path
    }).then( (response) => {
      
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if (url != null) {
      this.router.navigateByUrl(url);
    } else {
      this.location.back();
    }
  }

   routeTointroDash() {
    this.router.navigate(['/teenagers/dashboard/wisdom-exercise']);
  }
  toggleBegin(): void {
    this.beginIsExpanded = !this.beginIsExpanded;
  }
  onCardClick(card: ContentCard): void {
    if (card.path) {
      this.router.navigate([card.path]);
    }
  }
}
