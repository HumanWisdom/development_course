import { Component, OnInit,Input,Output, EventEmitter,AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';

@Component({
  selector: 'app-tap-start',
  templateUrl: './tap-start.component.html',
  styleUrls: ['./tap-start.component.scss'],
})
export class TapStartComponent implements OnInit,AfterViewInit {

  @Input() bg: string
  @Input() bg_tts: string;
  @Output() nextEmitter = new EventEmitter<string>();

  scrId:any
  path:any

  @ViewChild('screen', { static: true }) screen: any;

  pageaction = localStorage.getItem("pageaction");
  bg_cft="bg_dark_blue"
  shared = false;
  urlT:any

  constructor( private captureService:NgxCaptureService,
    private aservice:AdultsService,
    private router:Router) {
      if(this.router.getCurrentNavigation()) {
        this.urlT=this.router.getCurrentNavigation().extractedUrl ? this.router.getCurrentNavigation().extractedUrl.queryParams.t: ''
      }
    }

  ngOnInit() {
    let progUrl=this.router.url.substring(0, this.router.url.indexOf('/',1)+1);
    if(location.href.includes("t="))
    {
      this.shared=true
    }
    if (this.urlT)
    {
      this.shared=true
    }
    this.path=this.router.url
    let str = this.path.replace(/\D/g,'');
    this.scrId = str;
    //this.scrId=this.scrId.parseInt()

  }
  next(){
    this.nextEmitter.emit()
  }
  ngAfterViewInit(){
    // this.captureService.getImage(this.screen.nativeElement, true).toPromise().then(img=>{

    //   img = img.substring(img.indexOf(",") + 1);
    //  // img.replace('data:image/png;base64,',' ')
    //   console.log(img)
    //  this.aservice.UploadThumbnail({"ScrNo":this.scrId,"byteArray":img}).subscribe(
    //     r=>{
    //       console.log(r)
    //     }
    //   )

    // })


  }

}
