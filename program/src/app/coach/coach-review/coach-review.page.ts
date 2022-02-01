import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoachService } from '../services/coach.service';

@Component({
  selector: 'app-coach-review',
  templateUrl: './coach-review.page.html',
  styleUrls: ['./coach-review.page.scss'],
})
export class CoachReviewPage implements OnInit {

  stars: number[] = [1, 2, 3, 4, 5];
  id: number = 0;
  selectedValue: number;
  userReview: string = '';

  constructor(private apiService: CoachService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(res => {
      this.id = res['id'];
    })
  }

  countStar(star) {
    this.selectedValue = star;
  }

  goBack() {
    this.router.navigate(['coach/coach-appointments'])
  }

  onSave() {
    const addReview = {
      CoachTTID: this.id,
      Rating: this.selectedValue,
      Comment: this.userReview
    }
    this.apiService.addReview(addReview).subscribe(res => {
        this.goBack();
    }, error => {
      console.log('Exceptions', error)
    })
  }

}
