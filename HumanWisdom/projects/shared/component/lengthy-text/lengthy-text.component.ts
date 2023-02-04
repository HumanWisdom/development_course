import { Component, OnInit,Input,Output, EventEmitter,AfterViewInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';

@Component({
  selector: 'app-lengthy-text',
  templateUrl: './lengthy-text.component.html',
  styleUrls: ['./lengthy-text.component.scss'],
})
export class LengthyTextComponent implements OnInit,AfterViewInit {
  @Input() bg: string;

  scrId:any
  @ViewChild('screen', { static: true }) screen: any;
  pageaction = localStorage.getItem("pageaction");
  constructor(
    private captureService:NgxCaptureService,
    private service: AdultsService,
    private next: ActivatedRoute
  ) { }

  ngOnInit() {}

  ngAfterViewInit(){    
  
  
  
  }

}
