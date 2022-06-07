import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdultsService } from '../adults.service';

@Component({
  selector: 'app-daily-practice',
  templateUrl: './daily-practice.page.html',
  styleUrls: ['./daily-practice.page.scss'],
})
export class DailyPracticePage implements OnInit {

  yellow="#FFC455"
  title="Exploring anger" 
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
  audioLink=""

  poster="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/introduction/introduction_01.jpg"
  videoLink=""  
  dailyid = '0'
  dailyqus = ''
  dailyqusrefid = ''
  userId = ''
  trythistoday = ''
  questext = ''
  dailyinsAuthor=''
  dailyinstext = ''
  audioTitle = ''
  dailybreathTitle = ''
  isloggedIn = false

  constructor(
    private route: ActivatedRoute,
    private service: AdultsService
  ) {
    this.getdailyquestion();
   }

  ngOnInit() {
    this.dailyid = this.route.snapshot.paramMap.get('id')
    this.getdailyques();
    this.userId=JSON.parse(localStorage.getItem("userId"))
    let islogin=localStorage.getItem("isloggedin");
    if(islogin === 'T') {
      this.isloggedIn = true
    }
  }

  getdailyquestion() {
      this.service.getDailypractiseQuestionbreath().subscribe((res) => {
        if(res) {
          this.dailybreathTitle = res.split(';')[0]
          this.videoLink = res.split(';')[1];
        }
      })
      this.service.getDailypractiseQuestionins().subscribe((res) => {
        if(res) {
          //this.dailyinstext = res;
          this.dailyinsAuthor = res.split(';')[0]
          this.dailyinstext = res.split(';')[1];
        }
      })
      this.service.getDailypractiseQuestionmeditation().subscribe((res) => {
        if(res) {
          this.audioTitle = res.split(';')[0]
          this.audioLink = res.split(';')[1];
        }
      })
      this.service.getDailypractiseQuestiontoday().subscribe((res) => {
        if(res) {
          this.trythistoday = res;
        }
      })
  }

  getdailyques() {
    this.service.getDailypractiseQuestion().subscribe((res) => {
      if(res) {
        this.dailyqus = res.split(':')[1]
        this.dailyqusrefid = res.split(':')[0]
      }
    })
  }

  subdailyques() {
    let obj = {
      ReflectionId: this.dailyqusrefid,
      SubscriberId: this.userId,
      Resp: this.questext
    }
    this.service.submitDailypractiseQuestion(obj).subscribe((res) => {
      if(res) {
        window.alert('Successfully added daily question')
      }
    })
  }
  
  getTime() {

  }

}
