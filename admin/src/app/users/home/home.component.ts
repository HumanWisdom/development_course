import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service'
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {FormControl, FormGroup,FormBuilder,Validators, AbstractControl} from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  role=[
   {id:1,name:" ",value:""},
   {id:2,name:"Admin",value:"admin",type:"internal"},
   {id:3,name:"Content Manager",value:"contentManager",type:"internal"},
   {id:4,name:"Mentor",value:"mentor",type:"internal"},
   {id:5,name:"Moderator",value:"moderator",type:"internal"},
   {id:6,name:"Learner",value:"learner",type:"external"},
 ]

 selectedRoleID:any
 firstName:any
 lastName:any
 doj:any
 email:any
 password:any
 userList:any
 displayUserList:any
 updatedFName:any
 updatedLName:any
 updatedEmail:any
 updatedPassword:any
 updatedRoleID:any
 updatedDoj:any
 searchedFirstName:any
 searchedLastName:any
 searchedEmail:any

  constructor(private router: Router,private service:UsersService, private location:Location,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    
    this.getUsers()
  }

  selectRole(r){
    console.log(r)
    this.selectedRoleID=r
  }
  updateRole(r){
    console.log(r)
    this.updatedRoleID=r
  }

  updateUserInit(uID,fName,lName,email,doj,roleId){
    this.updatedFName=fName
    this.updatedLName=lName
    this.updatedEmail=email
   // this.updatedPassword=this.password
    this.updatedRoleID=roleId
    //this.updatedDoj=roleId

  }
  addUser(){
    //console.log(this.firstName,this.lastName,this.email,this.password,this.selectedRoleID,this.doj)

    this.service.addUser({ "UserID":0,
    "RoleID":this.selectedRoleID,
    "FName":this.firstName,
    "LName":this.lastName,
    "Email":this.email,
    "Pwd":this.password,
    "DOJ":this.doj})
    .subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getUsers()
      }
    )
  }

  updateUser(userID){
    //console.log(this.firstName,this.lastName,this.email,this.password,this.selectedRoleID,this.doj)
    console.log(userID)
    this.service.addUser({ "UserID":userID,
    "RoleID":this.updatedRoleID,
    "FName":this.updatedFName,
    "LName":this.updatedLName,
    "Email":this.updatedEmail,
    "Pwd":this.updatedPassword,
    "DOJ":this.updatedDoj})
    .subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getUsers()
      }
    )
  }

  deleteUser(id){
    var retVal = confirm("Are you sure you want to delete?");
    if( retVal == true ) {
      this.service.deleteUser({ "Id":parseInt(id)}).
      subscribe(res=>
        {
        },
        error=>{
          console.log(error)
        },
        ()=>{
          window.alert('User deleted successfully')
          this.getUsers()
        }
      )
    } else {
      return false;
    }
  }

  getUsers(){
    this.service.getUsers().subscribe(res=>
      {
        console.log(res)
       this.userList=res
       this.displayUserList=this.userList.map(user=>({...user, ...this.role.find(element=> element.id==user.RoleId)}))
       console.log(this.displayUserList)
       localStorage.setItem("displayUserList",JSON.stringify(this.displayUserList))

       
      
      }
    )

  }

  reset(){
    this.firstName=""
    this.lastName=""
    this.email=""
    this.selectedRoleID=1
  }

  searchFirstName(){
    if(this.searchedFirstName=="")
      this.getUsers()
    else{
      this.displayUserList=this.displayUserList.filter(res=>{
        return res.FName.toLocaleLowerCase().match(this.searchedFirstName.toLocaleLowerCase())
      })
    }

  }

  searchLastName(){
    if(this.searchedLastName=="")
      this.getUsers()
    else{
      this.displayUserList=this.displayUserList.filter(res=>{
        return res.LName.toLocaleLowerCase().match(this.searchedLastName.toLocaleLowerCase())
      })
    }

  }

  searchEmail(){
    if(this.searchedEmail=="")
      this.getUsers()
    else{
      this.displayUserList=this.displayUserList.filter(res=>{
        return res.Email.toLocaleLowerCase().match(this.searchedEmail.toLocaleLowerCase())
      })
    }

  }

  searchRole(e){
    console.log(e)
    if(e=="")
      this.getUsers()
    else if(e=="Internal")
      {
        this.displayUserList=this.displayUserList.filter(res=>{
          
          return res.type.toLocaleLowerCase().match("internal")})

      }
    else if(e=="Learners")
    {
      this.displayUserList=this.displayUserList.filter(res=>{
        
        return res.type.toLocaleLowerCase().match("external")})

    }
      
  }

}
