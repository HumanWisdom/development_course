import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-your-free-trial',
  templateUrl: './start-your-free-trial.page.html',
  styleUrls: ['./start-your-free-trial.page.scss'],
})
export class StartYourFreeTrialPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  tryFreeSubscribe(){
    this.router.navigate(['/subscription/try-free-and-subscribe']);
  }

  routeToDashboard(){
    this.router.navigateByUrl('/adults/adult-dashboard');
  }
}
