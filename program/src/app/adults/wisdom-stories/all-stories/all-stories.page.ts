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
          console.log(res)
          let dateres = res.sort((a, b) => b['PublishedOn'] - a['PublishedOn'])
          this.storyList=dateres.slice(0, 10)
          this.secondstoryList=dateres.slice(10)
          localStorage.setItem("storyList",JSON.stringify(this.storyList))
        }
      },
      error=>console.log(error),
      ()=>{
        this.service.readStories().subscribe(r=>{
          console.log(r)
          this.readStories= r.map(a => a.ScenarioID)
          console.log(this.readStories)
          //this.readStories=r.ScenarioID
        })
      }
    )
  }

  toRead(obj){
    console.log(obj)
    localStorage.setItem("story",JSON.stringify(obj))
    this.service.clickStory(obj.ScenarioID).subscribe(res=>{
      this.sId=obj.ScenarioID
      console.log(res)
      this.router.navigate(['/wisdom-stories/view-stories'],{ queryParams: {sId: `${this.sId}`}})
    })
    
  }

  searchStory(){
    if(this.searchedText=="")
      this.getStories()
    else if(this.searchedText!="")
    {
      this.storyList=this.storyList.filter(it => {
        return it.Story.toLowerCase().includes(this.searchedText.toLowerCase())
            || it.Title.toLowerCase().includes(this.searchedText.toLowerCase());
    });
    }
  }

}
