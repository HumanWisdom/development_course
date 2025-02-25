import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location } from '@angular/common'
import {AdultsService} from "../../../adults/src/app/adults/adults.service";
import { NgNavigatorShareService } from 'ng-navigator-share';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { NavigationService } from '../../services/navigation.service';
import { CommonService } from '../../services/common.service';
import { SectionCard } from '../section-card/section-card.page';



@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.scss'],
})
export class MyDashboardComponent implements OnInit {
  @Input() title: string;
  @Input() sharedPath: string;
  isAdults:boolean = true;
  urlT:any
  userId:any
  userName=JSON.parse(localStorage.getItem("userName"))
  cardList:SectionCard[] = [];
  groupedCardList: { [key: string]: SectionCard[] } = {};
  metadata = [
    { section_name: "Start here", priority: 1 },
    { section_name: "Skills", priority: 2 },
    { section_name: "Community", priority: 3 }
  ];
  constructor(private router: Router,
    private service:CommonService,private ngNavigatorShareService: NgNavigatorShareService,
    private navigationService: NavigationService) {
      this.service.GetIntroContents(1).subscribe(res=>{
        if(res){
          this.cardList = res;
          this.groupCardList();
        }
      });
     }

  ngOnInit() {
   
  }

  groupCardList() {
    const grouped = this.cardList.reduce((groups, card: SectionCard) => {
      const section = card.section_name;
      if (!groups[section]) {
        groups[section] = [];
      }
      groups[section].push(card);
      return groups;
    }, {});

    this.groupedCardList = this.metadata
      .sort((a, b) => b.priority - a.priority)
      .reduce((orderedGroups, meta) => {
        if (grouped[meta.section_name]) {
          orderedGroups[meta.section_name] = grouped[meta.section_name];
        }
        return orderedGroups;
      }, {});
  }

    goBack(){
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.router.navigate([SharedService.getDashboardUrls()]);
    }else{
      this.router.navigate([url]);
    }
   } 


}
