import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../../../../../shared/services/shared.service';
import { Constant } from '../../../../../../shared/services/constant';

@Component({
  selector: 'app-cancelled',
  templateUrl: './cancelled.page.html',
  styleUrls: ['./cancelled.page.scss'],
})
export class CancelledPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  NewSubscription() {
    SharedService.setDataInLocalStorage(Constant.isFromCancelled,'T');
    this.router.navigate(['/subscription/start-your-free-trial']);
  }


}
