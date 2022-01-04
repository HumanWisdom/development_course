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

  wisdomstoriesmoduleList: any = [
    {
      name: 'Ryan Had A Hippo’s Temper',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/wisdom_stories/timothy-eberly-2JV3dbrFt-Y-unsplash.jpg',
      link: '/wisdom-stories/view-stories?sId=11'
    },
    {
      name: 'The Well-Being of an Alcoholic',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/wisdom_stories/luke-southern-gW7QRXDSvec-unsplash.jpg',
      link: ''
    },
    {
      name: 'My Stepmother Humiliated Me',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/wisdom_stories/kelly-sikkema-k0o-cw5Y_9s-unsplash.jpg',
      link: ''
    },
    {
      name: 'An Apple A Day Is An Eating Disorder',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/wisdom_stories/gregory-pappas-rUc9hVE-L-E-unsplash.jpg',
      link: ''
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
