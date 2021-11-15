import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {UsersService} from '../users.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryList=[]
  newCategoryName:any
  updatedCategoryName:any
  searchedCategory:any

  constructor(private router: Router,private service:UsersService, private location:Location) { }

  ngOnInit() {
    this.getCategories()
  }
  getCategories(){
    this.service.getCategories().subscribe(res=>
      {
        console.log(res)
        this.categoryList=res;
        localStorage.setItem("categoryList",JSON.stringify(this.categoryList))
        console.log(" cat list",this.categoryList)
      }
    )
  }

  reset(){
    this.newCategoryName=""
  }

  addCategory(){
    console.log(this.newCategoryName)
    this.service.addCategory({ "DiscCatId":0,"DiscCat":this.newCategoryName}).
    subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>
        {this.getCategories()}
    )
  }
  deleteCategory(id){
    console.log(id)
    this.service.deleteCategory({ "Id":parseInt(id)}).
    subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>
        {this.getCategories()}
    )


  }
  updateCategory(id){
    console.log(this.updatedCategoryName)
    this.service.addCategory({ "DiscCatId":id,"DiscCat":this.updatedCategoryName}).
    subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>
        {this.getCategories()}
    )
  }

  searchCategory(){
    if(this.searchedCategory=="")
    this.getCategories()
    else{
    this.categoryList=this.categoryList.filter(res=>{
      return res.DiscCat.toLocaleLowerCase().match(this.searchedCategory.toLocaleLowerCase())
    })
  }

  }


}
