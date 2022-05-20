import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import {AdultsService} from '../../../adults.service'

@Component({
  selector: 'app-module-end',
  templateUrl: './module-end.component.html',
  styleUrls: ['./module-end.component.scss'],
})

export class ModuleEndComponent implements OnInit {
  @Input() moduleImg: string;
  @Input() moduleLink: string;
  @Input() moduleName: string;
  @Input() sectionName: string;
  @Input() bg: string;
  @Input() toc: string;
  @Input() moduleId: any;
  qrList:any
  token=JSON.parse(localStorage.getItem("token"))
  socialShare=false
  shareUrl:any
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  @Input() moduleList: any = [
    {
      name: 'Breathing',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/07.png',
      link: ''
    },
    {
      name: 'Noticing Thoughts',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/08.png',
      link: ''
    },
    {
      name: 'Guided Audio Meditation',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/10.png',
      link: ''
    },
  ]

  constructor(private router:Router,private service: AdultsService) { }

  ngOnInit() {
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
else
  {this.userId=JSON.parse(localStorage.getItem("userId"))}
    console.log(this.toc)
  }

  shareIndex(){
    this.socialShare=true
    this.shareUrl="https://humanwisdom.me/course/#/adults/"+this.toc+`?t=${this.token}`
  }

  proceed(){
    localStorage.setItem("moduleId",JSON.stringify(this.moduleId))
    this.service.clickModule(this.moduleId,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        let addictionResume="s"+res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("addictionResume",addictionResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
        this.router.navigate([this.moduleLink])
    })

  }

  goDashboard(){
    this.router.navigate(['/adults/adult-dashboard'])
  }
  routeJournal(){
    this.router.navigate(['/adults/journal'])
  }
}
