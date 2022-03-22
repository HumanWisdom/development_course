import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Location } from '@angular/common'
import { NgNavigatorShareService } from 'ng-navigator-share';

@Component({
  selector: 'app-toc-header',
  templateUrl: './toc-header.component.html',
  styleUrls: ['./toc-header.component.scss'],
})
export class TocHeaderComponent implements OnInit {
  @Input() tocImage: string;
  @Input() tocColor: string;
  @Input() tocAlt: string;
  path=this.router.url

  constructor(private ngNavigatorShareService: NgNavigatorShareService,
    private router: Router ,
    private location: Location) { }

  ngOnInit() {}
  goBack(){
    this.location.back()
  }

  share(){
    this.ngNavigatorShareService.share({
      title: 'Human Wisdom Program',
      text: 'Hey, check out the Human Wisdom Program',
      url: this.path
    }).then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }
}
