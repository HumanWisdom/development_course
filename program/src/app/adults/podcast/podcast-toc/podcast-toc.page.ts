import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { NgNavigatorShareService } from 'ng-navigator-share';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-podcast-toc',
  templateUrl: './podcast-toc.page.html',
  styleUrls: ['./podcast-toc.page.scss'],
})

export class PodcastTocPage implements OnInit {
 
  path=this.router.url
  tag='all';
  constructor(private ngNavigatorShareService: NgNavigatorShareService,
    private router: Router ,
    private activatedRoute:ActivatedRoute,
    private location: Location,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
  let routTag=   this.activatedRoute.snapshot.paramMap.get('tag');
  if(routTag && routTag!=null && routTag !='' && routTag =='sorrow'){
    this.tag=routTag;
  }
}

  getSourceForPodBin(){
   if(this.tag=='all'){
     return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.podbean.com/player-v2/?i=ak74u-bf71d6-pbblog-playlist&share=1&download=0&rtl=0&fonts=Arial&skin=60a0c8&font-color=auto&logo_link=none&order=episodic&limit=100&filter=all&ss=bafb89171144cd6d758dfcec4278f644&btn-skin=3267a3&size=480");
   }
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.podbean.com/player-v2/?i=ak74u-bf71d6-pbblog-playlist&share=0&download=0&rtl=0&fonts=Times%20New%20Roman&skin=3267a3&font-color=auto&logo_link=podcast_page&logo_link=none&order=episodic&limit=5&filter=tags&tag=16106786&ss=55fe7c7156e4b9c14621bacb4c53cfa7&btn-skin=60a0c8&size=220");
}
  goBack(){
    this.location.back()
  }

  share(){
    this.ngNavigatorShareService.share({
      title: 'HumanWisdom Program',
      text: 'Hey, check out the HumanWisdom Program',
      url: this.path
    }).then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }
}