import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-carousel',
  templateUrl: './intro-carousel.page.html',
  styleUrls: ['./intro-carousel.page.scss'],
})
export class IntroCarouselPage implements OnInit, AfterViewInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    document.getElementById('inactivenext').style.display = 'none';
      $('#ic_carousel').on('slid.bs.carousel', function (data) {
        let arr = data['relatedTarget']['classList'];
        let istrue = false;
        arr.forEach((d, ind) => {
           if(d === '4') {
            istrue = true;
           } else if(!istrue){
            istrue = false;
           }
        })
        if(istrue) {
          document.getElementById('activenext').style.display = 'none';
          document.getElementById('inactivenext').style.display = 'block';
        }else {
          document.getElementById('activenext').style.display = 'block';
          document.getElementById('inactivenext').style.display = 'none';
        }
      })
  }

  skip() {
    // localStorage.setItem('personalised', 'F');
    this.router.navigate(['/intro/personalised-for-you']);
  }
}
