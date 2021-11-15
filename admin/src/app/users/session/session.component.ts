import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  fromId:any
  toId:any
  sessionName:any
  sessionNumber:any
  sessionList=[]

  updatedSessionNo:any
  updatedSessionName:any
  updatedFrom:any
  updatedTo:any

  constructor(private service:UsersService) { }

  ngOnInit() {
    this.getSession()
  }
  reset(){
    this.sessionName=""
    this.sessionNumber=""
    this.fromId=""
    this.toId=""
  }

  addSession()
  {
    this.service.setSession(this.sessionNumber,this.sessionName,this.fromId,this.toId)
    .subscribe(
      r=>console.log(r)
    )
    
  }

  getSession(){
    this.service.getSessions().subscribe(res=>
      {
        console.log(res)
        this.sessionList=res;
      })
    

  }

  initUpdate(no,name,from,to){
    this.updatedSessionNo=no
    this.updatedSessionName=name
    this.updatedTo=to
    this.updatedFrom=from

  }
  updateSession(e){
    //console.log(e)
    this.service.updateSession(e.SessionNo,this.updatedSessionNo,this.updatedSessionName,this.updatedFrom,this.updatedTo)
    .subscribe(
      r=>console.log(r)
    ,
    e=>console.log(e),
    ()=>{
      this.getSession()
    })
  }

}
