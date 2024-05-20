import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../../../../shared/services/shared.service';

@Component({
  selector: 'app-splash-options',
  templateUrl: './splash-options.page.html',
  styleUrls: ['./splash-options.page.scss'],
})
export class SplashOptionsPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  enableProgram(val) {
   SharedService.setProgramId(val);
   this.router.navigate(['/adults/onboarding/login'],{replaceUrl:true,skipLocationChange:true})
  }
}
