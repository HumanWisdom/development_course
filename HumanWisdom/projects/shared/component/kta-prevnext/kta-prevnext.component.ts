import { Component, OnInit,AfterViewInit,ViewChild, Input } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { SharedService } from '../../services/shared.service';


@Component({
  selector: 'app-kta-prevnext',
  templateUrl: './kta-prevnext.component.html',
  styleUrls: ['./kta-prevnext.component.scss'],
})
export class KtaPrevnextComponent implements OnInit,AfterViewInit {

  @Input() bg: string;
  scrId:any
  @ViewChild('screen', { static: true }) screen: any;
  pageaction = localStorage.getItem("pageaction");
    isAdults: boolean = true;

  constructor(
    private captureService:NgxCaptureService,
    private service: AdultsService,
    private next: ActivatedRoute
  ) { }

  ngOnInit() {

        this.isAdults = SharedService.ProgramId === 9;
    
  }

  ngAfterViewInit(){
  
  
  
  }

}
