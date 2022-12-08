import { Component, OnInit,Input,AfterViewInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';

@Component({
  selector: 'app-oneline-text',
  templateUrl: './oneline-text.component.html',
  styleUrls: ['./oneline-text.component.scss'],
})
export class OnelineTextComponent implements OnInit,AfterViewInit {
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
