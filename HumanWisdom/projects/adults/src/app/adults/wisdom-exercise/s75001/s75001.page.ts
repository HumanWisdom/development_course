import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { AdultsService } from "../../adults.service";
import { Location } from '@angular/common';
import { SharedService } from '../../../../../../shared/services/shared.service';
import { Constant } from '../../../../../../shared/services/constant';
import { NavigationService } from '../../../../../../shared/services/navigation.service';


@Component({
  selector: 'HumanWisdom-s75001',
  templateUrl: './s75001.page.html',
  styleUrls: ['./s75001.page.scss'],
})
export class S75001Page implements OnInit {
  tocImage="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/wisdom_exercise.svg"
  tocColor="white"
  isGuest : boolean =  true;
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  constructor(
    public ngNavigatorShareService: NgNavigatorShareService,
     private navigationService:NavigationService,
    private router: Router,
    private service: AdultsService,
    private location: Location ) 
    { }
 
  ngOnInit() {
    this.service.setmoduleID(75);
    this.isGuest = !SharedService.isSubscriber();
  }
  share(){
    this.ngNavigatorShareService.share({
      title: 'HappierMe Program',
      text: 'Hey, check out the HappierMe Program',
      url: "https://humanwisdom.me"+this.path
    }).then( (response) => {
      
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  goBack(){
    // if(this.service.previousUrl.includes('wisdom-exercise'))
    // {
    //   this.router.navigateByUrl("/adults/adult-dashboard");

    // }
    // else
    //  this.location.back()
       var url = this.navigationService.navigateToBackLink();
        if(url==null){
          url = SharedService.getDataFromLocalStorage(Constant.NaviagtedFrom);
          if(url && url!=null && url != 'null'){
            this.router.navigate([url]);
          }else{
            this.location.back();
          }
        }
        else
        {
          this.router.navigate([url]);
        }

  }

    routeTointroDash() {
      this.router.navigate(['/adults/dashboard/wisdom-exercise']);
    }
}
