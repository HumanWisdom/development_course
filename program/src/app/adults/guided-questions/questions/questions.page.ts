import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {
  data: any;
  counter = 1;
  maintitile = new BehaviorSubject(1);
  title = '';
  currentSlide: number = 0;
  numSlides: number = 0;
  length: number = 0;
  isChanged = false;
  userId: number = 0;
  constructor(private adultService: AdultsService, private router: ActivatedRoute
    , private route: Router) {
    this.userId = JSON.parse(localStorage.getItem("userId"))
  }
  ngOnInit() {
    var id = +this.router.snapshot.queryParamMap.get("Qid");
    var attempt=+this.router.snapshot.queryParamMap.get("Attempt");
    this.adultService.GetGuidedQs_Response(id,attempt).subscribe(x => {
      if (x) {
        this.data = x;
        this.numSlides = this.data.length;
        this.maintitile.subscribe(title => {
          this.title = (title) + "/" + this.data.length;
        });
      }
    })
  }

  SaveAnswers(res: any) {
    let data: any;
    if (res.ResponseID != null) {
      data = {
        TopicID: res.TopicId,
        ResponseID: res.ResponseID,
        AttemptNo: res.AttemptNo,
        QuestionID: res.QuestionId,
        UserID: this.userId,
        Response: res.Response,
        savetoJournal: "0"
      };
    } else {
      data = {
        TopicID: res.TopicId,
        AttemptNo: res.AttemptNo,
        QuestionID: res.QuestionId,
        UserID: this.userId,
        Response: res.Response,
        savetoJournal: "0"
      };
    }
    this.adultService.AddGuidedQs_Response(data).subscribe(res => {
      if (res) {
        console.log(res);
      }
    });
  }

  Backward() {
    this.route.navigate(['/adults/journal'], { queryParams: { "isGuided": true } })
  };

  getClass(questionNo) {
    if (+questionNo == this.counter) {
      this.isChanged = true;
      return 'active';
    }
  }

  forward() {
    this.isChanged = false;
    this.counter = (this.counter + 1);
    if (this.counter > this.data.length) {
      this.counter = 1;
    }
    this.maintitile.next(this.counter);
  }
  back() {
    this.isChanged = false;
    this.counter = (this.counter - 1);
    if (this.counter < 1) {
      this.counter = this.data.length;
    }
    this.maintitile.next(this.counter);
  }

  modulo(number, mod) {
    let result = number % mod;
    if (result < 0) {
      result += mod;
    }
    return result;
  }

  changeSlide(slideNumber) {
    this.maintitile.next(slideNumber);
  }

  SubmitButton() {
    let data: any;
    let res = this.data[this.numSlides - 1];
    if (res.ResponseID != null) {
      data = {
        TopicID: res.TopicId,
        ResponseID: res.ResponseID,
        AttemptNo: res.AttemptNo,
        QuestionID: res.QuestionId,
        UserID: this.userId,
        Response: res.Response,
        savetoJournal: "1"
      };
    } else {
      data = {
        TopicID: res.TopicId,
        AttemptNo: res.AttemptNo,
        QuestionID: res.QuestionId,
        UserID: this.userId,
        Response: res.Response,
        savetoJournal: "1"
      };
    }
    this.adultService.AddGuidedQs_Response(data).subscribe(res => {
      this.route.navigate(['/adults/journal'], { queryParams: { "isGuided": true } })
    });
  }

}