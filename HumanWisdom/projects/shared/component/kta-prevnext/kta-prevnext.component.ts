import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';

@Component({
  selector: 'app-kta-prevnext',
  templateUrl: './kta-prevnext.component.html',
  styleUrls: ['./kta-prevnext.component.scss'],
})
export class KtaPrevnextComponent implements OnInit,AfterViewInit {

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
