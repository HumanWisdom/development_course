import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {UsersService} from '../users.service'

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tagList=[]
  newTagName:any
  updatedTagName:any
  searchedTag:any

  constructor(private router: Router,private service:UsersService, private location:Location) { }

  ngOnInit() {
    this.getTags()
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
  searchTag(){
    if(this.searchedTag=="")
    this.getTags()
  else{
    this.tagList=this.tagList.filter(res=>{
      return res.TagName.toLocaleLowerCase().match(this.searchedTag.toLocaleLowerCase())
    })
  }
  

  }

  reset(){
    this.newTagName=""
  }

  addTag(){
    console.log(this.newTagName)
    this.service.addTag({ "TagId":0,"Tagname":this.newTagName}).
    subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>
        {this.getTags()}
    )
  }

  deleteTag(id){
    console.log(id)
    this.service.deleteTag({ "Id":parseInt(id)}).
    subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>
        {this.getTags()}
    )


  }

  updateTag(id){
    console.log(this.updatedTagName)
    this.service.addTag({ "TagId":id,"Tagname":this.updatedTagName}).
    subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>
        {this.getTags()}
    )
  }

  initUpdate(name){
    this.updatedTagName=name
  }
  

}
