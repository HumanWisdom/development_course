import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location } from '@angular/common'
import {AdultsService} from "../../../adults/src/app/adults/adults.service";
import { NgNavigatorShareService } from 'ng-navigator-share';
import { SharedService } from '../../../shared/services/shared.service';
import { ProgramType } from '../../../shared/models/program-model';
import { NavigationService } from '../../services/navigation.service';



@Component({
  selector: 'app-feature-header',
  templateUrl: './feature-header.component.html',
  styleUrls: ['./feature-header.component.scss'],
})
export class FeatureHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() sharedPath: string;

  urlT:any
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  token=JSON.parse(localStorage.getItem("token"))
  socialShare=false
  address: any;
  path:any;
  baseUrl:any;

  constructor(private router: Router,
    private service:AdultsService,private ngNavigatorShareService: NgNavigatorShareService,
    private location:Location,private navigationService: NavigationService,
    private ac:ActivatedRoute) {
      this.address=this.router.url;
      this.urlT=this.router.getCurrentNavigation()?.extractedUrl.queryParams.t
     }

  ngOnInit() {
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}

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

  addToken(){
    this.shareUrl(SharedService.ProgramId);
    // history.replaceState(null, null, 'Course#'+this.address+`?t=${this.token}`);
    this.socialShare=true;
    this.ngNavigatorShareService.share({
      title: 'HappierMe Program',
      text: 'Hey, check out the HappierMe Program',
      url: this.baseUrl+this.address
    }).then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
   }


    goBack(){
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.router.navigate([SharedService.getDashboardUrls()]);
    }else{
      this.router.navigate([url]);
    }
   } 


}
