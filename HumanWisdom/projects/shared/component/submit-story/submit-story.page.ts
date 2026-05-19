import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { NavigationService } from '../../services/navigation.service';
@Component({
  selector: 'app-submit-story',
  templateUrl: './submit-story.page.html',
  styleUrls: ['./submit-story.page.scss'],
})
export class SubmitStoryPage {
  isAdults = true;
  constructor(private readonly router: Router,
    private readonly location:Location,private readonly navigationService:NavigationService) { 

      if (SharedService.ProgramId == ProgramType.Adults) {
        this.isAdults = true;
          } else {
           this.isAdults = false;
          }
    }


  
  goBack(){
    const url = this.navigationService.navigateToBackLink();
   
    if (url == null) {
     this.location.back();
    }else{
      this.router.navigateByUrl(url);
    }
      
  }

}
