import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-QuestionAnswersSelection',
  templateUrl: './question-answers-selection.page.html',
  styleUrls: ['./question-answers-selection.page.scss'],
  animations: [
      trigger('slideAnimation', [
        // Wildcard transition for swipe left (next)
        transition('* => left', [
          style({ transform: 'translateX(100%)' }), // start from right
          animate('0.7s ease-in-out', style({ transform: 'translateX(0)' }))
        ]),
        // Wildcard transition for swipe right (previous)
        transition('* => right', [
          style({ transform: 'translateX(-100%)' }), // start from left
          animate('0.7s ease-in-out', style({ transform: 'translateX(0)' }))
        ])
      ])
    ]
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
  direction: string = '';
  currentSection = 0;
 isAdults = false;

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


  next(event) {
    window.scrollTo(0,0);
    this.currentSection++;
    if(this.currentSection>=10){
      this.currentSection = 0;
    }
    this.direction = 'left';   
  }

  back(event) {
    window.scrollTo(0,0);
    if(this.currentSection==0){
      this.currentSection=10;
    }else{
      this.currentSection--;
    }
      this.direction = 'right';
  }


  ngOnDestroy() { }

}
