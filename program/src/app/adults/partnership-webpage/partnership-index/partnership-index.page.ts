import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingService } from 'src/app/onboarding/onboarding.service';
@Component({
  selector: 'HumanWisdom-partnership-index',
  templateUrl: './partnership-index.page.html',
  styleUrls: ['./partnership-index.page.scss'],
})
export class PartnershipIndexPage implements OnInit {

  public isHowItWorks:boolean=false;
  public isOtherBenefits:boolean=false;
  cardlist=[];
  countryCode:any;
  constructor(private router :Router,private services: OnboardingService,) { }

  ngOnInit() {
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
  BecomeAPartner(){
    localStorage.setItem('btnClickBecomePartner','true');
    this.router.navigate(['adults/partnership-app']);
  }


}
