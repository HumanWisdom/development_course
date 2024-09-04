import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { Constant } from '../../services/constant';
import { NavigationService } from '../../services/navigation.service';
@Component({
  selector: 'app-submit-story',
  templateUrl: './submit-story.page.html',
  styleUrls: ['./submit-story.page.scss'],
})
export class SubmitStoryPage implements OnInit {
  isAdults = true;
  constructor(private router: Router,
    private location:Location,private navigationService:NavigationService) { 

      if (SharedService.ProgramId == ProgramType.Adults) {
        this.isAdults = true;
          } else {
           this.isAdults = false;
          }
    }

  ngOnInit() {
  }
  
  goBack(){
    var url = this.navigationService.navigateToBackLink();
    if(url==null){
        this.location.back();
     } else {
      this.router.navigate([url]);
     }
  }

}
