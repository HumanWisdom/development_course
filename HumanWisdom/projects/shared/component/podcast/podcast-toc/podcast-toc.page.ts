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
  searchedText:'';
  prefData = [
    {
      id: "999",
      active: true,
      name: 'All'
    },
    {
      id: "1",
      active: false,
      name: 'Work'
    },
    {
      id: "2",
      active: false,
      name: 'Mental Health'
    },
    {
      id: "3",
      active: false,
      name: 'Relationships'
    },
    {
      id: "4",
      active: false,
      name: 'Happiness'
    },
    {
      id: "5",
      active: false,
      name: 'Addiction'
    },
    {
      id: "6",
      active: false,
      name: 'Sorrow and loss'
    },
    {
      id: "7",
      active: false,
      name: 'Meditation',
    },
    {
      id: "8",
      active: false,
      name: 'Emotions',
    },
    {
      id: "",
      active: false,
      name: 'Wisdom',
    }
  ];
  selectedPref = 'All'
  isAdults = true;
  constructor(private ngNavigatorShareService: NgNavigatorShareService,
    private router: Router, public platform: Platform,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    public logeventservice: LogEventService,
    private sanitizer: DomSanitizer,
    private meta: Meta, private title: Title,
    private service: CommonService,
    private navigationService:NavigationService
  ) {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
        } else {
         this.isAdults = false;
        }
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
    }else{
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
        var filteredData = res.filter(x=>x.ProgIDs.includes(SharedService.ProgramId.toString()));
        this.podcastList = filteredData;
        this.allpodcastList = filteredData;
        this.allpodcastList.forEach((d) => {
          this.prefData.forEach((h) => {
            if(d['PreferenceIDs'] && d['PreferenceIDs'].includes(h.id)) {
               h.active = true;
            }else if(!d['PreferenceIDs']) {
              h.active = true;
            }
          })
        });
      }
    })
  }

  audioevent(data) {
    let sub: any = localStorage.getItem("Subscriber")
    if (sub == 0 && data['PodcastID'] >= 4) {
      this.router.navigate([SharedService.getprogramName()+ '/subscription/start-your-free-trial']);
    } else {
      if (data['MediaUrl'].includes('https://d1tenzemoxuh75.cloudfront.net/')) {
        data['MediaUrl'] = data['MediaUrl'].replaceAll('https://d1tenzemoxuh75.cloudfront.net/', '/');
      }
      let concat = encodeURIComponent(data['MediaUrl'].replaceAll('/', '~'));
      const title = data['Title']?.replaceAll(' ', '-')

     if( this.isAdults == true)      
      this.router.navigate(['adults/audiopage/', concat, data['PodcastID'], 'T', title])
    else
      this.router.navigate(['teenagers/audiopage/', concat, data['PodcastID'], 'T', title])
      // this.router.navigate(['/adults/curated/audiopage', data['Text_URL'], data['Title'], data['RowID']])
      // this.router.navigate(['adults/guided-meditation/audiopage/', data['MediaUrl'], data['Title'], data['PodcastID'],'Podcast'])
    }
  }

  searchPodcast($event) 
  {
    if($event=='')
    {
      this.podcastList= this.allpodcastList;
    }
    else
    {
      this.searchedText=$event;
      let filterlist =this.allpodcastList.filter(it => it.Title.toLowerCase().includes(this.searchedText.toLowerCase()));
      this.podcastList=filterlist;
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
    this.podcastList = this.allpodcastList;
    if(type.name === 'All') {
      this.podcastList = this.allpodcastList;
    }else{
      if(type.name === 'Wisdom') {
        this.podcastList= this.podcastList.filter((d) => (!d['PreferenceIDs']));
      }else {
        this.podcastList= this.podcastList.filter((d) => d['PreferenceIDs'].includes(type.id));
      }
    }
  }

  share() {
    /*  if (!this.ngNavigatorShareService.canShare() &&  (this.platform.isBrowser)  ) {
       alert(`This service/api is not supported in your Browser`);
       return;
     } */
    console.log("url")
    this.path = environment.production ? "https://happierme.app" + this.address:"https://staging.happierme.app" + this.address;
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
}
