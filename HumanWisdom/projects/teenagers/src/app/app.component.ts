import { Component } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';
import { ProgramType } from '../../../shared/models/program-model';
import { NavigationService } from '../../../shared/services/navigation.service';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { TeenagersService } from './teenagers/teenagers.service';
import moengage from "@moengage/web-sdk";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'teenagers';
  teenagerCss ='assets/css/custom.css';

  constructor(private navigationService:NavigationService,private router: Router, private services: TeenagersService){
    SharedService.ProgramId=11;
    moengage.initialize({app_id: 'W2R5GQ0DULCQOIF0QXPW1QR1',debug_logs:1,
    swPath:'/teenagers/serviceworker.js'
    });


    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
    //  this.navigationService.routeToPath(event.url);
      this.navigationService.addToHistory(event.url);
      this.services.previousUrl = this.services.currentUrl;
      this.services.currentUrl = event.url;
    });
   //  this.setDynamicCSS();
  }


   setDynamicCSS(){
      window.document.getElementById('teenagersCss').setAttribute('href',this.teenagerCss);
   }

}
