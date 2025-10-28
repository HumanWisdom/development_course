import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { Location } from '@angular/common';
import { SharedService } from '../../services/shared.service';
import { Constant } from '../../services/constant';
import { NavigationService } from '../../services/navigation.service';
import { ProgramType } from '../../models/program-model';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-wisdom-exercise-s75001',
  templateUrl: './wisdom-exercise-s75001.component.html',
  styleUrls: ['./wisdom-exercise-s75001.component.scss'],
})
export class WisdomExerciseS75001Component implements OnInit {
  tocImage="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/wisdom_exercise.svg"
  tocColor="white"
  isGuest : boolean =  true;
  isAdults: boolean = true; 
  urlT:any
  userId:any
  userName=localStorage.getItem("userName")
  groupedCardList=[]
  cardList = [];
  introTitle:string = '';
  dashboardType:string = '';
  dashboardData:any = {};
  introData : any = {};
  metadata = [
    { section_name: "Start here", priority: 1,data : new Array<any>() },
    { section_name: "Skills", priority: 2,data: new Array<any>() },
    { section_name: "Community", priority: 3,data: new Array<any>()  }
  ];
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  constructor(
    public ngNavigatorShareService: NgNavigatorShareService,
     private navigationService:NavigationService,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private service:CommonService, ) 
    { }
 
  ngOnInit() {
    this.isGuest = !SharedService.isSubscriber();
    this.isAdults = SharedService.ProgramId === ProgramType.Adults;

    SharedService.ProgramId == ProgramType.Adults ? this.isAdults = true : this.isAdults = false;
            this.dashboardType = this.route.snapshot.paramMap.get('type');
            this.dashboardData = SharedService.contentIdData(this.dashboardType);
            this.service.GetIntroContents(this.dashboardData.id).subscribe(res=>{
              if(res){
                this.cardList = res.content;
                this.introData =  res;
                this.introTitle = res.introPara;
                for(var item of this.metadata){
                  item.data = this.cardList.filter(x=>x.section_name == item.section_name)
                }
              }
          });
  }
  share(){
    this.ngNavigatorShareService.share({
      title: 'HappierMe Program',
      text: 'Hey, check out the HappierMe Program',
      url: "https://humanwisdom.me"+this.path
    }).then( (response) => {
      
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  goBack(){
    // if(this.service.previousUrl.includes('wisdom-exercise'))
    // {
    //   this.router.navigateByUrl("/adults/adult-dashboard");

    // }
    // else
    //  this.location.back()
       var url = this.navigationService.navigateToBackLink();
        if(url==null){
          url = SharedService.getDataFromLocalStorage(Constant.NaviagtedFrom);
          if(url && url!=null && url != 'null'){
            this.router.navigate([url]);
          }else{
            this.location.back();
          }
        }
        else
        {
          this.router.navigate([url]);
        }

  }

    routeTointroDash() {
      this.router.navigate(['/adults/dashboard/wisdom-exercise']);
    }
}
