import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-gpay',
  templateUrl: './gpay.page.html',
  styleUrls: ['./gpay.page.scss']
})
export class GpayPage implements OnInit {
 paymentStatus:string;

  ngOnInit(): void {
    
  }

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.handleUPIResponse(event.url);
      }
    });
  }


  handleUPIResponse(url: string) {
    const urlParams = new URLSearchParams(url.split('?')[1]);
    this.paymentStatus = urlParams.get('payment_status');
  }

  initiateUPIPayment() {
    const url = 'upi://pay?pa=9828173308@okbizaxis&pn=Kundan%20Steel%20And%20Hardware&am=1.00&tn=01022023&cu=INR';
    window.location.href = url;
  }

}
