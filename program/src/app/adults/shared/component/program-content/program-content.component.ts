import { Component, OnInit ,Input,Output, EventEmitter,AfterViewInit,ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from 'src/app/adults/adults.service';

@Component({
  selector: 'app-program-content',
  templateUrl: './program-content.component.html',
  styleUrls: ['./program-content.component.scss'],
})
export class ProgramContentComponent implements OnInit,AfterViewInit {
  @Input() title: string;
  @Input() content: string;
  @Input() bg: string;

  scrId:any
  @ViewChild('screen', { static: true }) screen: any;

  constructor(
    private captureService:NgxCaptureService,
    private service: AdultsService,
    private next: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.content)
  }

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
