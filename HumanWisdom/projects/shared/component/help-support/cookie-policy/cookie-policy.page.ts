import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProgramType } from '../../../models/program-model';
import { SharedService } from '../../../services/shared.service';
@Component({
  selector: 'app-cookie-policy',
  templateUrl: './cookie-policy.page.html',
  styleUrls: ['./cookie-policy.page.scss'],
})
export class CookiePolicyPage implements OnInit {
  isAdults: boolean = true; 
  constructor(private router:Router, private location: Location) {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
   }

  ngOnInit() {
    if (!this.router.url.includes('/cookies-policy')) {
      //  window.history.pushState('', '', '/cookies-policy');
    }
  
  }

  clickAgree(event){
     if(event){
       localStorage.setItem('acceptcookie', 'T');
       this.router.navigate(['/adults/adult-dashboard'])
     }
 }

 goBack() {
  this.location.back()
}

}
