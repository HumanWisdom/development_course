import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { Location } from '@angular/common';
import { SharedService } from '../../services/shared.service';
import { Constant } from '../../services/constant';
import { NavigationService } from '../../services/navigation.service';


@Component({
  selector: 'app-wisdom-exercise-s75001',
  templateUrl: './wisdom-exercise-s75001.component.html',
  styleUrls: ['./wisdom-exercise-s75001.component.scss'],
})
export class WisdomExerciseS75001Component implements OnInit {
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
    private location: Location ) 
    { }
 
  ngOnInit() {
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
