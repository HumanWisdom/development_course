import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationService } from '../../../../../../shared/services/navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-why-do-i-a04',
  templateUrl: './why-do-i-a04.page.html',
  styleUrls: ['./why-do-i-a04.page.scss'],
})
export class WhyDoIA04Page implements OnInit {
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
