
import { Location } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from 'src/app/adults/adults.service';


@Component({
  selector: 'app-free-limit',
  templateUrl: './free-limit.page.html',
  styleUrls: ['./free-limit.page.scss'],
})
export class FreeLimitPage implements OnInit, AfterViewInit {
  @ViewChild('enablebtn') enableotpmodal: ElementRef;
  @ViewChild('closemodal') closemodal: ElementRef;

  isloggedIn = false;
  Subscriber: any;
  guest = true;

  constructor(private location: Location, private router: Router, private service: AdultsService) {
    this.guest = localStorage.getItem('guest') === 'T' ? true : false;
  }


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
    this.closemodal.nativeElement.click();
    if (this.service.previousUrl) {
      let curatedurl = localStorage.getItem('curatedurl');
      let feelbetternow = localStorage.getItem('feelbetternow');
      if (feelbetternow !== 'T' && curatedurl === 'F' && this.service.previousUrl.includes("wisdom-shorts")) {
        this.router.navigate(['/adults/wisdom-shorts'])
      } else if(feelbetternow !== 'T' && curatedurl && curatedurl !== 'F'){
        this.router.navigate([curatedurl])
      } else if(feelbetternow === 'T'){
        this.location.back()
      }else {
        this.location.back()
      }
    } else {
      this.router.navigate(['/adults/adult-dashboard'])
    }
  }


  loginpage(issub = false) {
    this.closemodal.nativeElement.click()
    if (issub && this.isloggedIn) {
      this.router.navigate(['/adults/subscription/start-your-free-trial'])
    } else {
      this.router.navigate(['/adults/onboarding/login'], { replaceUrl: true, skipLocationChange: true })
    }
  }

}
