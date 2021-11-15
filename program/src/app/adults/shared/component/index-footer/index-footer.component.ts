import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AdultsService} from "../../../../adults/adults.service"
@Component({
  selector: 'app-index-footer',
  templateUrl: './index-footer.component.html',
  styleUrls: ['./index-footer.component.scss'],
})
export class IndexFooterComponent implements OnInit {

  constructor(private router: Router,
    private service:AdultsService) { }

  ngOnInit() {}
  routeDash(){
    this.router.navigate(['/adults/adult-dashboard'])
  }
  routeJournal(){
    this.router.navigate(['/adults/journal'])
  }

}
