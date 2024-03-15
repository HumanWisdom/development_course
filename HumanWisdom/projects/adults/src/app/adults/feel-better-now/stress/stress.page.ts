import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stress',
  templateUrl: './stress.page.html',
  styleUrls: ['./stress.page.scss'],
})
export class StressPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() {
    // this.location.back()
    this.router.navigate(['/adults/feel-better-now'])
  }

  routeVideoaudio(type, url, title = '') {
     if(type === 'video') {
      this.router.navigate([url, 'T', title])
     }else{
      let concat = encodeURIComponent(url.replaceAll('/','~'));
      this.router.navigate(['adults/audiopage/', concat, '1', 'T', title])
     }
  }

}