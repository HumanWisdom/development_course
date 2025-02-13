import { Platform } from "@angular/cdk/platform";
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { CommonService } from  '../../../services/common.service';
import { SharedService } from "../../../services/shared.service";
import { ProgramType } from "../../../models/program-model";


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

  selectedPref = 'All'
  constructor(private ngNavigatorShareService: NgNavigatorShareService, public platform: Platform, private router: Router,
    private location: Location, private service: CommonService, private meta: Meta, private title: Title) {
    this.ngNavigatorShareService = ngNavigatorShareService;
    this.address = this.router.url
    this.prefData = SharedService.getPreferenceData();
   /*  this.prefData.unshift({
      id: "88",
      displayName: "Voices",
      active: false,
      name: 'Voices'
    })
 */
  
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
      }
    })
  }

  goBack() {
    this.location.back()
  }
  share() {
    /*  if (!this.ngNavigatorShareService.canShare() &&  (this.platform.isBrowser)  ) {
       alert(`This service/api is not supported in your Browser`);
       return;
     } */
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
    // localStorage.setItem('wisdomvideotitle', title);
    let loggedin = localStorage.getItem("isloggedin")
    let sub: any = localStorage.getItem("Subscriber")
    let id = video.split("/")[3].split(".")[1]
    localStorage.setItem('isSwipeAllow','true');
    this.service.CheckShortsIsFree(id).subscribe(res => {
      if (res === true) {
        if(val['IsVoices'] === '1') {
          this.router.navigate([video.replace('adults',SharedService.getprogramName()), 'T', title], {queryParams:{pref: 'voices'}})
        }else {
          this.router.navigate([video.replace('adults',SharedService.getprogramName()), 'T', title])
        }
      } else {
        if (loggedin && loggedin === 'T' && sub && sub === '1') {
          if(val['IsVoices'] === '1') {
            this.router.navigate([video.replace('adults',SharedService.getprogramName()), 'T', title], {queryParams:{pref: 'voices'}})
          }else {
            this.router.navigate([video.replace('adults',SharedService.getprogramName()), 'T',title])
          }
        } else {
          this.router.navigate([SharedService.getprogramName()+ '/subscription/start-your-free-trial']);
        }
      }
    })
  }

  searchShorts($event) {
    if($event==''){
      this.wisdomshorts = this.allwisdomshorts;
    }else{
      this.searchedText=$event;
      let filterlist = this.allwisdomshorts.filter(it => it.Title.toLowerCase().includes(this.searchedText.toLowerCase()));
      this.wisdomshorts = filterlist;
    }
  }
  
  getUserPref(type) {
    
    const btns = Array.from(document.getElementsByClassName('btn'));

    for (const b of btns) {
        const y = <HTMLElement> b;
        if(y.id=="voices")
           y.style.backgroundColor = '#E58D82';
        else{
              if(this.isAdults ==true)
                y.style.backgroundColor = '#424675';
              else
                y.style.backgroundColor = '#4267A5';
            }
            y.style.color = '#FFFFFF';
    }

    type=type.toLowerCase()
   
    
    this.selectedPref = type;
    this.wisdomshorts = this.allwisdomshorts;
    if(type === "all") {
      this.wisdomshorts = this.allwisdomshorts;
      // document.getElementById("all").style.backgroundColor = '#FFFFFF';
      // document.getElementById("all").style.color = '#000000';
    }else if(type === 'voices'){
      this.wisdomshorts= this.allwisdomshorts.filter((d) => d['IsVoices'] === '1');
      // document.getElementById("voices").style.backgroundColor = '#E58D82';
      // document.getElementById("voices").style.color = '#FFFFFF';

    }
    else{
      // document.getElementById(type).style.backgroundColor = '#FFFFFF';
      // document.getElementById(type).style.color = '#000000';

      if(type === '0') {  //wisdom
        this.wisdomshorts= this.allwisdomshorts.filter((d) => (!d['PreferenceIDs']));
      }else {
                //this.wisdomshorts= this.allwisdomshorts.filter((d) => (d['PreferenceIDs'] && (d['PreferenceIDs'].includes(type.id + ',') || d['PreferenceIDs'].includes(','+ type.id + ',') || d['PreferenceIDs'].includes(','+type.id))));
          //  this.wisdomshorts= this.allwisdomshorts.filter((d) => (d['Preferences'] && d['Preferences'].toLowerCase().includes(type)));
                this.wisdomshorts= this.allwisdomshorts.filter((d) => (d['PreferenceIDs'] && (d['PreferenceIDs'].split(",").includes(type))));
      }
    }
    document.getElementById(type).style.backgroundColor = '#FFFFFF';
    document.getElementById(type).style.color = '#000000';
         

  }


 /*  getVoicesData() {
    this.selectedPref = 'Voices';
        this.wisdomshorts= this.allwisdomshorts.filter((d) => d['IsVoices'] === '1');
    document.getElementById("VoiceBtn").style.backgroundColor = '#E58D82';

  } */


}
