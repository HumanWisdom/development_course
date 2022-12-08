
import { Component, OnInit,Input,Output,ViewChild, EventEmitter,AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from 'src/app/adults/adults.service';

@Component({
  selector: 'app-txt-overlay-top',
  templateUrl: './txt-overlay-top.component.html',
  styleUrls: ['./txt-overlay-top.component.scss'],
})
export class TxtOverlayTopComponent implements OnInit,AfterViewInit {
  @Input() base: string;
  @Input() overlay: any;

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
