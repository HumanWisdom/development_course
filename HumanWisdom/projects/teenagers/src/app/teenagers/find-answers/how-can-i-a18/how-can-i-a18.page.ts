import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationService } from '../../../../../../shared/services/navigation.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-how-can-i-a18',
  templateUrl: './how-can-i-a18.page.html',
  styleUrls: ['./how-can-i-a18.page.scss'],
})
export class HowCanIA18Page implements OnInit {

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
