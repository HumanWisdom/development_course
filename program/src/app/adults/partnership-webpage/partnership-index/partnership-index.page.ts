import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { OnboardingService } from 'src/app/onboarding/onboarding.service';
@Component({
  selector: 'HumanWisdom-partnership-index',
  templateUrl: './partnership-index.page.html',
  styleUrls: ['./partnership-index.page.scss'],
})
export class PartnershipIndexPage implements OnInit {

  public isHowItWorks:boolean=false;
  public isOtherBenefits:boolean=false;
  public isPartnerFaq=false;
  cardlist=[];
  countryCode:any;
  constructor(private router :Router,private services: OnboardingService, private ngNavigatorShareService: NgNavigatorShareService) { }

  ngOnInit() {
    if(window.history.state && window.history.state.isPartnerFaq){
      this.isPartnerFaq= window.history.state.isPartnerFaq;
      if(this.isPartnerFaq==true){
        this.scroll_to_Faq();
      }
    }
  }

  scroll_to_obs(): void 
  {
    this.isHowItWorks=true;
    this.isOtherBenefits=true;

    setTimeout(() => {
      window.scrollTo({
        behavior: 'smooth',
        top:
        document.getElementById('pa_other_benefits').getBoundingClientRect().top -
          document.body.getBoundingClientRect().top -
          150,
      })
    }, 100);
  }

  enabledtab(string)
  {
    if(string=="whybepartner")
    {
      this.isHowItWorks=false;
    }
    else
    {
      this.isHowItWorks=true;
    }
  }

  otherBenefitsClick()
  {
    if(this.isOtherBenefits)
    {
      this.isOtherBenefits=false;
    }
    else
    {
      this.isOtherBenefits=true;
    }
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
  becomePartner(){
    this.isHowItWorks=false;
    this.isPartnerFaq=false;
    setTimeout(() => {
      window.scrollTo({
        behavior: 'smooth',
        top:
        document.getElementById('indexpage').getBoundingClientRect().top -
          document.body.getBoundingClientRect().top
      })
    }, 150);
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
}
