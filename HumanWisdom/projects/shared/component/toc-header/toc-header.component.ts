import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Location } from '@angular/common'
import { Meta, Title } from '@angular/platform-browser';

import { NgNavigatorShareService } from 'ng-navigator-share';
import { ProgramType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';
import { Constant } from '../../services/constant';
import { NavigationService } from '../../services/navigation.service';

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
  path:any;
  baseUrl:string;
  programName:'';
  constructor(private ngNavigatorShareService: NgNavigatorShareService,
    private router: Router , public meta: Meta, private title: Title,
    private location: Location,
    private navigationService: NavigationService) { }

  ngOnInit() {
    this.path = this.router.url;

    this.title.setTitle('Explore this HappierMe module on ' + this.moduleName)
    this.meta.updateTag({ property: 'title', content: 'Explore this HappierMe module on ' + this.moduleName})
    this.meta.updateTag({ property: 'description', content: 'Explore this HappierMe module on ' + this.moduleName })
    this.meta.updateTag({ property: 'keywords', content: 'HappierMe modules, ' + this.moduleName + ','  })
   // 
  }

  goBack(){
    var url = this.navigationService.navigateToBackLink();
    if(url==null){
      url = SharedService.getDataFromLocalStorage(Constant.NaviagtedFrom);
      if(url && url!=null && url != 'null'){
        this.router.navigate([url]);
      }else{
        this.location.back();
      }
     }else{
      this.router.navigate([url]);
     }
      
  }

  share(){
    this.shareUrl(SharedService.ProgramId);
    
    
    
    this.ngNavigatorShareService.share({
      title: 'HappierMe Program',
      text: 'Hey, check out the HappierMe Program',
      url: this.baseUrl+this.path      
    }).then( (response) => {
      
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
