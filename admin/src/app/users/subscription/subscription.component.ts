import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service'
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  subList=[]
  subDisplayList=[]
  //subDisplayFList=[]

  programList=JSON.parse(localStorage.getItem("programList"))
  displayUserList=JSON.parse(localStorage.getItem("displayUserList"))
  searchedProgram:any
  searchedSubscriber:any

  constructor(private router: Router,private service:UsersService, private location:Location) { }

  ngOnInit() {
    this.getSubscribers();
    //console.log(this.displayUserList)
  }

  getSubscribers(){
    this.service.getSubscribers().subscribe(res=>
      {
        console.log(res)
        this.subList=res;
        this.subDisplayList=this.subList.map(sub=>({...sub, ...this.programList.find(element=> element.ID==sub.ProgId)}))
       // this.subDisplayFList=this.subDisplayList.map(subf=>({...subf, ...this.displayUserList.find(elements=> elements.UserID==subf.Userid)}))
       //  this.subDisplayList=this.subDisplayList.map(subf=>({...subf, ...this.displayUserList.find(elements=> elements.UserID==subf.Userid)}))
        
        console.log(this.subDisplayList)
       
       
       
      
      }
    )

  }

  searchProgram(){
    if(this.searchedProgram=="")
    this.getSubscribers()
  else{
    this.subList=this.subList.filter(res=>{
      return res.Program.toLocaleLowerCase().match(this.searchedProgram.toLocaleLowerCase())
    })
  }

  }

  searchSubscriber(){
    if(this.searchedSubscriber=="")
    this.getSubscribers()
  else{
    this.subList=this.subList.filter(res=>{
      return res.UserName.toLocaleLowerCase().match(this.searchedProgram.toLocaleLowerCase())
    })
  }

  }

  deleteSubscriber(id){
    console.log(id)
    this.service.deleteSubscriber({ "Id":parseInt(id)}).
    subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getSubscribers()
      }
    )

  }

}
