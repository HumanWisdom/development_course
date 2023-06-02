import {
  Platform
} from '@angular/cdk/platform';
import { Component, HostListener, OnDestroy } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AdultsService } from './adults/adults.service';
import { slider } from './route.animation';
import { SharedService } from '../../../shared/services/shared.service';
import { ProgramType } from '../../../shared/models/program-model';
import moengage from "@moengage/web-sdk";
import { MoengageService } from './moengage.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  animations: [slider]
})
export class AppComponent implements OnDestroy {
  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    localStorage.setItem('adult', 'F')
  }
  //static progress mapping
  mediaAudio = "https://d1tenzemoxuh75.cloudfront.net"
  mediaVideo = "https://d1tenzemoxuh75.cloudfront.net"
  schema = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    name: 'Example Web Site HumanWisdom',
    url: 'https://staging.humanwisdom.me/course'
  };

  public pageLoaded = false;
  navigationSubs = new Subscription();

  constructor(
    private platform: Platform,
    private router: Router,
    private meta: Meta,
    private title: Title,
    private services: AdultsService,
    public moengageService:MoengageService
  ) {
    if(platform.isBrowser){
      moengage.initialize({app_id: 'W2R5GQ0DULCQOIF0QXPW1QR1',debug_logs:1,
      swPath:'/course/serviceworker.js',
    });
      // this.moengageService.requestWebPushPermission().then((permission) => {
      //   console.log('Web push permission:', permission);
      // });
    }
    
    if (localStorage.getItem("isloggedin") !== 'T') {
      this.services.emaillogin();
    }
  
    SharedService.ProgramId=ProgramType.Adults;
    localStorage.setItem("mediaAudio", JSON.stringify(this.mediaAudio))
    localStorage.setItem("mediaVideo", JSON.stringify(this.mediaVideo))
    if (this.platform.ANDROID || this.platform.IOS) {
      localStorage.setItem('acceptcookie', 'T')
    }
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.UpdateMeta(event.url);
      }
    });

    this.navigationSubs = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.services.previousUrl = this.services.currentUrl;
      this.services.currentUrl = event.url;
    });

    this.initializeApp();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }


  UpdateMeta(PageUrl) {
    if (PageUrl.includes('/adults/stress')) {

      if (this.title.getTitle() !== 'Emotional Well-Being and Stress: Strategies for Life Balance') {

        this.title.setTitle('Emotional Well-Being and Stress: Strategies for Life Balance')
        this.meta.updateTag({ property: 'title', content: 'Emotional Well-Being and Stress: Strategies for Life Balance' })
        this.meta.updateTag({ property: 'description', content: 'Balance your life and reduce stress with our comprehensive guide on resilience, self-care, and stress management. Read more on HumanWisdom.me.' })
        this.meta.updateTag({ property: 'keywords', content: 'Mindfulness for stress relief,Emotional well-being and stress, Resilience and stress management, Life balance and stress, Self care for stress management' })

      }
    }
    else if (PageUrl.includes('/adults/self-esteem')) {


      if (this.title.getTitle() !== 'Overcoming Self-Doubt: Enhancing Self-Worth & Improving Self-Esteem') {

        this.title.setTitle('Overcoming Self-Doubt: Enhancing Self-Worth & Improving Self-Esteem')
        this.meta.updateTag({ property: 'title', content: 'Overcoming Self-Doubt: Enhancing Self-Worth & Improving Self-Esteem' })
        this.meta.updateTag({ property: 'description', content: 'Discover strategies for overcoming self-doubt and enhancing your self-worth. Improve your self-esteem and mental health with HumanWisdom.me.' })
        this.meta.updateTag({ property: 'keywords', content: 'Self-esteem in adulthood, Boosting self-confidence, Building self-esteem, Positive self-image, Overcoming self-doubt, Enhancing self-worth, Improving self-esteem, Raising self-esteem, Self-esteem and mental health' })
      }
    }
    else if (PageUrl.includes('/adults/habit-addiction')) {

      if (this.title.getTitle() !== 'Breaking the Cycle: Overcoming Habit') {

        this.title.setTitle('Breaking the Cycle: Overcoming Habit')
        this.meta.updateTag({ property: 'title', content: 'Breaking the Cycle: Overcoming Habit' })
        this.meta.updateTag({ property: 'description', content: 'Discover practical strategies and resources to help you overcome habit addiction. Learn how to break addictive habits, find support and achieve a healthier and happier life.' })
        this.meta.updateTag({ property: 'keywords', content: 'habit addiction in adults,overcoming habit addiction as an adult,breaking habits and addictions in adulthood,human wisdom for habit addiction,habit addiction,overcoming habit addiction,addiction recovery,habits and addiction,addiction treatment,breaking habits and addictions,habit change,addiction support,addiction help,overcoming addiction habits,addiction counseling,addiction resources,overcoming addictive habits,addiction and habit change' })
      }
    }
    else if (PageUrl.includes('/adults/food-health')) {

      if (this.title.getTitle() !== 'Healthy Eating: A Key to Total Wellness') {

        this.title.setTitle('Healthy Eating: A Key to Total Wellness')
        this.meta.updateTag({ property: 'title', content: 'Healthy Eating: A Key to Total Wellness' })
        this.meta.updateTag({ property: 'description', content: 'Find your path to total wellness with healthy eating. Learn about nutritious food choices, healthy habits, and creating a balanced diet for better health and happiness.' })
        this.meta.updateTag({ property: 'keywords', content: 'food and health for adults,healthy food for adults,adult nutrition,food choices for adults,human wisdom for food and health,food and health,healthy food,nutrition,healthy eating,food choices,healthy food habits,diet,healthy eating habits,wellness through food,healthy eating' })
      }
    }
    else if (PageUrl.includes('/adults/living-with-peace')) {

      if (this.title.getTitle() !== 'Living with Peace: Find Your Inner Calm') {

        this.title.setTitle('Living with Peace: Find Your Inner Calm')
        this.meta.updateTag({ property: 'title', content: 'Living with Peace: Find Your Inner Calm' })
        this.meta.updateTag({ property: 'description', content: 'Discover the power of peace and learn how to find inner calm. Learn about mindfulness, stress relief, and creating a life filled with peace and serenity.' })
        this.meta.updateTag({ property: 'keywords', content: 'living with peace,finding peace,inner peace,peace of mind,mindfulness,stress relief,mental peace,relaxation,calmness,stress management,peaceful living,serenity,stress-free living' })
      }
    }
    else if (PageUrl.includes('/adults/dealing-with-death')) {

      if (this.title.getTitle() !== 'Coping with Death: Finding Comfort in Grief') {

        this.title.setTitle('Coping with Death: Finding Comfort in Grief')
        this.meta.updateTag({ property: 'title', content: 'Coping with Death: Finding Comfort in Grief' })
        this.meta.updateTag({ property: 'description', content: 'Navigate the grieving process and find comfort in the face of loss. Learn about honoring the dead, dealing with death, and finding peace after a loved one has passed away.' })
        this.meta.updateTag({ property: 'keywords', content: 'Dealing with grief,Grief support,Grief counseling,Grief and loss,Healing after loss,Dealing with death of a loved one,Dealing with the loss of a parent' })
      }
    }
    else if (PageUrl.includes('/adults/relationships')) {

      if (this.title.getTitle() !== 'Building Strong Relationships') {

        this.title.setTitle('Building Strong Relationships')
        this.meta.updateTag({ property: 'title', content: 'Building Strong Relationships' })
        this.meta.updateTag({ property: 'description', content: 'Learn how to build and maintain healthy relationships with advice and tips from experts. Improve communication, conflict resolution, and create stronger connections.' })
        this.meta.updateTag({ property: 'keywords', content: 'Relationships for adults,Building healthy relationships,Maintaining healthy relationships,Improving relationships,Building strong relationships,Healthy relationship tips,Stronger relationships,Relationships advice,Relationship building,Relationship skills' })
      }
    }
    
    else if (PageUrl.includes('/adults/communication')) {

      if (this.title.getTitle() !== 'Improving Communication Skills') {

        this.title.setTitle('Improving Communication Skills')
        this.meta.updateTag({ property: 'title', content: 'Improving Communication Skills' })
        this.meta.updateTag({ property: 'description', content: 'Learn how to build and maintain healthy relationships with advice and tips from experts. Improve communication, conflict resolution, and create stronger connections.' })
        this.meta.updateTag({ property: 'keywords', content: 'Communication for adults,Improving communication skills,Effective communication for adults,Building communication skills,Communication skills for relationships,Communication tips for adults,Improving relationships through communication,Stronger communication skills,Effective communication tips,Communication in relationships' })
      }
    }
    else if (PageUrl.includes('/adults/happiness')) {

      if (this.title.getTitle() !== 'Achieving Happiness for Adults: Tips & Strategies') {

        this.title.setTitle('Achieving Happiness for Adults: Tips & Strategies')
        this.meta.updateTag({ property: 'title', content: 'Achieving Happiness for Adults: Tips & Strategies' })
        this.meta.updateTag({ property: 'description', content: 'Learn how to find and maintain happiness in adulthood with our expert-approved tips and strategies.' })
        this.meta.updateTag({ property: 'keywords', content: 'adult happiness,finding happiness,happiness tips,happiness for adults,achieving happiness,maintain happiness,adult happiness tips,ways to find happiness,tips for adult happiness,happiness in adulthood,strategies for happiness,happiness and well-being' })
      }
    }
    else if (PageUrl.includes('/adults/love')) {

      if (this.title.getTitle() !== 'Finding Love in Adulthood: Tips & Advice for Adult Relationships') {

        this.title.setTitle('Finding Love in Adulthood: Tips & Advice for Adult Relationships')
        this.meta.updateTag({ property: 'title', content: 'Finding Love in Adulthood: Tips & Advice for Adult Relationships' })
        this.meta.updateTag({ property: 'description', content: 'Find the love you deserve with these tips and advice for adult relationships. Learn how to cultivate healthy relationships, build meaningful connections, and find happiness in love.' })
        this.meta.updateTag({ property: 'keywords', content: 'Adult Love,Finding Love,Love Tips,Love for Adults,Maintaining Love,Adult Love Advice,Ways to Find Love,Love in Adulthood,Love and Relationships,Strategies for Love' })
      }
    }
    else if (PageUrl.includes('/adults/bullying')) {

      if (this.title.getTitle() !== 'Stop Adult Bullying: Dealing & Overcoming Techniques') {

        this.title.setTitle('Stop Adult Bullying: Dealing & Overcoming Techniques')
        this.meta.updateTag({ property: 'title', content: 'Stop Adult Bullying: Dealing & Overcoming Techniques' })
        this.meta.updateTag({ property: 'description', content: 'Find support and learn how to handle bullying as an adult with our expert tips and strategies. Discover ways to prevent bullying and its effects, and take steps towards recovery and a brighter future. Get help with adult bullying today!' })
        this.meta.updateTag({ property: 'keywords', content: 'adult bullying,dealing with bullying,overcoming bullying,adult bullying prevention,how to handle bullying as an adult,adult bullying support,adult bullying help,stop bullying as an adult,ways to deal with bullying,bullying and its effects on adults,adult bullying recovery' })
      }
    }
    else if (PageUrl.includes('/adults/criticism')) {

      if (this.title.getTitle() !== 'Overcome Criticism and Boost Your Self-Worth') {

        this.title.setTitle('Overcome Criticism and Boost Your Self-Worth')
        this.meta.updateTag({ property: 'title', content: 'Overcome Criticism and Boost Your Self-Worth' })
        this.meta.updateTag({ property: 'description', content: 'Discover strategies for handling criticism in adulthood and build resilience for a stronger, happier life.' })
        this.meta.updateTag({ property: 'keywords', content: 'adult criticism,handling criticism,criticism in adulthood,criticism and self-esteem,overcoming criticism,how to handle criticism,coping with criticism,adult criticism coping,criticism and resilience,criticism and self-worth' })
      }
    }
    else if (PageUrl.includes('/adults/work')) {

      if (this.title.getTitle() !== 'Manage Work Stress & Achieve Work-Life Balance') {

        this.title.setTitle('Manage Work Stress & Achieve Work-Life Balance')
        this.meta.updateTag({ property: 'title', content: 'Manage Work Stress & Achieve Work-Life Balance' })
        this.meta.updateTag({ property: 'description', content: 'Get tips for adult work life integration, handling stress, and finding job satisfaction for a harmonious, productive life.' })
        this.meta.updateTag({ property: 'keywords', content: 'adult work,work and life balance,work and happiness,work life integration,job satisfaction,work stress,managing work stress,finding job satisfaction,career fulfillment,adult career development,work life balance tips' })
      }
    }
    else if (PageUrl.includes('/adults/leadership')) {

      if (this.title.getTitle() !== 'Leadership for Adults: Your Guide to Success') {

        this.title.setTitle('Leadership for Adults: Your Guide to Success')
        this.meta.updateTag({ property: 'title', content: 'Leadership for Adults: Your Guide to Success' })
        this.meta.updateTag({ property: 'description', content: 'Learn how to develop your leadership style, communicate effectively, and lead with purpose and vision.' })
        this.meta.updateTag({ property: 'keywords', content: 'adult leadership,leadership for adults,becoming a leader,adults leadership skills,developing leadership,leadership skills for adults,adult leadership development,leadership in adulthood,grown-up leadership skills,adult leadership strategies,enhancing leadership' })
      }
    }
    else if (PageUrl.includes('/adults/money')) {

      if (this.title.getTitle() !== 'Financial Planning for Adults: A Path to Financial Stability') {

        this.title.setTitle('Financial Success for Adults: Tips & Strategies')
        this.meta.updateTag({ property: 'title', content: 'Financial Success for Adults: Tips & Strategies' })
        this.meta.updateTag({ property: 'description', content: 'Discover practical tips and strategies for managing your finances and achieving financial success in adulthood. Learn to make smart money decisions and build wealth.' })
        this.meta.updateTag({ property: 'keywords', content: 'adult money management,personal finance for adults,managing money as an adult,financial stability for adults,money and happiness for adults,adult financial planning,adult budgeting tips,financial literacy for adults,adult savings and investing,financial security for adults' })
      }
    }
    else if (PageUrl.includes('/adults/opinions-beliefs')) {

      if (this.title.getTitle() !== 'Navigating Adult Opinions and Beliefs') {

        this.title.setTitle('Navigating Adult Opinions and Beliefs')
        this.meta.updateTag({ property: 'title', content: 'Navigating Adult Opinions and Beliefs' })
        this.meta.updateTag({ property: 'description', content: 'Learn how to manage your beliefs and opinions in adulthood. Explore techniques for changing and shaping your beliefs to improve self-esteem and decision-making' })
        this.meta.updateTag({ property: 'keywords', content: 'adult opinions,managing beliefs,beliefs in adulthood,changing beliefs,adult beliefs,forming beliefs,beliefs and self-esteem,beliefs and decision-making,understanding beliefs,shaping beliefs' })
      }
    }
    else if (PageUrl.includes('/adults/success-failure')) {

      if (this.title.getTitle() !== 'Discover the Keys to Success and Overcoming Failure as an Adult') {

        this.title.setTitle('Discover the Keys to Success and Overcoming Failure as an Adult')
        this.meta.updateTag({ property: 'title', content: 'Discover the Keys to Success and Overcoming Failure as an Adult' })
        this.meta.updateTag({ property: 'description', content: 'Unlock your potential for success as an adult with our practical tips for overcoming failure and achieving your goals.' })
        this.meta.updateTag({ property: 'keywords', content: 'learning from failure,success and failure in adulthood,overcoming failure,adult success strategies,navigating success and failure,the importance of failure,success and failure mindset,resilience and failure,the role of failure in success,finding success after failure' })
      }
    }
    else if (PageUrl.includes('/adults/making-better-decisions')) {

      if (this.title.getTitle() !== 'Improve Your Decision Making Skills Today') {

        this.title.setTitle('Improve Your Decision Making Skills Today')
        this.meta.updateTag({ property: 'title', content: 'Improve Your Decision Making Skills Today' })
        this.meta.updateTag({ property: 'description', content: 'Learn how to improve your decision making skills and make smart choices with these tips for adult decision making.' })
        this.meta.updateTag({ property: 'keywords', content: 'adult decision making,better decision making,decision making tips,adult decision making skills,making smart decisions,improving decision making,effective decision making,adult decision making process,decision making strategies,improving decision making skills' })
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


  ngOnDestroy(): void {
    this.navigationSubs.unsubscribe();
  }
}
