import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'HumanWisdom-s71002p1',
  templateUrl: './s71002p1.page.html',
  styleUrls: ['./s71002p1.page.scss'],
})
export class S71002p1Page implements OnInit {

  moduleList: any = [
    {
      name: 'Fear and Anxiety',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/29.png',
      link: '/fear-anxiety'
    },
    {
      name: 'Breathing',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/07.png',
      link: '/breathing'
    },
    {
      name: 'Meditation',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/09.png',
      link: '/meditation'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
