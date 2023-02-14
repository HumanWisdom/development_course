import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Location } from '@angular/common'
import { Router } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

@Component({
  selector: 'app-free-limit',
  templateUrl: './free-limit.page.html',
  styleUrls: ['./free-limit.page.scss'],
})
export class FreeLimitPage implements OnInit, AfterViewInit {
  @ViewChild('enablebtn') enableotpmodal:ElementRef;
  @ViewChild('closemodal') closemodal:ElementRef;

  isloggedIn = false;

  constructor( private location:Location, private router: Router, private active:ActiveGuard ) { }

  ngOnInit() {
    let userid = localStorage.getItem('isloggedin');
    if(userid === 'T') {
      this.isloggedIn = true
    }
  }

  ngAfterViewInit(): void {
    this.enableotpmodal.nativeElement.click()    
  }

  backClick(){
    this.closemodal.nativeElement.click()
    if (this.active.canGoBack===false)
      this.router.navigate(['/adults/adult-dashboard'])
    else
        this.location.back()
  }

  loginpage(issub = false) {
    this.closemodal.nativeElement.click()
    if(issub && this.isloggedIn) {
      this.router.navigate(['/onboarding/add-to-cart'])
    }else {
      this.router.navigate(['/onboarding/login'],{replaceUrl:true,skipLocationChange:true})
    }
  }

}
