import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramType } from '../../../../../../shared/models/program-model';
import { SharedService } from '../../../../../../shared/services/shared.service';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { AdultsService } from '../../../../../../adults/src/app/adults/adults.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  coachList = [];
  baseUrl: string;
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);

  constructor(private service: AdultsService, private router: Router, private ngNavigatorShareService: NgNavigatorShareService) { }

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
    this.router.navigate(["/teenagers/teenager-dashboard"]);
  }

  routeCoach(data) {
    localStorage.setItem("coachId", data['UserID']);
    this.router.navigate(["/teenagers/coach/profile", data['UserID']]);
  }

  contactCoach() {
    this.router.navigate(["/teenagers/coach/contact"]);
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
