import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder , Validators } from '@angular/forms';
@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent implements OnInit {
  constructor(  public fb: UntypedFormBuilder) {}

  public newsletterForm :any;

  ngOnInit() {
  this.newsletterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]    
 }, )
  }

 /*  get emailvalid() {
    return this.newsletterForm.get('email')
  } */
}