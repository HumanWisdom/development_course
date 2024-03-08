import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-boredom',
  templateUrl: './boredom.page.html',
  styleUrls: ['./boredom.page.scss'],
})
export class BoredomPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))




  constructor(private router: Router, private sanitizer: DomSanitizer, private location: Location) { }

  ngOnInit() {

  }


  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() {

    if (window.location.href.includes('teenagers')) {
      this.router.navigate(['/feel-better-now']);
    } else {
      this.router.navigate(['/adults/feel-better-now']);
    }
  }

  routeVideoaudio(type, url, title = '') {
    if(type === 'video') {
     this.router.navigate([url, 'T', title])
    }else{
      let concat = encodeURIComponent(url.replaceAll('/','~'));
     this.router.navigate(['adults/audiopage/', concat, '1', 'F', title])
    }
 }
}
