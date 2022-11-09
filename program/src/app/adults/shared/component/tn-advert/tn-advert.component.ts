import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tn-advert',
  templateUrl: './tn-advert.component.html',
  styleUrls: ['./tn-advert.component.scss'],
})
export class TnAdvertComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  routedashboard() 
  {
    this.router.navigate(['/adults/adult-dashboard'])
  }

}
