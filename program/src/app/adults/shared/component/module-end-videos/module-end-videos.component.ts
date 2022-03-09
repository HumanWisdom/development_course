import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from 'src/app/adults/adults.service';

@Component({
  selector: 'app-module-end-videos',
  templateUrl: './module-end-videos.component.html',
  styleUrls: ['./module-end-videos.component.scss'],
})
export class ModuleEndVideosComponent implements OnInit {
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
      name: 'User Guide',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/introduction/05.png',
      link: ''
    },
    {
      name: 'Discovering Wisdom',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/introduction/01.png',
      link: ''
    },
    {
      name: 'Benefits of Wisdom',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/introduction/02.png',
      link: ''
    },
    {
      name: '5 Circles of Wisdom',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/introduction/03.png',
      link: ''
    },
    {
      name: 'Key Ideas',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/introduction/04.png',
      link: ''
    },
    {
      name: 'Nature',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/06.png',
      link: ''
    },
  ]

  wisdomstoriesmoduleList: any = [
  ]

  constructor(private router:Router,private service: AdultsService) {
    let story = JSON.parse(JSON.stringify(localStorage.getItem('supportwisdomstories')));
    story = JSON.parse(story)
    this.wisdomstoriesmoduleList = [story.slice(0, 2), story.slice(2, 4)] 
   }

   viewstory(item){
    localStorage.setItem("story",JSON.stringify(item))
    this.router.navigate(['/wisdom-stories/view-stories'],{ queryParams: {sId: `${item['ScenarioID']}`}})
  }

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
      {
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
