import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'HumanWisdom-s71003p1',
  templateUrl: './s71003p1.page.html',
  styleUrls: ['./s71003p1.page.scss'],
})
export class S71003p1Page implements OnInit {

  moduleList: any = [
    {
      name: 'Reactive Mind',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/22.png',
      link: '/reactive-mind'
    },
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/20.png',
      link: '/conditioning'
    },
    {
      name: 'Sorrow and Loss',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/31.png',
      link: '/sorrow'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
