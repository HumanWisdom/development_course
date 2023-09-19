import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-free-trial',
  templateUrl: './free-trial.page.html',
  styleUrls: ['./free-trial.page.scss'],
})
export class FreeTrialPage implements OnInit {


  constructor(private router:Router) { }

  ngOnInit() {
  }

  routeToDashboard(){
    this.router.navigateByUrl('/adults/adult-dashboard');
  }

  manageSubscription(){
    this.router.navigateByUrl('/adults/adult-dashboard');
  }
}
