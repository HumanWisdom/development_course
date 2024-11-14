import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { OnboardingService } from '../../services/onboarding.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent implements OnInit {
  constructor(public fb: UntypedFormBuilder, private service: OnboardingService, public location:Location) { }
  public newsletterForm: any;
  public enableAlert = false;
  public enableErrorAlert = false;
  public errMsg = '';
  public successMsg = '';
  public content = ''

  ngOnInit() {
    this.newsletterForm = this.fb.group({
      EmailID: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      Name: ['', [Validators.required, Validators.minLength(2)]],
    },)
  }

  submitNewsletter() {
    this.enableErrorAlert = false;
    let data = {
      "Name": this.newsletterForm.get('Name').value,
      "EmailID":  this.newsletterForm.get('EmailID').value,
    }
    this.service.signUpNewsLetter(data).subscribe((res) => {
      if (res) {
        this.content = res;
         this.enableAlert = true;
          this.enableAlert = false;
          this.content = ''
         this.newsletterForm.reset();
         this.location.back();
        //  setTimeout(()=> {
        //  }, 5000)
      }
    },(err)=> {
      this.content = err['error']['Message'];
      this.enableAlert = true;
      setTimeout(()=> {
        this.enableAlert = false;
        this.content = ''
       }, 5000)
    })
  }

  goBack(){
    this.location.back()
  }

 
  get Name() {
    return this.newsletterForm?.get("Name");
  }
  get EmailID() {
    return this.newsletterForm?.get("EmailID");
  }

  getAlertcloseEvent(event) {
    if(event=='ok'){
      this.enableAlert = false;
      this.location.back;
      
    }else{
      this.enableAlert = false;
    }
  }
}
