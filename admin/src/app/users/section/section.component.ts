import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {UsersService} from '../users.service'
import { Identifiers } from '@angular/compiler/src/render3/r3_identifiers';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  programList=JSON.parse(localStorage.getItem("programList"))
  sectionList=JSON.parse(localStorage.getItem("sectionList"))
  list=[]
  selectedProgramID:any
  selectedProgram:any
  newSectionName:any
  updatedSectionName:any
  searchedProgram:any
  searchedSection:any
  

  constructor(private router: Router,private service:UsersService, private location:Location) { }

  ngOnInit() {
    
   console.log("programList",this.programList,"sectionList",this.sectionList)
   
  
  //add program name to section list
    this.addProgramName()
  
  }
  addProgramName(){
    this.list=this.sectionList.map(section=>({...section, ...this.programList.find(program=> program.ID==section.ProgramID)}))
    console.log("list",this.list)
    localStorage.setItem("list",JSON.stringify(this.list))


  }
 
  selectProgram(event){
    console.log(event)
    this.selectedProgramID=event
    this.programList.find(element=>{
      if(element.ID==event)
      {
       this.selectedProgram=element.Program
      }
    })
    console.log("selected Program",this.selectedProgramID,this.selectedProgram)
  }

  addSection(){
    this.service.addSection({ "SectId":0,
    "ProgramID":this.selectedProgramID,
    "SectNo":0,
    "SectName":this.newSectionName})
    .subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getSections()
      }
    )

  }

  updateSection(sectionId,programId){
    this.service.addSection({ "SectId":sectionId,
    "ProgramID":programId,
    "SectNo":0,
    "SectName":this.updatedSectionName})
    .subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getSections()
      }
    )

  }

  deleteSection(id){
    console.log(id)
    this.service.deleteSection({ "Id":parseInt(id)}).
    subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getSections()
      }
    )


  }

  getSections(){
    this.service.getSections().subscribe(res=>
      {
        console.log(res)
        this.sectionList=res;
       
        console.log(this.sectionList,"section list")
        localStorage.setItem("sectionList",JSON.stringify(this.sectionList))
       
      
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.addProgramName()
      }
    )
   
  }
  searchProgram(){
    if(this.searchedProgram=="")
    this.getSections()
  else{
    this.list=this.list.filter(res=>{
      return res.Program.toLocaleLowerCase().match(this.searchedProgram.toLocaleLowerCase())
    })
  }

  }

  reset(){
    this.newSectionName=""
    this.selectedProgram=""
    this.selectedProgramID=""
    
  }
  searchSection(){
    if(this.searchedSection=="")
    this.getSections()
  else{
    this.list=this.list.filter(res=>{
      return res.SectName.toLocaleLowerCase().match(this.searchedSection.toLocaleLowerCase())
    })

  }
  
  
}

  
 

}
