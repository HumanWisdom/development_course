import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { OnboardingService } from '../../../../../shared/services/onboarding.service';
import { Meta , Title} from '@angular/platform-browser';
import { LogEventService } from "../../../../../shared/services/log-event.service";
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


  constructor(private location: Location, private router: Router, private services: OnboardingService, private ngNavigatorShareService: NgNavigatorShareService, private meta: Meta, private title: Title) {
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

    this.title.setTitle('Give the Gift of Wisdom')
    this.meta.updateTag({ property: 'title', content: 'Give the Gift of Wisdom'})
    this.meta.updateTag({ property: 'description', content: 'Give the gift of personal growth and wellness with Human Wisdom. Share the life-changing wisdom and tools for self-improvement, mindfulness, and relationships with your loved ones.'})
    this.meta.updateTag({ property: 'keywords', content: 'give the gift of wisdom, personal growth, wellness, self-improvement, mindfulness, relationships, mental health, human wisdom, life coach'})


    if (this.router.url=='/adults/give-the-gift-of-wisdom') {
      window.history.pushState('', '', '/give-the-gift-of-wisdom');
    }
        this.getCountry();

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
      this.router.navigate(['/onboarding/login'],{replaceUrl:true,skipLocationChange:true})
    } else if (this.isLoggedIn) {
      this.router.navigate(["/onboarding/add-to-cart"]);
    }
  }


  share() {
    this.ngNavigatorShareService
      .share({
        title: "HumanWisdom Program",
        text:
          "Hey, checkout HumanWisdom's Give the gift of Wisdom program – https://www.humanwisdom.me/adults/give-the-gift-of-wisdom"
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

}
