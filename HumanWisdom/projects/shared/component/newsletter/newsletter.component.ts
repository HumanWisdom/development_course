import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { OnboardingService } from '../../services/onboarding.service';
@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent implements OnInit {
  constructor(public fb: UntypedFormBuilder, private service: OnboardingService) { }

  public newsletterForm: any;
  public enableAlert = false;

  ngOnInit() {
    this.newsletterForm = this.fb.group({
      EmailID: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      Name: ['', [Validators.required, Validators.minLength(2)]],
    },)
  }

  submitNewsletter() {
    let data = {
      "Name": this.newsletterForm.get('Name').value,
      "EmailID":  this.newsletterForm.get('EmailID').value,
    }
    this.service.signUpNewsLetter(data).subscribe((res) => {
      if (res) {
         this.enableAlert = true;
         this.newsletterForm.reset();
         setTimeout(()=> {
          this.enableAlert = false;
         }, 5000)
      }
    })
  }

  get Name() {
    return this.newsletterForm?.get("Name");
  }
  get EmailID() {
    return this.newsletterForm?.get("EmailID");
  }
}
