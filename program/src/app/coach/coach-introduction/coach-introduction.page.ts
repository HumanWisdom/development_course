import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoachDataService } from '../services/coach-data.service';
import { CoachService } from '../services/coach.service';

@Component({
  selector: 'HumanWisdom-coach-introduction',
  templateUrl: './coach-introduction.page.html',
  styleUrls: ['./coach-introduction.page.scss'],
})
export class CoachIntroductionPage implements OnInit {
  isTermsAndConditionChkd =new FormControl(false);
  userId:number=0;
  constructor(private router: Router,
    private activatedRoute:ActivatedRoute) { 
    }

  ngOnInit() {
    this.activatedRoute.paramMap.
    subscribe(() => this.isTermsAndConditionChkd.setValue(window.history.state?.data?window.history.state.data.isChecked:false));
  }

  clicknext() {
      
    if(this.isTermsAndConditionChkd.value){

      this.router.navigate(['coach/coach-personal-info'])
    }
  }

}

