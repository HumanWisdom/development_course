import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { OnboardingService } from 'src/app/onboarding/onboarding.service';

@Component({
  selector: 'app-give-the-gift-of-wisdom',
  templateUrl: './give-the-gift-of-wisdom.page.html',
  styleUrls: ['./give-the-gift-of-wisdom.page.scss'],
})
export class GiveTheGiftOfWisdomPage implements OnInit {
  public isSubscriber = false
  public isLoggedIn = false
  public cardlist = []
  public countryCode: any = '';


  constructor(private location: Location, private router: Router, private services: OnboardingService, private ngNavigatorShareService: NgNavigatorShareService) {
    let sub: any = localStorage.getItem('Subscriber');
    let login: any = localStorage.getItem("isloggedin");
    if (sub && sub === '1') {
      this.isSubscriber = true;
    } else {
      this.isSubscriber = false;
    }
    if (login && login === 'T') {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  ngOnInit() {
    this.getCountry();
    window.history.pushState('', '', '/give-the-gift-of-wisdom');
  }

  getCountry() {
    this.services.getCountry().subscribe((res: any) => {
      if (res['in_eu']) {
        this.countryCode = 'EUR'
      } else {
        this.countryCode = res['country_code_iso3']
      }
      this.getPricing()
    }, error => {
      console.log(error)
    });
  }

  getPricing() {
    this.services.getPricing(this.countryCode).subscribe(res => {
      this.cardlist = res[0];
    }, (err) => {
      window.alert(err.error['Message'])
    }
    )
  }

  back() {
    this.location.back();
  }

  proceed() {
    if (!this.isLoggedIn) {
      localStorage.setItem("subscribepage", 'T');
      localStorage.setItem('giftwisdom', 'T');
      this.router.navigate(['/onboarding/login'])
    } else if (this.isLoggedIn) {
      this.router.navigate(["/onboarding/add-to-cart"]);
    }
  }


  share() {
    this.ngNavigatorShareService
      .share({
        title: "HumanWisdom Program",
        text:
          "Hey, checkout HumanWisdom's Give the gift of Wisdom program – https://www.humanwisdom.me/course/adults/give-the-gift-of-wisdom"
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

}
