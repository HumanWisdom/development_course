import { Component, OnInit,Input,Output,ViewChild,AfterViewInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from 'src/app/adults/adults.service';
@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.scss'],
})
export class VideoContentComponent implements OnInit,AfterViewInit {
  @Input() videoLink: any;
  @Input() bg: string;
  @Input() title: string;
  @Input() poster: any;
  @Output() sendAvDuration = new EventEmitter<string>();
  url: SafeResourceUrl; 
  currentTime:any
  @ViewChild('video') video;
  //mediaPercent=JSON.parse(localStorage.getItem("mediaPercent"))
  mediaPercent:any
  pauseTime:any
  t:any
  scrId:any
  loginResponse=JSON.parse(localStorage.getItem("loginResponse"))
  freeScreens=JSON.parse(localStorage.getItem("freeScreens"))

  @ViewChild('screen', { static: true }) screen: any;

  constructor(
    private captureService:NgxCaptureService,
    public sanitizer:DomSanitizer, 
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private service: AdultsService) { 
    this.activatedRoute.queryParams.subscribe(params => {
      this.t = params['t'];
    })    
  }

  ngOnInit() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoLink); 
    console.log(this.videoLink,this.bg)
    console.log("free Screens",this.freeScreens)
  
    //var str=this.router.getCurrentNavigation().finalUrl.root.children.primary.segments[1].path
    var str=this.router.url
    var lastSlash = str.lastIndexOf("/");
     str=str.substring(lastSlash+2);
     //str = str.replace(/\D/g,'');
     this.scrId=str
     console.log("str",str,"id",this.scrId)

     //call api to geta percent
     this.service.mediaPercent(this.scrId).subscribe(res=>{
       console.log(res)
       this.mediaPercent=res[0].MediaPrcnt
       console.log("media duration",this.mediaPercent)
     })

  }
  getCurrentTime(data){
  
    this.currentTime = data.target.currentTime;
    this.sendAvDuration.emit(JSON.parse(data.target.currentTime))
    
    if (this.loginResponse.Subscriber!=1)
    {
      if(!this.freeScreens.includes(parseInt(this.scrId)))
      {
          this.pauseTime=((this.mediaPercent/100)*data.target.duration)
          if(this.currentTime>this.pauseTime){
              this.video.nativeElement.pause()
              window.alert('You Have Reached Free Limit')
            }
      }
      else{
        console.log("free screen")
      }

    }
    
  }

  ngAfterViewInit(){
    console.log("hi")
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
