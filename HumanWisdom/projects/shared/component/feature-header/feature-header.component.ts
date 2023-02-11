import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location } from '@angular/common'
import {AdultsService} from "../../../adults/src/app/adults/adults.service";
import { NgNavigatorShareService } from 'ng-navigator-share';

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
  address=this.router.url
  path="https://humanwisdom.me/adults/wisdom-stories"

  constructor(private router: Router,
    private service:AdultsService,private ngNavigatorShareService: NgNavigatorShareService,
    private location:Location,
    private ac:ActivatedRoute) {
      this.urlT=this.router.getCurrentNavigation()?.extractedUrl.queryParams.t
     }

  ngOnInit() {
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
   
  }

  addToken(){
    // history.replaceState(null, null, 'Course#'+this.address+`?t=${this.token}`);
    this.socialShare=true;
    this.ngNavigatorShareService.share({
      title: 'HumanWisdom Program',
      text: 'Hey, check out the HumanWisdom Program',
      url: this.path
    }).then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
   }
   goBack(){
     this.location.back()
   }
 

}
