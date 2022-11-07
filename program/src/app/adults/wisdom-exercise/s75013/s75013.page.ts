import { Component, ElementRef, OnInit } from '@angular/core';
//import { colorSets } from '@swimlane/ngx-charts';

@Component({
  selector: 'HumanWisdom-s75013',
  templateUrl: './s75013.page.html',
  styleUrls: ['./s75013.page.scss'],
})
export class S75013Page implements OnInit {
  dayclass = 'intro'
  isShowTranscript=false;
  isShowAudio=false;
  enableintro = true;
  enableday1 = false;
  enableday2 = false;
  enableday3 = false;
  enableday4 = false;
  enableday5 = false;
  enableday6 = false;
  enableday7 = false;

  slideStart=0;
  totalSlidesCount=6;
  details:string='1/8'
  constructor(private elementRef: ElementRef) {
   
  
   }

  ngOnInit() {
    this.next();
  }

  getdayevent(event) {
    if (event === 'intro') {
      this.slideStart=0;
      this.totalSlidesCount=6;
      this.details=this.slideStart+'/'+this.totalSlidesCount;
      this.enableintro = true;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.enableday7 = false;
    }
    else if (event === '1') {
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
      this.enableday6 = false;
      this.enableday7 = false;
    }
    else if (event === '2') {
      this.slideStart=0;
      this.totalSlidesCount=5;
      this.details=this.slideStart+'/'+this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = true;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.enableday7 = false;
    }
    else if (event === '3') {
      this.slideStart=0;
      this.totalSlidesCount=5;
      this.details=this.slideStart+'/'+this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = true;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.enableday7 = false;
    }
    else if (event === '4') {
      this.slideStart=0;
      this.totalSlidesCount=5;
      this.details=this.slideStart+'/'+this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = true;
      this.enableday5 = false;
      this.enableday6 = false;
      this.enableday7 = false;
    }
    else if (event === '5') {
      this.slideStart=0;
      this.totalSlidesCount=5;
      this.details=this.slideStart+'/'+this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = true;
      this.enableday6 = false;
      this.enableday7 = false;
    }
    else if (event === '6') {
      this.slideStart=0;
      this.totalSlidesCount=5;
      this.details=this.slideStart+'/'+this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = true;
      this.enableday7 = false;
    }
    else if (event === '7') {
      this.slideStart=0;
      this.totalSlidesCount=7;
      this.details=this.slideStart+'/'+this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.enableday7 = true;
    }
    this.next();
  }

  next(){
    setTimeout(() => {
      if(this.slideStart<this.totalSlidesCount){
        this.slideStart=this.slideStart+1;
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
  
}