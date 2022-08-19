import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partnership-subscribed',
  templateUrl: './partnership-subscribed.page.html',
  styleUrls: ['./partnership-subscribed.page.scss'],
})
export class PartnershipSubscribedPage implements OnInit {

  constructor(public router:Router,public location:Location) { }

  ngOnInit() {
  }

    NavigateTreeSister(){
      this.router.navigate(['adults/partnership-app/partnership-treesisters']);
    }

    NavigateRecieveIncome(){
      this.router.navigate(['adults/partnership-app/payment-bank']);
    }
    

}
