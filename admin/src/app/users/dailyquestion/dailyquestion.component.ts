import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service'
import { Router } from '@angular/router';
import {Location } from '@angular/common'


@Component({
  selector: 'app-dailyquestion',
  templateUrl: './dailyquestion.component.html',
  styleUrls: ['./dailyquestion.component.css']
})
export class DailyquestionComponent implements OnInit {
  programList=JSON.parse(localStorage.getItem("programList"))
  sectionList=JSON.parse(localStorage.getItem("sectionList"))
  moduleList=JSON.parse(localStorage.getItem("moduleList"))
  list=this.sectionList.map(section=>({...section, ...this.programList.find(program=> program.ID==section.ProgramID)}))
  appList=this.moduleList.map(module=>({...module, ...this.list.find(element=> element.SectID==module.SectionID)}))

  updatedSectionList=[]
  updatedModuleList=[]
  displayReflectionList=[]
  disList=[]
  selectedProgramID:any
  selectedProgram:any
  selectedSectionID:any
  selectedSection:any
  selectedModuleID:any
  reflectionQuestion:any
  updatedQuestion:any
  searchedProgram:any
  searchedSection:any
  searchedQuestion:any
  dailyQuestion:any
  

  

  constructor(private router: Router,private service:UsersService, private location:Location) { }

  ngOnInit() {
    this.getDailyQuestions()
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
    console.log("selectedSectionID",eventS)
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

  getReflections(){
    this.service.getReflections().subscribe(res=>
      {
        console.log(res)
        this.disList=res
       // appList=this.moduleList.map(module=>({...module, ...this.list.find(element=> element.SectID==module.SectionID)}))
        this.displayReflectionList=this.disList.map(dis=>({...dis, ...this.appList.find(element=> element.SectionID==dis.SectionId)}))
        console.log(this.displayReflectionList)
       
       
      
      }
    )
  }

  getDailyQuestions(){
    this.service.getDailyQuestion().subscribe(res=>
      {
        console.log(res)
        this.disList=res
        
       // appList=this.moduleList.map(module=>({...module, ...this.list.find(element=> element.SectID==module.SectionID)}))
        //this.displayReflectionList=this.disList.map(dis=>({...dis, ...this.appList.find(element=> element.SectionID==dis.SectionId)}))
        //console.log(this.displayReflectionList)
       
       
      
      }
    )

  }

  addReflection(){
    //this.reset()
    this.service.addReflection({ "ReflectionId":0,
    "ProgID":parseInt(this.selectedProgramID),
    "ModuleId":parseInt(this.selectedModuleID),
    "SectID":parseInt(this.selectedSectionID),
    "DlyQtn":1,
    "SurveyQtn":0,
    "Que":this.reflectionQuestion})
    .subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.reset()
        this.getDailyQuestions()
      }
    )
  }

  deleteReflection(id){
    console.log(id)
    this.service.deleteReflection({ "Id":parseInt(id)}).
    subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getDailyQuestions()
      }
    )

  }
  
  updateReflection(programId,sectionId,reflectionId){
    this.service.addReflection({ "ReflectionId":reflectionId,
    "ProgID":programId,
    "SectID":sectionId,
    "Que":this.updatedQuestion,
    "DlyQtn":1,
    "SurveyQtn":0,})
    .subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getDailyQuestions()
      }
    )

  }

  
 
  searchProgram(){
    if(this.searchedProgram=="")
    this.getReflections()
    else{
    this.displayReflectionList=this.displayReflectionList.filter(res=>{
      return res.Program.toLocaleLowerCase().match(this.searchedProgram.toLocaleLowerCase())
    })
  }

  }

  searchSection(){
    if(this.searchedSection=="")
    this.getReflections()
    else{
    this.displayReflectionList=this.displayReflectionList.filter(res=>{
      return res.SectName.toLocaleLowerCase().match(this.searchedSection.toLocaleLowerCase())
    })
  }

  }

  searchQuestion(){
    if(this.searchedSection=="")
    this.getReflections()
    else{
    this.displayReflectionList=this.displayReflectionList.filter(res=>{
      return res.Question.toLocaleLowerCase().match(this.searchedQuestion.toLocaleLowerCase())
    })
  }

  }

  reset(){
    this.selectedProgramID=""
    this.selectedSectionID=""
    this.selectedModuleID=""
    this.reflectionQuestion=""
  }


  

  

}
