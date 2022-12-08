import { Component, OnInit,Input,AfterViewInit,ViewChild, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';

@Component({
  selector: 'app-begin-survey',
  templateUrl: './begin-survey.component.html',
  styleUrls: ['./begin-survey.component.scss'],
})
export class BeginSurveyComponent implements OnInit,AfterViewInit {
  @Input() bg:string
  scrId:any
  @ViewChild('screen', { static: true }) screen: any;

  constructor(
    private captureService:NgxCaptureService,
    private service: AdultsService,
    private next: ActivatedRoute
  ) { }

  ngOnInit() {}

  ngAfterViewInit(){

  
  
  }

}
