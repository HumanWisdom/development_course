import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingService } from 'src/app/onboarding/onboarding.service';

@Component({
  selector: 'app-subscribed-unsubscribed',
  templateUrl: './subscribed-unsubscribed.page.html',
  styleUrls: ['./subscribed-unsubscribed.page.scss'],
})
export class SubscribedUnsubscribedPage implements OnInit {
  userType:string;
  cardlist=[];
  countryCode:any;
  constructor(private router :Router,private services: OnboardingService,public location:Location) { }

  ngOnInit() {
    this.getCountry();
    this.userType=localStorage.getItem('SubscriberType');
  }

  GetStarted(){
    localStorage.setItem("navigateToUpgradeToPremium","true")
    this.router.navigate(['adults/partnership-app/referral-code']);
  }
  
      goBack(){
    this.location.back();
      }
      UpgradeToPremium(){
        let val='Yearly';
        localStorage.setItem("navigateToUpgradeToPremium","true")
        localStorage.setItem('cartlist', JSON.stringify(this.cardlist));
        localStorage.setItem('partnership-app', val);
        localStorage.setItem('upgradeToPremium', 'T');
        this.router.navigate(['/onboarding/viewcart'], { state: { quan:  '1', plan: val}})
      }
      getPricing(){
        this.services.getPricing(this.countryCode).subscribe(res=>
          {
            console.log(res,"product list from api")
            this.cardlist = res[0]; 
          }, (err) => {
            window.alert(err.error['Message'])
          }
        )
      }
      getCountry(){
        this.services.getCountry().subscribe((res:any)=>{  
          
          if(res['in_eu']) {
            this.countryCode = 'EUR'
          }else {
            this.countryCode = res['country_code_iso3']
          }
          this.getPricing()
        },
    
          error=>{
            console.log(error)
          },
          ()=>{
          });  
    
      }

      GoToIndex(){
        this.router.navigate(['adults/partnership-webpage/partnership-index']);
      }
}
