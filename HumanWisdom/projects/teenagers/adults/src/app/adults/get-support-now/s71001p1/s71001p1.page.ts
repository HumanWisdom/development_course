import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'HumanWisdom-s71001p1',
  templateUrl: './s71001p1.page.html',
  styleUrls: ['./s71001p1.page.scss'],
})
export class S71001p1Page implements OnInit {

  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/34.png',
      link: '/stress'
    },
    {
      name: 'Reactive Mind',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/22.png',
      link: '/reactive-mind'
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
