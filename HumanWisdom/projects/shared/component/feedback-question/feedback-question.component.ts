import { Component, OnInit,Input } from '@angular/core';
import { Router} from '@angular/router'
import { Location } from '@angular/common';


@Component({
  selector: 'app-feedback-question',
  templateUrl: './feedback-question.component.html',
  styleUrls: ['./feedback-question.component.scss'],
})
export class FeedbackQuestionComponent implements OnInit {
  @Input() skipToPage:string
  @Input() progName:string

  pageaction = localStorage.getItem("pageaction");
  constructor(public router: Router,private location: Location) { }

  ngOnInit() {
    console.log("skiptopage",this.skipToPage)
  }

  goToPage(){
    console.log("in page")
    let progNamePath = this.progName == "teenagers" ? "":"/adults";
    this.router.navigate([progNamePath+this.skipToPage])
  }

  goBack() 
  {
    this.location.back()
  }


}
