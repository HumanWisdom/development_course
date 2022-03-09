import { Component, OnInit,Input,AfterViewInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from 'src/app/adults/adults.service';

@Component({
  selector: 'app-oneline-text',
  templateUrl: './oneline-text.component.html',
  styleUrls: ['./oneline-text.component.scss'],
})
export class OnelineTextComponent implements OnInit,AfterViewInit {
  @Input() bg: string;

  scrId:any
  @ViewChild('screen', { static: true }) screen: any;

  constructor(
    private captureService:NgxCaptureService,
    private service: AdultsService,
    private next: ActivatedRoute
  ) { }

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
