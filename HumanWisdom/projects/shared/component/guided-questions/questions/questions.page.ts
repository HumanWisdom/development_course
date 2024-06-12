import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CommonService } from '../../../services/common.service';
import { NavigationService } from '../../../services/navigation.service';
import { SharedService } from '../../../services/shared.service';
import { ProgramType } from '../../../models/program-model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {
  data: any;
  @ViewChild('saveBtn') saveBtn: any;
  counter = 1;
  maintitile = new BehaviorSubject(1);
  title = '';
  currentSlide: number = 0;
  numSlides: number = 0;
  length: number = 0;
  isChanged = false;
  userId: number = 0;
<<<<<<< Updated upstream
  isAdults = true;
=======
  isAdults: boolean = true; 

>>>>>>> Stashed changes
  constructor(private commonService: CommonService, private router: ActivatedRoute
    , private route: Router,private navigationService:NavigationService) {
    this.userId = JSON.parse(localStorage.getItem("userId"))
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
  }
  ngOnInit() {
    var id = +this.router.snapshot.queryParamMap.get("Qid");
    var attempt = +this.router.snapshot.queryParamMap.get("Attempt");
    this.commonService.GetGuidedQs_Response(id, attempt).subscribe(x => {
      if (x) {
        this.data = x;
        this.numSlides = this.data.length;
        this.maintitile.subscribe(title => {
          this.title = (title) + "/" + this.data.length;
        });
      }
    })

    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
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
    this.commonService.AddGuidedQs_Response(data).subscribe(res => {
      if (res) {
        console.log(res);
      }
    });
  }

  goback() {
   var url = this.navigationService.navigateToBackLink();
   if(url == `/${SharedService.getprogramName()}/search`){
    this.route.navigate([SharedService.getUrlfromFeatureName('journal')], { queryParams: { "isGuided": true } })
   }
  };

  Backward() {
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.goback();
    }else{
      this.route.navigate([url]);
    }
  }

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

  SaveBtn() {
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
    this.commonService.AddGuidedQs_Response(data).subscribe(res => {
      this.saveBtn.nativeElement.click();
    });
  }

  SubmitButton() {
    this.route.navigate([SharedService.getUrlfromFeatureName('journal')], { queryParams: { "isGuided": true } })
  }
}