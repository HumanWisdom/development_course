import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import {AdultsService} from "../../../../adults/adults.service"
import { NgNavigatorShareService } from 'ng-navigator-share';


@Component({
  selector: 'app-audio-header',
  templateUrl: './audio-header.component.html',
  styleUrls: ['./audio-header.component.scss'],
})
export class AudioHeaderComponent implements OnInit {
  @Input() bookmark: boolean;
  @Input() bg_tn: string;
  @Input() bg: string;
  @Input() path: string; //to go back to the course page from note 
  @Input() toc: string;//path of table of contents
  @Input() dashboard: string;//path to the dashboard
  @Input() transcriptPage: string;
  note:any
  t=new Date()
  minDate=this.t.getFullYear()+"-"+this.addZero(this.t.getMonth()+1)+"-"+this.addZero(this.t.getDate())
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  urlT:any 
  shared=false
  token=JSON.parse(localStorage.getItem("token"))
  socialShare=false
  address=this.router.url
  progress:any
  scrNumber:any


  @Output() sendBookmark = new EventEmitter<string>();

  constructor(private router: Router,
    private service:AdultsService,
    private ngNavigatorShareService: NgNavigatorShareService  ) { 
      this.urlT=this.router.getCurrentNavigation()?.extractedUrl.queryParams.t
      this.ngNavigatorShareService = ngNavigatorShareService;
    }

  ngOnInit() {
    
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
    console.log(this.transcriptPage,this.toc,this.token)

    var lastSlash = this.path.lastIndexOf("/");
    this.scrNumber=this.path.substring(lastSlash+2);
    console.log(this.scrNumber)
   this.getProgress(this.scrNumber)

    if (this.urlT)
    {
      this.shared=true
      this.socialShare=true
    }
  }
  toggleBookmark(){
    this.bookmark=!this.bookmark
    console.log(this.bookmark)
    this.sendBookmark.emit(JSON.stringify(this.bookmark))
  }
  addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  addToken(){
   // history.replaceState(null, null, 'Course#'+this.address+`?t=${this.token}`);
   //history.replaceState(null, null,'course#'+this.address+`?t=${this.token}`);
   /*history.replaceState(null, null,this.address+`?t=${this.token}`);
    this.socialShare=true*/
    this.socialShare=true
   
   if(this.urlT)
   {
     console.log("url")
    this.path="https://humanwisdom.me/course/#/"+this.address+`?t=${this.urlT}`

   }
   else{
     console.log("local")
    this.path="https://humanwisdom.me/course/#/"+this.address+`?t=${this.token}`
   }
   console.log(this.path)
  }


  courseNote(){
    this.router.navigate(['/adults/coursenote',{path:this.path}])
  }

  goToToc(){
    this.router.navigate(['/adults/'+this.toc])
  }
  goToDash(){
    this.router.navigate(['/adults/adult-dashboard'])
  }
  goToTranscript(){
    if (this.urlT)
    {
      this.router.navigate(['/adults/'+this.transcriptPage], {queryParams:{t:this.urlT}})

    }
      
    else
      this.router.navigate(['/adults/'+this.transcriptPage])
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
    
    if (!this.ngNavigatorShareService.canShare()) {
      alert(`This service/api is not supported in your Browser`);
      return;
    }
    if(this.urlT)
   {
     console.log("url")
    this.path="https://humanwisdom.me/course/#/"+this.address+`?t=${this.urlT}`

   }
   else{
     console.log("local")
    this.path="https://humanwisdom.me/course/#/"+this.address+`?t=${this.token}`
   }
 
    this.ngNavigatorShareService.share({
      title: 'Human Wisdom Program',
      text: 'Hey, check out the Human Wisdom Program',
      url: this.path
    }).then( (response) => {
      console.log(response);
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
        console.log(this.progress,"sessionProgress")
      }
    )

  }


}
