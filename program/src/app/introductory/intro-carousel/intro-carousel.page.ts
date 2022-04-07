import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-carousel',
  templateUrl: './intro-carousel.page.html',
  styleUrls: ['./intro-carousel.page.scss'],
})
export class IntroCarouselPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  skip() {
    localStorage.setItem('personalised', 'F');
    this.router.navigate(['/adults/adult-dashboard']);
  }
}
