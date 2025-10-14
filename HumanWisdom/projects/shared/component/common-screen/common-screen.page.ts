import { Platform } from "@angular/cdk/platform";
import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { CommonService } from  '../../../shared/services/common.service';
import { SharedService } from "../../../shared/services/shared.service";
import { ProgramType } from "../../../shared/models/program-model";


@Component({
  selector: 'HumanWisdom-common-screen',
  templateUrl: './common-screen.page.html',
  styleUrls: ['./common-screen.page.scss'],
})
export class CommonScreenPage implements OnInit {

  config: any; // Accepts configuration JSON

  tocImage:string='';
  tocColor = "white"

  path: string;
  address: string;
  filteredData = [];
  allData = [];
  isSubscriber = false;
  searchedText:any='';
  isAdults = true;
  prefData:any;
  showModal = false;
  modalTitle = 'The best is yet to come';
  modalContent = 'Unlock the full experience and continue your journey to live your best life';
  selectedPref = 'All'
  constructor(
    private ngNavigatorShareService: NgNavigatorShareService,
    public platform: Platform,
    private router: Router,
    private location: Location,
    private service: CommonService,
    private meta: Meta,
    private title: Title
  ) {
    this.ngNavigatorShareService = ngNavigatorShareService;
    this.address = this.router.url;
    this.config = SharedService.getScreenConfiguration("SoundCapes");
    this.prefData=this.config.preferenceData;
   this.tocImage = this.config.tocImage;
  }

    getClickEvent(data) {
    this.service.clickSoundscapes(data.SoundscapeID).subscribe({
    next: () => console.log('click logged'),
    error: e => console.error('click log failed', e)
  });
    if(!this.isSubscriber && data['SoundscapeID'] > 1) {
        //  this.router.navigate([`${SharedService.getprogramName()}/subscription/start-your-free-trial`]);
        this.showModal = true;
         return ;
    }


      if (data['MediaUrl'].includes('https://d1tenzemoxuh75.cloudfront.net/')) {
        data['MediaUrl'] = data['MediaUrl'].replaceAll('https://d1tenzemoxuh75.cloudfront.net/', '/');
      }
      let concat = encodeURIComponent(data['MediaUrl'].replaceAll('/', '~'));
      const title = data['Title']?.replaceAll(' ', '-')
      const moduleName = this.config['moduleName'];
      this.router.navigate([`${SharedService.getprogramName()}/audiopage/`, concat, data['SoundscapeID'], 'T', title,moduleName])
  }

  ngOnInit() {

    let userid = localStorage.getItem('isloggedin');
    let sub: any = localStorage.getItem('Subscriber');
    this.isSubscriber = (userid === 'T' && sub === '1');
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
    this.getData();
  }

  getData() {
    // Use config.apiMethod or fallback to GetWisdomShorts
    const apiMethod = this.config?.apiMethod;
    if (typeof this.service[apiMethod] === 'function') {
      this.service[apiMethod]().subscribe((res) => {
        if (res) {
          let res1 = Array.isArray(res) ? res : [];
          // Use config.filterByProgramId if provided
          if (this.config?.filterByProgramId) {
            res1 = res1.filter(p => p[this.config.filterByProgramId].includes(SharedService.ProgramId));
          } else if (res1.length && res1[0].ProgIDs) {
            res1 = res1.filter(p => p.ProgIDs.includes(SharedService.ProgramId));
          }
          // Use config.sort if provided
          if (this.config?.sort) {
            res1 = res1.sort(this.config.sort);
          }
          // Use config.transform if provided
          if (this.config?.transform) {
            res1 = this.config.transform(res1);
          }
          this.allData = res1;
          // Preference logic
          let m: any = window.location.href;
          this.allData.forEach((d) => {
            this.prefData.forEach((h) => {
              if (d['PreferenceIDs'] && (d['PreferenceIDs'].split(",").includes(h.id))) {
                h.active = true;
              } else if (!d['PreferenceIDs']) {
                h.active = true;
              }
            });
          });
          if (m?.includes('pref')) {
            let type = m.split('pref=');
            this.getUserPref(type[1]);
          } else {
            this.getUserPref("all");
          }
          localStorage.setItem(this.config?.localStorageKey || 'wisdomShortData', JSON.stringify(this.allData));
        }
      });
    }
  }

  goBack() {
    this.location.back();
  }

  share() {
    /*  if (!this.ngNavigatorShareService.canShare() &&  (this.platform.isBrowser)  ) {
       alert(`This service/api is not supported in your Browser`);
       return;
     } */
    console.log("url")
    this.path = (this.config?.shareBaseUrl || "https://happierme.app") + this.address;
    this.ngNavigatorShareService.share({
      title: this.config?.shareTitle || 'HappierMe Program',
      text: this.config?.shareText || 'Hey, check out the HappierMe Program',
      url: this.path
    }).then((response) => {
      
    })
      .catch((error) => {
        console.log(error);
      });
  }


  searchShorts($event) {
    if($event==''){
      this.filteredData = this.allData;
    }else{
      this.searchedText=$event;
      // Use config.searchFields if provided
      const searchFields = this.config?.searchFields || ['Title', 'searchtags'];
      let filterlist = this.allData.filter(it =>
        searchFields.some(field =>
          (it[field] || '').toLowerCase().includes(this.searchedText.toLowerCase())
        )
      );
      this.filteredData = filterlist;
    }
  }
  
   getUserPref(type) {
    this.selectedPref = '';
    this.filteredData = this.allData;
    if(type.name === 'All') {
      this.filteredData = this.allData;
    }else{
        this.filteredData= this.allData.filter((d) => d['PreferenceIDs'].includes(type.id));
      }
    }

    onModalClose(event: string) {
    this.showModal = false;
    if (event === 'ok') {
      // Navigate to free trial when user clicks "Start your free trial"
      this.router.navigate([SharedService.getprogramName(), 'subscription', 'start-your-free-trial']);
        }
      }
  }

 /*  getVoicesData() {
    this.selectedPref = 'Voices';
        this.wisdomshorts= this.allData.filter((d) => d['IsVoices'] === '1');
    document.getElementById("VoiceBtn").style.backgroundColor = '#E58D82';

  } */


