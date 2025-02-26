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
  userName=localStorage.getItem("userName")
  cardList:SectionCard[] = [];
  groupedCardList=[]
  metadata = [
    { section_name: "Start here", priority: 1,data : new Array<any>() },
    { section_name: "Skills", priority: 2,data: new Array<any>() },
    { section_name: "Community", priority: 3,data: new Array<any>()  }
  ];
  constructor(private router: Router,
    private service:CommonService,private ngNavigatorShareService: NgNavigatorShareService,
    private navigationService: NavigationService) {
      this.service.GetIntroContents(1).subscribe(res=>{
        if(res){
          this.cardList = res;
          for(var item of this.metadata){
            item.data = this.cardList.filter(x=>x.section_name == item.section_name)
          }
        }
      });
     }

  ngOnInit() {
   
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
