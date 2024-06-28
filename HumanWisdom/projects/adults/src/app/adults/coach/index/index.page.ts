import { Component, OnInit } from '@angular/core';
import { AdultsService } from '../../adults.service';
import { Router } from '@angular/router';
import { ProgramType } from '../../../../../../shared/models/program-model';
import { SharedService } from '../../../../../../shared/services/shared.service';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { Location } from '@angular/common';
import { NavigationService } from '../../../../../../shared/services/navigation.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  coachList = [];
  baseUrl: string;
  path:string='';

  constructor(private service: AdultsService, private router: Router, 
    private ngNavigatorShareService: NgNavigatorShareService,
     private navigationService: NavigationService,
     private location: Location)
      {
        this.path =  this.router.url;
       }

  ngOnInit() {
    this.getAllCoachList();
  }

  getAllCoachList(){
    this.service.GetAllCoachList().subscribe(res=>
      {
        if(res) {
          this.coachList = res;
        }
      },
      error=>console.log(error),
      ()=>{
      }
    )
  }

  backRoute() {
    // this.router.navigate(["/adults/adult-dashboard"]);
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.location.back();
    }else{
      this.router.navigate([url]);
    }
  }

  routeCoach(data) {
    localStorage.setItem("coachId", data['UserID']);
    this.router.navigate(["/adults/coach/profile", data['UserID']]);
  }

  contactCoach() {
    this.router.navigate(["/adults/coach/contact"]);
  }

  share() {
    this.shareUrl(SharedService.ProgramId);
    this.ngNavigatorShareService.share({
      title: 'HappierMe Program',
      text: 'Hey, check out the HappierMe Program',
      url: this.baseUrl + this.path
    }).then((response) => {
      console.log(response);
    })
      .catch((error) => {
        console.log(error);
      });
  }

  shareUrl(programType) {
    switch (programType) {
      case ProgramType.Adults:
        this.baseUrl = SharedService.AdultsBaseUrl;
        break;
      case ProgramType.Teenagers:
        this.baseUrl = SharedService.TeenagerBaseUrl;
        break;
      default:
        this.baseUrl = SharedService.TeenagerBaseUrl;
    }
  }
}
