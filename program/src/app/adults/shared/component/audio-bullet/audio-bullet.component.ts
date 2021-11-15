import { Component, OnInit,OnDestroy,Input,ViewChild,  ElementRef,AfterViewInit,Output,EventEmitter} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from 'src/app/adults/adults.service';

@Component({
  selector: 'app-audio-bullet',
  templateUrl: './audio-bullet.component.html',
  styleUrls: ['./audio-bullet.component.scss'],
})
export class AudioBulletComponent implements OnInit,OnDestroy,AfterViewInit{
yellow="#FFC455"
@Input() list: any;
@Input() bg: any;
@Input() title: string;
@Input() audioLink: string;
@Output() sendAvDuration = new EventEmitter<string>();
myAudio:any
pauseTime:any
mediaPercent=JSON.parse(localStorage.getItem("mediaPercent"))
interval:any
t:any
loginResponse=JSON.parse(localStorage.getItem("loginResponse"))
freeScreens=JSON.parse(localStorage.getItem("freeScreens"))
scrId:any

@ViewChild('audio') audio;
@ViewChild('screen', { static: true }) screen: any;

constructor(
  private captureService:NgxCaptureService,
  private service: AdultsService,
  private router: Router,
  private url: ActivatedRoute
) {  
  this.url.queryParams.subscribe(params => {
    this.t = params['t'];
  })
}

ngOnInit() {
  console.log(this.audioLink,this.mediaPercent,this.loginResponse,this.list)
  var str=this.router.url
    var lastSlash = str.lastIndexOf("/");
     str=str.substring(lastSlash+2);
     this.scrId=str
     console.log("str",str,"id",this.scrId)


  if( (this.loginResponse.Subscriber!=1))
  {
    if(!this.freeScreens.includes(parseInt(this.scrId)))
      {
        if(this.t)
        {
          this.interval=setInterval(()=>this.checkPauseTime(), 1000);

        }
           
      }
  }
}



getTime(){
  console.log(this.audio)
  console.log(this.audio.audio.nativeElement.currentTime)
  this.sendAvDuration.emit(JSON.parse(this.audio.audio.nativeElement.currentTime))    
}
checkPauseTime(){

  console.log(this.loginResponse.Subscriber,"subs")
  
    if(this.t) 
    {
      console.log("checking to pause")
      this.pauseTime=((this.mediaPercent/100)*this.audio.audio.nativeElement.duration)
      console.log(this.pauseTime,"p")
      if(this.audio.audio.nativeElement.currentTime>this.pauseTime)
      {
        this.audio.audio.nativeElement.pause()
        
      }

    }
    

  

}
ngOnDestroy(){
  if (this.interval) {
    clearInterval(this.interval);
 }

}

ngAfterViewInit(){
  console.log("test bookmarks")
  this.captureService.getImage(this.screen.nativeElement, true).toPromise().then(img=>{
    //console.log(img);
    img = img.substring(img.indexOf(",") + 1);
   // img.replace('data:image/png;base64,',' ')
    console.log(img)
   this.service.UploadThumbnail({"ScrNo":this.scrId,"byteArray":img}).subscribe(
      r=>{
        console.log(r)
      }
    )
    
  })


}

}
