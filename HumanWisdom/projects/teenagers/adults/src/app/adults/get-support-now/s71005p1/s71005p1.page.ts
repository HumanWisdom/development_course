import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'HumanWisdom-s71005p1',
  templateUrl: './s71005p1.page.html',
  styleUrls: ['./s71005p1.page.scss'],
})
export class S71005p1Page implements OnInit {

  moduleList: any = [
    {
      name: 'Relationships',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/35.png',
      link: '/relationships'
    },
    {
      name: 'The Nature of the ‘I’',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/28.png',
      link: '/nature-of-i'
    },
    {
      name: 'Emotional Needs',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/26.png',
      link: '/emotional-needs'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
