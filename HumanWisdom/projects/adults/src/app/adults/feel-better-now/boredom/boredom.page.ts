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
    this.location.back()
  }

  routeVideoaudio(type, url, title = '') {
    if(type === 'video') {
     this.router.navigate([url])
    }else{
     let concat = this.mediaAudio+url;
     this.router.navigate(['feel-better-now/relationship-problems/audiopage/', concat, title, '1'])
    }
 }
}
