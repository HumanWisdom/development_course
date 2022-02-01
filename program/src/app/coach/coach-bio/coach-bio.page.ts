import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-coach-bio',
  templateUrl: './coach-bio.page.html',
  styleUrls: ['./coach-bio.page.scss'],
})
export class CoachBioPage implements OnInit {

  constructor(private router: Router, private activeRoutes: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoutes.params.subscribe((res) => {
      console.log('Demos', res['id'])
    })
  }

  goBack() {
    this.router.navigate(['coach/coach-customer-directory'])
  }

}
