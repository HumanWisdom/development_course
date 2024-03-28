import { Location } from '@angular/common';
import { Component, OnInit,  ElementRef, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../../../shared/services/navigation.service';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'HumanWisdom-overcome-stress-anxiety',
  templateUrl: './overcome-stress-anxiety.page.html',
  styleUrls: ['./overcome-stress-anxiety.page.scss'],
})
export class OvercomeStressAnxietyPage implements OnInit {
  userId = 100
  qrList: any
  goToPage: any
  breathingP: any
  stressP: any
  fearP: any
  natureP: any
  rmP: any
  lifestoriesList = []
  sId: any
  dealingwithdepressionP: any
  externalapprovalP: any
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


  @ViewChild('enablepopup') enablepopup: ElementRef;

  constructor(private service: TeenagersService, private router: Router, private location: Location,
    private navigationService:NavigationService,
    private meta: Meta, private title: Title) {
      this.guest = localStorage.getItem('guest') === 'T' ? true : false;
      this.Subscriber = localStorage.getItem('Subscriber') === '1' ? true : false;

      this.mediaUrl = {
        pc01:
        {
          id: 46,
          url: '/podcasts/46.mp3',
          title: 'Understand your own ego'
        },
        pc02:
        {
          id: 47,
          url: '/podcasts/47.mp3',
          title: 'Overcome anxiety'
        },
        pc03:
        {
          id: 58,
          url: '/podcasts/58.mp3',
          title: 'Overcoming loneliness'
        },
        pc04:
        {
          id: 37,
          url: '/podcasts/37.mp3',
          title: 'Five ways to avoid stress'
        },
        pc05:
        {
          id: 15,
          url: '/podcasts/15.mp3',
          title: 'Why do we follow trends'
        },
        pc06:
        {
          id: 28,
          url: '/podcasts/28.mp3',
          title: 'Healing emotional pain'
        },
        pc07:
        {
          id: 33,
          url: '/podcasts/33.mp3',
          title: 'Preventing suicide'
        },
        pc08:
        {
          id: 38,
          url: '/podcasts/38.mp3',
          title: 'Deal with bullying'
        },
        pc09:
        {
          id: 40,
          url: '/podcasts/40.mp3',
          title: 'Overcoming depression'
        },
        pc10:
        {
          id: 45,
          url: '/podcasts/45.mp3',
          title: 'The resilient mindset,'
        },
    
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
    localStorage.setItem("NaviagtedFrom", '/teenagers/curated/overcome-stress-anxiety');

    this.title.setTitle('Stress Relief Tips for Improved Mental Health')
    this.meta.updateTag({ property: 'title', content: 'Stress Relief Tips for Improved Mental Health' })
    this.meta.updateTag({ property: 'description', content: 'Learn practical stress relief tips that can help improve your mental health and well-being.' })
    this.meta.updateTag({ property: 'keywords', content: 'Overcoming stress,Anxiety management,Stress relief,Mental health tips,Mindfulness practices,Stress reduction,Positive mindset,Mindfulness practices,Mental health tips' })

    localStorage.setItem('curated', 'stress');
    let rem = localStorage.getItem('remember');
    if (!rem || rem === 'F' && localStorage.getItem("isloggedin") === 'T') {
      this.userId = JSON.parse(localStorage.getItem("userId"))
    }

    this.service.getcuratedstressdashstories().subscribe((res) => {
      if (res) {
        this.lifestoriesList = res
      }
    })
  }

  getimage(id) {
    let Id = id <= 9 ? '0' + id : id;
    return `https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/podcast/${Id}.webp`
  }

  /*
  toRead(obj) {
    localStorage.setItem("story", JSON.stringify(obj))
    let res = localStorage.getItem("isloggedin");
    this.sId = obj.ScenarioID
    if (res && res === 'T') {
      this.service.clickStory(obj.ScenarioID).subscribe(res => {

        this.router.navigate(['/wisdom-stories/view-stories'], { queryParams: { sId: `${this.sId}` } })
      })
    } else {
      this.router.navigate(['/wisdom-stories/view-stories'], { queryParams: { sId: `${this.sId}` } })
    }

  }
  */

  toRead(obj) {
    let sId = obj;
    this.router.navigate(['/wisdom-stories/view-stories'], { queryParams: { sId: `${sId}` } })
  }

  getsupport(url, id, ind = 0) {
    let index = ind + 1
    url = url === '/teenagers/get-support-now/s7100' ? '/teenagers/get-support-now/s7100' + index : url
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

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.location.back();
    }
  }
  routeGuided() {
    this.router.navigate(['/teenagers/journal'], { queryParams: { "isGuided": true } })
  }
  youtube(link) {
    if (this.guest || !this.Subscriber) {
      this.router.navigate(['/subscription/start-your-free-trial']);
    }else{
    this.router.navigate(['/teenagers/curated/youtubelink', link])
    }
  }

  s3video(link) {
    if (this.guest || !this.Subscriber) {
      this.router.navigate(['/subscription/start-your-free-trial']);
    }else{
      this.router.navigate(['/teenagers/wisdom-shorts', link])
    }
  }

  audiopage(audiofile, title, id) {
    if (this.guest || !this.Subscriber) {
      this.router.navigate(['/subscription/start-your-free-trial']);
    }else{
      let mediaAudio = JSON.parse(localStorage.getItem("mediaAudio"))
      let audioLink = mediaAudio + audiofile
      this.router.navigate(['/teenagers/curated/audiopage', audioLink, title, id])
    }
  }

  routeBreathing(cont: any = 1) {

    var breathingR

    localStorage.setItem("moduleId", JSON.stringify(107))
    this.service.clickModule(107, this.userId)
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
            this.router.navigate([`/teenagers/breathing/${breathingR}`])
          }
          else
            this.router.navigate([`/teenagers/breathing/s107001`])

          /* if(!breathingR)
           {

             this.router.navigate([`/teenagers/breathing`])

           }
           else
             this.router.navigate([`/teenagers/breathing/s${breathingR}`])*/

        })

  }

  routeStress(cont: any = 1) {
    var stressResume
    localStorage.setItem("moduleId", JSON.stringify(125))
    this.service.clickModule(125, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        stressResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("stressResume", stressResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/teenagers/stress/${stressResume}`])
          }
          else
            this.router.navigate([`/teenagers/stress/s125001`])
          /* if(!this.goToPage)
           {

             this.router.navigate([`/teenagers/stress`])
           }
           else
             this.router.navigate([`/teenagers/stress/s${stressResume}`])*/

        })

  }

  // understand emotions
  routeFearAnxiety(cont: any = 1) {
    var fearResume
    localStorage.setItem("moduleId", JSON.stringify(112))
    this.service.clickModule(112, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        fearResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("fearResume", fearResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/teenagers/fear-anxiety/${fearResume}`])
          }
          else
            this.router.navigate([`/teenagers/fear-anxiety/s112001`])
          /* if(!fearResume)
           {

             this.router.navigate([`/teenagers/fear-anxiety`])
           }
           else
             this.router.navigate([`/teenagers/fear-anxiety/s${fearResume}`])*/

        })
  }

  // how the mind works
  routeConditioning(cont: any = 1) {
    var conditioningResume
    localStorage.setItem("moduleId", JSON.stringify(105))
    this.service.clickModule(105, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        conditioningResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("conditioningResume", conditioningResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/teenagers/conditioning/${conditioningResume}`])
          }
          else
            this.router.navigate([`/teenagers/conditioning/s105001`])
          /*if(!conditioningResume)
          {

            this.router.navigate([`/teenagers/conditioning`])
          }
          else
            this.router.navigate([`/teenagers/conditioning/s${conditioningResume}`])*/

        })

  }


  routeReactiveMind(cont: any = 1) {
    var rmR
    localStorage.setItem("moduleId", JSON.stringify(113))
    this.service.clickModule(113, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        rmR = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("rmR", rmR)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/teenagers/reactive-mind/${rmR}`])
          }
          else
            this.router.navigate([`/teenagers/reactive-mind/s113001`])
          /* if(!rmR)
           {

             this.router.navigate([`/teenagers/reactive-mind`])
           }
           else
             this.router.navigate([`/teenagers/reactive-mind/s${rmR}`])*/

        })

  }

  routeDealingWithDepression(cont: any = 1) {
    var dealingwithdepressionResume
    localStorage.setItem("moduleId", JSON.stringify(156))
    this.service.clickModule(156, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        dealingwithdepressionResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("dealingwithdepressionResume", dealingwithdepressionResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/teenagers/dealing-with-depression/${dealingwithdepressionResume}`])
          }
          else
            this.router.navigate([`/teenagers/dealing-with-depression/s156001`])
        })
  }

  routeExternalApproval(cont: any = 1) {
    var externalapprovalR
    localStorage.setItem("moduleId", JSON.stringify(123))
    this.service.clickModule(123, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        externalapprovalR = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("externalapprovalR", externalapprovalR)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/teenagers/external-approval/${externalapprovalR}`])
          }
          else
            this.router.navigate([`/teenagers/external-approval/s123001`])
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
        this.fearP = res.ModUserScrPc.find(e => e.Module == "Fear & Anxiety")?.Percentage
        this.stressP = res.ModUserScrPc.find(e => e.Module == "Stress")?.Percentage
        this.natureP = res.ModUserScrPc.find(e => e.Module == "Nature")?.Percentage
        this.breathingP = res.ModUserScrPc.find(e => e.Module == "Breathing")?.Percentage
        this.rmP = res.ModUserScrPc.find(e => e.Module == "Reactive Mind")?.Percentage
        this.dealingwithdepressionP = res.ModUserScrPc.find(e => e.Module == "Dealing with Depression")?.Percentage
        this.externalapprovalP = res.ModUserScrPc.find(e => e.Module == "Need for approval")?.Percentage
      })
  }

  viewblog(id) {
    localStorage.setItem("blogdata", JSON.stringify(id))
    localStorage.setItem("blogId", JSON.stringify(id))
    this.router.navigate(['blog-article'], { replaceUrl: true, skipLocationChange: true, queryParams: { sId: `${id}` } })
  }

  enableRoute(route) {

      this.router.navigate([route]);

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

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  audioevent(audioContent) {
    if (!this.isSubscriber && audioContent.id >= 4) {
      this.router.navigate(['/subscription/start-your-free-trial']);
    } else {
       this.router.navigate(['teenagers/curated/audiopage/', audioContent.url,audioContent.title, audioContent.id]);
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
