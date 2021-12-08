import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-related-wisdom-stories-tiles',
  templateUrl: './related-wisdom-stories-tiles.component.html',
  styleUrls: ['./related-wisdom-stories-tiles.component.scss'],
})
export class RelatedWisdomStoriesTilesComponent implements OnInit {

  @Input()
  wisdomstories = [];

  constructor(private router: Router) { }

  ngOnInit() {}

  viewstory(item){
    this.router.navigate(['/wisdom-stories/view-stories'],{ queryParams: {sId: `${item['ScenarioID']}`}})
  }

}
