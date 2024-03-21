import { Location } from '@angular/common';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../../../shared/services/navigation.service';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'HumanWisdom-feel-calm',
  templateUrl: './feel-calm.page.html',
  styleUrls: ['./feel-calm.page.scss'],
})

export class FeelCalmPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;

  userId = 100
  qrList: any
  goToPage: any
  sorrowandlossP: any
  dealingwithdeathP: any
  enP: any
  withoutLanguageP: any
  breathingP: any
  enableAlert = false;
  guest = false;
  Subscriber = false;
  mediaUrl: any;
  isSubscriber = false;
  enablepathwayViewMore = true;
  enablelifestoriesViewMore = true;
  enableGuidedQuesViewMore = true;
  enablePodcastViewMore = true;
  enableGuidedMediViewMore = true;
  enablefbnViewMore = true;
  enableblogViewMore = true;

  constructor(private service: TeenagersService, private router: Router, private location: Location, private meta: Meta, private title: Title,private navigationService:NavigationService) {
    this.guest = localStorage.getItem('guest') === 'T' ? true : false;
      this.Subscriber = localStorage.getItem('Subscriber') === '1' ? true : false;

      this.mediaUrl = {
        pc01: 
        {
          id: 44,
          url: '/podcasts/44.mp3',
          title: 'Coping with an illness'
        },
        pc02: 
        {
          id: 42,
          url: '/podcasts/42.mp3',
          title: 'Exploring Mortality'
        },
        pc03: 
        {
          id: 28,
          url: '/podcasts/28.mp3',
          title: 'Healing Emotional Pain'
        },
        pc04: 
        {
          id: 10,
          url: '/podcasts/10.mp3',
          title: 'Overcoming grief'
        }
      }

      let userid = localStorage.getItem('isloggedin');
      let sub: any = localStorage.getItem('Subscriber');
      if (userid === 'T' && sub === '1') {
        this.isSubscriber = true;
      } else {
        this.isSubscriber = false;
      }
  }

  ngOnInit() {
    localStorage.setItem("NaviagtedFrom", '/adults/curated/feel-calm');


    this.title.setTitle('Ways to Deal with Sorrow and Loss')
    this.meta.updateTag({ property: 'title', content: 'Ways to Deal with Sorrow and Loss' })
    this.meta.updateTag({ property: 'description', content: 'Explore effective ways to deal with sorrow and overcome the grief of losing a loved one. Find healing after loss with these helpful tips for self-care and coping with death.' })
    this.meta.updateTag({ property: 'keywords', content: 'Support for grief,Healing after loss,Comfort for bereavement,Coping with death,Overcoming sadness,Ways to deal with sorrow,Self-care during grieving,Loss and recovery' })



    localStorage.setItem('curated', 'sorrow');
    let rem = localStorage.getItem('remember');
    if (!rem || rem === 'F' && localStorage.getItem("isloggedin") === 'T') {
      this.userId = JSON.parse(localStorage.getItem("userId"))
    }
  }

  getimage(id) {
    let Id = id <= 9 ? '0' + id : id;
    return `https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/podcast/${Id}.webp`
  }

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.location.back();
    }
  }
  routeGuided() {
  
    this.router.navigate(['/adults/journal'], { queryParams: { "isGuided": true } })
   
  }
  youtube(link) {
    if (this.guest || !this.Subscriber) {
      this.router.navigate(['/subscription/start-your-free-trial']);
    }else{
    this.router.navigate(['/adults/curated/youtubelink', link])
    }
  }

  s3video(link) {
    if (this.guest || !this.Subscriber) {
      this.router.navigate(['/subscription/start-your-free-trial']);
    }else{
    this.router.navigate(['/adults/wisdom-shorts', link])
    }
  }

  audiopage(audiofile, title, id) {
    if (this.guest || !this.Subscriber) {
      this.router.navigate(['/subscription/start-your-free-trial']);
    }else{
    let mediaAudio = JSON.parse(localStorage.getItem("mediaAudio"))
    let audioLink = mediaAudio + audiofile
    this.router.navigate(['/adults/curated/audiopage', audioLink, title, id])
    }
  }

  toRead(obj) {
    let sId = obj;
    this.router.navigate(['/wisdom-stories/view-stories'], { queryParams: { sId: `${sId}` } })
  }

  getsupport(url, id, ind = 0) {
    let index = ind + 1
    url = url === '/adults/get-support-now/s7100' ? '/adults/get-support-now/s7100' + index : url
    this.service.clickModule(id, this.userId)
      .subscribe(res => {
        localStorage.setItem('activemoduleid', id);
        localStorage.setItem('moduleId', id);
        this.router.navigate([url])
        localStorage.setItem("supportwisdomstories", JSON.stringify(res['scenarios']))
      },
        error => {
          console.log(error)
        },
        () => {

        })
  }

  routeSorrowandLoss(cont: any = 1) {
    var sorrowandlossResume
    localStorage.setItem("moduleId", JSON.stringify(60))
    this.service.clickModule(60, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        sorrowandlossResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("sorrowandlossResume", sorrowandlossResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/sorrow/${sorrowandlossResume}`])
          }
          else
            this.router.navigate([`/adults/sorrow/s60001`])
        })
  }

  routeDealingWithDeath(cont: any = 1) {
    var dealingwithdeathResume
    localStorage.setItem("moduleId", JSON.stringify(64))
    this.service.clickModule(64, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        dealingwithdeathResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("dealingwithdeathResume", dealingwithdeathResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/dealing-with-death/${dealingwithdeathResume}`])
          }
          else
            this.router.navigate([`/adults/dealing-with-death/s64001`])
        })
  }

  routeEmotionalNeeds(cont: any = 1) {
    var enR
    localStorage.setItem("moduleId", JSON.stringify(18))
    this.service.clickModule(18, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        enR = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("enR", enR)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/emotional-needs/${enR}`])
          }
          else
            this.router.navigate([`/adults/emotional-needs/s18001`])

          /*if(!sinR)
          {

            this.router.navigate([`/adults/self-interest`])
          }
          else
            this.router.navigate([`/adults/self-interest/s${sinR}`])*/
        })
  }

  routeLookWithoutLanguage(cont: any = 1) {
    var lwlResume
    localStorage.setItem("moduleId", JSON.stringify(42))
    this.service.clickModule(42, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        lwlResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("lwlResume", lwlResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/without-language/${lwlResume}`])
          }
          else
            this.router.navigate([`/adults/without-language/s42000`])
          /* if(!lwlResume)
           {

             this.router.navigate([`/adults/without-language`])
           }
           else
             this.router.navigate([`/adults/without-language/s${lwlResume}`])*/
        })
  }

  routeBreathing(cont: any = 1) {

    var breathingR

    localStorage.setItem("moduleId", JSON.stringify(29))
    this.service.clickModule(29, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        breathingR = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("breathingR", breathingR)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/breathing/${breathingR}`])
          }
          else
            this.router.navigate([`/adults/breathing/s29000`])

          /* if(!breathingR)
           {

             this.router.navigate([`/adults/breathing`])

           }
           else
             this.router.navigate([`/adults/breathing/s${breathingR}`])*/
        })
  }

  getProgress() {
    this.service.getPoints(this.userId)
      .subscribe(res => {

        //resume section
        res.ModUserScrPc.filter(x => {
          if (parseFloat(x.Percentage) < 100) {
            if (x.ModuleId != 71 && x.ModuleId != 72) {
              if (x.ModuleId < 10) {
                x.ModuleId = "0" + x.ModuleId

              }

              x.imgPath = `https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/${x.ModuleId}.png`
            }
          }
        })

        //static progress
        this.sorrowandlossP = res.ModUserScrPc.find(e => e.Module == "Sorrow And Loss")?.Percentage
        this.dealingwithdeathP = res.ModUserScrPc.find(e => e.Module == "Dealing With Death")?.Percentage
        this.enP = res.ModUserScrPc.find(e => e.Module == "Emotional Needs")?.Percentage
        this.withoutLanguageP = res.ModUserScrPc.find(e => e.Module == "Look without Language")?.Percentage
        this.breathingP = res.ModUserScrPc.find(e => e.Module == "Breathing")?.Percentage
      })
  }

  getAlertcloseEvent(event) {
    this.enableAlert = false;
    if (event === 'ok') {
      if (!this.guest && !this.Subscriber) {
        this.router.navigate(["/onboarding/add-to-cart"]);
      } else if (this.guest) {
        localStorage.setItem("subscribepage", 'T');
        this.router.navigate(["/onboarding/login"]);
      }
    }
  }

  enableRoute(route) {
  
      this.router.navigate([route]);
   
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  audioevent(audioContent) {
    if (!this.isSubscriber && audioContent.id >= 4) {
      this.router.navigate(['/subscription/start-your-free-trial']);
    } else {
       this.router.navigate(['adults/curated/audiopage/', audioContent.url,audioContent.title, audioContent.id]);
    }
  }

  enableViewMore(type) {
    if(type==='pathway') {
      this.enablepathwayViewMore = false;
    }else if(type === 'lifestories'){
      this.enablelifestoriesViewMore = false;
    }else if(type === 'guidedQues') {
      this.enableGuidedQuesViewMore = false
    }else if(type === 'podcast') {
      this.enablePodcastViewMore = false
    }else if(type === 'guidedMedidation') {
      this.enableGuidedMediViewMore = false
    }else if(type === 'fbn') {
      this.enablefbnViewMore = false
    }else if(type === 'blog') {
      this.enableblogViewMore = false
    }
  }

  enableViewLess(type) {
    if(type==='pathway') {
      this.enablepathwayViewMore = true;
    }else if(type === 'lifestories'){
      this.enablelifestoriesViewMore = true;
    }else if(type === 'guidedQues') {
      this.enableGuidedQuesViewMore = true
    }else if(type === 'podcast') {
      this.enablePodcastViewMore = true
    }else if(type === 'guidedMedidation') {
      this.enableGuidedMediViewMore = true
    }else if(type === 'fbn') {
      this.enablefbnViewMore = true
    }else if(type === 'blog') {
      this.enableblogViewMore = true
    }
  }

}
