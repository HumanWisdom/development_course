import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from 'src/app/adults/adults.service';

@Component({
  selector: 'app-intro-carousel',
  templateUrl: './intro-carousel.page.html',
  styleUrls: ['./intro-carousel.page.scss'],
})
export class IntroCarouselPage implements OnInit, AfterViewInit {
  public loading = false;

  constructor(private router: Router, private service: AdultsService) { }

  ngOnInit() {
    let authtoken = JSON.parse(localStorage.getItem("token"))
    let app = localStorage.getItem("fromapp")
    if (authtoken) {
      localStorage.setItem('socialLogin', 'T');
      this.service.verifytoken(authtoken).subscribe((res) => {

        if (res) {
          localStorage.setItem("email", res['Email'])
          localStorage.setItem("name", res['Name'])
          let namedata = localStorage.getItem('name').split(' ')
          localStorage.setItem("FnName", namedata[0])
          localStorage.setItem("LName", namedata[1] ? namedata[1] : '')
        }
      })
    }
  }

  ngAfterViewInit() {
    document.getElementById('inactivenext').style.display = 'none';
    $('#ic_carousel').on('slid.bs.carousel', function (data) {
      let arr = data['relatedTarget']['classList'];
      let istrue = false;
      arr.forEach((d, ind) => {
        if (d === '4') {
          istrue = true;
        } else if (!istrue) {
          istrue = false;
        }
      })
      if (istrue) {
        document.getElementById('activenext').style.display = 'none';
        document.getElementById('inactivenext').style.display = 'flex';
      } else {
        document.getElementById('activenext').style.display = 'flex';
        document.getElementById('inactivenext').style.display = 'none';
      }
    })
  }

  skip() {
    // localStorage.setItem('personalised', 'F');
    this.router.navigate(['/intro/personalised-for-you']);
  }

  onLoad() {
    this.loading = true;
  }
}
