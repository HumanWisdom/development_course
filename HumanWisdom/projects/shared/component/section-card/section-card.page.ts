import { AdultsService } from './../../../adults/src/app/adults/adults.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { SharedService } from "../../services/shared.service";
import { LogEventService } from '../../services/log-event.service';
import { ProgramType } from "../../models/program-model";

@Component({
  selector: 'app-section-card',
  templateUrl: './section-card.page.html'
})
export class SectionCard implements OnInit {

  @Input() section: SectionCard;

  constructor(public service: AdultsService, 
      public router: Router, public logeventservice: LogEventService, 
      private route: ActivatedRoute) {
  }

  ngOnInit() {

  }

  rouetToPath(path:string){
    this.router.navigate([path]); 
  }

}

export interface SectionCard {
  section_name: string;
  module:string;
  icon_path:string
  title: string;
  timing: string;
  subtitle: string;
  path: string;
  image_path: string;    
}
