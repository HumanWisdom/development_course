import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {UsersService} from '../users.service'

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  settingName:any
  updatedOptionValue:any
  pointValue:any
  updatedPointValue:any
  pointsList=[]
  searchedSetting:any

  sectionList=JSON.parse(localStorage.getItem("sectionList"))
  selectedSectionID:any
  selectedAssessmentID:any
  selectedQuestionID:any
  assessmentDisplayList=JSON.parse(localStorage.getItem("assessmentDisplayList"))
  assessmentSelectList=[]
  questionList=[]
  optionList=[]


  constructor(private router: Router,private service:UsersService, private location:Location) { }

  ngOnInit() {
   
  }
  selectSection(eventS){
    this.assessmentSelectList=[]
    console.log(eventS)
    this.selectedSectionID=eventS
    this.assessmentDisplayList.filter(a=>{
      if(a.SectID==eventS)
      this.assessmentSelectList.push(a)
    })
      console.log("select assessment",this.assessmentSelectList)
    
  }
  selectAssessment(event){
    this.selectedAssessmentID=event
    this.service.getQuestionsByAssessment({ "AssessmentId":this.selectedAssessmentID})
    .subscribe(res=>
      {
      console.log(res)
      this.questionList=res
      },
      error=>{
        console.log(error)
      },
      ()=>{
      
      }
    )

   
  }

  viewOptions(){
    this.service.getOptions({ "Id":parseInt(this.selectedQuestionID)}).subscribe(res=>
      {
        console.log(res)
        this.optionList=res
        

      })


  }


  initUpdate(option,point){
    this.updatedOptionValue=option
    this.updatedPointValue=point

  }
  reset(){
    this.selectedAssessmentID=""
    this.selectedSectionID=""
    this.selectedQuestionID=""
  }
  
  

  updateOption(id,qi,ca){
    this.service.addOption({ "OptionID":id,
    "OptionStr":this.updatedOptionValue,
    "QuestionID":qi,
    "CorrectAnswer":ca,
    "OptionType":"null",
    "Points":this.updatedPointValue})
    .subscribe(res=>
      {
      console.log(res)
     // this.passValue=res
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.service.getOptions({ "Id":parseInt(qi)}).subscribe(res=>
          {
            console.log(res)
            this.optionList=res
            this.reset()
            
    
          })
      }
    )
    

  }
  deleteOption(id,qid)
  {
    console.log(id)
    this.service.deleteOption({ "Id":parseInt(id)}).
    subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.service.getOptions({ "Id":parseInt(qid)}).subscribe(res=>
          {
            console.log(res)
            this.optionList=res
            
    
          })
      }
    )
  }
}

  


