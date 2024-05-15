import { Location } from '@angular/common';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../../../shared/services/navigation.service';
import { TeenagersService } from '../../teenagers.service';
import { SharedService } from '../../../../../../shared/services/shared.service';
import { ProgramType } from '../../../../../../shared/models/program-model';

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
  natureP: any
  breathingP: any
  ntP: any
  gamP: any
  meditationP: any
  withoutLanguageP: any
  awarenessP: any
  guest = false;
  Subscriber = false;
  mediaUrl: any;
  enablepathwayViewMore = true;
  enablelifestoriesViewMore = true;
  enableGuidedQuesViewMore = true;
  enablePodcastViewMore = true;
  enableGuidedMediViewMore = true;
  enablefbnViewMore = true;
  enableblogViewMore = true;
  isAdults = true;
  
  constructor(private service: TeenagersService, private router: Router, private location: Location, private meta: Meta, private title: Title,
    private navigationService:NavigationService) 
  { 
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
        id: 47,
        url: '/podcasts/47.mp3',
        title: 'Overcome anxiety'
      },
      pc03: 
      {
        id: 24,
        url: '/podcasts/24.mp3',
        title: 'Living with peace'
      },
      pc04: 
      {
        id: 64,
        url: '/podcasts/64.mp3',
        title: 'Exploring our inner silence '
      }
    }
  }

  ngOnInit() {
    localStorage.setItem("NaviagtedFrom", '/teenagers/curated/have-calm-mind');

    this.title.setTitle('Mindfulness Practices for a Calm Mind')
    this.meta.updateTag({ property: 'title', content: 'Mindfulness Practices for a Calm Mind' })
    this.meta.updateTag({ property: 'description', content: 'Learn effective mindfulness practices for calming the mind and reducing stress. Discover relaxation techniques and self-care tips for anxiety and mental clarity.' })
    this.meta.updateTag({ property: 'keywords', content: 'Mindfulness practices,Calming techniques,Mental clarity,Meditation for calmness,Stress-free living,Inner peace tips,Relaxation techniques' })


    localStorage.setItem('curated', 'mind');
    let rem = localStorage.getItem('remember');
    if (!rem || rem === 'F' && localStorage.getItem("isloggedin") === 'T') {
      this.userId = JSON.parse(localStorage.getItem("userId"))
    }
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
        } else {
         this.isAdults = false;
        }
  }

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.location.back();
    }
    this.location.back();
  }

  youtube(link) {
    if (this.guest || !this.Subscriber) {
      this.router.navigate(['/subscription/start-your-free-trial']);
    }else{
    this.router.navigate(['/teenagers/curated/youtubelink', link])
    }
  }

  getimage(id) {
    let Id = id <= 9 ? '0' + id : id;
    return `https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/podcast/${Id}.webp`
  }


  s3video(link) {
    if (this.guest || !this.Subscriber) {
      this.router.navigate(['/subscription/start-your-free-trial']);
    }else{
    this.router.navigate(['/teenagers/wisdom-shorts', link])
    }
  }

  audiopage(audiofile, title, id, isfree=0) {
    if ((isfree==0) && (this.guest || !this.Subscriber)) {
      this.router.navigate(['/subscription/start-your-free-trial']);
    }else{
      let mediaAudio = JSON.parse(localStorage.getItem("mediaAudio"))
      let audioLink = mediaAudio + audiofile
      let url = audioLink.replaceAll(':', '_');
      url = encodeURIComponent(url.replaceAll('/', '~'));
      this.router.navigate(['/teenagers/guided-meditation/audiopage/', audioLink, title, id,'Audio'])
    }
  }

  enableRoute(route) {
   
    this.router.navigate([route]);
  
}

routeGuided() {
  this.router.navigate(['/teenagers/journal'], { queryParams: { "isGuided": true } })
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

  routeNature(cont: any = 1) {
    var natureR
    localStorage.setItem("moduleId", JSON.stringify(106))
    this.service.clickModule(106, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        natureR = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("natureR", natureR)

        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/teenagers/nature/${natureR}`])
          }
          else
            this.router.navigate([`/teenagers/nature/s106001`])

          /*if(!natureR)
           {

             this.router.navigate([`/teenagers/nature`])
           }
           else
             this.router.navigate([`/teenagers/nature/s${natureR}`])*/
        })
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

  routeNoticingThoughts(cont: any = 1) {
    var ntR

    localStorage.setItem("moduleId", JSON.stringify(108))
    this.service.clickModule(108, this.userId)
      .subscribe(res => {
        this.qrList = res
        ntR = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        /*if(res.lastVisitedScreen ==='')
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else
        {
          localStorage.setItem("lastvisited", 'T')
        }*/
        // /continue where you left
        sessionStorage.setItem("ntR", ntR)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/teenagers/noticing-thoughts/${ntR}`])
          }
          else
            this.router.navigate([`/teenagers/noticing-thoughts/s108001`])
          /*if(!ntR)
          {

            this.router.navigate([`/teenagers/noticing-thoughts`])
          }
          else
            this.router.navigate([`/teenagers/noticing-thoughts/s${ntR}`])*/
        })
  }

  routeGuidedMeditation(cont: any = 1) {
    var gamR
    localStorage.setItem("moduleId", JSON.stringify(110))
    this.service.clickModule(110, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        gamR = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("gamR", gamR)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/teenagers/guided-meditation/${gamR}`])
          }
          else
            this.router.navigate([`/teenagers/guided-meditation/s110001`])

          /* if(!gamR)
           {

             this.router.navigate([`/teenagers/guided-meditation`])

           }
           else
             this.router.navigate([`/teenagers/guided-meditation/s${gamR}`])*/
        })
  }

  routeMeditation(cont: any = 1) {
    var meditationResume
    localStorage.setItem("moduleId", JSON.stringify(109))
    this.service.clickModule(109, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        meditationResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("meditationResume", meditationResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/teenagers/meditation/${meditationResume}`])
          }
          else
            this.router.navigate([`/teenagers/meditation/s109001`])
          /*if(!meditationResume)
          {

            this.router.navigate([`/teenagers/meditation`])
          }
          else
            this.router.navigate([`/teenagers/meditation/s${meditationResume}`])*/
        })
  }

  routeLookWithoutLanguage(cont: any = 1) {
    var lwlResume
    localStorage.setItem("moduleId", JSON.stringify(103))
    this.service.clickModule(103, this.userId)
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
            this.router.navigate([`/teenagers/without-language/${lwlResume}`])
          }
          else
            this.router.navigate([`/teenagers/without-language/s103001`])
          /* if(!lwlResume)
           {

             this.router.navigate([`/teenagers/without-language`])
           }
           else
             this.router.navigate([`/teenagers/without-language/s${lwlResume}`])*/
        })
  }

  routeAwareness(cont: any = 1) 
{
      var awarenessResume
      localStorage.setItem("moduleId", JSON.stringify(100))
      this.service.clickModule(100, this.userId)
            .subscribe(res => {
            localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
            this.qrList = res
            awarenessResume = "s" + res.lastVisitedScreen
            this.goToPage = res.lastVisitedScreen
            // continue where you left
            if (res.lastVisitedScreen === '') {
                  localStorage.setItem("lastvisited", 'F')
            }
            else {
                  localStorage.setItem("lastvisited", 'T')
            }
            // /continue where you left
            sessionStorage.setItem("awarenessResume", awarenessResume)
            localStorage.setItem("qrList", JSON.stringify(this.qrList))
       },
      error => {
            console.log(error)
      },
      () => {
      if (cont == "1") {
            this.router.navigate([`/teenagers/awareness/${awarenessResume}`])
      }
      else
            this.router.navigate([`/teenagers/awareness/s100001`])
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
        this.natureP = res.ModUserScrPc.find(e => e.Module == "Nature")?.Percentage
        this.breathingP = res.ModUserScrPc.find(e => e.Module == "Breathing")?.Percentage
        this.ntP = res.ModUserScrPc.find(e => e.Module == "Noticing Thoughts")?.Percentage
        this.gamP = res.ModUserScrPc.find(e => e.Module == "Guided Audio Meditation")?.Percentage
        this.meditationP = res.ModUserScrPc.find(e => e.Module == "Meditation")?.Percentage
        this.withoutLanguageP = res.ModUserScrPc.find(e => e.Module == "Look without Language")?.Percentage
        this.awarenessP = res.ModUserScrPc.find(e => e.Module == "Awareness")?.Percentage
      })
  }

  viewblog(id) {
    localStorage.setItem("blogdata", JSON.stringify(id))
    localStorage.setItem("blogId", JSON.stringify(id))
    this.router.navigate(['/teenagers/blog-article'], { replaceUrl: true, skipLocationChange: true, queryParams: { sId: `${id}` } })
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  audioevent(audioContent) {
    if (!this.Subscriber && audioContent.id >= 4) {
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
