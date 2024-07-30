import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from "../../../services/shared.service";
import { ProgramType } from "../../../models/program-model";
import { NavigationService } from '../../../../shared/services/navigation.service';
@Component({
  selector: 'app-relationship-problems',
  templateUrl: './relationship-problems.page.html',
  styleUrls: ['./relationship-problems.page.scss'],
})
export class RelationshipProblemsPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
  isAdults = true;


  constructor(private router: Router, private sanitizer: DomSanitizer, private location: Location,private navigationService:NavigationService) { }

  ngOnInit() {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
        } else {
         this.isAdults = false;
        }
  }


  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.location.back();
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
