import { Component, OnInit,Input,AfterViewInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from 'src/app/adults/adults.service';

@Component({
  selector: 'app-image-audio',
  templateUrl: './image-audio.component.html',
  styleUrls: ['./image-audio.component.scss'],
})
export class ImageAudioComponent implements OnInit,AfterViewInit {
  @Input() base: string;
  @Input() overlay: string;
  scrId:any
  @ViewChild('screen', { static: true }) screen: any;

  constructor(
    private captureService:NgxCaptureService,
    private next: ActivatedRoute,
    private service: AdultsService,) { }

  ngOnInit() {}

  ngAfterViewInit(){
    console.log("test bookmarks")
    let str = this.next.routeConfig.path;
    this.scrId = str.substring(1, str.length + 1);
    this.captureService.getImage(this.screen.nativeElement, true).toPromise().then(img=>{
      
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
