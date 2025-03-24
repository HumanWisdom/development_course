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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @Input() title: string;
  @Input() sharedPath: string;
  isAdults:boolean = true;
  urlT:any
  userId:any
  userName=localStorage.getItem("userName")
  cardList:SectionCard[] = [];
  groupedCardList=[]
  introTitle:string = '';
  dashboardType:string = '';
  dashboardId:number =0;
  metadata = [
    { section_name: "Start here", priority: 1,data : new Array<any>() },
    { section_name: "Skills", priority: 2,data: new Array<any>() },
    { section_name: "Community", priority: 3,data: new Array<any>()  }
  ];
  constructor(private router: Router,
    private service:CommonService,private ngNavigatorShareService: NgNavigatorShareService,
    private navigationService: NavigationService,private route: ActivatedRoute) {
      SharedService.ProgramId == ProgramType.Adults ? this.isAdults = true : this.isAdults = false;
        this.dashboardType = this.route.snapshot.paramMap.get('type');
        this.dashboardId = SharedService.getDashboardId(this.dashboardType);
        this.service.GetIntroContents(this.dashboardId).subscribe(res=>{
          if(res){
            this.cardList = res.content;
            this.introTitle = res.introPara;
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

   routeToDashboard(){
    this.router.navigate([SharedService.getDashboardUrls()]);
   }

}
