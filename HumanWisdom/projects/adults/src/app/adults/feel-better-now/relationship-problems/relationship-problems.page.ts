import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-relationship-problems',
  templateUrl: './relationship-problems.page.html',
  styleUrls: ['./relationship-problems.page.scss'],
})
export class RelationshipProblemsPage implements OnInit {

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
     this.router.navigate([url, 'F', title])
    }else{
      let concat = url.replaceAll('/','+');
     this.router.navigate(['adults/audiopage/', concat, '1', 'F', title])
    }
 }
}
