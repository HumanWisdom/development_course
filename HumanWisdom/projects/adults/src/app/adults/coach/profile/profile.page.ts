import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdultsService } from '../../adults.service';
import { ProgramType } from '../../../../../../shared/models/program-model';
import { SharedService } from '../../../../../../shared/services/shared.service';
import { NgNavigatorShareService } from 'ng-navigator-share';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  coachBio = [];
  id = '';
  baseUrl: string;
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);

  constructor(private service: AdultsService, private router: Router, private route: ActivatedRoute, private ngNavigatorShareService: NgNavigatorShareService) { }

  ngOnInit() {
    this.getCoachBio();
  }

  getCoachBio(){
    if(this.route.snapshot.paramMap.get('id')) {
      this.id = this.route.snapshot.paramMap.get('id');
      this.service.GetCoachBio(this.id).subscribe(res=>
        {
          console.log(res);
          if(res) {
            this.coachBio = res;
          }
        },
        error=>console.log(error),
        ()=>{
        }
      )
    }
  }

  backRoute() {
    this.router.navigate(["/adults/coach"]);
  }

  contactCoach() {
    this.router.navigate(["/adults/coach/contact", this.id]);
  }

  share() {
    this.shareUrl(SharedService.ProgramId);
    this.baseUrl = 'https://humanwisdom.me/' + SharedService.getprogramName() + '/coach/profile/' + this.id;

    this.ngNavigatorShareService.share({
      title: 'HappierMe Program',
      text: 'Hey, check out the HappierMe Program',
      url: this.baseUrl
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
