import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { AdultsService } from "../../adults.service";
import { Location } from '@angular/common';
import { SharedService } from '../../../../../../shared/services/shared.service';
import { Constant } from '../../../../../../shared/services/constant';
import { NavigationService } from '../../../../../../shared/services/navigation.service';


@Component({
  selector: 'HumanWisdom-s75001',
  templateUrl: './s75001.page.html',
  styleUrls: ['./s75001.page.scss'],
})
export class S75001Page implements OnInit {
  tocImage="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/wisdom_exercise.svg"
  tocColor="white"
  isGuest : boolean =  true;
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  constructor(
    public ngNavigatorShareService: NgNavigatorShareService,
     private navigationService:NavigationService,
    private router: Router,
    private service: AdultsService,
    private location: Location ) 
    { }
 
  ngOnInit() {
    this.service.setmoduleID(75);
    this.isGuest = !SharedService.isSubscriber();
  }
  share(){
    this.ngNavigatorShareService.share({
      title: 'HappierMe Program',
      text: 'Hey, check out the HappierMe Program',
      url: "https://humanwisdom.me"+this.path
    }).then( (response) => {
      
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  goBack() {
    // Check if we came from micro-learning end screen
    const fromMicroLearningEnd = localStorage.getItem('fromMicroLearningEnd');
    const microLearningEndUrl = localStorage.getItem('microLearningEndUrl');
    
    if (fromMicroLearningEnd === 'true' && microLearningEndUrl) {
      // Clear the flags and navigate back to micro-learning end screen
      localStorage.removeItem('fromMicroLearningEnd');
      localStorage.removeItem('microLearningEndUrl');
      this.router.navigateByUrl(microLearningEndUrl);
    } else {
      // Default: go to home
      this.router.navigate(['/adults/home']);
    }
  }

    routeTointroDash() {
      this.router.navigate(['/adults/dashboard/wisdom-exercise']);
    }
}
