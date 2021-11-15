import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {UsersService} from '../users.service'

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  programList=JSON.parse(localStorage.getItem("programList"))
  newProgramName:any
  updatedProgramName:any
  searchedProgram:any
  

  constructor(private router: Router,private service:UsersService, private location:Location) { }

  ngOnInit() {
    //console.log(this.programList)
   
  }
  getPrograms(){
    this.service.getPrograms().subscribe(res=>
      {
        console.log(res)
        this.programList=res;
       
        console.log("program List",this.programList)
       // localStorage.setItem("programList",JSON.stringify(this.programList))
      
      }
    )

  }

  addProgram(){
    console.log(this.newProgramName)
    this.service.addProgram({ "ProgID":0,"Program":this.newProgramName}).
    subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>
        {this.getPrograms()}
    )
  }

  deleteProgram(id){
    console.log(id)
    this.service.deleteProgram({ "Id":parseInt(id)}).
    subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>
        {this.getPrograms()}
    )


  }

  updateProgram(){
    console.log(this.updatedProgramName)
    this.service.addProgram({ "ProgID":1,"Program":this.updatedProgramName}).
    subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>
        {this.getPrograms()}
    )
  }

  searchProgram(){
    if(this.searchedProgram=="")
      this.getPrograms()
    else{
      this.programList=this.programList.filter(res=>{
        return res.Program.toLocaleLowerCase().match(this.searchedProgram.toLocaleLowerCase())
      })
    }
  }

  reset(){
    this.newProgramName=""
  }
  

}
