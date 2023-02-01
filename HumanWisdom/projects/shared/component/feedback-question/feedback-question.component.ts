import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'app-feedback-question',
  templateUrl: './feedback-question.component.html',
  styleUrls: ['./feedback-question.component.scss'],
})
export class FeedbackQuestionComponent implements OnInit {
  @Input() skipToPage:string

  pageaction = localStorage.getItem("pageaction");
  constructor(public router: Router) { }

  ngOnInit() {
    console.log("skiptopage",this.skipToPage)
  }
  goToPage(){
    console.log("in page")
    this.router.navigate([this.skipToPage])
  }


}
