import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'HumanWisdom-s72005p1',
  templateUrl: './s72005p1.page.html',
  styleUrls: ['./s72005p1.page.scss'],
})
export class S72005p1Page implements OnInit {

  moduleList: any = [
    {
      name: 'Discovering Wisdom',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/introduction/01.png',
      link: '/discovering-wisdom'
    },
    {
      name: 'Benefits of Wisdom',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/introduction/02.png',
      link: '/benefits-of-wisdom'
    },
    {
      name: 'Key Ideas',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/introduction/04.png',
      link: '/key-ideas'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
