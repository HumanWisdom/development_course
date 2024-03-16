import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from "../../../services/shared.service";
import { ProgramType } from "../../../models/program-model";

@Component({
  selector: 'app-sorrow-and-loss',
  templateUrl: './sorrow-and-loss.page.html',
  styleUrls: ['./sorrow-and-loss.page.scss'],
})
export class SorrowAndLossPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))

  audioData:any;

  constructor(private router: Router, private location: Location){}

  ngOnInit() {
    this.audioData={
      url:'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/guided-meditation/audios/guided-meditation+1.27.mp3'
    }
  }


  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() {
    // this.location.back()
    if (window.location.href.includes('teenagers')) {
      this.router.navigate(['/teenagers/feel-better-now']);
    } else {
      this.router.navigate(['/adults/feel-better-now']);
    }
  }


  routeVideoaudio(type, url, title = '') {
    console.log(url)
    if(type === 'video') {
     this.router.navigate([url, 'F', title])
    }else{
      let concat = encodeURIComponent(url.replaceAll('/','~'));
      if ( SharedService.ProgramId == ProgramType.Teenagers) {
        this.router.navigate(['/teenagers/audiopage/', concat, '1', 'F', title])
      }
      else{
        this.router.navigate(['adults/audiopage/', concat, '1', 'F', title])
      }
    }
 }

 determineVideoUrl(url): string {
  if (SharedService.ProgramId == ProgramType.Teenagers) {
    return `/teenagers/videopage/${url}`;
  } else {
    return `/adults/videopage/${url}`;
  }
}

determineRouterLink(data){
  if (SharedService.ProgramId == ProgramType.Teenagers) {
    this.router.navigateByUrl(`/teenagers/${data}`);
  } else {
    this.router.navigateByUrl(`/adults/${data}`);
  }
}
}
