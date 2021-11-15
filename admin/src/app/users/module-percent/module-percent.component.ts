
import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service'
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-module-percent',
  templateUrl: './module-percent.component.html',
  styleUrls: ['./module-percent.component.css']
})
export class ModulePercentComponent implements OnInit {

  programList=JSON.parse(localStorage.getItem("programList"))
  sectionList=JSON.parse(localStorage.getItem("sectionList"))
  list=JSON.parse(localStorage.getItem("list"))
  percentList=[]
  
  updatedSectionList=[]
  selectedProgramID:any
  selectedProgram:any
  selectedSectionID:any
  selectedSection:any
  
  searchedProgram:any
  searchedSection:any
  searchedModule:any
  selectedModuleID:any
  updatedModuleList=[]
  moduleList=JSON.parse(localStorage.getItem("moduleList"))
  appList=JSON.parse(localStorage.getItem("appList"))
  modulePercent:any
  mediaPercent:any
  

  constructor(private router: Router,private service:UsersService, private location:Location) { }

  ngOnInit() {
    this.getModules();
  }
  selectProgram(event){
    this.updatedSectionList=[]
    this.selectedSection=""
    this.selectedModuleID=""
    this.updatedModuleList=[]
   
    console.log(event)
    this.selectedProgramID=event
    this.programList.find(element=>{
      if(element.ID==event)
      {
       this.selectedProgram=element.Program
      }
    })
    console.log("selected Program",this.selectedProgramID,this.selectedProgram)
  
    this.sectionList.filter(a=>{
      if(a.ProgramID==this.selectedProgramID)
      this.updatedSectionList.push(a)
    })
      console.log(this.updatedSectionList)
  }

  selectSection(eventS){
    console.log(eventS)
    this.selectedSectionID=eventS
    this.selectedModuleID=""
    this.updatedModuleList=[]

   

      this.moduleList.filter(a=>{
        
        if(a.SectionID==this.selectedSectionID)
          this.updatedModuleList.push(a)
      })
        console.log(this.updatedModuleList)
    
  }

  selectModule(eventM){
    this.selectedModuleID=eventM
    console.log(this.selectedModuleID)
  }


  getModules(){
    this.service.getModulePercent().subscribe(res=>
      {
        console.log(res)
        this.percentList=res;
       
        
       
      
      }
    )

  }

  addModulePercent(){
    this.service.addModulePercent(this.selectedModuleID,this.modulePercent,this.mediaPercent)
    .subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getModules()
      }
    )

  }

  /*updateModule(moduleId,sectionId){
    this.service.addModule({ "ModuleID":moduleId,
    "SectionID":sectionId,
    "ModuleNumber":0,
    "ModuleName":this.updatedModuleName})
    .subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getModules()
      }
    )

  }

  deleteModule(id){
    console.log(id)
    this.service.deleteModule({ "Id":parseInt(id)}).
    subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getModules()
      }
    )

  }
  searchProgram(){
    if(this.searchedProgram=="")
    this.getModules()
  else{
    this.appList=this.appList.filter(res=>{
      return res.Program.toLocaleLowerCase().match(this.searchedProgram.toLocaleLowerCase())
    })
  }
    
  }

  searchSection(){
    if(this.searchedSection=="")
    this.getModules()
  else{
    this.appList=this.appList.filter(res=>{
      return res.SectName.toLocaleLowerCase().match(this.searchedSection.toLocaleLowerCase())
    })
  }

  }

  searchModule(){
    if(this.searchedModule=="")
    this.getModules()
  else{
    this.appList=this.appList.filter(res=>{
      return res.ModuleName.toLocaleLowerCase().match(this.searchedModule.toLocaleLowerCase())
    })
  }

  }*/

  reset(){
    
  }

}
