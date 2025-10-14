import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { NgNavigatorShareService } from 'ng-navigator-share';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Platform } from "@angular/cdk/platform";
import { Meta, Title } from '@angular/platform-browser';
import { LogEventService } from '../../../services/log-event.service';
import { CommonService } from '../../../services/common.service';
import { SharedService } from '../../../services/shared.service';
import { ProgramType } from '../../../models/program-model';
import { environment } from '../../../../environments/environment';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-podcast-toc',
  templateUrl: './podcast-toc.page.html',
  styleUrls: ['./podcast-toc.page.scss'],
})

export class PodcastTocPage implements OnInit {
  path: any;
  tag = 'all';
  iframeSrc: SafeResourceUrl;
  @Input() podcastList = [];
  allpodcastList = [];
  @Input() isdefaultShow = false;
  isSubscriber = false;
  address: any;
  searchedText= '';
  prefData = [];
  selectedPref = 'All'
  isAdults = true;
  showModal = false;
  modalTitle = 'The best is yet to come';
  modalContent = 'Unlock the full experience and continue your journey to live your best life';
  constructor(private ngNavigatorShareService: NgNavigatorShareService,
    private router: Router, public platform: Platform,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    public logeventservice: LogEventService,
    private sanitizer: DomSanitizer,
    private meta: Meta, private title: Title,
    private service: CommonService,
    private navigationService: NavigationService
  ) {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
    this.prefData = SharedService.getPreferenceData();
    // this.prefData.push({
    //   id: "01",
    //   active: false,
    //   displayName: "Mini Podcast",
    //   name: 'Mini Podcast',
    // })
  }

  ngOnInit() {
    if (!this.isdefaultShow) {
      this.getPodcast()
      this.address = this.router.url;
    }
    this.title.setTitle('Inspiring Your Best Life: Our Motivational Podcast')
    this.meta.updateTag({ property: 'title', content: 'Inspiring Your Best Life: Our Motivational Podcast' })
    this.meta.updateTag({ property: 'description', content: 'Get motivated with our inspiring podcast. Our experts share tips on positive mindset, motivation, and more to help you unlock your full potential.' })
    this.meta.updateTag({ property: 'keywords', content: 'Wisdom podcast,Personal growth podcast,Self-improvement podcast,Mindfulness podcast,Inspirational podcast,Motivational podcast,Self-help podcast,Life lessons podcast,Philosophy podcast,Happiness podcast,Success podcast,Mental health podcast,Emotional intelligence podcast,Spiritual growth podcast,Life coaching podcast,Positive mindset podcast' })

    this.logeventservice.logEvent('view_humanwisdom_podcast');
    let routTag = this.activatedRoute.snapshot.paramMap.get('tag');
    if (routTag && routTag != null && routTag != '' && routTag == 'sorrow') {
      this.tag = routTag;
    }
    this.iframeSrc = this.getSourceForPodBin();

    let userid = localStorage.getItem('isloggedin');
    let sub: any = localStorage.getItem('Subscriber');
    if (userid === 'T' && sub === '1') {
      this.isSubscriber = true;
    } else {
      this.isSubscriber = false;
    }

    this.getUserPref("all");
    
    // Make the "All" button active by default
    setTimeout(() => {
      const allBtn = document.getElementById('all');
      if (allBtn) {
        allBtn.classList.add('active');
      }
    }, 100);
  }

  getSourceForPodBin() {
    if (this.tag == 'all') {
      return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.podbean.com/player-v2/?i=ak74u-bf71d6-pbblog-playlist&share=1&download=0&rtl=0&fonts=Arial&skin=60a0c8&font-color=auto&logo_link=none&order=episodic&limit=100&filter=all&ss=bafb89171144cd6d758dfcec4278f644&btn-skin=3267a3&size=480");
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.podbean.com/player-v2/?i=ak74u-bf71d6-pbblog-playlist&share=0&download=0&rtl=0&fonts=Times%20New%20Roman&skin=3267a3&font-color=auto&logo_link=podcast_page&logo_link=none&order=episodic&limit=5&filter=tags&tag=16106786&ss=55fe7c7156e4b9c14621bacb4c53cfa7&btn-skin=60a0c8&size=220");
  }
  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.location.back();
    } else {
      this.router.navigate([url]);
    }
  }
  shareUrl(programType: ProgramType) {
    const token = JSON.parse(localStorage.getItem("token"))
    switch (programType) {
      case ProgramType.Adults:
        this.path = SharedService.AdultsBaseUrl + this.address;
        break;
      case ProgramType.Teenagers:
        this.path = SharedService.TeenagerBaseUrl + this.address;
        break;
      default:
        this.path = SharedService.AdultsBaseUrl + this.address;
    }
  }

  getPodcast() {
    this.service.GetPodcastList().subscribe((res) => {
      if (res) {
        var filteredData = res.filter(x => x.ProgIDs.includes(SharedService.ProgramId.toString()));
        this.podcastList = filteredData;
        this.allpodcastList = filteredData;
        this.allpodcastList.forEach((d) => {
          this.prefData.forEach((h) => {
            if (d['PreferenceIDs'] && d['PreferenceIDs'].split(",").includes( h.id)) {
              h.active = true;
            } else if (!d['PreferenceIDs']) {
              h.active = true;
            }
          })
        });
      }
    })
  }

audioevent(data: any) {
  this.service.clickPodcast(data.PodcastID).subscribe({
    next: () => console.log('click logged'),
    error: e => console.error('click log failed', e)
  });

  const sub = localStorage.getItem('Subscriber');
  if (sub === '0' && data.PodcastID >= 2) {
    // this.router.navigate([SharedService.getprogramName(), 'subscription', 'start-your-free-trial']);
    this.showModal = true;
    return;
  }

  let media = data.MediaUrl;
  if (media.includes('https://d1tenzemoxuh75.cloudfront.net/')) {
    media = media.replaceAll('https://d1tenzemoxuh75.cloudfront.net/', '/');
  }
  const path = encodeURIComponent(media.replaceAll('/', '~'));
  const route = this.isAdults
    ? ['adults', 'audiopage', path, data.PodcastID, 'T', data.Title]
    : ['teenagers', 'audiopage', path, data.PodcastID, 'T', data.Title];

  this.router.navigate(route);
}

  searchPodcast($event) {
    if ($event == '') {
      this.podcastList = this.allpodcastList;
    }
    else {
      this.searchedText = $event;
      let filterlist = this.allpodcastList.filter(it => it.Title.toLowerCase().includes(this.searchedText.toLowerCase()) || it.searchtags.toLowerCase().includes(this.searchedText.toLowerCase()));
      this.podcastList = filterlist;
      //this.secondstoryList=filterlist.slice(10);
    }
  }

  /*
  searchPodcast() {
    let filterlist = this.allpodcastList.filter(it => it.Title.toLowerCase().includes(this.searchedText.toLowerCase()));
    this.podcastList = filterlist;
  }
  */

  getimage(id) {
    let Id = id <= 9 ? '0' + id : id;
    return `https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/podcast/${Id}.webp`
  }

getUserPref(type) {
  this.selectedPref = '';

  const btns = Array.from(document.getElementsByClassName('btn'));
  for (const b of btns) {
    const btn = b as HTMLElement;
    btn.classList.remove('active');
  }

  const selectedBtn = document.getElementById(type);
  if (selectedBtn) {
    selectedBtn.classList.add('active');
  }

  this.selectedPref = type;
  this.podcastList = this.allpodcastList;

  if (type === 'all') {
    this.podcastList = this.allpodcastList;
  } else if (type === '0') {
    this.podcastList = this.podcastList.filter((d) => !d['PreferenceIDs']);
  } else if (type === 'MiniPodcast') {
    this.podcastList = this.podcastList.filter((d) => d['IsMiniPodcast'] === '1');
  } else {
    this.podcastList = this.podcastList.filter((d) =>
      d['PreferenceIDs'].split(',').includes(type)
    );
  }
}

  share() {
    /*  if (!this.ngNavigatorShareService.canShare() &&  (this.platform.isBrowser)  ) {
       alert(`This service/api is not supported in your Browser`);
       return;
     } */
    console.log("url")
    this.path = environment.production ? "https://happierme.app" + this.address : "https://staging.happierme.app" + this.address;
    this.ngNavigatorShareService.share({
      title: 'HappierMe Program',
      text: 'Hey, check out the HappierMe Program',
      url: this.path
    }).then((response) => {

    })
      .catch((error) => {
        console.log(error);
      });
  }
    onModalClose(event: string) {
  this.showModal = false;
  if (event === 'ok') {
    // Navigate to free trial when user clicks "Start your free trial"
    this.router.navigate([SharedService.getprogramName(), 'subscription', 'start-your-free-trial']);
      }
    }
}
