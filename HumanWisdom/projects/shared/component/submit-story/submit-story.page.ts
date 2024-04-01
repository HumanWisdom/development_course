import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
@Component({
  selector: 'app-submit-story',
  templateUrl: './submit-story.page.html',
  styleUrls: ['./submit-story.page.scss'],
})
export class SubmitStoryPage implements OnInit {
  isAdults = true;
  constructor(private router: Router,
    private location:Location) { 

      if (SharedService.ProgramId == ProgramType.Adults) {
        this.isAdults = true;
          } else {
           this.isAdults = false;
          }
    }

  ngOnInit() {
  }
  
  goBack(){
    this.location.back()
  }

}
