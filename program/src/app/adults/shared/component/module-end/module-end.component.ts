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
    this.router.navigate([this.moduleLink])
    localStorage.setItem("moduleId",JSON.stringify(this.moduleId))
    this.service.clickModule(this.moduleId,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    })

  }

  goDashboard(){
    this.router.navigate(['/adults/adult-dashboard'])
  }
  routeJournal(){
    this.router.navigate(['/adults/journal'])
  }
}
