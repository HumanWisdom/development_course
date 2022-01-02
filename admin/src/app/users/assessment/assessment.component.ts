import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service'
import { Router } from '@angular/router';
import {Location } from '@angular/common'


@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  QTypeList=[]
  programList=JSON.parse(localStorage.getItem("programList"))
  sectionList=JSON.parse(localStorage.getItem("sectionList"))
  //moduleList=JSON.parse(localStorage.getItem("moduleList"))
  list=JSON.parse(localStorage.getItem("list"))
  updatedSectionList=[]
  selectedProgramID:any
  selectedProgram:any
  selectedSectionID:any
  selectedSection:any
  selectedAtypeID:any
  updatedAtypeID:any
  assessment:any
  assessmentList=[]
  assessmentDisplayList=[]
  updatedAssessmentName:any
  searchedProgram:any
  searchedSection:any
  searchedType:any
  selectedModuleID:any
  updatedModuleList=[]
  moduleList=JSON.parse(localStorage.getItem("moduleList"))
  appList=JSON.parse(localStorage.getItem("appList"))





  constructor(private router: Router,private service:UsersService, private location:Location) { }

  ngOnInit() {
    console.log("appList",this.appList)

    this.getQtypes()


  }




  getQtypes(){
    //console.log("in q ypes")
    this.service.getAssessmentType().subscribe(res=>
      {
        console.log("Qtypes",res)
        this.QTypeList=res;
      }
    ,
    error=>
    {console.log(error)},
    ()=>
    {this.getAssessments()

    }
    )
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


  selectQtype(event){
    console.log(event)
    this.selectedAtypeID=event

  }
  updateQtype(event){
    console.log(event)
    this.updatedAtypeID=event

  }
  initUpdate(name,typeId){
   // console.log(this.selectedAtypeID,this.updatedAtypeID)
    this.updatedAtypeID=typeId
    this.updatedAssessmentName=name
  }
  getAssessments(){
    this.service.getAssessments().subscribe(res=>
      {
        console.log(res)
        this.assessmentList=res;

        //console.log("list",this.list,"assessmentList",this.assessmentList)
        if(this.appList) this.assessmentDisplayList=this.assessmentList.map(assess=>({...assess, ...this.appList.find(element=> element.ModuleID==assess.ModuleId)}))
        else this.assessmentDisplayList = res
        this.assessmentDisplayList=this.assessmentDisplayList.map(assess=>({...assess, ...this.QTypeList.find(element=> element.AssTypeId==assess.AssTypeId)}))

        console.log("assessment Display List",this.assessmentDisplayList)
        localStorage.setItem("assessmentDisplayList",JSON.stringify(this.assessmentDisplayList))




      },
      error=>{console.log(error)},
      ()=>{
        //this.getQtypes()
      }
    )

  }

  reset(){
    this.selectedSectionID=""
    this.selectedProgramID=""
    this.selectedAtypeID=""
    this.assessment=""
  }

  addAssessment(){
    console.log(this.selectedAtypeID)
    this.service.addAssessment({ "AssessmentId":0,
    "ModuleId":this.selectedModuleID,
    "AssesTypeID":this.selectedAtypeID,
    "Assessment":this.assessment
    })
    .subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getAssessments()
      }
    )

  }

  updateAssessment(id,name,mId,AtypeId){

    this.service.addAssessment({ "AssessmentId":id,
    "ModuleId":mId,
    "AssesTypeID":this.updatedAtypeID,
    "Assessment":this.updatedAssessmentName
    })
    .subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getAssessments()
      }
    )

  }

  deleteAssessment(id){
    console.log(id)
    this.service.deleteAssessment({ "Id":parseInt(id)}).
    subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getAssessments()
      }
    )

  }

  searchProgram(){
    if(this.searchedProgram=="")
    this.getAssessments()
    else{
    this.assessmentDisplayList=this.assessmentDisplayList.filter(res=>{
      return res.Program.toLocaleLowerCase().match(this.searchedProgram.toLocaleLowerCase())
    })
  }

  }

  searchSection(){
    if(this.searchedSection=="")
    this.getAssessments()
    else{
    this.assessmentDisplayList=this.assessmentDisplayList.filter(res=>{
      return res.SectName.toLocaleLowerCase().match(this.searchedSection.toLocaleLowerCase())
    })
  }

  }

  searchType(){
    console.log(this.searchedType)
    if(this.searchedType=="")
    {
      this.getAssessments()
      //console.log("in if")

    }

    else{
     console.log("in else")
      this.assessmentDisplayList=this.assessmentDisplayList.filter(res=>{
        console.log(res)
        return res.AssType.toLocaleLowerCase().match(this.searchedType.toLocaleLowerCase())
      })
    }


  }


}
