import { AdultsService } from './../../../adults/src/app/adults/adults.service';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogEventService } from '../../services/log-event.service';

@Component({
  selector: 'app-section-card',
  templateUrl: './section-card.page.html'
})
export class SectionCard {
  leftSpacing: string = '1%';
  @Input() section: SectionCard;

  constructor(
    public readonly service: AdultsService,
    public readonly router: Router,
    public readonly logeventservice: LogEventService,
    private readonly route: ActivatedRoute
  ) { }

  rouetToPath(section) {
    this.logeventservice.logEvent('click_' + section.title);
    this.router.navigateByUrl(section.path);
  }

  updateStyles() {
    this.leftSpacing = '2%';
  }

  getStyles() {
    return { left: this.leftSpacing };
  }

  getForumClass() {
    if (this.section.module === "FORUM")
      return "mt0px";
  }

}

export interface SectionCard {
  section_name: string;
  module: string;
  icon_path: string
  title: string;
  timing: string;
  subtitle: string;
  path: string;
  image_path: string;
}

