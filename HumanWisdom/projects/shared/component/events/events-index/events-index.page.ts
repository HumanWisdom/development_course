import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { Platform } from "@angular/cdk/platform";
import { Meta, Title } from '@angular/platform-browser';
import { CommonService } from '../../../services/common.service';
import { SharedService } from '../../../services/shared.service';
import { ProgramType } from '../../../models/program-model';
declare var bootstrap: any;

@Component({
  selector: 'HumanWisdom-events-index',
  templateUrl: './events-index.page.html',
  styleUrls: ['./events-index.page.scss'],
})
export class EventsIndexPage implements OnInit, AfterViewInit  {
  path: string;
  address: string;
  futureeventList: any = [];
  eventList: any = [];
  searchinp="";
  backupList:any=[];
  isSubscriber = false;
  isAdults =  true;
  showModal = false;
  modalTitle = 'The best is yet to come';
  modalContent = 'Unlock the full experience and continue your journey to live your best life';
  constructor(private location: Location, private router: Router,
    public platform: Platform,
    private ngNavigatorShareService: NgNavigatorShareService,
    public service: CommonService, private meta: Meta, private title: Title) {
    this.ngNavigatorShareService = ngNavigatorShareService;
    this.address = this.router.url
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
        } else {
         this.isAdults = false;
        }
  }

  getSearchResult(value){
    this.searchinp=value;
    setTimeout(() => {
      this.eventList=this.backupList.filter
      (x=>x.Title.toLocaleLowerCase().includes
        (this.searchinp.toLocaleLowerCase()) || x.searchtags.toLocaleLowerCase().includes
        (this.searchinp.toLocaleLowerCase()));
    }, 30);
  }

  routeFutureEvents(item){
    this.router.navigateByUrl(SharedService.getprogramName()+"/events/event?eid="+item.RowID);
  }

  clearSearch(){
    setTimeout(() => {
    this.searchinp='';
    this.eventList=JSON.parse(JSON.stringify(this.backupList));
    }, 40);
  }

  ngOnInit() {

    this.title.setTitle('Mindfulness Events - Learn to Live in the Present')
    this.meta.updateTag({ property: 'title', content: 'Mindfulness Events - Learn to Live in the Present'})
    this.meta.updateTag({ property: 'description', content: 'Experience the benefits of mindfulness and learn to live in the present. Join our mindfulness events for a chance to gain clarity and peace of mind.' })
    this.meta.updateTag({ property: 'keywords', content: 'Personal development events,Self-improvement events,Mindfulness events,Wisdom-based events,Inspirational events,Adult learning events,Life lessons events,Meditation events,Mental health events,Mindful events' })


    this.service.getAllEvents().subscribe(x => {
      this.futureeventList= x.FutureEvents.filter(y=>y.ProgIDs.includes(SharedService.ProgramId.toString()));
      this.eventList=x.PastEvents.filter(y=>y.ProgIDs.includes(SharedService.ProgramId.toString()));
       this.backupList=JSON.parse(JSON.stringify(this.eventList));
    });

    let userid = localStorage.getItem('isloggedin');
    let sub: any = localStorage.getItem('Subscriber');
    if (userid === 'T' && sub === '1') {
      this.isSubscriber = true;
    } else {
      this.isSubscriber = false;
    }
  }

    ngAfterViewInit() {
    // initialize Bootstrap collapse after view is rendered
    const collapseElements = document.querySelectorAll('.accordion-collapse');
    collapseElements.forEach((el: any) => {
      new bootstrap.Collapse(el, {
        toggle: false, // prevents it from auto-opening
      });
    });
  }

  getStyle(url){
    return "background-image: url("+url+")";
  }

  goBack() {
    this.location.back()
  }

  youtube(link: string, RowID: number) {
    this.service.clickEvents(RowID).subscribe({
      next : () => console.log('youtube event logged'),
      error: (e) => console.error('youtube event failed', e)
    });
    const sub = localStorage.getItem('Subscriber');
    const prog = SharedService.getprogramName();

    if (RowID >= 2 && sub === '0') {
      // this.router.navigate([`${prog}/subscription/start-your-free-trial`]);
      this.showModal = true;
    } else if (RowID <= 1) {
      this.router.navigate([`${prog}/curated/youtubelink`, `${link}=rdtfghjhfdg`]);
    } else {
      this.router.navigate([`${prog}/curated/youtubelink`, `${link}=vncbxdfchgvxd`]);
    }
  }

  share() {
    /*  if (!this.ngNavigatorShareService.canShare() &&  (this.platform.isBrowser)  ) {
       alert(`This service/api is not supported in your Browser`);
       return;
     } */
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

  onModalClose(event: string) {
this.showModal = false;
if (event === 'ok') {
  // Navigate to free trial when user clicks "Start your free trial"
  this.router.navigate([SharedService.getprogramName(), 'subscription', 'start-your-free-trial']);
    }
  }

}
