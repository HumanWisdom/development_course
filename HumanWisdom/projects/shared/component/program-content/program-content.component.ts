import { Component, OnInit ,Input,Output, EventEmitter,AfterViewInit,ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';

@Component({
  selector: 'app-program-content',
  templateUrl: './program-content.component.html',
  styleUrls: ['./program-content.component.scss'],
})
export class ProgramContentComponent implements OnInit,AfterViewInit {
  @Input() title: string;
  @Input() content: string;
  @Input() bg: string;

  scrId:any
  @ViewChild('screen', { static: true }) screen: any;

  constructor(
    private captureService:NgxCaptureService,
    private service: AdultsService,
    private next: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.content)
  }

  ngAfterViewInit(){
   
  
  
  }

}
