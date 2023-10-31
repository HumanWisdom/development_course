import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgNavigatorShareService } from 'ng-navigator-share';

@Component({
  selector: 'HumanWisdom-treesisters',
  templateUrl: './treesisters.page.html',
  styleUrls: ['./treesisters.page.scss'],
})
export class TreesistersPage implements OnInit {

  constructor(private location:Location,private ngNavigatorShareService: NgNavigatorShareService,) { }

  ngOnInit(): void {
    
  }
  back(){
   this.location.back();
  }
  share(){
    this.ngNavigatorShareService
    .share({
      title: "HumanWisdom Program",
      text:
        "Hey, checkout HumanWisdom's Tree planting program – https://www.humanwisdom.me/adults/treesisters"
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }
}
