import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  tagList=[]
  toUpdateTags=[]
  updatedTagsForScenario=[]
  tagsForScenario=[]
  scenarioList=[]
  selectedExclusion=false
  updatedExclusion:any
  exclusionValues=[{value:1,face:"true"},
  {value:0,face:"false"}]

  newTitle:any
  updatedTitle:any
  newStory:any
  updatedStory:any
  newView:any
  updatedView:any
  newTakeaway:any
  updatedTakeaway:any
  searchedTitle:any
  searchedTag:any
  newMessage:any
  appList=JSON.parse(localStorage.getItem("appList"))
  selectedModules=[]
  imagePath:any
  updatedModules=[]
  updatedImagePath:any
  updatedMessage:any
  blogID:any

  constructor(private router: Router,private service:UsersService) { }

  ngOnInit() {
    this.getScenarios()
  }


  onChange(id,check){
    console.log(id,check)

   /* if(update==1 && first==1)
    {
      //this.tagsForScenario.push(this.toUpdateTags)
      this.toUpdateTags.forEach(e=>{
        this.tagsForScenario.push(e)
      })
      console.log(this.tagsForScenario)
      first=1
    }*/


    if(check==true)
      this.tagsForScenario.push(id)

    if(check==false)
    {
      const index: number = this.tagsForScenario.indexOf(id);
      //console.log("index to delete",index,id)
      this.tagsForScenario.splice(index,1)
    }
    console.log("tagsForScenario",this.tagsForScenario)
  }

  selectModule(id,check){
    console.log(id,check)




    if(check==true)
      this.selectedModules.push(id)

    if(check==false)
    {
      const index: number = this.selectedModules.indexOf(id);
      //console.log("index to delete",index,id)
      this.selectedModules.splice(index,1)
    }
    console.log("module list",this.selectedModules)
  }



  onUpdate(id,check){
    console.log(id,check)
    if(check==true)
      this.updatedTagsForScenario.push(id)

    if(check==false)
    {
      const index: number = this.tagsForScenario.indexOf(id);
      //console.log("index to delete",index,id)
      this.updatedTagsForScenario.splice(index,1)
    }
    console.log("updatedtagsForScenario",this.updatedTagsForScenario)
  }

  onUpdateModule(id,check){
    console.log(id,check)
    if(!this.updatedModules.includes(id))
    {
      if(check==true)
        this.updatedModules.push(id)

    }


    if(check==false)
    {
      const index: number = this.selectedModules.indexOf(id);
      //console.log("index to delete",index,id)
      this.updatedModules.splice(index,1)
    }
    console.log("updatedModules",this.updatedModules)
  }

  searchTitle(){
    if(this.searchedTitle=="")
    this.getScenarios()
  else{
    this.scenarioList=this.scenarioList.filter(res=>{
      return res.Title.toLocaleLowerCase().match(this.searchedTitle.toLocaleLowerCase())

    })
  }

  }

  searchBlog(){
    if(this.searchedTag=="")
    this.getScenarios()
  else{
    this.scenarioList=this.scenarioList.filter(res=>{
      return res.Story.toLocaleLowerCase().match(this.searchedTag.toLocaleLowerCase())

    })
  }

  }

  getScenarios(){
    this.service.getBlog().subscribe(res=>
      {
        //res.TagIds.split(",")
        this.scenarioList=res;
        // this.scenarioList.forEach(x=>{
        //   x.TagIds=x.TagIds.split(",")
        // })
       // localStorage.setItem("programList",JSON.stringify(this.programList))
      }
    )
  }
  reset(){
    this.newTitle=""
    this.newStory=""
    this.imagePath=""
  }

  addScenario(){
    this.service.addBlog({
    "Title":this.newTitle,
    "Blog":this.newStory,
    "ImgPath":this.imagePath,
    "BlogID": ''
      })
    .subscribe(res=>
      {
      console.log(res)
      this.reset()
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getScenarios()
      }
    )

  }
  initUpdate(id,title,story,img){
    this.updatedTitle=title
    this.updatedStory=story
    this.blogID = id
    this.updatedImagePath=img

    //console.log("updated",this.updatedTitle,this.updatedStory, this.updatedView,this.updatedTakeaway,this.updatedExclusion)
  }

  updateScenario(id){
    this.service.addBlog({
    "Title":this.updatedTitle,
    "Blog":this.updatedStory,
    "ImgPath":this.updatedImagePath,
    "BlogID": this.blogID})
    .subscribe(res=>
      {
      },
      error=>{
        console.log(error.error.Message)
        window.alert(error.error.Message)
      },
      ()=>{
        window.alert('Blog updated successfully')
        this.getScenarios()
      }
    )

  }

  deleteScenario(id){
    this.service.deleteBlog({ "Id":parseInt(id)}).
    subscribe(res=>
      {
      },
      error=>{
        console.log(error)
      },
      ()=>{
        window.alert('Blog deleted successfully')
        this.getScenarios()
      }
    )


  }


}
