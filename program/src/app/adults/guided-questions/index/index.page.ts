import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdultsService } from '../../adults.service';
import {Location } from '@angular/common'

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  journalList=[]
  reflectionList=[]
  dailyQuestion:any
  dailyResponse:any
  dailyId:any
  isDiary:boolean=true;
  updateDailyId:any
  isGuidedQueestionsTab:boolean=false;
  d:any
  jrList=[]
  jrListC=[]
  topic=[];
  searchedText:any

  constructor(private router: Router, 
    private rout:ActivatedRoute,private service: AdultsService, private location:Location) { }

  ngOnInit() {
    if(this.saveUsername==false)
      this.userId=JSON.parse(sessionStorage.getItem("userId"))
   else{
    this.userId=JSON.parse(localStorage.getItem("userId"))
    this.viewJournalAndReflections();
    this.getDailyQuestion();
   }
   var isGuid=  this.rout.snapshot.queryParamMap.get("isGuided");
   if(isGuid && isGuid=='true'){
     this.GetGuidedQs_Topics();
     this.isGuidedQueestionsTab=true;
     this.isDiary=false;
   }
  }

  viewJournalAndReflections(){
    this.service.viewJournal(this.userId)
    .subscribe(res=>{
      this.jrList=res
      this.jrList.sort((val1, val2)=> {return <any>new Date(val2.Date) - <any>new  Date(val1.Date)})
      this.jrListC=this.jrList
    });
  }
  showGuidedQuestions(){
    this.jrList=this.jrListC.filter(p=>p.JrType=="Guided Questions");
  }
 

  goToNote(jId,jTitle,jNotes,type){
    this.router.navigate(['/adults/note',
    {title:jTitle,jId:jId,jNotes:jNotes,type:type}])
  }
  Note(){
    return false;
  }
  note(){
    this.router.navigate(['/adults/note'])

  }
  
  RouteToToQuestions(item){
    let url = `/journal${item.Landing_URL}`
    this.router.navigate([url])
   // this.router.navigate(['/journal/introduction'],{state:{"data":JSON.stringify(item)}})
  }


  getDailyQuestion(){
    this.service.getDailyQuestion(this.userId)
    .subscribe(res=>{
      console.log("daily",res)
      this.d=res
      this.dailyQuestion=res[0].Qtn
      this.dailyResponse=res[0].Ans
     /* if(this.dailyResponse==null)
        this.dailyResponse="Start Typing"*/
      this.dailyId=res[0].QueId
      console.log(this.dailyQuestion,this.dailyResponse)
      
    },
    error=>{
      console.log(error)
    })

  }

  addDailyQuestion(id){
    console.log(id,this.dailyResponse)
    this.service.addDailyQuestion({"SubscriberID":this.userId,
    "ReflectionId":id,
    "Resp":this.dailyResponse})
    .subscribe(res=>{
      
      
      
    },
    error=>{
      console.log(error)
    })


  }
  NavigateToQuestions(data){
    this.router.navigate(['/guidedquestions'],{queryParams:{"Qid":data.ProgId,"Attempt":data.UserReflectionID}})
  }
  GoToQuestions(data){
    if(data.JrType=="Guided Questions"){
      this.NavigateToQuestions(data);
    }else{
      this.goToNote(data.RowId,data.TitleQue,data.Response,data.JrType);
    }
  }
  YourDiary(){
    this.isDiary=true;
    this.isGuidedQueestionsTab=false;
    this.viewJournalAndReflections()
    this.getDailyQuestion()
  }
  GuidedQuestionTab(){
  this.isDiary=false;
  this.isGuidedQueestionsTab=true;
  this.GetGuidedQs_Topics();
  }
  searchText($event){
    if($event.target.value==""){
      this.viewJournalAndReflections()
    }
    else if($event.target.value!="")
    {
      this.jrList= this.jrListC.filter(it =>  it?.Response?.toLowerCase().includes($event.target.value.toLowerCase())
            || it?.TitleQue?.toLowerCase().includes($event.target.value.toLowerCase())
    );
  }
}

  showAll(){
    this.viewJournalAndReflections()
  }

  showReflections(){
    this.jrList=this.jrListC.filter(p=>p.JrType=="Reflections");
  }
  showNotes(){
    this.jrList=this.jrListC.filter(p=>p.JrType=="Diary");
  }

  GetGuidedQs_Topics(){
    this.service.GetGuidedQs_Topics().subscribe(res=>{
    this.topic=res;
    });
  }
  goBack(){
    this.location.back();
  }
}
