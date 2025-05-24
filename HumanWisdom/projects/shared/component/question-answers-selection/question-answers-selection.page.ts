import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-QuestionAnswersSelection',
  templateUrl: './question-answers-selection.page.html',
  styleUrls: ['./question-answers-selection.page.scss'],
})
export class QuestionAnswersSelection implements OnInit {
  bg_tn = "bg_green_yellow"
  bg = "comparison_envy_w7"
  toc = "/comparison/s0"
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);

  @Input()
  questionAndAns: any;

  @Input()
  question: any;

  @Output() sendRating = new EventEmitter<string>();
  bookmark = 0
  selectedObj = {};

  constructor
    (
      private router: Router,
  ) { }

  ngOnInit() {

  }

  checkOption(index, OptId, i, strSelected) {
    let obj = {
      "Id": (index + 1).toString(),
      "Rating": i,
      "s": OptId
    }
    this.selectedObj[index] = strSelected;
    this.sendRating.emit(JSON.stringify(obj))
  }

  receiveBookmark(e) {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
    sessionStorage.setItem("bookmark11", JSON.stringify(this.bookmark))
  }


  ngOnDestroy() { }

}
