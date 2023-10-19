import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'bcswipe';
import { AdultsService } from 'src/app/adults/adults.service';
import { LogEventService } from "../../../../../shared/services/log-event.service";

declare var $: any;
@Component({
  selector: 'app-intro-carousel',
  templateUrl: './intro-carousel.page.html',
  styleUrls: ['./intro-carousel.page.scss'],
})
export class IntroCarouselPage implements OnInit, AfterViewInit {
  public loading = false;
  nextBtnDis = false;

  constructor(private router: Router, private service: AdultsService,
    public logeventservice: LogEventService) { }

  ngOnInit() {
    let authtoken = JSON.parse(localStorage.getItem("token"))
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
    if(document.getElementById('inactivenext')){
      document.getElementById('inactivenext').style.display = 'none';
    }
    $('#ic_carousel').on('slid.bs.carousel',  (data) => {
      let arr = data['relatedTarget']['classList'];
      let istrue = false;
      arr.forEach((d) => {
        if (d === '2') {
          this.nextBtnDis = true;
        }
      })
      arr.forEach((d, ind) => {
        if (d === '4') {
          istrue = true;
        }
      })
      if (istrue) {
        document.getElementById('activenext').style.display = 'none';
        document.getElementById('inactivenext').style.display = 'flex';
      } else {
        document.getElementById('activenext') ? document.getElementById('activenext').style.display = 'flex' : '';
        document.getElementById('inactivenext') ? document.getElementById('inactivenext').style.display = 'none' : '';
      }
    })

    $('.carousel').bcSwipe({ threshold: 50 });
  }

  skip() {
    this.router.navigate(['/onboarding/login']);
    localStorage.setItem('personalised', 'F');
    localStorage.setItem('fromlandingpage', 'F');
    this.logeventservice.logEvent('click_skip_onboarding');
  }

  onLoad() {
    this.loading = true;
  }

  Logevent(route, params, evtName) {
    this.logeventservice.logEvent(evtName);
    if(params !='' && route !='') {
      this.router.navigate([route, params]);
    }else if(route !='') {
      this.router.navigate([route])
      }
    }

}
