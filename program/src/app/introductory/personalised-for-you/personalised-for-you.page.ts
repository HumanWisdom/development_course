import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personalised-for-you',
  templateUrl: './personalised-for-you.page.html',
  styleUrls: ['./personalised-for-you.page.scss'],
})
export class PersonalisedForYouPage implements OnInit {
  public selectList = [];

  constructor(public router: Router) { }

  ngOnInit() {
    localStorage.setItem('personalised', 'T');
  }

  getselect(value) {
    if(value !== 'next') {
      if(!(this.selectList.includes(value))) {
        this.selectList.push(value);
        document.getElementById(value).style.background = '#FFFFFF';
        document.getElementById(value).style.color = '#000000';
      }else {
        document.getElementById(value).style.background = 'rgba(255, 255, 255, 0.1)';
        document.getElementById(value).style.color = '#FFFFFF';
        const index = this.selectList.indexOf(value);
        this.selectList.splice(index, 1);
      }
      if(this.selectList.length !== 0) {
        document.getElementById('next').style.background = '#FFFFFF';
        document.getElementById('next').style.color = '#000000';
      }else {
        document.getElementById('next').style.background = 'rgba(255, 255, 255, 0.5)';
        document.getElementById('next').style.color = 'rgba(0, 0, 0, 0.5)';
      }
    }else {
      if(this.selectList.length !== 0) {
        localStorage.setItem('personalisedlist', JSON.stringify(this.selectList));
        this.router.navigate(['/intro/subscription-options'])
      }
    }
  }

}
