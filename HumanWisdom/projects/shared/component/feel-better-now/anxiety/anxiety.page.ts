import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SharedService } from "../../../services/shared.service";
import { ProgramType } from "../../../models/program-model";

@Component({
  selector: 'app-anxiety',
  templateUrl: './anxiety.page.html',
  styleUrls: ['./anxiety.page.scss'],
})
export class AnxietyPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))

  constructor(private location: Location, private router: Router ) { }

  ngOnInit() {
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() {
    // this.location.back()
    if (window.location.href.includes('teenagers')) {
      this.router.navigate(['/feel-better-now']);
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
      this.router.navigate(['audiopage/', concat, '1', 'F', title])
    }
    else{
      this.router.navigate(['adults/audiopage/', concat, '1', 'F', title])
    }
  }
}

determineVideoUrl(url): string {
if (SharedService.ProgramId == ProgramType.Teenagers) {
  return `/videopage/${url}`;
} else {
  return `/adults/videopage/${url}`;
}
}

determineRouterLink(data){
if (SharedService.ProgramId == ProgramType.Teenagers) {
  return [`/${data}`];
} else {
  return [`/adults/${data}`];
}
}

}