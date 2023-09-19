import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-failed',
  templateUrl: './payment-failed.page.html',
  styleUrls: ['./payment-failed.page.scss'],
})
export class PaymentFailedPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  routeToIndex(){
    this.router.navigateByUrl('/adults/subscription/free-trial');
  }
}
