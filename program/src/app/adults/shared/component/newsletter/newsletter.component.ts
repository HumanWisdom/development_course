import { Component, OnInit } from '@angular/core';
import {  UntypedFormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent implements OnInit {

   constructor(  public fb: UntypedFormBuilder) { }
  public newsletterForm = this.fb.group({
   
    email: ['Invalid email', [Validators.required, Validators.email]]
    
  })
  ngOnInit() {}

  get emailvalid() {
    return this.newsletterForm.get('email')
  }
}
