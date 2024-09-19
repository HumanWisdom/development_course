import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { AdultsService } from '../../adults.service';
import { ProgramType } from '../../../../../../shared/models/program-model';
import { SharedService } from '../../../../../../shared/services/shared.service';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { NavigationService } from '../../../../../../shared/services/navigation.service';
import { Location } from '@angular/common';

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

  constructor(private service: AdultsService, private router: Router, private route: ActivatedRoute,
    private meta: Meta, private title: Title,
     private ngNavigatorShareService: NgNavigatorShareService,private navigationService:NavigationService,private location:Location) { }

  ngOnInit() {
    this.getCoachBio();

    this.title.setTitle('Contact ' +  this.coachBio[0]['CoachName'] +' for Personal Growth')
    this.meta.updateTag({ property: 'title', content: 'Contact ' +  this.coachBio[0]['CoachName'] +' for Personal Growth'})
    this.meta.updateTag({ property: 'description', content: this.coachBio[0]['Description'] })
    this.meta.updateTag({ property: 'keywords', content: 'Coach contact,Contact a coach,Connect with coach,Get in touch with coach,Find a coach,Personal coaching,Life coaching,Professional coaching,Coaching services,Contact coach form,Coach support' });

  }

  getCoachBio(){
    if(this.route.snapshot.paramMap.get('id')) {
      this.id = this.route.snapshot.paramMap.get('id');
      this.service.GetCoachBio(this.id).subscribe(res=>
        {
          
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
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.location.back();
    }else{
      this.router.navigate([url]);
    }
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
