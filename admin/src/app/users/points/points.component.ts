import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {UsersService} from '../users.service'


@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {
  settingName:any
  updatedSettingName:any
  pointValue:any
  updatedPointValue:any
  pointsList=[]
  searchedSetting:any

  constructor(private router: Router,private service:UsersService, private location:Location) { }

  ngOnInit() {
    this.getPoints()
  }

  initUpdate(setting,point){
    this.updatedSettingName=setting
    this.updatedPointValue=point

  }
  reset(){
    this.settingName=""
    this.pointValue=""
  }
  addPoints(){
    this.service.addPoint({ "SettingID":0,
    "SettingName":this.settingName,
    "Value":this.pointValue
    
    
    })
    .subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getPoints()
      }
    )

  }

  updatePoints(id){
    this.service.addPoint({ "SettingID":id,
    "SettingName":this.updatedSettingName,
    "Value":this.updatedPointValue
    
    
    })
    .subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getPoints()
      }
    )

  }

  getPoints(){
    this.service.getPoints().subscribe(res=>
      {
        console.log(res)
        this.pointsList=res
       
        console.log(this.pointsList,"points  list")
        

      }
    )
   
  }

  deletePoint(id){
    console.log(id)
    this.service.deletePoint({ "Id":parseInt(id)}).
    subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getPoints()
      }
    )


  }

  searchSetting(){
    if(this.searchedSetting=="")
    this.getPoints()
  else{
    this.pointsList=this.pointsList.filter(res=>{
      return res.SettingName.toLocaleLowerCase().match(this.searchedSetting.toLocaleLowerCase())
    })
  }
  }

}
