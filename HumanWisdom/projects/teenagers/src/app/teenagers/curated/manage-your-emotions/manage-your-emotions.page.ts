import { Location } from '@angular/common';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Constant } from '../../../../../../shared/services/constant';
import { NavigationService } from '../../../../../../shared/services/navigation.service';
import { TeenagersService } from '../../teenagers.service';
import { SharedService } from '../../../../../../shared/services/shared.service';
import { ProgramType } from '../../../../../../shared/models/program-model';

@Component({
  selector: 'HumanWisdom-manage-your-emotions',
  templateUrl: './manage-your-emotions.page.html',
  styleUrls: ['./manage-your-emotions.page.scss'],
})
export class ManageYourEmotionsPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;

  userId = 100
  qrList: any
  goToPage: any
  angerP: any
  rmP: any
  pleasureP: any
  addictionP: any
  comparisonP: any
  lonelinessP: any
  lifestoriesList = []
  sId: any;
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
  isAdults = true;
  
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
          title: 'Understand your ego'
        },
        pc02: 
        {
          id: 42,
          url: '/podcasts/42.mp3',
          title: 'Exploring Mortality'
        },
        pc03: 
        {
          id: 37,
          url: '/podcasts/37.mp3',
          title: 'Five ways to avoid stress'
        },
        pc04: 
        {
          id: 31,
          url: '/podcasts/31.mp3',
          title: 'Dealing with anger'
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

 
    this.title.setTitle('Managing Emotions with Mindfulness & Positive Psychology')
    this.meta.updateTag({ property: 'title', content: 'Managing Emotions with Mindfulness & Positive Psychology' })
    this.meta.updateTag({ property: 'description', content: 'Gain mastery over your emotions with our expert-guided coping strategies for anger management, stress management, and mood regulation. Learn how to practice emotional self-regulation and self-awareness techniques that promote mindfulness and positive psychology.' })
    this.meta.updateTag({ property: 'keywords', content: 'Emotional intelligence,Coping with emotions,Anger management,Emotional self-regulation,Self-awareness techniques,Mindfulness practices,Positive psychology,Mood regulation,Anger management,Self-control techniques,Stress management' })

    localStorage.setItem("NaviagtedFrom", '/teenagers/curated/manage-your-emotions');

    localStorage.setItem('curated', 'emotions');
    let rem = localStorage.getItem('remember');
    if (!rem || rem === 'F' && localStorage.getItem("isloggedin") === 'T') {
      this.userId = JSON.parse(localStorage.getItem("userId"))
    }

    this.service.getcuratedemotionsdashstories().subscribe((res) => {
      if (res) {
        this.lifestoriesList = res
      }
    })
    
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
        } else {
         this.isAdults = false;
        }
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
    this.router.navigate(['/teenagers/wisdom-stories/view-stories'], { queryParams: { sId: `${sId}` } })
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
    this.router.navigate([url]);
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

  routeAnger(cont: any = 1) {
    var angerResume
    localStorage.setItem("moduleId", JSON.stringify(118))
    this.service.clickModule(14, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        angerResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("angerResume", angerResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/teenagers/anger/${angerResume}`])
          }
          else
            this.router.navigate([`/teenagers/anger/s118001`])
          /* if(!angerResume)
            {

              this.router.navigate([`/teenagers/anger/s162p0`])
            }
            else
              this.router.navigate([`/teenagers/anger/s${angerResume}`])*/
        })
  }

  routeAnxiety(cont: any = 1) {
    var rmR
    localStorage.setItem("moduleId", JSON.stringify(112))
    this.service.clickModule(54, this.userId)
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
            this.router.navigate([`/teenagers/fear-anxiety/${rmR}`])
          }
          else
            this.router.navigate([`/teenagers/fear-anxiety/s112001`])
          /* if(!rmR)
           {

             this.router.navigate([`/teenagers/reactive-mind`])
           }
           else
             this.router.navigate([`/teenagers/reactive-mind/s${rmR}`])*/
        })
  }
  routeDealingWithDepression(cont: any = 1) {
    var rmR
    localStorage.setItem("moduleId", JSON.stringify(156))
    this.service.clickModule(54, this.userId)
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
            this.router.navigate([`/teenagers/dealing-with-depression/${rmR}`])
          }
          else
            this.router.navigate([`/teenagers/dealing-with-depression/s156001`])
          /* if(!rmR)
           {

             this.router.navigate([`/teenagers/reactive-mind`])
           }
           else
             this.router.navigate([`/teenagers/reactive-mind/s${rmR}`])*/
        })
  }

  routeReactiveMind(cont: any = 1) {
    var rmR
    localStorage.setItem("moduleId", JSON.stringify(113))
    this.service.clickModule(54, this.userId)
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

  routePleasure(cont: any = 1) {
    var pleasureResume
    localStorage.setItem("moduleId", JSON.stringify(124))
    this.service.clickModule(20, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        pleasureResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("pleasureResume", pleasureResume)
        // this.mediaPercent=parseInt(res.MediaPercent)
        // this.freeScreens=res.FreeScrs.map(a => a.ScrNo);
        // localStorage.setItem("freeScreens",JSON.stringify(this.freeScreens))
        // localStorage.setItem("mediaPercent",JSON.parse(this.mediaPercent))
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/teenagers/pleasure/${pleasureResume}`])
          }
          else
            this.router.navigate([`/teenagers/pleasure/s124001`])
        })
  }

  routeAddiction(cont: any = 1) {
    var addictionResume
    localStorage.setItem("moduleId", JSON.stringify(127))
    this.service.clickModule(45, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        addictionResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("addictionResume", addictionResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/teenagers/habit-addiction/${addictionResume}`])
          }
          else
            this.router.navigate([`/teenagers/habit-addiction/s127001`])
        })
  }

  routeComparison(cont: any = 1) {
    var comparisonR
    localStorage.setItem("moduleId", JSON.stringify(111))
    this.service.clickModule(7, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        comparisonR = "s" + res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("comparisonR", comparisonR)
        // this.mediaPercent=parseInt(res.MediaPercent)
        // this.freeScreens=res.FreeScrs.map(a => a.ScrNo);
        // localStorage.setItem("freeScreens",JSON.stringify(this.freeScreens))
        // localStorage.setItem("mediaPercent",JSON.parse(this.mediaPercent))
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/teenagers/comparison/${comparisonR}`])
          }
          else
            this.router.navigate([`/teenagers/comparison/s111001`])
        })
  }

  routeLoneliness(cont: any = 1) {
    var lonelinessResume
    localStorage.setItem("moduleId", JSON.stringify(117))
    this.service.clickModule(61, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        lonelinessResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("lonelinessResume", lonelinessResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/teenagers/loneliness/${lonelinessResume}`])
          }
          else
            this.router.navigate([`/teenagers/loneliness/s117001`])
          /* if(!lonelinessResume)
            {

              this.router.navigate([`/teenagers/loneliness/s162p0`])
            }
            else
              this.router.navigate([`/teenagers/loneliness/s${lonelinessResume}`])*/
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

              x.imgPath = `https://d1tenzemoxuh75.cloudfront.net/assets/images/background/resume/${x.ModuleId}.png`
            }
          }
        })

        //static progress
        this.angerP = res.ModUserScrPc.find(e => e.Module == "Anger")?.Percentage
        this.rmP = res.ModUserScrPc.find(e => e.Module == "Reactive Mind")?.Percentage
        this.pleasureP = res.ModUserScrPc.find(e => e.Module == "Pleasure")?.Percentage
        this.addictionP = res.ModUserScrPc.find(e => e.Module == "Addiction")?.Percentage
        this.comparisonP = res.ModUserScrPc.find(e => e.Module == "Comparison")?.Percentage
        this.lonelinessP = res.ModUserScrPc.find(e => e.Module == "Loneliness")?.Percentage
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
       this.router.navigate(['teenagers/curated/audiopage/', audioContent.url,audioContent.title, audioContent.id]);
    }
  }

  viewblog(id) {
    localStorage.setItem("blogdata", JSON.stringify(id))
    localStorage.setItem("blogId", JSON.stringify(id))
    this.router.navigate(['/teenagers/blog-article'], { replaceUrl: true, skipLocationChange: true, queryParams: { sId: `${id}` } })
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
