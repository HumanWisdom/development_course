import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {UsersService} from '../users.service'

@Component({
  selector: 'app-screens',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.css']
})
export class ScreensComponent implements OnInit {
  screenList=[]
  searchedScreen:any
  searchedId:any
  updatedGlobalSetting:any
  updatedModuleId:any

  constructor(private router: Router,private service:UsersService, private location:Location) { }

  ngOnInit() {
    this.getScreens()
  }
  getScreens(){
    this.service.getScreens().subscribe(res=>
      {
        console.log(res)
        this.screenList=res;
       
        console.log(this.screenList)
        //this.screenList.forEach((x)=>{ x.ScrNo=parseInt(x.ScrNo) });
        this.screenList.sort((a, b) => a.ScrNo - b.ScrNo);
        console.log(this.screenList)
      
       // localStorage.setItem("programList",JSON.stringify(this.programList))
      
      }
    )
  }

  deleteScreen(id)
  {
    console.log(id)
    this.service.deleteScreen({ "Id":parseInt(id)}).
    subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getScreens()
      }
    )
  }

  updateScreen(sid,sno){
    console.log(sid,sno)
   this.service.addScreen({
     "ScrId":sid,
     "ModuleId":this.updatedModuleId,
     "GSetId":this.updatedGlobalSetting,
     "ScreenNo":sno
   }).subscribe(
     res=>{
       console.log(res)
       this.getScreens()
     
   })

  }
  initUpdate(gid,mid)
  {
    this.updatedGlobalSetting=gid
    this.updatedModuleId=mid
  }

  searchScreen(){
    console.log(this.searchedScreen)
  if(this.searchedScreen=="")
    this.getScreens()
  else{
   
    this.screenList=this.screenList.filter(res=>{
       //return res.ScrNo==this.searchedScreen
       return res.Module.toLocaleLowerCase().match(this.searchedScreen.toLocaleLowerCase())
      
    })
  }
  }

  

  searchId(){
    console.log(this.searchedId)
  if(this.searchedId=="")
    this.getScreens()
  else{
   
    this.screenList=this.screenList.filter(res=>{
      // return res.ScrNo==this.searchedId
       return res.ScrNo.match(this.searchedId)
      
    })
  }
  }

}
