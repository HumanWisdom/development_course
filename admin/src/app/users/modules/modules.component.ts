import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service'
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {
  programList=JSON.parse(localStorage.getItem("programList"))
  sectionList=JSON.parse(localStorage.getItem("sectionList"))
  list=JSON.parse(localStorage.getItem("list"))
  moduleList=[]
  appList=[]
  updatedSectionList=[]
  selectedProgramID:any
  selectedProgram:any
  selectedSectionID:any
  selectedSection:any
  newModuleName:any
  updatedModuleName:any
  searchedProgram:any
  searchedSection:any
  searchedModule:any

  constructor(private router: Router,private service:UsersService, private location:Location) { }

  ngOnInit() {
    this.getModules();
  }
  selectProgram(event){
    this.updatedSectionList=[]
    this.selectedSection=""
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
    
  }

  getModules(){
    this.service.getModules().subscribe(res=>
      {
        console.log(res)
        this.moduleList=res;
       
        console.log("list",this.list,"moduleList",this.moduleList)
        this.appList=this.moduleList.map(module=>({...module, ...this.list.find(element=> element.SectID==module.SectionID)}))
        localStorage.setItem("appList",JSON.stringify(this.appList))
        console.log("app List",this.appList)
       
      
      }
    )

  }

  addModule(){
    this.service.addModule({ "ModuleID":0,
    "SectionID":this.selectedSectionID,
    "ModuleNumber":0,
    "ModuleName":this.newModuleName})
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

  updateModule(sectionId,moduleId){
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

  }

  reset(){
    this.selectedSectionID=""
    this.selectedProgramID=""
    this.newModuleName=""
  }

}
