import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var $: any;

var carouselend = false;
@Component({
  selector: 'HumanWisdom-s75002',
  templateUrl: './s75002.page.html',
  styleUrls: ['./s75002.page.scss'],
})
export class S75002Page implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('#mdp_carousel').on('slid.bs.carousel', function (data) {
      let arr = data['relatedTarget']['classList'];
      let istrue = false;
      if (Array.from(arr)[1] === 'lastitem') {
        carouselend = true
      }
    })
  }


  getdayevent(event) {
  }
}
