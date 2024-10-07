import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {AdultsService} from "../../../adults/src/app/adults/adults.service"
import { NgNavigatorShareService } from 'ng-navigator-share';
import { Platform } from "@angular/cdk/platform";
import { ProgramType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';
import { NavigationService } from '../../services/navigation.service';


@Component({
  selector: 'app-transcript-header',
  templateUrl: './transcript-header.component.html',
  styleUrls: ['./transcript-header.component.scss'],
})
export class TranscriptHeaderComponent implements OnInit {
  @Input() bookmark: boolean;
  @Input() bg: string;
  @Input() bg_tn: string;
  @Input() path: string; //to go back to the course page from note
  @Input() toc: string;//path of table of contents
  @Input() dashboard: string;//path to the dashboard
  @Input() audioPage: string;
  @Input() progName: string;
  @Output() sendBookmark = new EventEmitter<boolean>();
  progUrl: string;
  note:any
  t=new Date()
  minDate=this.t.getFullYear()+"-"+this.addZero(this.t.getMonth()+1)+"-"+this.addZero(this.t.getDate())
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  urlT:any
  shared=false
  token=JSON.parse(localStorage.getItem("token"))
  socialShare=false
  address:any;
  scrNumber:any
  progress:any
  placeHolder = 'Type your note here...';
  guest = false;
  Subscriber = false;
  enableAlert = false;
  programName:string="adults";
  constructor(private router: Router,
    private service:AdultsService,
    public platform: Platform,
    private ngNavigatorShareService: NgNavigatorShareService,
    private navigationService:NavigationService ) {
    this.urlT=this.router.getCurrentNavigation().extractedUrl.queryParams.t
    this.ngNavigatorShareService = ngNavigatorShareService;
    this.progUrl = this.router.url.substring(0, this.router.url.indexOf('/', 1) + 1);
    this.guest = localStorage.getItem('guest') === 'T' ? true : false;
    this.Subscriber = localStorage.getItem('Subscriber') === '1' ? true : false;
   }

  ngOnInit() {
    this.address=this.router.url;
    if(this.guest || !this.Subscriber) {
      this.placeHolder = "Start your free trial to access your online journal";
    }

    var lastSlash = this.path.lastIndexOf("/");
     this.scrNumber=this.path.substring(lastSlash+2);
     this.scrNumber = this.scrNumber.replace(/\D/g,'');
     
    this.getProgress(this.scrNumber)
    this.programName = this.getProgramTypeName(SharedService.ProgramId)?.toLowerCase();
    if (this.programName == 'teenagers') {
      this.programName = '';
    }
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
    
    if (this.urlT)
    {
      this.shared=true
      this.socialShare=true
    }
  }
  addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  addToken(){
    //history.replaceState(null, null, 'Course#'+this.address+`?t=${this.token}`);
    /*history.replaceState(null, null,this.address+`?t=${this.token}`);
    this.socialShare=true*/
    this.socialShare=true

   if(this.urlT)
   {
     console.log("url")
    this.path="https://humanwisdom.me/"+this.address+`?t=${this.urlT}`

   }
   else{
     console.log("local")
    this.path="https://humanwisdom.me/"+this.address+`?t=${this.token}`
   }
   
  }


  toggleBookmark(){
    if (this.guest || !this.Subscriber) {
      this.enableAlert = true;
    } else {
      this.bookmark=!this.bookmark
      this.sendBookmark.emit(this.bookmark)
    }
  }

  courseNote(){
    this.router.navigate(['/adults/coursenote',{path:this.path}])
  }

  goToToc() {
    this.navigationService.getBackLink();
    this.router.navigate(['/' + this.programName + '/' + this.toc])
  }

  goToDash() {
    if (this.progUrl == "/adults/" || this.programName == 'adults') {
      this.router.navigate(['/adults/adult-dashboard'])
    }
    else {
      
      this.router.navigate([this.programName + '/teenager-dashboard'])
    }
  }
  
  goToAudio(){
    let progNamePath = this.progName == "teenagers" ?  '/' : '/adults/';
    if (this.urlT)
    {
      this.router.navigate([progNamePath + this.audioPage], {queryParams:{t:this.urlT}})

    }

    else
      this.router.navigate([progNamePath + this.audioPage])
  }
  addNote(){
    this.service.submitJournal({
      "JournalId":0,
      "JDate":this.minDate,
      "Title":"Module",
      "Notes":this.note,
      "UserId":this.userId

    }).subscribe((res) => {},
    error=>{
      console.log(error)
    },
    ()=>{

    })
  }
  share() {

   /*  if (!this.ngNavigatorShareService.canShare() &&  (this.platform.isBrowser) ) {
      alert(`This service/api is not supported in your Browser`);
      return;
    } */
    if(this.urlT)
   {
     console.log("url")
    this.path="https://humanwisdom.me/"+this.address+`?t=${this.urlT}`

   }
   else{
     console.log("local")
    this.path="https://humanwisdom.me/"+this.address+`?t=${this.token}`
   }

    this.ngNavigatorShareService.share({
      title: 'HappierMe Program',
      text: 'Hey, check out the HappierMe Program',
      url: this.path
    }).then( (response) => {
      
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  getProgress(p)
  {
    this.service.screenProgress(p)
    .subscribe(
      r=>{
        this.progress=parseFloat(r)
        
      }
    )

  }

  getProgramTypeName(value: number): string | undefined {
    const enumKey = Object.keys(ProgramType).find(key => ProgramType[key] === value);
    return enumKey as string;
  }
  getAlertcloseEvent(event) {
    this.enableAlert = false;
    if (event === 'ok') {
      if (!this.guest && !this.Subscriber) {
        this.router.navigate(["/onboarding/add-to-cart"]);
      } else if (this.guest) {
        localStorage.setItem("subscribepage", 'T');
        this.router.navigate(["/onboarding/login"]);
      }
    }
  }

}
