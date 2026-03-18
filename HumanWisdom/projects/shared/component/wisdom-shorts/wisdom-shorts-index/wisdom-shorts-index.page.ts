import { Platform } from "@angular/cdk/platform";
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { CommonService } from  '../../../services/common.service';
import { SharedService } from "../../../services/shared.service";
import { ProgramType } from "../../../models/program-model";
import { NavigationService } from "../../../services/navigation.service";


@Component({
  selector: 'HumanWisdom-wisdom-shorts-index',
  templateUrl: './wisdom-shorts-index.page.html',
  styleUrls: ['./wisdom-shorts-index.page.scss'],
})
export class WisdomShortsIndexPage implements OnInit {

  tocImage = "https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/wisdom_shorts.webp"
  tocColor = "white"

  path: string;
  address: string;
  wisdomshorts = [];
  allwisdomshorts = [];
  isSubscriber = false;
  searchedText:any='';
  isAdults = true;
  prefData:any;
  showModal = false;
  modalTitle = 'The best is yet to come';
  modalContent = 'Unlock the full experience and continue your journey to live your best life';
  selectedPref = 'All'
  constructor(
    private readonly ngNavigatorShareService: NgNavigatorShareService,
    public readonly platform: Platform,
    private readonly router: Router,
    private readonly location: Location,
    private readonly service: CommonService,
    private readonly meta: Meta,
    private readonly title: Title,
    private readonly navigationService: NavigationService,
    private readonly activatedRoute: ActivatedRoute
  ) {
    this.address = this.router.url;
    this.prefData = SharedService.getPreferenceData();
  }

  ngOnInit() {

    
  if(SharedService.ProgramId == ProgramType.Adults){
    this.title.setTitle('Inspiring Shorts for Adults')
      this.meta.updateTag({ property: 'title', content: 'Inspiring Shorts for Adults' })
      this.meta.updateTag({ property: 'description', content: 'Our inspirational shorts are perfect for busy adults who want to grow and improve but don\'t have a lot of time to spare. Discover practical life tips and empowering quotes that can help you achieve your goals.' })
      this.meta.updateTag({ property: 'keywords', content: 'Everyday inspiration,Relatable wisdom,Practical life tips,Quick life hacks,Positive life lessons,Empowering quotes,Self-help wisdom,Encouraging words,Friendly life guidance' })
  }
  else if(SharedService.ProgramId == ProgramType.Teenagers){
    this.title.setTitle('Inspiring Shorts for Teenagers')
      this.meta.updateTag({ property: 'title', content: 'Inspiring Shorts for Teenagers' })
      this.meta.updateTag({ property: 'description', content: 'Our inspirational shorts are perfect for busy Teenagers who want to grow and improve but don\'t have a lot of time to spare. Discover practical life tips and empowering quotes that can help you achieve your goals.' })
      this.meta.updateTag({ property: 'keywords', content: 'Everyday inspiration,Relatable wisdom,Practical life tips,Quick life hacks,Positive life lessons,Empowering quotes,Self-help wisdom,Encouraging words,Friendly life guidance' })
  }


    let userid = localStorage.getItem('isloggedin');
    let sub: any = localStorage.getItem('Subscriber');
    if (userid === 'T' && sub === '1') {
      this.isSubscriber = true;
    } else {
      this.isSubscriber = false;
    }

    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
        } else {
         this.isAdults = false;
        }

        this.getwisdomshorts()

  }

  getwisdomshorts() {
    this.service.GetWisdomShorts().subscribe((res) => {
      if (res) {
        let res1 = new Array()
        res1 = res.filter(p =>  p.ProgIDs.includes(SharedService.ProgramId))
        res1.forEach(element => {
          res.splice(res.indexOf(element), 1)
          res.unshift(element)
        });
        //this.allwisdomshorts = res1.sort((a,b)=>b.display - a.display);
        this.allwisdomshorts = res1;

        let m: any = window.location.href;
     
        this.allwisdomshorts.forEach((d) => {
              this.prefData.forEach((h) => {
                if(d['PreferenceIDs'] && (d['PreferenceIDs'].split(",").includes( h.id))) {
                   h.active = true;
                }else if(!d['PreferenceIDs']) {
                  h.active = true;
                }
              })
            });
        // if(m?.includes('voices')) {
        //  this.getVoicesData();
        //   /* this.wisdomshorts = res1.filter((d) => d['IsVoices'] === '1');
        //   this.prefData.forEach((d) => {
        //     if(d['displayName'] === 'Voices') {
        //       d['active'] = true;
        //     }else if(d['displayName'] === 'All') {
        //       d['active'] = false;
        //     }
        //   }) */
        // }else {
        //   this.wisdomshorts = res1;
        //  /*  this.allwisdomshorts.forEach((d) => {
        //     this.prefData.forEach((h) => {
        //       if(d['PreferenceIDs'] && (d['PreferenceIDs'].includes(','+ h.id) || d['PreferenceIDs'].includes(','+ h.id +',') || d['PreferenceIDs'].includes(h.id +','))) {
        //          h.active = true;
        //       }else if(!d['PreferenceIDs']) {
        //         h.active = true;
        //       }
        //     })
        //   }); */
        // }
       
        if(m?.includes('pref')){
          let type = m.split('pref=')

          this.getUserPref(type[1])

        }
        else {          
           this.getUserPref("all")
        }

        localStorage.setItem('wisdomShortData',JSON.stringify(this.allwisdomshorts));

        const fragment = this.activatedRoute.snapshot.fragment;
        if(fragment) {
           const match = this.prefData.find(d => d.displayName && d.displayName.toLowerCase() === fragment.toLowerCase());
           if(match) {
             setTimeout(() => {
               this.getUserPref(match.id);
             }, 200);
           }
        }
        setTimeout(() => {
          this.scrollToActiveTab();
        }, 200);
      }
    })
  }

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if (url == null || url.includes('home') || url.includes('dashboard')) {
      let navFrom = SharedService.getDataFromLocalStorage('NaviagtedFrom');
      if (navFrom && navFrom != null && navFrom != 'null') {
        this.router.navigateByUrl(navFrom);
      } else {
        this.location.back();
      }
    } else {
      this.router.navigate([url]);
    }
  }
  share() {
    console.log("url")
    this.path = "https://happierme.app" + this.address;
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

  wisdoshortsevent(val, video, title) {
    const loggedin = localStorage.getItem('isloggedin');
    const sub      = localStorage.getItem('Subscriber');
    const id       = this.extractShortIdFromUrl(video);

    /* 1.  register the click */
    if (id !== null) {
      this.service.clickShorts(id).subscribe({
      next:  () => console.log('short click recorded'),
      error: (e) => console.error('short click failed', e)
      });
    }

    /* 2.  existing free/subscription check & navigation */
    this.service.CheckShortsIsFree(id).subscribe(res => {
      const route = video.replace('adults', SharedService.getprogramName());
      const extras = val['IsVoices'] === '1' ? { queryParams: { pref: 'voices' } } : undefined;

      if (res === true) {
        // Mark origin so swipe-for-next is enabled only from index
        localStorage.setItem('fromIndex', 'true');
        this.router.navigate([route, 'T', title], extras);
      } else {
        if (loggedin === 'T' && sub === '1') {
          // Mark origin so swipe-for-next is enabled only from index
          localStorage.setItem('fromIndex', 'true');
          this.router.navigate([route, 'T', title], extras);
        } else {
          this.showModal = true;
        }
      }
    });
  }

  private extractShortIdFromUrl(url: string): number | null {
    if (!url) return null;
    const withoutQuery = url.split('?')[0];
    const filename = (withoutQuery.split('/').pop() || withoutQuery).toString();
    const extMatch = filename.match(/\.(\d+)\.(mp4|webm|mov)$/i);
    if (extMatch && extMatch[1]) {
      const n = Number(extMatch[1]);
      return Number.isFinite(n) ? n : null;
    }
    const parts = filename.split('.').reverse();
    for (const part of parts) {
      const n = Number(part);
      if (!Number.isNaN(n) && Number.isFinite(n)) {
        return n;
      }
    }
    return null;
  }

  searchShorts($event) {
    if($event==''){
      this.wisdomshorts = this.allwisdomshorts;
    }else{
      this.searchedText=$event;
      let filterlist = this.allwisdomshorts.filter(it => it.Title.toLowerCase().includes(this.searchedText.toLowerCase()) || it.searchtags.toLowerCase().includes(this.searchedText.toLowerCase()));
      this.wisdomshorts = filterlist;
    }
  }
  
  getUserPref(type) {
    if (type === '999') type = 'all';
    type = type.toLowerCase()

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
    this.wisdomshorts = this.allwisdomshorts;
    if (type === "all") {
      this.wisdomshorts = this.allwisdomshorts;
    } else if (type === 'voices') {
      this.wisdomshorts = this.allwisdomshorts.filter((d) => d['IsVoices'] === '1');
    }
    else {
      if (type === '0') {  //wisdom
        this.wisdomshorts = this.allwisdomshorts.filter((d) => (!d['PreferenceIDs']));
      } else {
        this.wisdomshorts = this.allwisdomshorts.filter((d) => (d['PreferenceIDs'] && (d['PreferenceIDs'].split(",").includes(type))));
      }
    }

    setTimeout(() => {
      this.scrollToActiveTab();
    }, 200);
  }

  scrollToActiveTab() {
    if (!this.selectedPref) return;
    const id = this.selectedPref.toString().toLowerCase();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }


 /*  getVoicesData() {
    this.selectedPref = 'Voices';
        this.wisdomshorts= this.allwisdomshorts.filter((d) => d['IsVoices'] === '1');
    document.getElementById("VoiceBtn").style.backgroundColor = '#E58D82';

  } */
onModalClose(event: string) {
this.showModal = false;
if (event === 'ok') {
  // Navigate to free trial when user clicks "Start your free trial"
  this.router.navigate([SharedService.getprogramName(), 'subscription', 'start-your-free-trial']);
    }
  }

}
