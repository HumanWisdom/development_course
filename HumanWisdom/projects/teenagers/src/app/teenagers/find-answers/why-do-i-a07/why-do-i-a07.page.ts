import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../../../shared/services/navigation.service';

@Component({
  selector: 'app-why-do-i-a07',
  templateUrl: './why-do-i-a07.page.html',
  styleUrls: ['./why-do-i-a07.page.scss'],
})
export class WhyDoIA07Page implements OnInit {

  isAdults = false;

  @ViewChild('enablepopup') enablepopup: ElementRef;

  constructor(private location: Location,private router:Router,private navigationService:NavigationService) { }

  ngOnInit() {
  }

  getclcickevent(event) 
  {
    if (event === 'enablepopup') 
    {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.location.back();
    }else{
      this.router.navigate([url]);
    }
  }
}
