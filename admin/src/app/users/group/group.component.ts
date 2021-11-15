import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {UsersService} from '../users.service'
import { CategoryComponent } from '../category/category.component';


@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
 
})
export class GroupComponent implements OnInit {
  categoryList=JSON.parse(localStorage.getItem("categoryList"))
  programList=JSON.parse(localStorage.getItem("programList"))
  groupList=[]
  selectedCategoryId:any
  authorApprove:any
  approvalDate:any
  newGroupName:any
  selectedProgram:any
  t = new Date();
  myDate=this.t.getFullYear()+"-"+this.addZero(this.t.getMonth()+1)+"-"+this.addZero(this.t.getDate())
  searchedProgram:any
  searchedCategory:any
  searchedGroup:any

  constructor(private router: Router,private service:UsersService, private location:Location) { 
    
  }

  ngOnInit() {

    console.log(this.myDate)
    this.getCategories();
  }
  getCategories(){
    this.service.getCategories().subscribe(res=>
      {
        console.log(res)
        this.categoryList=res;
        localStorage.setItem("categoryList",JSON.stringify(this.categoryList))
        console.log(" cat list",this.categoryList)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getGroups()
      }
    )
  }

  addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  selectCategory(id){
    console.log(id)
    this.selectedCategoryId=id

  }
  selectProgram(program){
    console.log(program)
    this.selectedProgram=program
  }
  reset(){
    this.selectedProgram=""
    this.selectedCategoryId=""
    this.newGroupName=""
  }
  addGroup(){
    console.log(this.newGroupName)
    this.service.addGroup({ "WGID":0,
    "DiscCatID":this.selectedCategoryId,
    "Title":this.newGroupName,
    "wgDate":this.myDate,
    "CreatedBy":1,
    "ApprovedBy":1,
    "ApprovedOn":this.myDate,
    "Approved":1,
    "Program":this.selectedProgram,
    "Closed":0
  }).
    subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>
        {this.getGroups()}
    )
  }

  getGroups(){
    this.service.getGroups().subscribe(res=>
      {
        console.log(res)
        this.groupList=res;
       
        
        this.groupList=this.groupList.map(group=>({...group, ...this.categoryList.find(category=> category.DiscCatId==group.DiscCatId)}))
        console.log("wisdom groups List",this.groupList)
       
      
      }
    )

  }
  deleteGroup(id){
    console.log(id)
    this.service.deleteGroup({ "Id":parseInt(id)}).
    subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>
        {this.getGroups()}
    )


  }

  updateGroup(status,id,pCatId,pWgDate,pTitle,pCreatedBy,pAppDate,pProgram,pClosed){
    console.log("status",status)
    this.authorApprove=1//put user id of admin or content manager
    //console.log(status,id,pCatId,pWgDate,pTitle,pCreatedBy,pAppDate,pProgram,pClosed)
    if (status==0){
      status=1
      console.log("approving this group",this.authorApprove)
    }
    
    else{
      status=0
      console.log("unapproving this group",this.authorApprove)
    }
      
    this.service.addGroup({ "WGID":id,
    "DiscCatID":pCatId,
    "Title":pTitle,
    "wgDate":pWgDate,
    "CreatedBy":pCreatedBy,
    "ApprovedBy":this.authorApprove,
    "ApprovedOn":this.myDate,
    "Approved":status,
    "Program":pProgram,
    "Closed":pClosed
    }).
    subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>
        {this.getGroups()}
    )
  }

  searchProgram(){
    if(this.searchedProgram=="")
    this.getGroups()
  else{
    this.groupList=this.groupList.filter(res=>{
      return res.Program.toLocaleLowerCase().match(this.searchedProgram.toLocaleLowerCase())
    })
  }

  }

  searchCategory(){
    if(this.searchedCategory=="")
    this.getGroups()
  else{
    this.groupList=this.groupList.filter(res=>{
      return res.DiscCat.toLocaleLowerCase().match(this.searchedCategory.toLocaleLowerCase())
    })
  }

  }

  searchGroup(){
    if(this.searchedGroup=="")
    this.getGroups()
  else{
    this.groupList=this.groupList.filter(res=>{
      return res.Title.toLocaleLowerCase().match(this.searchedGroup.toLocaleLowerCase())
    })
  }

  }

}
