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

  audioData:any;

  constructor(private router: Router, private sanitizer: DomSanitizer, private location: Location) { }

  ngOnInit() {
    this.audioData={
      url:'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/guided-meditation/audios/guided-meditation+1.20.mp3'
    }
  }
  
  audioevent(url) {
      this.router.navigate(['feel-better-now/relationship-problems/audiopage/', url ,"Taking people for granted",Math.random() ])
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() {
    this.location.back()
  }
}
