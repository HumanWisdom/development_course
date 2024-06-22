import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../../../shared/services/navigation.service';
import { Router } from '@angular/router';
@Component({
  selector: 'HumanWisdom-coach-introduction',
  templateUrl: './coach-introduction.page.html',
  styleUrls: ['./coach-introduction.page.scss'],
})
export class CoachIntroductionPage implements OnInit {

  constructor(private location: Location,private router :Router,private navigationService:  NavigationService) { }


  ngOnInit() {
  }

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.defaultGoBack();
    }else{
      this.router.navigate([url]);
    }
  }

  defaultGoBack() {
    // this.location.back()
    if (window.location.href.includes('teenagers')) {
      this.router.navigate(['/teenagers/feel-better-now']);
    } else {
      this.router.navigate(['/adults/feel-better-now']);
    }
}
}
