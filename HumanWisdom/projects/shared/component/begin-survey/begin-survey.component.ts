import { Component, OnInit,Input,AfterViewInit,ViewChild, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';

@Component({
  selector: 'app-begin-survey',
  templateUrl: './begin-survey.component.html',
  styleUrls: ['./begin-survey.component.scss'],
})
export class BeginSurveyComponent implements OnInit,AfterViewInit {
  @Input() bg:string
  @Input() toc: string;
  scrId:any
  @ViewChild('screen', { static: true }) screen: any;
  pageaction = localStorage.getItem("pageaction");
  constructor(
    private captureService:NgxCaptureService,
    private service: AdultsService,
    private next: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {}

  ngAfterViewInit(){
  }
  
  goToToc(){
   this.router.navigate([this.toc])
  }

}
