import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';

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
    private location:Location) {
      
  }

  ngOnInit() {
  
  }

  goBack() {
  if(this.isByPass==true){
    this.router.navigate(['/adults/journal'], { queryParams: { "isGuided": true } })
  }else{
    this.location.back();
  }
    // this.router.navigate(['/adults/journal'])
  }

  NavigateToQuestions() {
    this.router.navigate(['/guidedquestions'], { queryParams: { "Qid": JSON.stringify(this.data.RowID), "Attempt": "0" } })
  }

  // GetGuidedQs_Topics(url) {
  //   this.service.GetGuidedQs_Topics().subscribe(res => {
  //     if (res) {
  //       this.data = res.filter(x => (x.Landing_URL) == '/' + url)[0];
  //     }
  //   });
  // }
}
