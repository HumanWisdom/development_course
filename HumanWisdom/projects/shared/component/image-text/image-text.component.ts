import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';

@Component({
  selector: 'app-image-text',
  templateUrl: './image-text.component.html',
  styleUrls: ['./image-text.component.scss'],
})
export class ImageTextComponent implements OnInit, AfterViewInit {
  @Input() base: string;
  @Input() overlay: string;
  scrId: any
  @ViewChild('screen', { static: true }) screen: any;
  pageaction = localStorage.getItem("pageaction");

  constructor(
    private captureService: NgxCaptureService,
    private service: AdultsService,
    private next: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {



  }

  gotoTranscript() {
    const url = this.router.url + "t";
    this.router.navigate([url]);
  }

}
