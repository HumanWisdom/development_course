import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {UsersService} from '../users.service'

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.css']
})
export class KeysComponent implements OnInit {
  selectedProgramID:any
  selectedProgram:any
  numberKeys:any
  keyList:any
  list:any
  programList=JSON.parse(localStorage.getItem("programList"))
  note:any
  emailRecepient:any
  searchedKey:any
  searchedNote:any
  searchedEmail:any
  planId=1
  

  constructor(private router: Router,private service:UsersService, private location:Location) { }

  ngOnInit() {
    this.getKeys()
    console.log(this.programList)
  }
  selectProgram(event){
    console.log(event)
    this.selectedProgramID=event
    this.programList.find(element=>{
      if(element.ID==event)
      {
       this.selectedProgram=element.Program
      }
    })
    console.log("selected Program",this.selectedProgramID,this.selectedProgram)
  }

  getKeys(){
    this.service.getKeys().subscribe(res=>
      {
        console.log(res)
        this.keyList=res;
       

        this.keyList=this.keyList.map(key=>({...key, ...this.programList.find(program=> program.ID==key.ProgId)}))
        console.log(this.keyList,"key list")
      },
      error=>{
        console.log(error)
      },
      ()=>{
        
      }
    )
   

  }
  reset(){
    this.selectedProgramID=""
    this.numberKeys=""
    this.emailRecepient=""
    this.note=""
  }

  selectPlan(p)
  {
    console.log(p)
    this.planId=p
  }

  generateKey(){
    this.service.addKey({ "ActKeyId":0,
    "ProgId":this.selectedProgramID,
    "ActKey":"",
    "BoughtBy":2,
    "BoughtEmail":this.emailRecepient,
    "ConsumeDate":"",
    "ConsumeBy":0,
    "Note":this.note,
    "NoOfKeys":this.numberKeys,
    "PlanId":this.planId
    })
    .subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getKeys()
      }
    )

  }

  deleteKey(id){
    this.service.deleteKey({ "Id":parseInt(id)}).
    subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getKeys()
      }
    )


  }

  searchKey(){
    if(this.searchedKey=="")
    this.getKeys()
  else{
    this.keyList=this.keyList.filter(res=>{
      return res.ActKey.toLocaleLowerCase().match(this.searchedKey.toLocaleLowerCase())
    })
  }
  

  }

  searchNote(){
    if(this.searchedNote=="")
    this.getKeys()
  else{
    this.keyList=this.keyList.filter(res=>{
      return res.Note.toLocaleLowerCase().match(this.searchedNote.toLocaleLowerCase())
    })
  }

  }

  searchEmail(){

    if(this.searchedEmail=="")
    this.getKeys()
  else{
    this.keyList=this.keyList.filter(res=>{
      return res.ConsumedEmail.toLocaleLowerCase().match(this.searchedEmail.toLocaleLowerCase())
    })
  }

  }

}
