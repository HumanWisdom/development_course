import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AdultsService } from '../../adults.service';
import { Location } from '@angular/common';
import { NavigationService } from '../../../../../../shared/services/navigation.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.page.html',
  styleUrls: ['./introduction.page.scss'],
})
export class IntroductionPage implements OnInit {
  data: any
  private currentUrl:string='';
  private isByPass :boolean=false;
  constructor(public route: ActivatedRoute, private router: Router,
    private service: AdultsService, private location:Location,private navigationService:NavigationService) {
      let url = this.route.snapshot.paramMap.get('TopicName');
      this.GetGuidedQs_Topics(url);
      if(this.router.getCurrentNavigation()!=null &&  this.router.getCurrentNavigation().extras && this.router.getCurrentNavigation().extras.state){
        this.isByPass=  this.router.getCurrentNavigation().extras.state.isBypass;
      }
  }

  ngOnInit() {

  }

  goBack() {
  if(this.isByPass==true){
    this.router.navigate(['/adults/journal'], { queryParams: { "isGuided": true } })
  }else{
    var url = this.navigationService.navigateToBackLink();
    if(url == 'adults/search'){
     this.location.back();
    }
    if(url == 'DONOROUTE'){
      this.router.navigate(['/adults/journal'], { queryParams: { "isGuided": true } })
    }
    this.router.navigate([url]);
  }
    // this.router.navigate(['/adults/journal'])
  }

  


  NavigateToQuestions() {
    let log = localStorage.getItem("isloggedin");
    if (log === 'T') {
      this.router.navigate(['/adults/guidedquestions'], { queryParams: { "Qid": JSON.stringify(this.data.RowID), "Attempt": "0" } })
    }else{
      this.router.navigate(['/adults/subscription/start-your-free-trial']);
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
