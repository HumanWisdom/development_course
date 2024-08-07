import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';
@Component({
  selector: 'HumanWisdom-youtube-content',
  templateUrl: './youtube-content.component.html',
  styleUrls: ['./youtube-content.component.scss'],
})
export class YoutubeContentComponent implements OnInit {
  public videoLink: any;
  public linkcode: any;

  @ViewChild('enablepopup') enablepopup: ElementRef;

  @Input() bg: string;

  constructor(private route: ActivatedRoute,private _sanitizer: DomSanitizer, private router: Router, private location: Location,
    private navigationService:NavigationService
  ) {
    this.linkcode = this.route.snapshot.paramMap.get('videolink')

    let accesscode = 'rdtfghjhfdg'

   if(this.linkcode.includes('=')==true)
   {  accesscode =this.linkcode.split('=')[1]
     this.linkcode =this.linkcode.split('=')[0]
  }


  // let accesscode = this.linkcode.contains('=')==true?this.linkcode.splitarr('=')[1]:'rdtfghjhfdg'
   let access='free'
   if (accesscode=='rdtfghjhfdg' ) access='free'
   if (accesscode=='vncbxdfchgvxd' ) access='paid'


    let sub = localStorage.getItem("Subscriber")
    if (sub=='0' && access=='paid' )
    this.router.navigate(['/subscription/start-your-free-trial']);

    if(window.history.state.class)
    {
      this.bg=window.history.state.class;
      localStorage.setItem('program-guide-class',this.bg);
      localStorage.setItem('videolink',this.linkcode)
    }
    else if(this.linkcode==localStorage.getItem('videolink'))
    {
      this.bg=localStorage.getItem('program-guide-class');
    }
    else
    {
    localStorage.setItem('videolink',null)
    localStorage.setItem('program-guide-class',null)
    this.bg='dark_blue_w1';
    }
  }

  ngOnInit()
  {
    let code = `https://www.youtube.com/embed/${this.linkcode}`;
    this.videoLink = this.getSafeUrl(code);
  }

  getSafeUrl(url)
  {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url)
  }

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.location.back();
    }else{
      this.router.navigate([url]);
    }
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

}
