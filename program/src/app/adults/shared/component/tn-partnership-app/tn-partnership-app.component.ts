import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tn-partnership-app',
  templateUrl: './tn-partnership-app.component.html',
  styleUrls: ['./tn-partnership-app.component.scss'],
})
export class TnPartnershipAppComponent implements OnInit {
  public isHowItWorks:boolean=false;
  public isOtherBenefits:boolean=false;
  public isPartnerFaq=false;
  isPartner=false;

 @Input() isShowLink:boolean=true;
  constructor(public location:Location, private ngNavigatorShareService: NgNavigatorShareService, private router :Router) { }

  ngOnInit() {
    if(window.history.state && window.history.state.isPartnerFaq){
      this.isPartnerFaq= window.history.state.isPartnerFaq;
      if(this.isPartnerFaq==true){
        this.scroll_to_Faq();
      }
    }
    this.isPartner=localStorage.getItem('isPartner')=='1';
  }

  goBack()
  {
    this.location.back();
  }

  share(){
    this.ngNavigatorShareService.share({
      title: 'HumanWisdom Program',
      text: 'Hey, check out the HumanWisdom Partnership Program',
      url: this.router.url
    }).then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  partnerFaqClick(){
    if(this.isPartnerFaq){
      this.isPartnerFaq=false;
    }else{
      this.isPartnerFaq=true;
    }
  }

  BecomeAPartner(){
    localStorage.setItem('btnClickBecomePartner','true');
    localStorage.setItem("navigateToUpgradeToPremium","true")
    this.router.navigate(['adults/partnership-app']);
  }

  scroll_to_Faq(): void 
  {
    this.isHowItWorks=true;
    this.isPartnerFaq=true;
    setTimeout(() => {
      window.scrollTo({
        behavior: 'smooth',
        top:
        document.getElementById('pa_PartnerFaq').getBoundingClientRect().top -
          document.body.getBoundingClientRect().top -
          120,
      })
    }, 150);
  }
}
