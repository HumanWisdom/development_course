import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { NgNavigatorShareService } from 'ng-navigator-share';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Platform } from "@angular/cdk/platform";
import { Meta, Title } from '@angular/platform-browser';
import { LogEventService } from '../../../../../../shared/services/log-event.service';


@Component({
  selector: 'app-podcast-toc',
  templateUrl: './podcast-toc.page.html',
  styleUrls: ['./podcast-toc.page.scss'],
})

export class PodcastTocPage implements OnInit {
 
  path=this.router.url
  tag='all';
  iframeSrc:SafeResourceUrl;
  constructor(private ngNavigatorShareService: NgNavigatorShareService,
    private router: Router , public platform: Platform,
    private activatedRoute:ActivatedRoute,
    private location: Location,    
    public logeventservice: LogEventService,
    private sanitizer: DomSanitizer,
    private meta: Meta, private title: Title) {
     }

  ngOnInit() {

    this.title.setTitle('Inspiring Your Best Life: Our Motivational Podcast')
    this.meta.updateTag({ property: 'title', content: 'Inspiring Your Best Life: Our Motivational Podcast'})
    this.meta.updateTag({ property: 'description', content: 'Get motivated with our inspiring podcast. Our experts share tips on positive mindset, motivation, and more to help you unlock your full potential.' })
    this.meta.updateTag({ property: 'keywords', content: 'Wisdom podcast,Personal growth podcast,Self-improvement podcast,Mindfulness podcast,Inspirational podcast,Motivational podcast,Self-help podcast,Life lessons podcast,Philosophy podcast,Happiness podcast,Success podcast,Mental health podcast,Emotional intelligence podcast,Spiritual growth podcast,Life coaching podcast,Positive mindset podcast' })
  
    this.logeventservice.logEvent('view_humanwisdom_podcast');
  let routTag=   this.activatedRoute.snapshot.paramMap.get('tag');
  if(routTag && routTag!=null && routTag !='' && routTag =='sorrow'){
    this.tag=routTag;
  }
 this.iframeSrc= this.getSourceForPodBin();
}

  getSourceForPodBin(){
   if(this.tag=='all'){
     return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.podbean.com/player-v2/?i=ak74u-bf71d6-pbblog-playlist&share=1&download=0&rtl=0&fonts=Arial&skin=60a0c8&font-color=auto&logo_link=none&order=episodic&limit=100&filter=all&ss=bafb89171144cd6d758dfcec4278f644&btn-skin=3267a3&size=480");
   }
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.podbean.com/player-v2/?i=ak74u-bf71d6-pbblog-playlist&share=0&download=0&rtl=0&fonts=Times%20New%20Roman&skin=3267a3&font-color=auto&logo_link=podcast_page&logo_link=none&order=episodic&limit=5&filter=tags&tag=16106786&ss=55fe7c7156e4b9c14621bacb4c53cfa7&btn-skin=60a0c8&size=220");
}
  goBack(){
   this.location.back();
  }

  share(){
    /* if (!this.ngNavigatorShareService.canShare() &&  (this.platform.isBrowser)   ) {
      alert(`This service/api is not supported in your Browser`);
      return;
    } */
   let url="https://humanwisdom.me"+this.path;
    this.ngNavigatorShareService.share({
      title: 'HumanWisdom Program',
      text: 'Hey, check out the HumanWisdom Program',
      url: url
    }).then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }
}