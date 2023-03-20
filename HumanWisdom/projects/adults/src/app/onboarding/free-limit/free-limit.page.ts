
import { Location } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-free-limit',
  templateUrl: './free-limit.page.html',
  styleUrls: ['./free-limit.page.scss'],
})
export class FreeLimitPage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('enablebtn') enableotpmodal: ElementRef;
  @ViewChild('closemodal') closemodal: ElementRef;
  navigationSubs = new Subscription();

  isloggedIn = false;
  Subscriber: any;


  constructor(private location: Location, private router: Router) { }


  ngOnInit() {
    let userid = localStorage.getItem('isloggedin');
    if (userid === 'T') {
      this.isloggedIn = true;
      this.Subscriber = localStorage.getItem('Subscriber')
    }
  }

  ngAfterViewInit(): void {
    this.enableotpmodal.nativeElement.click()
  }


  backClick() {
    let previousUrl: string = null;
    let currentUrl: string = null;
    this.navigationSubs = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      previousUrl = currentUrl;
      currentUrl = event.url;
      this.backroute(previousUrl);
    });
    this.location.back()
    this.closemodal.nativeElement.click();
  }

  backroute(previousUrl) {
    if (previousUrl) {
      this.location.back()
    } else {
      this.router.navigate(['/adults/adult-dashboard'])
    }


  }

  loginpage(issub = false) {
    this.closemodal.nativeElement.click()
    if (issub && this.isloggedIn) {
      this.router.navigate(['/onboarding/add-to-cart'])
    } else {
      this.router.navigate(['/onboarding/login'], { replaceUrl: true, skipLocationChange: true })
    }
  }

  ngOnDestroy(): void {
    this.navigationSubs.unsubscribe();
  }
}
