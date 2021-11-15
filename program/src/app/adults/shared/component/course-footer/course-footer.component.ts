import { Component, OnInit,Input,Output, EventEmitter, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location } from '@angular/common'
import {AdultsService} from "../../../../adults/adults.service"
import { NgxCaptureService } from 'ngx-capture';



@Component({
  selector: 'app-course-footer',
  templateUrl: './course-footer.component.html',
  styleUrls: ['./course-footer.component.scss'],
})
export class CourseFooterComponent implements OnInit {
  @Output() nextEmitter = new EventEmitter<string>();
  @Output() previousEmitter = new EventEmitter<string>();
  @Input() bg: string;
  urlT:any
  shared=false
  //@ViewChild('screen', { static: true }) screen: any;

  constructor(
    private router: Router,
    private service:AdultsService,
    private ac:ActivatedRoute,
    //private captureService:NgxCaptureService

  ) { 
    this.urlT=this.router.getCurrentNavigation().extractedUrl.queryParams.t
  }

  ngOnInit() {
    if (this.urlT)
    {
      this.shared=true
    }
  }

  next(){
    this.nextEmitter.emit()

  }

  previous(){
    this.previousEmitter.emit()

  }
  routeDashboard(){
    this.router.navigate(['/adults/adult-dashboard'])
  }

}
