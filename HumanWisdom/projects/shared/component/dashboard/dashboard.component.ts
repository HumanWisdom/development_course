import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
export class DashboardComponent {
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
  dashboardData:any = {};
  introData : any = {};
  metadata = [
    { section_name: "Start here", priority: 1,data : new Array<any>() },
    { section_name: "Skills", priority: 2,data: new Array<any>() },
    { section_name: "Community", priority: 3,data: new Array<any>()  }
  ];
  constructor(
    private readonly router: Router,
    private readonly location: Location,
    private readonly service: CommonService,
    private readonly ngNavigatorShareService: NgNavigatorShareService,
    private readonly navigationService: NavigationService,
    private readonly route: ActivatedRoute
  ) {
    this.isAdults = SharedService.ProgramId === ProgramType.Adults;
        this.dashboardType = this.route.snapshot.paramMap.get('type');
        this.dashboardData = SharedService.contentIdData(this.dashboardType);
        this.service.GetIntroContents(this.dashboardData.id).subscribe(res=>{
          if(res){
            this.cardList = res.content;
            this.introData =  res;
            this.introTitle = res.introPara;
            for(let item of this.metadata){
              item.data = this.cardList.filter(x=>x.section_name == item.section_name)
            }
          }
      });
     }



  explore(url:any){
    this.router.navigate([url]);
  }

    goBack(){
    const url = this.navigationService.navigateToBackLink();
    if (url === null) {
      this.location.back();
    }else{
      this.router.navigate([url]);
    }
   } 

   routeToDashboard(){
    this.router.navigate([SharedService.getDashboardUrls()]);
   }

}
