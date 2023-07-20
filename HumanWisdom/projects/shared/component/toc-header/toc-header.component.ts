import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Location } from '@angular/common'
import { NgNavigatorShareService } from 'ng-navigator-share';
import { ProgramType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-toc-header',
  templateUrl: './toc-header.component.html',
  styleUrls: ['./toc-header.component.scss'],
})
export class TocHeaderComponent implements OnInit {
  @Input() tocImage: string;
  @Input() tocColor: string;
  @Input() tocAlt: string;
  @Input() moduleName = 'Stress';
  path=this.router.url
  baseUrl:string;
  programName:'';
  constructor(private ngNavigatorShareService: NgNavigatorShareService,
    private router: Router ,
    private location: Location) { }

  ngOnInit() {}
  goBack(){
    this.location.back()
  }

  share(){
    this.shareUrl(SharedService.ProgramId);
    this.ngNavigatorShareService.share({
      title: 'HumanWisdom Program',
      text: 'Hey, check out the HumanWisdom Program',
      url: this.baseUrl+this.path
    }).then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  shareUrl (programType) {
    switch (programType) {
      case ProgramType.Adults:
        this.baseUrl=SharedService.AdultsBaseUrl;
      break;
      case ProgramType.Teenagers:
        this.baseUrl=SharedService.TeenagerBaseUrl;
       break;
      default:
      this.baseUrl=SharedService.TeenagerBaseUrl;
    }
  }

  goToDash() {
    if(SharedService.ProgramId == ProgramType.Adults){
      this.router.navigate(['/adults/adult-dashboard'])
    }
    else{
      this.programName="";
      this.router.navigate([this.programName +  '/teenager-dashboard'])
  }
  }
}
