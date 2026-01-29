import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';
import { SharedService } from '../.././services/shared.service';
import { ProgramType } from '../.././models/program-model';
import { LogEventService } from '../../services/log-event.service';
import { NavigationService } from '../../services/navigation.service';
import { Constant } from '../../services/constant';





@Component({
  selector: 'app-intro-happierme',
  templateUrl: './intro-happierme.page.html',
  styleUrls: ['./intro-happierme.page.scss'],
})
export class IntroHappiermePage {
  isAdults = true;
  enablekeyideasViewMore = true;

  constructor(private location: Location,private router: Router,  public logeventservice: LogEventService,
 private navigation:NavigationService
  ) {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
        } else {
         this.isAdults = false;
        }
   }
  @ViewChild('enablepopup') enablepopup: ElementRef;


  goBack()
  {

     var url = this.navigation.navigateToBackLink();
        if(url==null){
          url = SharedService.getDataFromLocalStorage(Constant.NaviagtedFrom);
          if(url && url!=null && url != 'null'){
            this.router.navigate([url]);
          }else{
            this.location.back();
          }
         }
         else{
          this.router.navigate([url]);
        }
  }


  getclcickevent(event)
  {
    if (event === 'enablepopup')
    {
      this.enablepopup.nativeElement.click();
    }
  }

  routeVideoaudio(type, url, title = '') {
    if(title != ''){
      this.logeventservice.logEvent('click_'+ title);


    }
   if(type==='link'){

    if(!this.isAdults) {
      url = url.replaceAll('adults','teenagers')
    }

    this.router.navigate([url])
   }
    else if(type === 'video') {
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

 enableViewMore(type) {
  if(type==='key_ideas') {
    this.enablekeyideasViewMore = false;
  }
 }

 enableViewLess(type) {
  if(type==='key_ideas') {
    this.enablekeyideasViewMore = true;
  }
 }

}

