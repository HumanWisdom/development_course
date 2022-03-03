import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from 'src/app/adults/adults.service';

@Component({
  selector: 'app-related-wisdom-stories-tiles',
  templateUrl: './related-wisdom-stories-tiles.component.html',
  styleUrls: ['./related-wisdom-stories-tiles.component.scss'],
})
export class RelatedWisdomStoriesTilesComponent implements OnInit {

  @Input()
  wisdomstories = [];

  wisdomstoriesbottom = [];

  enablewisdomstory = false

  constructor(private router: Router,private service:AdultsService) { 
    
  }

  ngOnInit() {
    if(this.wisdomstories.length >= 2) {
      this.enablewisdomstory = true
      let first = []
      this.wisdomstories.forEach((d, i) => {
        if(i !== 0 && i !== 1) {
         this.wisdomstoriesbottom.push(d)
        }else {
          first.push(d)
        }
      })
      this.wisdomstories = first
     }else if(this.wisdomstories.length === 1) {
      this.enablewisdomstory = true
     }
     console.log(this.wisdomstories)
  }

  viewstory(item){
    localStorage.setItem("story",JSON.stringify(item))
    this.service.clickStory(item.ScenarioID).subscribe(res=>{
      this.router.navigate(['/wisdom-stories/view-stories'],{ queryParams: {sId: `${item['ScenarioID']}`}})
    })
  }

}
