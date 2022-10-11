import { Component, ElementRef, OnInit } from '@angular/core';
import { colorSets } from '@swimlane/ngx-charts';
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'HumanWisdom-s75002',
  templateUrl: './s75002.page.html',
  styleUrls: ['./s75002.page.scss'],
})
export class S75002Page implements OnInit {
  dayclass = 'intro'
  isShowTranscript=false;
  isShowAudio=false;
  enableintro = true;
  enableday1 = false;
  enableday2 = false;
  enableday3 = false;
  enableday4 = false;
  enableday5 = false;
  totalTime:any;
  screenType:string="8";
  screenNumber:string="75002p0";
userId:string=localStorage.getItem('userId');
endTime:any;
startTime:any;
 moduleId:number=75;
 bookmark:number=0;
  slideStart=0;
  totalSlidesCount=7;
details:string='1/8'
  constructor(private elementRef: ElementRef,
    public service:AdultsService,) {
      this.startTime=Date.now()
   }

  ngOnInit() {
    this.next();
  }

  getdayevent(event) {
    if (event === 'intro') {
      this.startTime=Date.now()
      this.slideStart=0;
      this.totalSlidesCount=7;
      this.details=this.slideStart+'/'+this.totalSlidesCount;
      this.enableintro = true;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
    }
    else if (event === '1') {
      this.startTime=Date.now()
      this.isShowTranscript=false;
      this.slideStart=0;
      this.totalSlidesCount=5;
      this.details=this.slideStart+'/'+this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = true;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.screenNumber= "75002p1";
    }
    else if (event === '2') {
      this.startTime=Date.now()
      this.slideStart=0;
      this.totalSlidesCount=5;
      this.details=this.slideStart+'/'+this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = true;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.screenNumber= "75002p2";
    }
    else if (event === '3') {
      this.startTime=Date.now()
      this.slideStart=0;
      this.totalSlidesCount=4;
      this.details=this.slideStart+'/'+this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = true;
      this.enableday4 = false;
      this.enableday5 = false;
      this.screenNumber= "75002p3";
    }
    else if (event === '4') {
      this.startTime=Date.now()
      this.slideStart=0;
      this.totalSlidesCount=3;
      this.details=this.slideStart+'/'+this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = true;
      this.enableday5 = false;
      this.screenNumber= "75002p4";
    }
    else if (event === '5') {
      this.startTime=Date.now()
      this.slideStart=0;
      this.totalSlidesCount=4;
      this.details=this.slideStart+'/'+this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = true;
      this.screenNumber= "75002p5";
    }
    this.next();
  }

  next(){
    setTimeout(() => {
      if(this.slideStart<this.totalSlidesCount){
        this.slideStart=this.slideStart+1;
        if(this.slideStart==this.totalSlidesCount){
          setTimeout(() => {
            this.endTime = Date.now();
            this.totalTime = this.endTime - this.startTime;
            this.submitProgress(); 
          }, 400);
        }
      } else if(this.slideStart==this.totalSlidesCount){
        this.slideStart=1;
      }else{
        this.slideStart=1;
      }
      this.details=(this.slideStart>9?this.slideStart:'0'+this.slideStart) +'/' + (this.totalSlidesCount>9?this.totalSlidesCount:'0'+this.totalSlidesCount);
     var data= this.elementRef.nativeElement.querySelectorAll('.active')[1]?.firstChild?.children[0]?.
     children[1]?.children[0]?.lastChild?.classList.value;
     if(data==undefined){
      data= this.elementRef.nativeElement.querySelectorAll('.active')[0]?.firstChild?.children[0]?.
      children[1]?.children[0]?.lastChild?.classList.value;
     }
   if(data=='audio-test'){
   this.isShowTranscript=true;
   }else{
    this.isShowTranscript=false;
    this.isShowAudio=false;
   }
    }, 700);
  } 
  
  back(){

    setTimeout(() => {
      if(this.slideStart<1){
        this.slideStart=this.totalSlidesCount
       }
       else if(this.slideStart==1){
        this.slideStart=this.totalSlidesCount;
       }
       else{
        this.slideStart=this.slideStart-1;
       }
       this.details=(this.slideStart>9?this.slideStart:'0'+this.slideStart) +'/' + (this.totalSlidesCount>9?this.totalSlidesCount:'0'+this.totalSlidesCount);
     var data= this.elementRef.nativeElement.querySelectorAll('.active')[1]?.firstChild?.children[0]?.
     children[1]?.children[0]?.lastChild?.classList.value
   if(data=='audio-test'){
   this.isShowTranscript=true;
   }else{
    this.isShowTranscript=false;
    this.isShowAudio=false;
   }
    }, 700);
  } 

  changeType(){
    if(this.isShowTranscript){
      this.isShowTranscript=false;
      this.isShowAudio=true;
    }else{
      this.isShowTranscript=true;
       this.isShowAudio=false;
    }
  }
  submitProgress(){
    this.service.submitProgressText({
      "ScrNumber":this.screenNumber,
      "UserId":+this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime
    }).subscribe(res=>
      {
        
        // this.bookmarkList=res.GetBkMrkScr.map(a=>parseInt(a.ScrNo))
        // localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))
      },
      error=>{console.log(error)},
      ()=>{
        //this.router.navigate(['/adults/conditioning/s234'])
      })
  }
}