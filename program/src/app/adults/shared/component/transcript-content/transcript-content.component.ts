import { Component, OnInit,Input,AfterViewInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from 'src/app/adults/adults.service';

@Component({
  selector: 'app-transcript-content',
  templateUrl: './transcript-content.component.html',
  styleUrls: ['./transcript-content.component.scss'],
})
export class TranscriptContentComponent implements OnInit,AfterViewInit {
  @Input() bg: string;

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
