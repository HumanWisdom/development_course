import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-cookie-policy',
  templateUrl: './cookie-policy.page.html',
  styleUrls: ['./cookie-policy.page.scss'],
})
export class CookiePolicyPage implements OnInit {

  constructor(private router:Router, private location: Location) { }

  ngOnInit() {
    if (!this.router.url.includes('/cookies-policy')) {
        window.history.pushState('', '', '/cookies-policy');
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
