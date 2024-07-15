import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommonService } from '../../../services/common.service';
import { NavigationService } from '../../../services/navigation.service';
import { SharedService } from '../../../services/shared.service';
import { ProgramType } from '../../../models/program-model';
@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.page.html',
  styleUrls: ['./introduction.page.scss'],
})
export class IntroductionPage implements OnInit {
  data: any
  isAdults = true;
  private currentUrl:string='';
  private isByPass :boolean=false;
  constructor(public route: ActivatedRoute, private router: Router,
    private service: CommonService, private location:Location,private navigationService:NavigationService) {
      this.initializeData();
      let url = this.route.snapshot.paramMap.get('TopicName');
      setTimeout(() => {
        this.GetGuidedQs_Topics(url);
        if(this.router.getCurrentNavigation()!=null &&  this.router.getCurrentNavigation().extras && this.router.getCurrentNavigation().extras.state){
          this.isByPass=  this.router.getCurrentNavigation().extras.state.isBypass;
        }    
      }, 0);
  }

  ngOnInit() {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
  }

  private initializeData(){
    this.data = {
      Topic:"",
      introduction:""
    }
  }

  goBack() {
  if(this.isByPass==true){
    this.router.navigate([SharedService.getUrlfromFeatureName('journal')], { queryParams: { "isGuided": true } })
  }else{
    var url = this.navigationService.navigateToBackLink();
    if(url == `/${SharedService.getprogramName()}/search`){
     this.location.back();
    }
    if(url == 'DONOROUTE'){
      this.router.navigate([SharedService.getUrlfromFeatureName('journal')], { queryParams: { "isGuided": true } })
    }
    this.router.navigate([url]);
  }
  }

  


  NavigateToQuestions() {
    let log = localStorage.getItem("isloggedin");
    if (log === 'T') {
      this.router.navigate([SharedService.getUrlfromFeatureName('guidedquestions')], { queryParams: { "Qid": JSON.stringify(this.data.RowID), "Attempt": "0" } })
    }else{
      this.router.navigate([SharedService.getUrlfromFeatureName('subscription/start-your-free-trial')]);
    }
  }

  GetGuidedQs_Topics(url) {
    this.service.GetGuidedQs_Topics().subscribe(res => {
      if (res) {
        this.data = res.filter(x => (x.Landing_URL) == '/' + url)[0];
      }
    });
  }
}
