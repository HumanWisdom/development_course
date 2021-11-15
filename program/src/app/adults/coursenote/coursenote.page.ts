import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import {AdultsService} from "../adults.service"

@Component({
  selector: 'app-coursenote',
  templateUrl: './coursenote.page.html',
  styleUrls: ['./coursenote.page.scss'],
})
export class CoursenotePage implements OnInit {
  path=this.ac.snapshot.paramMap.get('path')
  content:any
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  title="in course note"
  t=new Date()
  minDate=this.t.getFullYear()+"-"+this.addZero(this.t.getMonth()+1)+"-"+this.addZero(this.t.getDate())

  constructor(private router: Router,
    private ac:ActivatedRoute,
    private service:AdultsService,
   ) { }

  ngOnInit() {
   // console.log(this.ac.snapshot.paramMap.get('path'))
   if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
  else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
    console.log(this.userId)
  }
  addJournal(){
    console.log("adding journal")
   

    this.service.submitJournal({
      "JournalId":0,
      "JDate":this.minDate,
      "Title":this.title,
      "Notes":this.content,
      "UserId":this.userId

    }).subscribe(res=>console.log(res),
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([this.path])
    })

  }

  addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }


}
