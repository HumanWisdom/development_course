import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service'
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  sectionList=JSON.parse(localStorage.getItem("sectionList"))
  selectedSectionID:any
  selectedAssessmentID:any
  assessmentDisplayList=JSON.parse(localStorage.getItem("assessmentDisplayList"))
  assessmentSelectList=[]
  QuestionList=[]
  QuestionDisplayList=[]
  question:any
  allow=false
  isClicked=false
  updatedQuestion:any
  OptionValue:any
  point:any
  passedQuestionId:any
  OptionList=[]
  allowedOptionEditing=false
  correctAnswer:any

  constructor(private router: Router,private service:UsersService, private location:Location) { }

  ngOnInit() {
   // console.log(this.assessmentDisplayList)
    this.getQuestions()
  }
  selectSection(eventS){
    //this.assessmentSelectList=[]
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
  }

  getQuestions(){
    this.service.getQuestions().subscribe(res=>
      {
        console.log(res)
        this.QuestionList=res;
       
        
        this.QuestionDisplayList=this.QuestionList.map(que=>({...que, ...this.assessmentDisplayList.find(ele=> ele.AssessmentId==que.AssessID)}))
       //this.QuestionDisplayList=this.assessmentDisplayList.map(ele=>({...ele, ...this.QuestionList.find(que=> que.AssessID==ele.AssessmentId)}))
        console.log("QuestionDisplayList",this.QuestionDisplayList)
       
      
      }
    )
  }
  addQuestion(){
   this.allow=true
    this.isClicked=true
    this.service.addQuestion({ "QuestionID":0,
    "AssessmentID":this.selectedAssessmentID,
    "Question":this.question})
    .subscribe(res=>
      {
      console.log(res)
      this.passedQuestionId=res
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getQuestions()
       // this.getOptions(this.passValue)
      }
    )
  }

  deleteQuestion(id){
    console.log(id)
    this.service.deleteQuestion({ "Id":parseInt(id)}).
    subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getQuestions()
      }
    )

  }
  initUpdate(que,queId){
    console.log(queId)
    this.updatedQuestion=que
    this.getOptions(queId)
   
  }

  updateQuestion(aId,qId){
    //this.allow=true
     //this.isClicked=true
     this.service.addQuestion({ "QuestionID":qId,
     "AssessmentID":aId,
     "Question":this.updatedQuestion})
     .subscribe(res=>
       {
       console.log(res)
      // this.passValue=res
       },
       error=>{
         console.log(error)
       },
       ()=>{
         this.getQuestions()
        // this.getOptions(this.passValue)
       }
     )
   }

   addOption(){
    this.allow=true
    this.service.addOption({ "OptionID":0,
    "OptionStr":this.OptionValue,
    "QuestionID":this.passedQuestionId,
    "CorrectAnswer":this.correctAnswer,
    "OptionType":"null",
    "Points":this.point})
    .subscribe(res=>
      {
      console.log(res)
     // this.passValue=res
      },
      error=>{
        console.log(error)
      },
      ()=>{
        //this.getQuestions()
        this.getOptions(this.passedQuestionId)
      }
    )
  }


  getOptions(qId){
    this.service.getOptions({ "Id":parseInt(qId)}).subscribe(res=>
      {
        console.log(res)
        this.OptionList=res
        

      })
  }

  reset(){
    this.OptionList=[]
    this.question=""
    this.selectedSectionID=""
    this.selectedAssessmentID=""
    this.question=""

  }

  allowOptionEditing(){
    this.allowedOptionEditing=true
  }

  
}
