import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { AdultsService } from "../../adults.service";
import { Location } from '@angular/common';

@Component({
  selector: 'HumanWisdom-s75001',
  templateUrl: './s75001.page.html',
  styleUrls: ['./s75001.page.scss'],
})
export class S75001Page implements OnInit {
  path = this.router.url
  constructor(
    public ngNavigatorShareService: NgNavigatorShareService,
    private router: Router,
    private service: AdultsService,
    private location: Location ) 
    { }
 
  ngOnInit() {
    this.service.setmoduleID(75);
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
