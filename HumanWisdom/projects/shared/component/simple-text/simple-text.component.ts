import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';

@Component({
  selector: 'app-simple-text',
  templateUrl: './simple-text.component.html',
  styleUrls: ['./simple-text.component.scss'],
})
export class SimpleTextComponent implements OnInit, AfterViewInit {
  @Input() bg: string;

  scrId: any
  @ViewChild('screen', { static: true }) screen: any;
  pageaction = localStorage.getItem("pageaction");


  constructor(
    private captureService: NgxCaptureService,
    private service: AdultsService,
    private next: ActivatedRoute
  ) { }

  ngOnInit() { }

  ngAfterViewInit() {



  }

}
