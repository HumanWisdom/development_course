import { Component, OnInit,ViewChildren,ElementRef,QueryList } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {UsersService} from '../users.service'

@Component({
  selector: 'app-scenarios',
  templateUrl: './scenarios.component.html',
  styleUrls: ['./scenarios.component.css']
})
export class ScenariosComponent implements OnInit {
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
  
 
  @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef>;
  @ViewChildren("checkboxModule") checkboxModule: QueryList<ElementRef>;
  @ViewChildren("updatecheckboxesModule") updatecheckboxesModule: QueryList<ElementRef>;

  constructor(private router: Router,private service:UsersService, private location:Location) { }

  ngOnInit() {
    this.getTags()
    this.getScenarios()
  }

  getTags(){
    this.service.getTags().subscribe(res=>
      {
        console.log(res)
        this.tagList=res;
        console.log("tag List",this.tagList)
       // localStorage.setItem("programList",JSON.stringify(this.programList))
      
      }
    )
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

  uncheck(){
    this.tagsForScenario=[]
    this.selectedModules=[]
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = false;
    });
    this.checkboxModule.forEach((element) => {
      element.nativeElement.checked = false;
    });
  }

  isChecked(id) {
    console.log(id)
    //return (this.toUpdateTags.indexOf(""+id+"") != -1) ? true : false;
    if(this.toUpdateTags.indexOf(""+id+"") != -1){
      //this.updateChecked.push(id)
      //console.log("update checked",this.updateChecked)
      return true
    }
    else
      return false
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

  searchTag(){
    if(this.searchedTag=="")
    this.getScenarios()
  else{
    this.scenarioList=this.scenarioList.filter(res=>{
      return res.TAGs.toLocaleLowerCase().match(this.searchedTag.toLocaleLowerCase())
      
    })
  }

  }

  add(){  
    console.log(this.tagsForScenario)
  }
 
  selectExclusion(value){
    this.selectedExclusion=value
    console.log(this.selectedExclusion)
  }

  getScenarios(){
    this.service.getScenarios().subscribe(res=>
      {
        console.log(res)
        //res.TagIds.split(",")
        this.scenarioList=res;
        // this.scenarioList.forEach(x=>{
        //   x.TagIds=x.TagIds.split(",")
        // })
        console.log("Scenario List",this.scenarioList)
       // localStorage.setItem("programList",JSON.stringify(this.programList))
      }
    )
  }
  reset(){
    this.newTitle=""
    this.newStory=""
    this.newView=""
    this.newTakeaway=""
    this.selectedExclusion=null
  
    this.uncheck()
  }

  addScenario(){
    this.service.addScenario({ "ScenarioID":0,
    "Title":this.newTitle,
    "Story":this.newStory,
    "View":this.newView,
    "KeyTakeAway":this.newTakeaway,
    "ExclFromChild":this.selectedExclusion,
    "TagIDs":this.tagsForScenario.toString(),
    "Msg":this.newMessage,
    "ImgPath":this.imagePath,
    "ModIDs":this.selectedModules.toString()
      })
    .subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getScenarios()
      }
    )

  }
  initUpdate(id,title,story,view,takeaway,exclusion,tags,img,message,modIds){
    console.log("inital",id,title,story,view,takeaway,exclusion,tags)
    this.updatedTitle=title
    this.updatedStory=story
    this.updatedView=view
    this.updatedTakeaway=takeaway
    this.updatedImagePath=img
    this.updatedMessage=message
    //this.updatedExclusion=exclusion
    if(exclusion=="False")
      this.updatedExclusion=0
    else
      this.updatedExclusion=1
    this.toUpdateTags=tags.split(',')
    console.log(this.toUpdateTags)
    this.updatedModules=modIds.split(",").map(Number)
    console.log(this.updatedModules)
    
    //console.log("updated",this.updatedTitle,this.updatedStory, this.updatedView,this.updatedTakeaway,this.updatedExclusion)
  }

  updateScenario(id){
    this.service.addScenario({ "ScenarioID":id,
    "Title":this.updatedTitle,
    "Story":this.updatedStory,
    "View":this.updatedView,
    "KeyTakeAway":this.updatedTakeaway,
    "ExclFromChild":this.updatedExclusion,
    "TagIDs":this.updatedTagsForScenario.toString(),
    "Msg":this.updatedMessage,
    "ImgPath":this.updatedImagePath,
    "ModIDs":this.updatedModules.toString()})
    .subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getScenarios()
      }
    )

  }

  deleteScenario(id){
    console.log(id)
    this.service.deleteScenario({ "Id":parseInt(id)}).
    subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getScenarios()
      }
    )


  }
 

}
