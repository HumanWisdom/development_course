import { Component, OnInit,Input,Output, EventEmitter, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location } from '@angular/common'
import {AdultsService} from "../../../adults/src/app/adults/adults.service";
import { NgxCaptureService } from 'ngx-capture';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { LogEventService } from '../../services/log-event.service';



@Component({
  selector: 'app-course-footer',
  templateUrl: './course-footer.component.html',
  styleUrls: ['./course-footer.component.scss'],
})
export class CourseFooterComponent implements OnInit {
  @Output() nextEmitter = new EventEmitter<string>();
  @Output() previousEmitter = new EventEmitter<string>();
  @Input() bg: string;
  @Input() bg_cft: string;
  @Input() isUseCloseButton:boolean=false;
  progUrl: string;
  urlT:any
  shared=false;
  programName="";
  //@ViewChild('screen', { static: true }) screen: any;
  @Input() screenName: any = '';

  constructor(
    private router: Router,
    private service:AdultsService,
    private ac:ActivatedRoute,
    private sharedService:SharedService,
    //private captureService:NgxCaptureService
    public logeventservice: LogEventService
  ) { 
    if(this.router.getCurrentNavigation()) {
      this.urlT=this.router.getCurrentNavigation().extractedUrl ? this.router.getCurrentNavigation().extractedUrl.queryParams.t: ''
    }
  }

  ngOnInit() {
    this.progUrl=this.router.url.substring(0, this.router.url.indexOf('/',1)+1);
    if(location.href.includes("t="))
    {
      this.shared=true
    }
    if (this.urlT)
    {
      this.shared=true
    }
   if(this.isUseCloseButton){
    this.shared=true;
   }
  }

  next(){
    this.logeventservice.logEvent('Click_Next', true, this.screenName);
    this.nextEmitter.emit()
  }

  previous(){
    this.logeventservice.logEvent('Click_Previous', true, this.screenName);
    this.previousEmitter.emit()

  }
  routeDashboard(){
    this.programName = this.getProgramTypeName(SharedService.ProgramId)?.toLowerCase().toString();
    if(this.programName=='teenagers'){
      this.programName='';
    }
   this.goToDash();
  }
  
  goToDash() {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.router.navigate(['/adults/adult-dashboard'])
    }
    else if(SharedService.ProgramId == ProgramType.Teenagers) {
      this.programName = "";
      this.router.navigate([this.programName + '/teenager-dashboard'])
    }else{
      this.router.navigate(['/adults/adult-dashboard'])
    }
  }
  
  getProgramTypeName(value: number): string {
    const enumKey = Object.keys(ProgramType).find(key => ProgramType[key] === value);
    return enumKey as string;
  }

}
