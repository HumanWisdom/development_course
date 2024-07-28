import { Router } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { SharedService } from "../../../services/shared.service";
import { ProgramType } from "../../../models/program-model";
import { NavigationService } from '../../../../shared/services/navigation.service';
@Component({
  selector: 'app-loneliness',
  templateUrl: './loneliness.page.html',
  styleUrls: ['./loneliness.page.scss'],
})
export class LonelinessPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
  isAdults = true;
  mediaUrl: any;

  constructor(private router: Router, private location: Location,private navigationService:NavigationService)
  {
    this.mediaUrl = {
      url: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/guided-meditation/audios/guided-meditation+1.29.mp3',
      youtubeUrl: 'xF3TdgBx6ts'
    }
  }

  ngOnInit() {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
        } else {
         this.isAdults = false;
        }
  }

  routeToYoutube(url) {
    if (SharedService.ProgramId == ProgramType.Teenagers){
      this.router.navigate(['/teenagers/feel-better-now/feeling-upset/youtubelink/',url]);
    } else {
      this.router.navigate(['/adults/feel-better-now/feeling-upset/youtubelink/',url]);
    }
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  deafultGoBack() {
    // this.location.back()
    if (window.location.href.includes('teenagers')) {
      this.router.navigate(['/teenagers/feel-better-now']);
    } else {
      this.router.navigate(['/adults/feel-better-now']);
    }
  }
  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.deafultGoBack();
    }else{
      this.router.navigate([url]);
    }
  }



  routeVideoaudio(type, url, title = '') {
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
determinePathway(data){
  if (SharedService.ProgramId == ProgramType.Teenagers) {
    this.router.navigate([`/teenagers/${data}`]);
  } else {
    this.router.navigate([`/adults/${data}`]);
  }
}

}
