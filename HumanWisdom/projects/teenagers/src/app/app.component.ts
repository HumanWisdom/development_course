import { Component } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';
import { ProgramType } from '../../../shared/models/program-model';
import moengage from "@moengage/web-sdk";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teenagers';
  constructor(){
    SharedService.ProgramId=ProgramType.Teenagers;
    moengage.initialize({app_id: 'W2R5GQ0DULCQOIF0QXPW1QR1',debug_logs:1,
    swPath:'/serviceworker.js'});
  }
}
