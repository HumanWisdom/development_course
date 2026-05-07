import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from "../../services/shared.service";
import { CommonService } from "../../services/common.service";

@Component({
  selector: 'app-guided-journey-end',
  templateUrl: './guided-journey-end.page.html',
  styleUrls: ['./guided-journey-end.page.scss']
})
export class GuidedJourneyEndPage implements OnInit {
  isAdults = true;
  journeyId: any;
  journeyTitle: string = 'Stress reduction';
  moduleList: any[] = [];
  isLoading = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private commonService: CommonService
  ) {
    this.isAdults = SharedService.ProgramId == 9;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.journeyId = params['journeyId'];
      if (params['title']) {
        this.journeyTitle = params['title'];
      }
    });
    this.getModuleList();
  }

  getModuleList() {
    this.isLoading = true;
    this.commonService.GetMicrolearningList(SharedService.ProgramId).subscribe((res: any) => {
      if (res && Array.isArray(res)) {
        this.moduleList = res.slice(0, 4).map(item => ({
          id: item.MicrolearningID || item.Id || item.id,
          title: item.Title || item.title,
          imgUrl: this.getImgUrl(item.ImgPath || item.imgPath || item.ImageUrl || item.imageUrl),
          sessions: item.Sessions || item.sessions || '',
          url: item.Url || item.url || ''
        }));
      }
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });
  }

  getImgUrl(url: string) {
    if (!url) return 'https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/51.webp';
    if (url.startsWith('https://') || url.startsWith('http://')) return url;
    if (url.startsWith('/')) return `https://d1tenzemoxuh75.cloudfront.net${url}`;
    return `https://d1tenzemoxuh75.cloudfront.net/${url}`;
  }

  goToListing() {
    const prefix = SharedService.getprogramName();
    this.router.navigate([`/${prefix}/guided-journeys`]);
  }

  goToModule(item: any) {
    if (item.url) {
      this.router.navigate([item.url]);
    }
  }

  goToHome() {
    this.router.navigate([SharedService.getDashboardUrls()]);
  }

  goBack() {
    this.location.back();
  }
}
