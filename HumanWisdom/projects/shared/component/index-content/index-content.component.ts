import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';


@Component({
  selector: 'app-index-content',
  templateUrl: './index-content.component.html',
  styleUrls: ['./index-content.component.scss'],
})
export class IndexContentComponent implements OnInit,AfterViewInit {

  scrId:any
  @ViewChild('screen', { static: true }) screen: any;

  constructor(
    private captureService:NgxCaptureService,
    private service: AdultsService,
    private next: ActivatedRoute, 
    private router:Router
  ) { }

  ngOnInit() {}

  ngAfterViewInit(){
   
  
  
  }
  Resume(url)
  {
    //url='/adults/breathing/'
    this.router.navigate([url+sessionStorage.getItem("pgResume")])

  }


}
