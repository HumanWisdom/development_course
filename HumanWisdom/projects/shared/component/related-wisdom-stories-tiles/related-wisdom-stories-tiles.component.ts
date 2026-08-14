import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
@Component({
  selector: 'app-related-wisdom-stories-tiles',
  templateUrl: './related-wisdom-stories-tiles.component.html',
  styleUrls: ['./related-wisdom-stories-tiles.component.scss'],
})
export class RelatedWisdomStoriesTilesComponent implements OnInit,OnDestroy {

  @Input()
  wisdomstories = [];

  @Input()
  isAccordion = false;

  isOpen = false;

  wisdomstoriesbottom = [];

  enablewisdomstory = false;
  enable_view_more_less = false;
  view_more_less="View More"
  isAdults = false;
  isSubscriber = false;
  showModal = false;
  modalTitle = 'The best is yet to come';
  modalContent = 'Unlock the full experience and continue your journey to live your best life';

  constructor(private router: Router,private service:AdultsService) {

     if (SharedService.ProgramId == ProgramType.Adults) {
          this.isAdults = true;
        } else {
          this.isAdults = false;
        }
  }

  ngOnInit() {
    let userid = localStorage.getItem('isloggedin');
    let sub: any = localStorage.getItem('Subscriber');
    this.isSubscriber = (userid === 'T' && sub === '1');

    if(this.wisdomstories.length >= 2) {
      this.enablewisdomstory = true
      let first = []
      this.wisdomstories.forEach((d, i) => {
        if(i !== 0 && i !== 1) {
         this.wisdomstoriesbottom.push(d)
        }else {
          first.push(d)
        }
      })
      this.wisdomstories = first
     }else if(this.wisdomstories.length === 1) {
      this.enablewisdomstory = true
     }
     

  }

  viewstory(item){
    const sid = item.ScenarioID;
    const isGuestFree = (sid == 42 || sid == 1 || item.ExclFromChild === '1');
    if (!this.isSubscriber && !isGuestFree) {
      this.showModal = true;
      return;
    }
    localStorage.setItem("story",JSON.stringify(item))
    let res = localStorage.getItem("isloggedin");
    if(res && res === 'T') {
      this.service.clickStory(item.ScenarioID).subscribe(res=>{
         if (SharedService.ProgramId == ProgramType.Teenagers) {
        this.router.navigate(['/teenagers/wisdom-stories/view-stories'],{ queryParams: {sId: `${item['ScenarioID']}`}})
         }
         else{
          this.router.navigate(['/adults/wisdom-stories/view-stories'],{ queryParams: {sId: `${item['ScenarioID']}`}})
         }
      })
    }else {
      if (SharedService.ProgramId == ProgramType.Teenagers) {
      this.router.navigate(['/teenagers/wisdom-stories/view-stories'],{ queryParams: {sId: `${item['ScenarioID']}`}})
      }
      else{
        this.router.navigate(['/adults/wisdom-stories/view-stories'],{ queryParams: {sId: `${item['ScenarioID']}`}}) 
      }
    }

  }

  onModalClose(event: string) {
    this.showModal = false;
    if (event === 'ok') {
      this.router.navigate([SharedService.getprogramName(), 'subscription', 'start-your-free-trial']);
    }
  }

  toggle_view_more_less()
  {
    if(this.view_more_less == "View More")
    {
      this.enable_view_more_less = true;
      this.view_more_less = "View Less";
    }
    else
    {
      this.enable_view_more_less = false;
      this.view_more_less = "View More";
    }
  }

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }

  ngOnDestroy() {
    this.wisdomstories = [];
    this.wisdomstoriesbottom = [];
    this.enablewisdomstory = false;
    this.enable_view_more_less = false;
    this.view_more_less="View More"
  }

}
