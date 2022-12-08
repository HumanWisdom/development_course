import { Component, OnInit,Input,Output, EventEmitter,AfterViewInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';

@Component({
  selector: 'app-kta-done',
  templateUrl: './kta-done.component.html',
  styleUrls: ['./kta-done.component.scss'],
})
export class KtaDoneComponent implements OnInit,AfterViewInit {

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
