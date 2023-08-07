import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;

  defaultUrl = 'how-can-i';
  activeClass = 'active';
  constructor(private location: Location, private router:Router,private activatedRoute: ActivatedRoute) {
   var data = this.activatedRoute.snapshot.paramMap.get('url');
    if(data != null){
      this.defaultUrl= data;
    }
   }

  ngOnInit() {
  }

  getActiveClass(param){
    if(this.defaultUrl == param){
      return 'active'
    }
    return '';
  }

  getclcickevent(event) 
  {
    if (event === 'enablepopup') 
    {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() 
  {
    this.location.back()
  }

  routeToTab(param){
    this.defaultUrl = param;
    localStorage.setItem('lastRoute',param);
    this.changeURLParams(param);
  }

  changeURLParams(parameter: string) {
    const newUrl = this.location.path().split('/')[0] + `${parameter}`;
    this.location.replaceState('/find-answers/'+newUrl);
    this.router.navigate(['adults/find-answers/'+newUrl])
  }

  youtube(link) {
    this.router.navigate(['/adults/curated/youtubelink', link])
  }

}
