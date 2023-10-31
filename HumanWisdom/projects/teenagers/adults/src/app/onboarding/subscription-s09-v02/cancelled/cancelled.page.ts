import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancelled',
  templateUrl: './cancelled.page.html',
  styleUrls: ['./cancelled.page.scss'],
})
export class CancelledPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Subscribe() {
    this.router.navigate(['/subscription/start-your-free-trial']);
  }


}
