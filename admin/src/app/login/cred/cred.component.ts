import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {UsersService} from '../../users/users.service'
import {LoginService} from '../login.service'

@Component({
  selector: 'app-cred',
  templateUrl: './cred.component.html',
  styleUrls: ['./cred.component.css']
})
export class CredComponent implements OnInit {
  programList=[]
  sectionList=[]
  moduleList=[]
  email:any
  password:any
  loginResponse:any
  showAlert=false
  userName:any

  constructor(private router: Router,private service:UsersService,
     private lservice:LoginService,private location:Location) { }

  ngOnInit(): void {
    this.getPrograms()
  }
  getPrograms(){
    this.service.getPrograms().subscribe(res=>
      {
        console.log(res)
        this.programList=res;

        console.log("Program list",this.programList)
        localStorage.setItem("programList",JSON.stringify(this.programList))


      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getSections()
      }
    )

  }

  getSections(){
    this.service.getSections().subscribe(res=>
      {
        console.log(res)
        this.sectionList=res;

        console.log(this.sectionList,"section list")
        localStorage.setItem("sectionList",JSON.stringify(this.sectionList))


      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getModules()
      }
    )
  }

  getModules(){
    this.service.getModules().subscribe(res=>
      {
        console.log(res)
        this.moduleList=res;

        console.log("moduleList",this.moduleList)
        localStorage.setItem("moduleList",JSON.stringify(this.moduleList))


      },
      error=>{
        console.log(error)
      }
    )

  }

  submitCreds(){


    this.lservice.emailLogin(this.email,this.password)
    .subscribe(
      res=>
      {console.log(res)
        this.loginResponse=res
        this.userName=res.Name
        localStorage.setItem("userName",JSON.stringify(this.userName))
        localStorage.setItem("token",JSON.stringify(res.access_token))
        localStorage.setItem("userID",res.UserId);
        if(res.UserId==0)
        {
          this.showAlert=true
          this.email=""
          this.password=""

        }
        else{
          this.showAlert=false
          this.router.navigate(['/users'])
        }
      })
  }

}
