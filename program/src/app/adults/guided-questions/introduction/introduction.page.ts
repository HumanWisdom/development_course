import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.page.html',
  styleUrls: ['./introduction.page.scss'],
})
export class IntroductionPage implements OnInit {
data:any
  constructor(public route:ActivatedRoute,private router: Router) { 
    this.data = JSON.parse(window.history.state.data);
  }

  ngOnInit() {
    // debugger;
    // var data=  this.router.snapshot.queryParamMap.get('data');
  }
  goBack(){
    this.router.navigate(['/adults/journal'])
  }
  NavigateToQuestions(){
    debugger;
    this.router.navigate(['/journal/questions'],{queryParams:{"Qid":JSON.stringify(this.data.RowID)}})
  }

}
