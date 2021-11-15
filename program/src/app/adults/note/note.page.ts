import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../adults.service"
import {Location } from '@angular/common'
import { Router,ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  title:any
  notes:any
  noteId=0
  t=new Date()
  minDate=this.t.getFullYear()+"-"+this.addZero(this.t.getMonth()+1)+"-"+this.addZero(this.t.getDate())
  urlNotes:any
  urlId:any
  urlTitle:any
  urlType:any
  urlPid:any
  urlMid:any
  id=0

  constructor(
    private router: Router,
    private service:AdultsService,
    private location:Location,
    private activate:ActivatedRoute
  ) {
   
  
   }

  ngOnInit() {

     
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
  else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
    console.log(this.userId)

    this.urlNotes=this.activate.snapshot.paramMap.get('jNotes')
    this.urlId=this.activate.snapshot.paramMap.get('jId')
    this.urlTitle=this.activate.snapshot.paramMap.get('title')
    this.urlType=this.activate.snapshot.paramMap.get('type')
    this.urlPid=this.activate.snapshot.paramMap.get('pId')
    this.urlMid=this.activate.snapshot.paramMap.get('mId')

    console.log(this.urlNotes,this.urlTitle,this.urlId,this.urlType)
    if(this.urlId!=0)
    {
      this.notes=this.urlNotes
      this.title=this.urlTitle
      this.id=this.urlId
    }
    
  }

  addNote(){
    console.log("adding journal")
   

    this.service.submitJournal({
      "JournalId":0,
      "JDate":this.minDate,
      "Title":this.title,
      "Notes":this.notes,
      "UserId":this.userId

    }).subscribe(res=>console.log(res),
    error=>{
      console.log(error)
    },
    ()=>{
      this.location.back()
    })
   

  }

  editJournal(){
    console.log("editing journal")
   
    this.service.submitJournal({
      "JournalId":this.urlId,
      "JDate":this.minDate,
      "Title":this.title,
      "Notes":this.notes,
      "UserId":this.userId

    }).subscribe(res=>console.log(res),
    error=>{
      console.log(error)
    },
    ()=>{
      this.location.back()
    })
    

  }

  

  editReflection(){
    console.log("editing refleciton")
   
    this.service.addReflection({ "SubscriberID":this.userId,
    "ReflectionId":this.urlId,
    "Resp":this.notes
   })//check
    .subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.location.back()
      }
      
    )
   

  }

 

  editDq(){
    console.log("editing dq")
   
    this.service.addDailyQuestion({"SubscriberID":this.userId,
    "ReflectionId":this.urlId,
    "Resp":this.notes})
    .subscribe(res=>{
      console.log(res)},
      error=>{
        console.log(error)
      },
      ()=>{
        this.location.back()
      })
   

  }


  submitProgress(){
    console.log("in progress")
      if(this.urlType=='dq')
        {
          
         this.editDq()
        }
      else if(this.urlType=='journal')
      {
       this.editJournal()
      }
      else if(this.urlType=='reflection')
      {
        console.log("in url reflection")
        this.editReflection()
      }
      else if(this.urlId==0){
          this.addNote()
        }

  }
  

  addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  

}
