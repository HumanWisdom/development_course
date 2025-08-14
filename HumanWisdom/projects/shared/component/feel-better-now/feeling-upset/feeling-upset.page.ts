import { Router } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';


import { Location } from '@angular/common';
import { SharedService } from "../../../services/shared.service";
import { ProgramType } from "../../../models/program-model";
import { NavigationService } from '../../../../shared/services/navigation.service';
@Component({
  selector: 'app-feeling-upset',
  templateUrl: './feeling-upset.page.html',
  styleUrls: ['./feeling-upset.page.scss'],
})
export class FeelingUpsetPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
  isAdults = true;
  mediaUrl: any;
  isSubscribed = false;

  constructor(private router: Router, private location: Location,private navigationService:NavigationService)
  {
    this.mediaUrl = {
      url: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/guided-meditation/audios/guided-meditation+1.22.mp3',
      youtubeUrl: 'b5PZ6fFCL3g'
    }
  }

  ngOnInit() {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
        } else {
         this.isAdults = false;
        }
    const subValue = localStorage.getItem('Subscriber');
    this.isSubscribed = subValue === '1' || subValue === 'T';
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

 defaultGoBack() {
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
      this.defaultGoBack();
    }else{
      this.router.navigate([url]);
    }
  }


  routeVideoaudio(type: string, url: string, title = '', event?: MouseEvent) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    const isLoggedIn = localStorage.getItem('isloggedin') === 'T';

    if (!isLoggedIn || !this.isSubscribed) {
      const isTeenagerRoute = this.router.url.includes('/teenagers/');
      const trialRedirectPath = isTeenagerRoute
        ? '/teenagers/subscription/start-your-free-trial'
        : '/subscription/start-your-free-trial';
      this.router.navigate([trialRedirectPath]);
      return;
    }

    if (type === 'video') {
      this.router.navigate([url, 'F', title]);
    } else if (type === 'audio') {
      let concat = encodeURIComponent(url.split('/').join('~'));
      if (SharedService.ProgramId === ProgramType.Teenagers) {
        this.router.navigate(['/teenagers/audiopage/', concat, '1', 'F', title]);
      } else {
        this.router.navigate(['adults/audiopage/', concat, '1', 'F', title]);
      }
    }else if (type === 'page') {
  if (SharedService.ProgramId === ProgramType.Teenagers) {
    this.router.navigate(['/teenagers/feel-better-now', url]);
  } else {
    this.router.navigate(['/adults/feel-better-now', url]);
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

determineRouterLink(data) {
  if (!this.isSubscribed) {
    // Not subscribed → trial page
    if (SharedService.ProgramId == ProgramType.Teenagers) {
      this.router.navigateByUrl('/teenagers/subscription/start-your-free-trial');
    } else {
      this.router.navigateByUrl('/subscription/start-your-free-trial');
    }
    return;
  }

  // Subscribed → normal navigation
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
