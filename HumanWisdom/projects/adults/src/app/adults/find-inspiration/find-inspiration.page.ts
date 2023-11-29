import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-inspiration',
  templateUrl: './find-inspiration.page.html',
  styleUrls: ['./find-inspiration.page.scss'],
})
export class FindInspirationPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;

  constructor(private location: Location,private router:Router) { }

  ngOnInit() {
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }
   rightToJournal(){
    this.router.navigate(["/adults/journal"], { queryParams: {isGuided: true}});
   }
   
  goBack() {
    this.location.back()
  }

}