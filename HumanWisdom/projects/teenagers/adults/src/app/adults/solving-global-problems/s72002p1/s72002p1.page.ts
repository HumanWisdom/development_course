import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'HumanWisdom-s72002p1',
  templateUrl: './s72002p1.page.html',
  styleUrls: ['./s72002p1.page.scss'],
})
export class S72002p1Page implements OnInit {

  moduleList: any = [
    {
      name: 'Pleasure',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/30.png',
      link: '/pleasure'
    },
    {
      name: 'Inner Boredom',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/27.png',
      link: '/inner-boredom'
    },
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/20.png',
      link: '/conditioning'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
