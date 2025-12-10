import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { Location } from '@angular/common';
import {  Input } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { SharedService } from '../../services/shared.service';
import { TeenagersService } from '../../../teenagers/src/app/teenagers/teenagers.service';
@Component({
  selector: 'HumanWisdom-s157001',
  templateUrl: './s157001.page.html',
  styleUrls: ['./s157001.page.scss'],
})
export class S157001Page implements OnInit {
  tocImage="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/wisdom_exercise.svg"
  tocColor="white"
  @Input() isHome = false;
  isGuest : boolean =  true;
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  constructor(
    private navigationService:NavigationService,
    public ngNavigatorShareService: NgNavigatorShareService,
    private router: Router,
    private service: TeenagersService,
    private location: Location
 ) 
    { }
 
  ngOnInit() {
    this.service.setmoduleID(157);
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
    var url = this.navigationService.navigateToBackLink()
    if (url == null) {
      this.location.back();
    }else{
      this.router.navigate([url]);
    }
  }

   routeTointroDash() {
    this.router.navigate(['/teenagers/dashboard/wisdom-exercise']);
  }
}
