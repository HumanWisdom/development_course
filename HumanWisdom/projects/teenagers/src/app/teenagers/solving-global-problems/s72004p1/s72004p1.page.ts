import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'HumanWisdom-s72004p1',
  templateUrl: './s72004p1.page.html',
  styleUrls: ['./s72004p1.page.scss'],
})
export class S72004p1Page implements OnInit {

  moduleList: any = [
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/20.png',
      link: '/conditioning'
    },
    {
      name: 'Living with Peace',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/39.png',
      link: '/living-with-peace'
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
