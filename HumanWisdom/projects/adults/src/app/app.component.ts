import {
  Platform
} from '@angular/cdk/platform';
import { Component, HostListener, DoCheck } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { slider } from './route.animation';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  animations: [slider]
})
export class AppComponent {
  @HostListener('window:beforeunload', ['$event'])
 beforeunloadHandler(event) {
    localStorage.setItem('adult', 'F')
  }
   //static progress mapping
  mediaAudio = "https://d1tenzemoxuh75.cloudfront.net"
  mediaVideo = "https://d1tenzemoxuh75.cloudfront.net"

  public pageLoaded = false;

  constructor(
    private platform: Platform,
    private router: Router,
    private meta: Meta, private title: Title
  ) {
    localStorage.setItem("mediaAudio", JSON.stringify(this.mediaAudio))
    localStorage.setItem("mediaVideo", JSON.stringify(this.mediaVideo))
    if (this.platform.ANDROID || this.platform.IOS) {
      localStorage.setItem('acceptcookie', 'T')
    }
    this.initializeApp();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }


  ngDoCheck(){
   

    let PageUrl= window.location.href
    if(PageUrl.includes('/adults/stress'))
    {
    
     if(this.title.getTitle() !== 'Emotional Well-Being and Stress: Strategies for Life Balance'){
        console.log("module","stress")
        this.title.setTitle('Emotional Well-Being and Stress: Strategies for Life Balance')
        this.meta.updateTag({ property: 'title', content: 'Emotional Well-Being and Stress: Strategies for Life Balance'})
        this.meta.updateTag({ property: 'description', content: 'Balance your life and reduce stress with our comprehensive guide on resilience, self-care, and stress management. Read more on HumanWisdom.me.'})
        this.meta.updateTag({ property: 'keywords', content: 'Mindfulness for stress relief,Emotional well-being and stress, Resilience and stress management, Life balance and stress, Self care for stress management'})
 
    }
    }
    else if( PageUrl.includes('/adults/self-esteem'))
    {

      
      if(this.title.getTitle() !== 'Overcoming Self-Doubt: Enhancing Self-Worth & Improving Self-Esteem'){
        console.log("module","self-esteem")
        this.title.setTitle('Overcoming Self-Doubt: Enhancing Self-Worth & Improving Self-Esteem')
        this.meta.updateTag({ property: 'title', content: 'Overcoming Self-Doubt: Enhancing Self-Worth & Improving Self-Esteem'})
        this.meta.updateTag({ property: 'description', content: 'Discover strategies for overcoming self-doubt and enhancing your self-worth. Improve your self-esteem and mental health with HumanWisdom.me.'})
        this.meta.updateTag({ property: 'keywords', content: 'Self-esteem in adulthood, Boosting self-confidence, Building self-esteem, Positive self-image, Overcoming self-doubt, Enhancing self-worth, Improving self-esteem, Raising self-esteem, Self-esteem and mental health'})
       }
    }
    else if(PageUrl.includes('/adults/habit-addiction'))
    {
     
      if(this.title.getTitle() !== 'Breaking the Cycle: Overcoming Habit'){
        console.log("module","habit-addiction")
        this.title.setTitle('Breaking the Cycle: Overcoming Habit')
        this.meta.updateTag({ property: 'title', content: 'Breaking the Cycle: Overcoming Habit'})
        this.meta.updateTag({ property: 'description', content: 'Discover practical strategies and resources to help you overcome habit addiction. Learn how to break addictive habits, find support and achieve a healthier and happier life.'})
        this.meta.updateTag({ property: 'keywords', content: 'Self-esteem in adulthood, Boosting self-confidence, Building self-esteem, Positive self-image, Overcoming self-doubt, Enhancing self-worth, Improving self-esteem, Raising self-esteem, Self-esteem and mental health'})
       }
    }
  }


  initializeApp() {
    


    let remember = localStorage.getItem("remember")
    let first = localStorage.getItem("firsttime")
    if (remember === 'F' && first === 'T') {
      localStorage.clear()
      localStorage.setItem('guest', 'T');
      localStorage.setItem('personalised', 'T');
      localStorage.setItem('acceptcookie', 'T');
      this.router.navigate(['/adults/adult-dashboard'])
    }
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        setTimeout(() => {
          this.pageLoaded = true;
        }, 2000)
      }
    });
  }
}
