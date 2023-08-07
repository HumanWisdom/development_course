import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anxiety',
  templateUrl: './anxiety.page.html',
  styleUrls: ['./anxiety.page.scss'],
})
export class AnxietyPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
  
  constructor(private location: Location, private router: Router ) { }

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
