import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-allot-screens',
  templateUrl: './allot-screens.component.html',
  styleUrls: ['./allot-screens.component.css']
})
export class AllotScreensComponent implements OnInit {
  fromId:any
  toId:any
 moduleId:any
  
  moduleScreenList=[]

  

  constructor(private service:UsersService) { }

  ngOnInit() {
    this.getModuleScreens()
  }
  reset(){
    this.moduleId=""
  
    this.fromId=""
    this.toId=""
  }

  addScreen()
  {
    this.service.setModuleScreen(this.moduleId,this.fromId,this.toId)
    .subscribe(
      r=>console.log(r),
      e=>console.log(e),
      ()=>this.getModuleScreens()

    )
    
  }

  getModuleScreens(){
    this.service.getModuleScreens().subscribe(res=>
      {
        console.log(res)
        this.moduleScreenList=res;
      })
    

  }

  
  

}
