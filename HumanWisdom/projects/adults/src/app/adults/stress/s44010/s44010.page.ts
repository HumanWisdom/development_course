import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s44010',
  templateUrl: './s44010.page.html',
  styleUrls: ['./s44010.page.scss'],
})
export class S44010Page implements OnInit {

  bg_tn="bg_dark_blue"
  bg_cft="bg_dark_blue"
  cause1:any
  cause2:any
  cause3:any
  optionList1:any
  optionList2:any
  optionList3:any
  questionA:any
  qrList=JSON.parse(localStorage.getItem("qrList"))
  r1:any
  r2:any
  r3:any
  s1:any
  s2:any
  s3:any

  

  constructor() { }

  ngOnInit() {
    this.questionA=this.qrList.ListOfQueOpts
    this.cause1=this.findQuestion(161).Question
    this.optionList1=this.findQuestion(161).optionList
    this.cause2=this.findQuestion(162).Question
    this.optionList2=this.findQuestion(162).optionList
    this.cause3=this.findQuestion(163).Question
    this.optionList3=this.findQuestion(163).optionList
    
  }
  findQuestion(q){
    var optionList=[]
    console.log(q,"questionId")
    for(var i=0;i<this.questionA.length;i++)
    {
      if(this.questionA[i].CorrectAns=="0")
        this.questionA[i].CorrectAns=false
      else
        this.questionA[i].CorrectAns=true
     

      if(q==this.questionA[i].QueId)
      {
       
        var question=this.questionA[i].Que
       
        optionList.push(this.questionA[i])
      
       //this.optionList.push(this.questionA[i])
 
      }
      
       
    }
    console.log(question,optionList)
    return({"Question":question,"optionList":optionList})

  }
  printCause1(e1){
    console.log(e1)
    this.cause1=e1
  }

  printCause2(e2){
    console.log(e2)
    this.cause2=e2
  }
  printCause3(e3){
    console.log(e3)
    this.cause3=e3
  }
  receiveRating(e){
    e=JSON.parse(e)
    switch(e.Id){
      case "1":{
        this.r1=e.Rating
        this.s1=this.optionList1.find(x=>x.Points==e.Rating).OptId
        console.log("selected rating",this.s1)
        break;

      }
      case "2":{
        console.log(e)
        this.r2=e.Rating
        this.s2=this.optionList2.find(x=>x.Points==e.Rating).OptId
        console.log("selected rating",this.s2)
        break;

      }
      case "3":{
        this.r3=e.Rating
        this.s3=this.optionList3.find(x=>x.Points==e.Rating).OptId
        console.log("selected rating",this.s3)
        break;

      }
      default:{
        console.log("week")
        break;
      }
    }
  }
  submitProgress(){
    var a=[{"Qtnd":161,"Qtn":this.cause1,"Optiond":this.s1},
    {"Qtnd":162,"Qtn":this.cause2,"Optiond":this.s2},
    {"Qtnd":163,"Qtn":this.cause3,"Optiond":this.s3},
  ]
    console.log(a)
  }
  prev(){}
  

}
