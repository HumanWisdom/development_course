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

  wisdomstoriesbottom = [];

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
    if(this.wisdomstories.length >= 2) {
      let first = []
      this.wisdomstories.forEach((d, i) => {
        if(i !== 0 && i !== 1) {
         this.wisdomstoriesbottom.push(d)
        }else {
          first.push(d)
        }
      })
      this.wisdomstories = first
     }
  }

  viewstory(item){
    this.router.navigate(['/wisdom-stories/view-stories'],{ queryParams: {sId: `${item['ScenarioID']}`}})
  }

}
