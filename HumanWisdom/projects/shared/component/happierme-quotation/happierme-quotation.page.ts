import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OnboardingService } from '../../services/onboarding.service';
import { SharedService, UrlConstant } from "../../services/shared.service";
import { NavigationService } from "../../services/navigation.service";
import { Location } from '@angular/common';
import { ProgramType } from "../../models/program-model";
@Component({
  selector: 'app-happierme-quotation',
  templateUrl: './happierme-quotation.page.html',
  styleUrls: ['./happierme-quotation.page.scss'],
})
export class HappierMeQuotationPage implements OnInit {
  quotationAuthor: string = '';
  isAdults = true;
  quoationtext: string = ''
  bg_tn = "bg_blue"
  bg_cft = "bg_blue"
  bg = "blue_w10"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  screenType = localStorage.getItem("text")
  moduleId = localStorage.getItem("moduleId")
  screenNumber = 22012
  startTime: any
  endTime: any
  totalTime: any
  bookmark = 0
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  toc = '';
  constructor(
    private router: Router,
    private location: Location,
    private service: OnboardingService,
    private route: ActivatedRoute
  ) {
    let id = this.route.snapshot.paramMap.get('id');
    this.service.getHappierMeQuotation(id).subscribe((res: any) => {
      
      this.quoationtext = res[0].quote
      this.quotationAuthor = res[0].author
    });

  }

  ngOnInit() {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
  }

  back() {
    this.location.back();
  }
  
}