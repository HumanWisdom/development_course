
import { Component,Input,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';

@Component({
  selector: 'app-txt-overlay-top',
  templateUrl: './txt-overlay-top.component.html',
  styleUrls: ['./txt-overlay-top.component.scss'],
})
export class TxtOverlayTopComponent {
  @Input() base: string;
  @Input() overlay: any;

  scrId:any
  @ViewChild('screen', { static: true }) screen: any;

  constructor(
    private captureService:NgxCaptureService,
    private service: AdultsService,
    private next: ActivatedRoute
  ) { }



}
