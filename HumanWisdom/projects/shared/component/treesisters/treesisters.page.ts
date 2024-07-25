import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { ProgramType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'HumanWisdom-treesisters',
  templateUrl: './treesisters.page.html',
  styleUrls: ['./treesisters.page.scss'],
})
export class TreesistersPage implements OnInit {
  isAdults: boolean = true; 

  constructor(private location:Location,private ngNavigatorShareService: NgNavigatorShareService,) {
     if (SharedService.ProgramId == ProgramType.Adults) {
    this.isAdults = true;
  } else {
    this.isAdults = false;
  } }

  ngOnInit(): void {
    
  }
  back(){
   this.location.back();
  }
  share(){
    this.ngNavigatorShareService
    .share({
      title: "HappierMe Program",
      text:this.isAdults?
        "Hey, checkout HappierMe's Tree planting program – https://happierme.app/adults/treesisters":
        "Hey, checkout HappierMe's Tree planting program – https://happierme.app/teenagers/treesisters",
      url:this.isAdults? "https://happierme.app/adults/treesisters":"https://happierme.app/teenagers/treesisters"
    })
    .then((response) => {
      
    })
    .catch((error) => {
      console.log(error);
    });
  }
}
