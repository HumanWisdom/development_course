import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';
import { SharedService } from '../.././services/shared.service';
import { ProgramType } from '../.././models/program-model';

@Component({
  selector: 'app-intro-happierme',
  templateUrl: './intro-happierme.page.html',
  styleUrls: ['./intro-happierme.page.scss'],
})
export class IntroHappiermePage implements OnInit {
  isAdults = true;

  constructor(private location: Location,private router: Router) {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
        } else {
         this.isAdults = false;
        }
   }
  @ViewChild('enablepopup') enablepopup: ElementRef;


  ngOnInit() {
  }

  goBack()
  {
    this.location.back();
  }


  getclcickevent(event)
  {
    if (event === 'enablepopup')
    {
      this.enablepopup.nativeElement.click();
    }
  }

  routeVideoaudio(type, url, title = '') {
    if(type === 'video') {
      if(!this.isAdults) {
        url = url.replaceAll('adults','teenagers')
      }
     this.router.navigate([url, 'T', title])
    }else{
     let concat = encodeURIComponent(url.replaceAll('/','~'));
     if(this.isAdults) {
      this.router.navigate(['adults/audiopage/', concat, '1', 'T', title])
     }else {
      this.router.navigate(['teenagers/audiopage/', concat, '1', 'T', title])
     }
    }
 }

}

