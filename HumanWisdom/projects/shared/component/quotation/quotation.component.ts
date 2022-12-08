import { Component, OnInit,Input,Output, EventEmitter,AfterViewInit,ViewChild } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.scss'],
})
export class QuotationComponent implements OnInit,AfterViewInit {
  @Input() bg: string

  scrId:any
  @ViewChild('screen', { static: true }) screen: any;

  constructor(
    private captureService:NgxCaptureService,
    private service: AdultsService,
    private next: ActivatedRoute
  ) { }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    
  
  
  }

}
