import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-begin-survey',
  templateUrl: './begin-survey.component.html',
})
export class BeginSurveyComponent {
  @Input() bg:string
  @Input() toc: string;
  scrId:any
  @ViewChild('screen', { static: true }) screen: any;
  pageaction = localStorage.getItem("pageaction");
  constructor(
    private readonly router: Router
  ) { }


  
  goToToc(){
   this.router.navigate([this.toc])
  }

}
