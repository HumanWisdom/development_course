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

  tocImage = ""
  tocColor = "white"

  path: string;
  address: string;
  wisdomshorts = [];
  allwisdomshorts = [];
  isSubscriber = false;
  searchedText:any='';
  // isAdults = true;
  prefData:any;
   isAdults = false;
  showModal = false;
  modalTitle = 'The best is yet to come';
  modalContent = 'Unlock the full experience and continue your journey to live your best life';
  selectedPref = 'All';
  selectedType = 'all';
  typeData = [
    { id: 'all', displayName: 'All' },
    { id: 'short_videos', displayName: 'Short videos' },
    { id: 'expert_tips', displayName: 'Expert tips' },
    { id: 'real_life', displayName: 'Real-life stories' },
    { id: 'in_depth', displayName: 'In-depth' }
  ];

  typeDescriptions: { [key: string]: string } = {
    'all': '',
    'short_videos': 'Nuggets of wisdom to reflect on and apply in your life',
    'expert_tips': 'Quick insight from our expert coaches',
    'real_life': 'Inspiring conversations with people from around the world',
    'in_depth': 'Thought provoking conversations with experts from around the world.'
  };

  getTypeDescription(): string {
    return this.typeDescriptions[this.selectedType] || '';
  }
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
    this.title.setTitle('Video library')
      this.meta.updateTag({ property: 'title', content: 'Video library' })
      this.meta.updateTag({ property: 'description', content: 'Explore our video library featuring practical life tips, expert insights, and wisdom for everyday living.' })
      this.meta.updateTag({ property: 'keywords', content: 'Everyday inspiration,Relatable wisdom,Practical life tips,Quick life hacks,Positive life lessons,Empowering quotes,Self-help wisdom,Encouraging words,Friendly life guidance' })
  }
  else if(SharedService.ProgramId == ProgramType.Teenagers){
    this.title.setTitle('Video library')
      this.meta.updateTag({ property: 'title', content: 'Video library' })
      this.meta.updateTag({ property: 'description', content: 'Explore our video library featuring practical life tips, expert insights, and wisdom for teenagers.' })
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
        let allItems: any[] = [];

        if (Array.isArray(res)) {
          allItems = res.map(item => {
            const isVoice = item['IsVoices'] == '1' || item['isVoices'] == '1' || item['IsVoices'] === 1 || item['isVoices'] === 1 || item['IsVoices'] === true || item['isVoices'] === true;
            if (isVoice) {
              item['Type'] = 'Expert tips';
            }
            return item;
          });
        } else if (typeof res === 'object' && res !== null) {
          Object.keys(res).forEach((key) => {
            if (Array.isArray(res[key])) {
              res[key].forEach((item) => {
                const isVoice = item['IsVoices'] == '1' || item['isVoices'] == '1' || item['IsVoices'] === 1 || item['isVoices'] === 1 || item['IsVoices'] === true || item['isVoices'] === true;

                if (key === 'Shorts') {
                  if (isVoice) {
                    item['Type'] = 'Expert tips';
                  } else {
                    item['Type'] = 'Short videos';
                  }
                } else if (key === 'HwpAllEvents') {
                  item['Type'] = 'In-depth';
                } else if (key === 'Conversations' || key === 'Teentalks') {
                  item['Type'] = 'Real-life stories';
                } else if (!item['Type']) {
                  item['Type'] = key;
                }

                if (!item['ImgUrl']) {
                  let yt = item['YoutubeLink'] || item['youtubeLink'] || item['YoutubeUrl'] || '';
                  if (yt && typeof yt === 'string') {
                    let ytCode = yt.trim();
                    if (ytCode.includes('v=')) ytCode = ytCode.split('v=')[1].split('&')[0];
                    else if (ytCode.includes('youtu.be/')) ytCode = ytCode.split('youtu.be/')[1].split('?')[0];
                    else if (ytCode.includes('/embed/')) ytCode = ytCode.split('/embed/')[1].split('?')[0];
                    if (ytCode && !ytCode.includes('/') && !ytCode.includes('.')) {
                      item['ImgUrl'] = `https://img.youtube.com/vi/${ytCode}/hqdefault.jpg`;
                    }
                  }
                }

                allItems.push(item);
              });
            }
          });
        }

        const progIdStr = SharedService.ProgramId ? SharedService.ProgramId.toString() : '9';
        let filteredItems = allItems.filter(p => p.ProgIDs ? p.ProgIDs.includes(progIdStr) : true);
        if (filteredItems.length === 0) {
          filteredItems = allItems;
        }

        this.allwisdomshorts = filteredItems;

        if (this.prefData && Array.isArray(this.prefData)) {
          this.prefData.forEach((h) => {
            h.active = true;
          });
        }
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
       
        let m: any = window.location.href;
        if(m?.includes('pref')){
          let type = m.split('pref=')[1];
          this.getUserPref(type);
        }
        else {          
          const savedTab = localStorage.getItem('wisdomShortsSelectedTab');
          const savedType = localStorage.getItem('wisdomShortsSelectedType');

          if (savedTab) {
            this.selectedPref = savedTab.toLowerCase();
          } else {
            this.selectedPref = 'all';
          }

          if (savedType) {
            this.selectedType = savedType.toLowerCase();
          } else {
            this.selectedType = 'all';
          }

          this.filterShorts();
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

        const lastId = localStorage.getItem('lastWisdomShortId');
        if (lastId) {
          setTimeout(() => {
            this.scrollToShort(lastId);
          }, 400);
        }

        setTimeout(() => {
          this.scrollToActiveTab();
        }, 200);
      }
    })
  }

  goBack() {
    localStorage.removeItem('wisdomShortsSelectedTab');
    localStorage.removeItem('wisdomShortsSelectedType');
    localStorage.removeItem('lastWisdomShortId');
    var url = this.navigationService.navigateToBackLink();
    if (url != null) {
      this.router.navigateByUrl(url);
    } else {
      this.location.back();
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

    const vUrl  = video || val['VideoUrl'] || val['YoutubeLink'] || val['YoutubeUrl'] || val['Url'] || val['URL'] || '';
    const ytRaw = val['YoutubeLink'] || val['youtubeLink'] || val['YoutubeUrl'] || '';

    let isYoutube = false;
    let ytCode = '';

    if (ytRaw) {
      isYoutube = true;
      ytCode = ytRaw.toString().trim();
    } else if (vUrl) {
      const str = vUrl.toString().trim();
      if (str.includes('youtube.com') || str.includes('youtu.be')) {
        isYoutube = true;
        ytCode = str;
      } else if (!str.startsWith('/') && !str.startsWith('http') && !str.includes('.mp4') && !str.includes('wisdom-shorts')) {
        isYoutube = true;
        ytCode = str;
      }
    } else if (val['Type'] === 'Real-life stories' || val['Type'] === 'Expert tips' || val['Type'] === 'In-depth') {
      if (val['RowID']) {
        isYoutube = true;
        ytCode = val['RowID'].toString();
      }
    }

    /* 1. Register click */
    const id = val['RowID'] || (vUrl ? this.extractShortIdFromUrl(vUrl) : null);
    if (id !== null && id !== undefined) {
      this.service.clickShorts(id).subscribe({
        next:  () => console.log('short click recorded'),
        error: (e) => console.error('short click failed', e)
      });
    }

    /* 2. YouTube / Conversation / Event navigation */
    if (isYoutube && ytCode) {
      if (ytCode.includes('v=')) {
        ytCode = ytCode.split('v=')[1].split('&')[0];
      } else if (ytCode.includes('youtu.be/')) {
        ytCode = ytCode.split('youtu.be/')[1].split('?')[0];
      } else if (ytCode.includes('/embed/')) {
        ytCode = ytCode.split('/embed/')[1].split('?')[0];
      }

      const prog = SharedService.getprogramName();
      const rowId = val['RowID'] || 1;

      if (rowId > 1 && (loggedin !== 'T' || sub !== '1') && !this.isSubscriber) {
        this.showModal = true;
        return;
      }

      localStorage.setItem('fromIndex', 'true');
      localStorage.setItem('wisdomShortsSelectedTab', this.selectedPref);
      localStorage.setItem('wisdomShortsSelectedType', this.selectedType);
      if (id) {
        localStorage.setItem('lastWisdomShortId', id.toString());
      }

      const suffix = rowId <= 1 ? '=rdtfghjhfdg' : '=vncbxdfchgvxd';
      this.router.navigate([`/${prog}/curated/youtubelink`, `${ytCode}${suffix}`], { state: { title } });
      return;
    }

    /* 3. Standard Wisdom Shorts navigation */
    const checkId = id || 0;
    this.service.CheckShortsIsFree(checkId).subscribe({
      next: (res) => {
        let route = vUrl ? vUrl.replace('adults', SharedService.getprogramName()) : `/${SharedService.getprogramName()}/wisdom-shorts/${checkId}`;
        const extras = val['IsVoices'] === '1' ? { queryParams: { pref: 'voices' } } : undefined;

        if (res === true || (loggedin === 'T' && sub === '1')) {
          localStorage.setItem('fromIndex', 'true');
          localStorage.setItem('wisdomShortsSelectedTab', this.selectedPref);
          localStorage.setItem('wisdomShortsSelectedType', this.selectedType);
          localStorage.setItem('lastWisdomShortId', checkId.toString());
          this.router.navigate([route, 'T', title], extras);
        } else {
          this.showModal = true;
        }
      },
      error: () => {
        if (loggedin === 'T' && sub === '1') {
          let route = vUrl ? vUrl.replace('adults', SharedService.getprogramName()) : `/${SharedService.getprogramName()}/wisdom-shorts/${checkId}`;
          localStorage.setItem('fromIndex', 'true');
          localStorage.setItem('wisdomShortsSelectedTab', this.selectedPref);
          localStorage.setItem('wisdomShortsSelectedType', this.selectedType);
          localStorage.setItem('lastWisdomShortId', checkId.toString());
          this.router.navigate([route, 'T', title]);
        } else {
          this.showModal = true;
        }
      }
    });
  }

  public extractShortIdFromUrl(url: string): number | null {
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
    this.searchedText = $event || '';
    this.filterShorts();
  }

  selectType(typeId: string) {
    this.selectedType = typeId.toLowerCase();
    localStorage.setItem('wisdomShortsSelectedType', this.selectedType);
    this.filterShorts();
  }

  formatTiming(timing: any): string {
    if (!timing) return '';
    const str = timing.toString().trim();
    if (str.includes(':')) {
      const parts = str.split(':');
      if (parts.length === 3) {
        if (parts[0] === '00') {
          return `${parts[1]}:${parts[2]}`;
        }
        return str;
      }
      return str;
    }
    const num = parseFloat(str);
    if (!isNaN(num)) {
      const mins = Math.floor(num);
      const secs = Math.round((num - mins) * 60);
      const mm = mins < 10 ? `0${mins}` : `${mins}`;
      const ss = secs < 10 ? `0${secs}` : `${secs}`;
      return `${mm}:${ss}`;
    }
    return str;
  }

  getCardSubtext(data: any): string {
    const typeLabel = data['TypeLabel'] || data['Type'] || 'SHORT VIDEO';
    const formatted = this.formatTiming(data['Timing']);
    return formatted ? `${typeLabel.toUpperCase()} • ${formatted}` : typeLabel.toUpperCase();
  }
  
  getUserPref(type) {
    if (type === '999') type = 'all';
    type = type.toLowerCase();

    this.selectedPref = type;
    localStorage.setItem('wisdomShortsSelectedTab', this.selectedPref);
    this.filterShorts();

    setTimeout(() => {
      this.scrollToActiveTab();
    }, 200);
  }

  filterShorts() {
    let list = [...this.allwisdomshorts];

    if (this.searchedText && this.searchedText.trim() !== '') {
      const q = this.searchedText.toLowerCase().trim();
      list = list.filter(it => 
        (it.Title && it.Title.toLowerCase().includes(q)) || 
        (it.searchtags && it.searchtags.toLowerCase().includes(q))
      );
    }

    if (this.selectedPref && this.selectedPref !== 'all' && this.selectedPref !== '999') {
      const prefIdStr = this.selectedPref.toString().toLowerCase();
      if (prefIdStr === 'voices') {
        list = list.filter((d) => d['IsVoices'] == '1' || d['isVoices'] == '1' || d['IsVoices'] === 1 || d['isVoices'] === 1);
      } else if (prefIdStr === '0') {
        list = list.filter((d) => (!d['PreferenceIDs'] && !d['PrefIDs']));
      } else {
        const prefObj = this.prefData?.find(p => p.id?.toString().toLowerCase() === prefIdStr);
        const prefDisplayName = prefObj?.displayName?.toLowerCase();
        const prefName = prefObj?.name?.toLowerCase();

        list = list.filter((d) => {
          // Check PreferenceIDs / PrefIDs / PreferenceID
          const rawPrefIds = d['PreferenceIDs'] || d['PrefIDs'] || d['PreferenceID'] || d['prefIDs'] || '';
          let matchPrefId = false;
          if (Array.isArray(rawPrefIds)) {
            matchPrefId = rawPrefIds.some(p => p.toString().trim() === prefIdStr);
          } else if (rawPrefIds) {
            matchPrefId = rawPrefIds.toString().split(',').map(s => s.trim()).includes(prefIdStr);
          }

          // Check searchtags
          const searchTags = (d['searchtags'] || '').toLowerCase();
          const matchTags = searchTags.includes(prefIdStr) || 
                            (prefDisplayName && searchTags.includes(prefDisplayName)) ||
                            (prefName && searchTags.includes(prefName));

          // Check Title
          const titleStr = (d['Title'] || '').toLowerCase();
          const matchTitle = prefDisplayName ? titleStr.includes(prefDisplayName) : false;

          return matchPrefId || matchTags || matchTitle;
        });
      }
    }

    if (this.selectedType && this.selectedType !== 'all') {
      const selectedTypeStr = this.selectedType.toLowerCase();
      if (selectedTypeStr === 'short_videos') {
        list = list.filter(d => !d['Type'] || d['Type'].toLowerCase().includes('short'));
      } else if (selectedTypeStr === 'expert_tips') {
        list = list.filter(d => d['Type'] && d['Type'].toLowerCase().includes('expert'));
      } else if (selectedTypeStr === 'real_life') {
        list = list.filter(d => d['Type'] && (d['Type'].toLowerCase().includes('real') || d['Type'].toLowerCase().includes('teen') || d['Type'].toLowerCase().includes('conversation')));
      } else if (selectedTypeStr === 'in_depth') {
        list = list.filter(d => d['Type'] && (d['Type'].toLowerCase().includes('depth') || d['Type'].toLowerCase().includes('event')));
      }
    }

    this.wisdomshorts = list;
  }

  scrollToActiveTab() {
    if (!this.selectedPref) return;
    const id = this.selectedPref.toString().toLowerCase();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }

  scrollToShort(id) {
    const element = document.getElementById('short-' + id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      localStorage.removeItem('lastWisdomShortId');
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
