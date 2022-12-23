import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contact-coach',
  templateUrl: './contact-coach.page.html',
  styleUrls: ['./contact-coach.page.scss'],
})
export class ContactCoachPage implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  goBack(){
    this.location.back()
  }
}
