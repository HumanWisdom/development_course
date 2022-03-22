import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,Validators, AbstractControl} from '@angular/forms'
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {OnboardingService} from '../onboarding.service'

@Component({
  selector: 'app-password-link',
  templateUrl: './password-link.page.html',
  styleUrls: ['./password-link.page.scss'],
})
export class PasswordLinkPage implements OnInit {
  email:any
  showMessage=false

  constructor(
    private router: Router,
    private service:OnboardingService,
    private location:Location) { }

  ngOnInit() {
  }
  recoverPassword(){
    this.service.sendPasswordLink(this.email)
    .subscribe(
      res=>{
        
        
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.showMessage=true
      }

    )
  }

}
