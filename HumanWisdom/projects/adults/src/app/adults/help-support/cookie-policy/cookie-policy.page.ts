import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cookie-policy',
  templateUrl: './cookie-policy.page.html',
  styleUrls: ['./cookie-policy.page.scss'],
})
export class CookiePolicyPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    window.history.pushState('', '', '/cookies-policy');
  }

  clickAgree(event){
     if(event){
       localStorage.setItem('acceptcookie', 'T');
       this.router.navigate(['/adults/adult-dashboard'])
     }
 }

}
