import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
@Component({
  selector: 'app-related-wisdom-stories-tiles',
  templateUrl: './related-wisdom-stories-tiles.component.html',
  styleUrls: ['./related-wisdom-stories-tiles.component.scss'],
})
export class RelatedWisdomStoriesTilesComponent implements OnInit {

  @Input()
  wisdomstories = [];

  wisdomstoriesbottom = [];

  enablewisdomstory = false;
  enable_view_more_less = false;
  view_more_less="View More"

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
    let res = localStorage.getItem("isloggedin");
    if(res && res === 'T') { 
      this.service.clickStory(item.ScenarioID).subscribe(res=>{
        this.router.navigate(['/wisdom-stories/view-stories'],{ queryParams: {sId: `${item['ScenarioID']}`}})
      })
    }else {
      this.router.navigate(['/wisdom-stories/view-stories'],{ queryParams: {sId: `${item['ScenarioID']}`}})
    }
    
  }

  toggle_view_more_less()
  {
    if(this.view_more_less == "View More")
    {
      this.enable_view_more_less = true;
      this.view_more_less = "View Less";
    }
    else
    {
      this.enable_view_more_less = false;
      this.view_more_less = "View More";
    }
  }

}
