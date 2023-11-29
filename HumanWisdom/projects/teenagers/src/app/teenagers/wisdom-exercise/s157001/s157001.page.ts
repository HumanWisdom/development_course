import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { Location } from '@angular/common';
import { SharedService } from '../../../../../../shared/services/shared.service';
import { Constant } from '../../../../../../shared/services/constant';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'HumanWisdom-s157001',
  templateUrl: './s157001.page.html',
  styleUrls: ['./s157001.page.scss'],
})
export class S157001Page implements OnInit {
  tocImage="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/wisdom_exercise.svg"
  tocColor="white"
  isGuest : boolean =  true;
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  constructor(
    public ngNavigatorShareService: NgNavigatorShareService,
    private router: Router,
    private service: TeenagersService,
    private location: Location ) 
    { }
 
  ngOnInit() {
    this.service.setmoduleID(157);
    this.isGuest = !SharedService.isSubscriber();
  }
  share(){
    this.ngNavigatorShareService.share({
      title: 'HumanWisdom Program',
      text: 'Hey, check out the HumanWisdom Program',
      url: "https://humanwisdom.me"+this.path
    }).then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  goBack(){
    this.location.back()
  }
}
