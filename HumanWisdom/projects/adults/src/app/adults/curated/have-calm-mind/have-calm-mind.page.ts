import { Location } from '@angular/common';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AdultsService } from '../../adults.service';
import { NavigationService } from '../../../../../../shared/services/navigation.service';

@Component({
  selector: 'HumanWisdom-have-calm-mind',
  templateUrl: './have-calm-mind.page.html',
  styleUrls: ['./have-calm-mind.page.scss'],
})

export class HaveCalmMindPage implements OnInit {

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

  constructor(private service: AdultsService, private router: Router, private location: Location, private meta: Meta, private title: Title,
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
    localStorage.setItem("NaviagtedFrom", '/adults/curated/have-calm-mind');

    this.title.setTitle('Mindfulness Practices for a Calm Mind')
    this.meta.updateTag({ property: 'title', content: 'Mindfulness Practices for a Calm Mind' })
    this.meta.updateTag({ property: 'description', content: 'Learn effective mindfulness practices for calming the mind and reducing stress. Discover relaxation techniques and self-care tips for anxiety and mental clarity.' })
    this.meta.updateTag({ property: 'keywords', content: 'Mindfulness practices,Calming techniques,Mental clarity,Meditation for calmness,Stress-free living,Inner peace tips,Relaxation techniques' })


    localStorage.setItem('curated', 'mind');
    let rem = localStorage.getItem('remember');
    if (!rem || rem === 'F' && localStorage.getItem("isloggedin") === 'T') {
      this.userId = JSON.parse(localStorage.getItem("userId"))
    }
  }

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.location.back();
    }else{
      this.router.navigate([url]);
    }
  }

  youtube(link) {
    if (this.guest || !this.Subscriber) {
      this.router.navigate(['/subscription/start-your-free-trial']);
    }else{
    this.router.navigate(['/adults/curated/youtubelink', link])
    }
  }

  getimage(id) {
    let Id = id <= 9 ? '0' + id : id;
    return `https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/podcast/${Id}.webp`
  }


  s3video(link) {
    if (this.guest || !this.Subscriber) {
      this.router.navigate(['/adults/subscription/start-your-free-trial']);
    }else{
    this.router.navigate(['/adults/wisdom-shorts', link])
    }
  }

  audiopage(audiofile, title, id, isfree=0) {
    if ((isfree==0) && (this.guest || !this.Subscriber)) {
      this.router.navigate(['/adults/subscription/start-your-free-trial']);
    }else{
      let mediaAudio = JSON.parse(localStorage.getItem("mediaAudio"))
      let audioLink = mediaAudio + audiofile
      let url = audioLink.replaceAll(':', '_');
      url = encodeURIComponent(url.replaceAll('/', '~'));
      this.router.navigate(['/adults/guided-meditation/audiopage/', url, title, id,'Audio'])
    }
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

 /*  routeNature(cont: any = 1) {
    var natureR
    localStorage.setItem("moduleId", JSON.stringify(28))
    this.service.clickModule(28, this.userId)
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
            this.router.navigate([`/adults/nature/${natureR}`])
          }
          else
            this.router.navigate([`/adults/nature/s28001`])

        
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

        })
  }

  routeNoticingThoughts(cont: any = 1) {
    var ntR

    localStorage.setItem("moduleId", JSON.stringify(30))
    this.service.clickModule(30, this.userId)
      .subscribe(res => {
        this.qrList = res
        ntR = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
       
        // /continue where you left
        sessionStorage.setItem("ntR", ntR)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/noticing-thoughts/${ntR}`])
          }
          else
            this.router.navigate([`/adults/noticing-thoughts/s30001`])
          
        })
  }

  routeGuidedMeditation(cont: any = 1) {
    var gamR
    localStorage.setItem("moduleId", JSON.stringify(51))
    this.service.clickModule(51, this.userId)
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
            this.router.navigate([`/adults/guided-meditation/${gamR}`])
          }
          else
            this.router.navigate([`/adults/guided-meditation/s51000`])

         
        })
  }

  routeMeditation(cont: any = 1) {
    var meditationResume
    localStorage.setItem("moduleId", JSON.stringify(22))
    this.service.clickModule(22, this.userId)
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
            this.router.navigate([`/adults/meditation/${meditationResume}`])
          }
          else
            this.router.navigate([`/adults/meditation/s22001`])
        
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
          
        })
  }

  routeAwareness(cont: any = 1) 
{
      var awarenessResume
      localStorage.setItem("moduleId", JSON.stringify(39))
      this.service.clickModule(39, this.userId)
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
            this.router.navigate([`/adults/awareness/${awarenessResume}`])
      }
      else
            this.router.navigate([`/adults/awareness/s39000`])
      })
} */

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
    this.router.navigate(['/adults/blog-article'], { queryParams: { sId: `${id}` } })

    // this.router.navigate(['blog-article'], { replaceUrl: true, skipLocationChange: true, queryParams: { sId: `${id}` } })
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  audioevent(audioContent) {
    if (!this.Subscriber && audioContent.id >= 4) {
      this.router.navigate(['/adults/subscription/start-your-free-trial']);
    } else {
    this.router.navigate(['/adults/curated/audiopage/', audioContent.url,audioContent.title, audioContent.id]);
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
