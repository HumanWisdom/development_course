import { Location } from '@angular/common';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AdultsService } from '../../adults.service';
import { NavigationService } from '../../../../../../shared/services/navigation.service';

@Component({
  selector: 'HumanWisdom-wisdom-for-workplace',
  templateUrl: './wisdom-for-workplace.page.html',
  styleUrls: ['./wisdom-for-workplace.page.scss'],
})

export class WisdomForWorkplacePage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;

  userId = 100
  qrList: any
  goToPage: any
  wP: any
  lP: any
  communicationP: any
  successandfailureP: any
  relationshipsP: any
  bullyingP: any
  making_better_decisionsP: any
  criticismP: any
  opinionsandbeliefsP: any
  diversity_and_inclusionP: any
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

  constructor(private service: AdultsService, private router: Router, private location: Location,
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
          id: 47,
          url: '/podcasts/47.mp3',
          title: 'Overcome anxiety'
        },
        pc03: 
        {
          id: 45,
          url: '/podcasts/45.mp3',
          title: 'The resilient mindset'
        },
        pc04: 
        {
          id: 42,
          url: '/podcasts/42.mp3',
          title: 'Exploring Mortality'
        },
        pc05: 
        {
          id: 4,
          url: '/podcasts/4.mp3',
          title: 'The Wise Leader'
        },
        pc06: 
        {
          id: 55,
          url: '/podcasts/55.mp3',
          title: 'Resilience podcast with Brad Hook'
        },
        pc07: 
        {
          id: 60,
          url: '/podcasts/60.mp3',
          title: 'How can we be successful?'
        },
        pc08: 
        {
          id: 41,
          url: '/podcasts/41.mp3',
          title: 'People management'
        },
        pc09: 
        {
          id: 75,
          url: '/podcasts/75.mp3',
          title: 'Making better decisions'
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

    localStorage.setItem("NaviagtedFrom", '/adults/curated/wisdom-for-workplace');

    this.title.setTitle('Work and Leadership: Strategies for Career Growth and Development')
    this.meta.updateTag({ property: 'title', content: 'Work and Leadership: Strategies for Career Growth and Development' })
    this.meta.updateTag({ property: 'description', content: 'Discover wisdom and insights for career growth and development. Find strategies for effective communication, time management, and more.' })
    this.meta.updateTag({ property: 'keywords', content: 'Professional development,Leadership skills,Effective communication,Time management techniques,Boosting productivity,Workplace wisdom,Wisdom at work,Workplace insights,Leadership tips' })


    localStorage.setItem('curated', 'workplace');
    let rem = localStorage.getItem('remember');
    if (!rem || rem === 'F' && localStorage.getItem("isloggedin") === 'T') {
      this.userId = JSON.parse(localStorage.getItem("userId"))
    }
  }

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.location.back();
    }
    else{
      this.router.navigate([url]);
    }
  }

  routeGuided() {
    this.router.navigate(['/adults/journal'], { queryParams: { "isGuided": true } })
  }
  youtube(link) {
    if (this.guest || !this.Subscriber) {
      this.router.navigate(['/adults/subscription/start-your-free-trial']);
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

  audiopage(audiofile, title, id) {
    if (this.guest || !this.Subscriber) {
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
/* 
  routeWork(cont: any = 1) {
    var wR
    localStorage.setItem("moduleId", JSON.stringify(58))
    this.service.clickModule(58, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        wR = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("wR", wR)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/work/${wR}`])
          }
          else
            this.router.navigate([`/adults/work/s58001`])

        })
  } */

  toRead(obj) {
    let sId = obj;
    this.router.navigate(['/adults/wisdom-stories/view-stories'], { queryParams: { sId: `${sId}` } })
  }
/* 
  routeLeadership(cont: any = 1) {
    var lR
    localStorage.setItem("moduleId", JSON.stringify(59))
    this.service.clickModule(59, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        lR = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("lR", lR)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/leadership/${lR}`])
          }
          else
            this.router.navigate([`/adults/leadership/s59001`])
        })
  }

  routeCommunication(cont: any = 1) {
    var communicationR
    localStorage.setItem("moduleId", JSON.stringify(53))
    this.service.clickModule(53, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        communicationR = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("communicationR", communicationR)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/communication/${communicationR}`])
          }
          else
            this.router.navigate([`/adults/communication/s53001`])

         
        })
  }

  routeSuccessAndFailure(cont: any = 1) {
    var successandfailureResume
    localStorage.setItem("moduleId", JSON.stringify(48))
    this.service.clickModule(48, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        successandfailureResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("successandfailureResume", successandfailureResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/success-failure/${successandfailureResume}`])
          }
          else
            this.router.navigate([`/adults/success-failure/s48001`])
        })
  }

  routeRelationships(cont: any = 1) {
    var relationshipResume
    localStorage.setItem("moduleId", JSON.stringify(47))
    this.service.clickModule(47, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        relationshipResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("relationshipResume", relationshipResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/relationships/${relationshipResume}`])
          }
          else
            this.router.navigate([`/adults/relationships/s47000`])

       
        })
  }

  routeBullying(cont: any = 1) {
    var bullyingResume
    localStorage.setItem("moduleId", JSON.stringify(76))
    this.service.clickModule(76, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        bullyingResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("bullyingResume", bullyingResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/bullying/${bullyingResume}`])
          }
          else
            this.router.navigate([`/adults/bullying/s76001`])

        })
  }

  routeMakingBetterDecisions(cont: any = 1) {
    var making_better_decisionsResume
    localStorage.setItem("moduleId", JSON.stringify(77))
    this.service.clickModule(77, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        making_better_decisionsResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("making_better_decisionsResume", making_better_decisionsResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/making-better-decisions/${making_better_decisionsResume}`])
          }
          else
            this.router.navigate([`/adults/making-better-decisions/s77001`])

        })
  }

  routeCriticism(cont: any = 1) {
    var criticismResume
    localStorage.setItem("moduleId", JSON.stringify(16))
    this.service.clickModule(16, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        criticismResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("criticismResume", criticismResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/criticism/${criticismResume}`])
          }
          else
            this.router.navigate([`/adults/criticism/s324`])
        })
  }

  routeOpinionsAndBeliefs(cont: any = 1) {
    var opinionsandbeliefsResume
    localStorage.setItem("moduleId", JSON.stringify(49))
    this.service.clickModule(49, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        opinionsandbeliefsResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("opinionsandbeliefsResume", opinionsandbeliefsResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/opinions-beliefs/${opinionsandbeliefsResume}`])
          }
          else
            this.router.navigate([`/adults/opinions-beliefs/s49001`])
        })
  }

  routeDiversityandInclusion(cont: any = 1) {
    var diversity_and_inclusionResume
    localStorage.setItem("moduleId", JSON.stringify(143))
    this.service.clickModule(143, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        diversity_and_inclusionResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("diversity_and_inclusionResume", diversity_and_inclusionResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/diversity-and-inclusion/${diversity_and_inclusionResume}`])
          }
          else
            this.router.navigate([`/adults/diversity-and-inclusion/s143001`])

        })
  }
 */
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
        this.wP = res.ModUserScrPc.find(e => e.Module == "Work")?.Percentage
        this.lP = res.ModUserScrPc.find(e => e.Module == "Leadership")?.Percentage
        this.communicationP = res.ModUserScrPc.find(e => e.Module == "Communication")?.Percentage
        this.successandfailureP = res.ModUserScrPc.find(e => e.Module == "Success And Failure")?.Percentage
        this.relationshipsP = res.ModUserScrPc.find(e => e.Module == "Relationships")?.Percentage
        this.bullyingP = res.ModUserScrPc.find(e => e.Module == "Bullying")?.Percentage
        this.making_better_decisionsP = res.ModUserScrPc.find(e => e.Module == "Making better decisions")?.Percentage
        this.criticismP = res.ModUserScrPc.find(e => e.Module == "Criticism")?.Percentage
        this.opinionsandbeliefsP = res.ModUserScrPc.find(e => e.Module == "Opinions and Beliefs")?.Percentage
        this.diversity_and_inclusionP = res.ModUserScrPc.find(e => e.Module == "Diversity and Inclusion")?.Percentage
      })
  }


  viewblog(id) {
    localStorage.setItem("blogdata", JSON.stringify(id))
    localStorage.setItem("blogId", JSON.stringify(id))
    this.router.navigate(['/adults/blog-article'], { queryParams: { sId: `${id}` } })

    // this.router.navigate(['blog-article'], { replaceUrl: true, skipLocationChange: true, queryParams: { sId: `${id}` } })
  }

  getAlertcloseEvent(event) {
    this.enableAlert = false;
    if (event === 'ok') {
      if (!this.guest && !this.Subscriber) {
        this.router.navigate(["/adults/onboarding/add-to-cart"]);
      } else if (this.guest) {
        localStorage.setItem("subscribepage", 'T');
        this.router.navigate(["/adults/onboarding/login"]);
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
