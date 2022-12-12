import { Component, OnInit,Input,AfterViewInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';

@Component({
  selector: 'app-image-audio',
  templateUrl: './image-audio.component.html',
  styleUrls: ['./image-audio.component.scss'],
})
export class ImageAudioComponent implements OnInit,AfterViewInit {
  @Input() base: string;
  @Input() overlay: string;
  scrId:any
  @ViewChild('screen', { static: true }) screen: any;

  constructor(
    private captureService:NgxCaptureService,
    private next: ActivatedRoute,
    private service: AdultsService,) { }

  ngOnInit() {}

  ngAfterViewInit(){
    
  
  
  }

}
