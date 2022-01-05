import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'HumanWisdom-s72001p1',
  templateUrl: './s72001p1.page.html',
  styleUrls: ['./s72001p1.page.scss'],
})
export class S72001p1Page implements OnInit {

  moduleList: any = [
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/20.png',
      link: '/conditioning'
    },
    {
      name: 'Identity',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/25.png',
      link: '/identity'
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
