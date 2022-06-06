import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s54084',
  templateUrl: './s54084.page.html',
  styleUrls: ['./s54084.page.scss'],
})
export class S54084Page implements OnInit {

  toc = "reactive-mind/s54001"
  moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/self_image.jpg"
  bg_tn = "bg_light_blue"
  bg_cft = "bg_light_blue"
  bg = ""
  moduleLink = "/adults/self-image"
  moduleName = "04. Self Image"
  sectionName = "How the Mind Works";
  moduleId = 25
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/34.png',
      link: '/stress'
    },
    {
      name: 'Anger',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/33.png',
      link: '/anger'

    },
    {
      name: 'Fear & Anxiety',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/29.png',
      link: '/fear-anxiety'

    },
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'T') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/pleasure.jpg"
      this.bg_tn = "bg_purple_red"
      this.bg_cft = "bg_purple_red"
      this.bg = ""
      this.moduleLink = "/adults/pleasure"
      this.moduleName = "07. Pleasure"
      this.sectionName = "How the Mind Works";
      this.moduleId = 20
      this.moduleList = [
        {
          name: 'Addiction',
          image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/34.png',
          link: '/adults/habit-addiction'
        },
        {
          name: 'Comparison & Envy',
          image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/21.png',
          link: '/comparison'
        },
        {
          name: 'Anger',
          image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/33.png',
          link: '/anger'

        },
      ]
    }
  }

  ngOnInit() {
  }
}
