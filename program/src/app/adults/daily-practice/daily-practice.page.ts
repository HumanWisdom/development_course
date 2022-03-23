import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-daily-practice',
  templateUrl: './daily-practice.page.html',
  styleUrls: ['./daily-practice.page.scss'],
})
export class DailyPracticePage implements OnInit {

  yellow="#FFC455"
  title="Exploring anger" 
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
  audioLink="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/anger/audios/anger+1.1.mp3"

  poster="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/introduction/introduction_01.jpg"
  videoLink="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/discovering-wisdom/videos/1.1.mp4"  
  dailyid = '0'

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.dailyid = this.route.snapshot.paramMap.get('id')
  }
  
  getTime() {

  }

}
