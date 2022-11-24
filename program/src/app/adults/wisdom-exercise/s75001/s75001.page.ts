import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';

@Component({
  selector: 'HumanWisdom-s75001',
  templateUrl: './s75001.page.html',
  styleUrls: ['./s75001.page.scss'],
})
export class S75001Page implements OnInit {
  path = this.router.url
  constructor(public ngNavigatorShareService: NgNavigatorShareService,
    private router: Router,) { }
 
  ngOnInit() {
  }
  share(){
    this.ngNavigatorShareService.share({
      title: 'HumanWisdom Program',
      text: 'Hey, check out the HumanWisdom Program',
      url: "https://humanwisdom.me/course"+this.path
    }).then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }

}
