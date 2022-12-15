import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'HumanWisdom-s72003p1',
  templateUrl: './s72003p1.page.html',
  styleUrls: ['./s72003p1.page.scss'],
})
export class S72003p1Page implements OnInit {

  moduleList: any = [
    {
      name: 'Food',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/46.png',
      link: '/food-health'
    },
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/34.png',
      link: '/stress'
    },
    {
      name: 'Fear & Anxiety',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/29.png',
      link: '/fear-anxiety'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
