import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'HumanWisdom-s71004p1',
  templateUrl: './s71004p1.page.html',
  styleUrls: ['./s71004p1.page.scss'],
})
export class S71004p1Page implements OnInit {

  moduleList: any = [
    {
      name: 'Sorrow and Loss',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/31.png',
      link: '/sorrow'
    },
    {
      name: 'Emotional Needs',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/26.png',
      link: '/emotional-needs'
    },
    {
      name: 'Breathing',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/07.png',
      link: '/breathing'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
