import { Component } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';
import { ProgramType } from '../../../shared/models/program-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teenagers';
  constructor(){
    SharedService.ProgramId=ProgramType.Teenagers;
  }
}
