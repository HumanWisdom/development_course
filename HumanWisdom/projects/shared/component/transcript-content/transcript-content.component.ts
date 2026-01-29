import { Component, OnInit,Input,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { ProgramType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-transcript-content',
  templateUrl: './transcript-content.component.html',
  styleUrls: ['./transcript-content.component.scss'],
})
export class TranscriptContentComponent implements OnInit {
  @Input() bg: string;
  @Input() title: string;

  scrId:any
  @ViewChild('screen', { static: true }) screen: any;
  isAdults: boolean = true; 


  constructor(
    private captureService:NgxCaptureService,
    private service: AdultsService,
    private next: ActivatedRoute
  ) { }

  ngOnInit() {


    if (SharedService.ProgramId == ProgramType.Adults) {
          this.isAdults = true;
        } else {
          this.isAdults = false;
        }
  }



}
