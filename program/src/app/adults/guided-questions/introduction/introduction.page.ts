import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdultsService } from '../../adults.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.page.html',
  styleUrls: ['./introduction.page.scss'],
})
export class IntroductionPage implements OnInit {
  data: any
  constructor(public route: ActivatedRoute, private router: Router,
    private service: AdultsService, private location:Location) {
      let url = this.route.snapshot.paramMap.get('TopicName');
      this.GetGuidedQs_Topics(url);
  }

  ngOnInit() {
  
  }

  goBack() {
    // this.router.navigate(['/adults/journal'])
    this.location.back()
  }

  NavigateToQuestions() {
    this.router.navigate(['/journal/questions'], { queryParams: { "Qid": JSON.stringify(this.data.RowID), "Attempt": "0" } })
  }

  GetGuidedQs_Topics(url) {
    this.service.GetGuidedQs_Topics().subscribe(res => {
      if (res) {
        this.data = res.filter(x => (x.Landing_URL) == '/' + url)[0];
      }
    });
  }
}
