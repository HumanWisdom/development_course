import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-all-stories',
  templateUrl: './all-stories.page.html',
  styleUrls: ['./all-stories.page.scss'],
})
export class AllStoriesPage implements OnInit {
  storyList=[]
  searchstoryList=[]
  secondstoryList=[]
  readStories=[]
  searchedText:any
  sId:any

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
    this.getStories()
  
  }
  goBack(){
    this.location.back()
  }
  getStories(){
    this.service.getScenarios().subscribe(res=>
      {
        if(res) {
          
          let dateres = res.sort((a, b) => b['PublishedOn'] - a['PublishedOn'])
          this.storyList=dateres.slice(0, 10)
          this.secondstoryList=dateres.slice(10)
          this.searchstoryList = dateres;
          localStorage.setItem("storyList",JSON.stringify(this.storyList))
        }
      },
      error=>console.log(error),
      ()=>{
        let res = localStorage.getItem("isloggedin");
        if(res && res === 'T') { 
          this.service.readStories().subscribe(r=>{
            this.readStories= r.map(a => a.ScenarioID)
            //this.readStories=r.ScenarioID
          })
        }
      }
    )
  }

  toRead(obj){
    localStorage.setItem("story",JSON.stringify(obj))
    let res = localStorage.getItem("isloggedin");
    this.sId=obj.ScenarioID
    if(res && res === 'T') {
      this.service.clickStory(obj.ScenarioID).subscribe(res=>{
        
        this.router.navigate(['/wisdom-stories/view-stories'],{ queryParams: {sId: `${this.sId}`}})
      })
    }  else {
      this.router.navigate(['/wisdom-stories/view-stories'],{ queryParams: {sId: `${this.sId}`}})
    }
    
  }

  searchStory(){
      let filterlist =this.searchstoryList.filter(it => it.Title.toLowerCase().includes(this.searchedText.toLowerCase()));
      this.storyList=filterlist.slice(0, 10)
      this.secondstoryList=filterlist.slice(10);
  }

}
