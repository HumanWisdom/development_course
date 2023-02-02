import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UPIHandlerService } from '../upihandler.service';
@Component({
  selector: 'app-gpay',
  templateUrl: './gpay.page.html',
  styleUrls: ['./gpay.page.scss']
})
export class GpayPage implements OnInit {
 paymentStatus:string;

  ngOnInit(): void {
    
  }

  constructor(private router: Router,private upiHandler:UPIHandlerService) {
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     this.handleUPIResponse(event.url);
    //   }
    // });
    this.initiateUPIPayment();
  }


  handleUPIResponse(url: string) {

  }

  initiateUPIPayment() {
    this.upiHandler.openUPIApp('9828173308@okbizaxis');
  }

}
