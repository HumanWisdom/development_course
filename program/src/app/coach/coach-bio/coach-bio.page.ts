import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoachService } from '../services/coach.service';
import * as moment from 'moment';

@Component({
  selector: 'app-coach-bio',
  templateUrl: './coach-bio.page.html',
  styleUrls: ['./coach-bio.page.scss'],
})
export class CoachBioPage implements OnInit {

  constructor(
    private router: Router, 
    private activeRoutes: ActivatedRoute, 
    private apiService: CoachService)
     { }

  coachID: number;
  coachDetail: any = null;
  isAPICalling = false;
  reviewDetails: any = null;
  reviewLength: number = 0;
  ngOnInit() {
    this.activeRoutes.params.subscribe((res) => {
      this.coachID = +res['id'];
      this.getGoachDetails(this.coachID);
      this.getCoachReviews(this.coachID);
    })
  }

  goBack() {
    this.router.navigate(['coach/coach-customer-directory'])
  }

  ratings(i: number) {
    return new Array(i);
  }

  getDate(item){
    return moment(item).format('DD MMM YYYY')
  }

  getGoachDetails(id) {
    this.isAPICalling = true;
    this.apiService.getCoachDetailsById(id).subscribe(res => {
      this.isAPICalling = false;
      this.coachDetail = res;
      console.log('RESS', res);
    }, error => {
      this.isAPICalling = false;
    })
  }

  getCoachReviews(id) {
    this.apiService.getCoachReviewsById(id).subscribe(res => {
      this.reviewLength = res.length;
      this.reviewDetails = res;
    })
  }

}
