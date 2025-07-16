import { AdultsService } from './../../../adults/src/app/adults/adults.service';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { SharedService } from "../../services/shared.service";
import { LogEventService } from '../../services/log-event.service';
import { ProgramType } from "../../models/program-model";
import { Constant } from "../../services/constant";

@Component({
  selector: 'app-section-card',
  templateUrl: './section-card.page.html'
})
export class SectionCard implements OnInit {
  @HostListener('window:resize', ['$event'])
  // onResize(event: Event) {
  //    this.updateStyles();
  // }
  leftSpacing: string = '1%';
  @Input() section: SectionCard;

  constructor(public service: AdultsService, 
      public router: Router, public logeventservice: LogEventService, 
      private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.updateStyles();
  }

  rouetToPath(section){
    this.logeventservice.logEvent('click_' + section.title );
    this.router.navigateByUrl(section.path); 

  }
  updateStyles() {
    if (window.innerWidth <= 767) {
      this.leftSpacing = '2%'; // Adjust for mobile
    } else {
      this.leftSpacing = '2%'; // Default for larger screens
    }
  }

  getStyles() {
    return { left: this.leftSpacing };
  }

  getForumClass(){
   if(this.section.module  === "FORUM" )
      return   "mt0px";
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
