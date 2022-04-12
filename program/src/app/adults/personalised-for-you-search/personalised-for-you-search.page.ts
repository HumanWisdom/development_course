import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalised-for-you-search',
  templateUrl: './personalised-for-you-search.page.html',
  styleUrls: ['./personalised-for-you-search.page.scss'],
})
export class PersonalisedForYouSearchPage implements OnInit {
  personalisedforyou = []

  constructor(private route: Router) {
    if(localStorage.getItem('perapidata')) {
      let pers = JSON.parse(localStorage.getItem('perapidata'));
      this.personalisedforyou = pers;
    }
   }

  ngOnInit() {
    
  }

  clickbtn(name) {
    this.route.navigate(['/adults/overcome-stress'])
  }

}
