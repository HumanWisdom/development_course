import { Location } from '@angular/common';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../../../shared/services/navigation.service';
import { TeenagersService } from '../../teenagers.service';
import { SharedService } from '../../../../../../shared/services/shared.service';
import { ProgramType } from '../../../../../../shared/models/program-model';

@Component({
  selector: 'HumanWisdom-understand-yourself',
  templateUrl: './understand-yourself.page.html',
  styleUrls: ['./understand-yourself.page.scss'],
})
export class UnderstandYourselfPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;

  userId = 100
  qrList: any
  goToPage: any
  happinessP: any
  livingwithpeaceP: any
  pleasureP: any
  ibP: any
  comparisonP: any
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
    private meta: Meta, private title: Title,private navigationService:NavigationService) {
      this.guest = localStorage.getItem('guest') === 'T' ? true : false;
      this.Subscriber = localStorage.getItem('Subscriber') === '1' ? true : false;

      this.mediaUrl = {
        pc01:
        {
          id: 18,
          url: '/podcasts/18.mp3',
          title: 'Asking questions'
        },
        pc02:
        {
          id: 27,
          url: '/podcasts/27.mp3',
          title: 'Living with peace'
        },
        pc03:
        {
          id: 64,
          url: '/podcasts/64.mp3',
          title: 'Exploring our inner silence'
        },
        pc04:
        {
          id: 52,
          url: '/podcasts/52.mp3',
          title: 'Emotional intelligence - how to begin'
        },
        pc05:
        {
          id: 3,
          url: '/podcasts/3.mp3',
          title: 'Social media addiction'
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
    localStorage.setItem("NaviagtedFrom", '/teenagers/curated/be-happier');

    this.title.setTitle('Tips for Happiness: How to Live a Happier Life')
    this.meta.updateTag({ property: 'title', content: 'Tips for Happiness: How to Live a Happier Life' })
    this.meta.updateTag({ property: 'description', content: 'Discover simple, practical tips for living a happier life and find joy in everyday moments.' })
    this.meta.updateTag({ property: 'keywords', content: 'Tips for Happiness,Developing a Positive Mindset,Practices for Happiness,Overcoming Negativity,Building Resilience,Mindfulness for Happiness,Increasing Joy and Fulfillment,Pursuing Happiness,Finding Happiness in Life' })


    localStorage.setItem('curated', 'happier');
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

  getimage(id) {
    let Id = id <= 9 ? '0' + id : id;
    return `https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/podcast/${Id}.webp`
  }

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.location.back();
    }
    this.location.back();
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

  audiopage(audiofile, title, id) {
    if (this.guest || !this.Subscriber) {
      this.router.navigate(['/subscription/start-your-free-trial']);
    }else{
    let mediaAudio = JSON.parse(localStorage.getItem("mediaAudio"))
    let audioLink = mediaAudio + audiofile
    let url = audioLink.replaceAll(':', '_');
    url = encodeURIComponent(url.replaceAll('/', '~'));
    this.router.navigate(['/teenagers/guided-meditation/audiopage/', audioLink, title, id,'Audio'])
    }
  }

  toRead(obj) {
    let sId = obj;
    this.router.navigate(['/teenagers/wisdom-stories/view-stories'], { queryParams: { sId: `${sId}` } })
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

  routeBenefits(cont: any = 1) {
    var hR
    localStorage.setItem("moduleId", JSON.stringify(100))
    this.service.clickModule(100, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        hR = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("hR", hR)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/teenagers/awareness/${hR}`])
          }
          else
            this.router.navigate([`/teenagers/awareness/s100001`])
          /* if(!identityResume)
           {

             this.router.navigate([`/teenagers/identity`])
           }
           else
             this.router.navigate([`/teenagers/identity/s${identityResume}`])*/
        })
  }

  routeThreeStepOfEnquiry(cont: any = 1) {
    var livingwithpeaceResume
    localStorage.setItem("moduleId", JSON.stringify(97))
    this.service.clickModule(97, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        livingwithpeaceResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("livingwithpeaceResume", livingwithpeaceResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/teenagers/three-steps-enquiry/${livingwithpeaceResume}`])
          }
          else
            this.router.navigate([`/teenagers/three-steps-enquiry/s97001`])
          /* if(!lonelinessResume)
            {

              this.router.navigate([`/teenagers/loneliness/s162p0`])
            }
            else
              this.router.navigate([`/teenagers/loneliness/s${lonelinessResume}`])*/
        })
  }

  routeNoJudgement(cont: any = 1) {
    var pleasureResume
    localStorage.setItem("moduleId", JSON.stringify(101))
    this.service.clickModule(101, this.userId)
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
            this.router.navigate([`/teenagers/no-judgement/${pleasureResume}`])
          }
          else
            this.router.navigate([`/teenagers/no-judgement/s101001`])
        })
  }

  routeQuestionsKey(cont: any = 1) {
    var ibR
    localStorage.setItem("moduleId", JSON.stringify(102))
    this.service.clickModule(102, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        ibR = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("ibR", ibR)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/teenagers/questions-are-key/${ibR}`])
          }
          else
            this.router.navigate([`/teenagers/questions-are-key/s102001`])

          /*if(!sinR)
          {

            this.router.navigate([`/teenagers/self-interest`])
          }
          else
            this.router.navigate([`/teenagers/self-interest/s${sinR}`])*/
        })
  }

  routelookWithoutLanguage(cont: any = 1) {
    var comparisonR
    localStorage.setItem("moduleId", JSON.stringify(103))
    this.service.clickModule(103, this.userId)
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
            this.router.navigate([`/teenagers/without-language/${comparisonR}`])
          }
          else
            this.router.navigate([`/teenagers/without-language/s103001`])
        })
  }

  routeConditioning(cont: any = 1) {
    var conditioning
    localStorage.setItem("moduleId", JSON.stringify(105))
    this.service.clickModule(105, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        conditioning = "s" + res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you conditioning
        sessionStorage.setItem("conditioning", conditioning)
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
            this.router.navigate([`/teenagers/conditioning/${conditioning}`])
          }
          else
            this.router.navigate([`/teenagers/conditioning/s105001`])
        })
  }

  routeComparison(cont: any = 1) {
    var comparison
    localStorage.setItem("moduleId", JSON.stringify(111))
    this.service.clickModule(111, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        comparison = "s" + res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you conditioning
        sessionStorage.setItem("comparison", comparison)
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
            this.router.navigate([`/teenagers/comparison/${comparison}`])
          }
          else
            this.router.navigate([`/teenagers/comparison/s111001`])
        })
  }

  routeApproval(cont: any = 1) {
    var externalapproval
    localStorage.setItem("moduleId", JSON.stringify(123))
    this.service.clickModule(123, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        externalapproval = "s" + res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you conditioning
        sessionStorage.setItem("external-approval", externalapproval)
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
            this.router.navigate([`/teenagers/external-approval/${externalapproval}`])
          }
          else
            this.router.navigate([`/teenagers/external-approval/s123001`])
        })
  }

  routeReactiveMind(cont: any = 1) {
    var externalapproval
    localStorage.setItem("moduleId", JSON.stringify(113))
    this.service.clickModule(113, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        externalapproval = "s" + res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you conditioning
        sessionStorage.setItem("external-approval", externalapproval)
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
            this.router.navigate([`/teenagers/reactive-mind/${externalapproval}`])
          }
          else
            this.router.navigate([`/teenagers/reactive-mind/s113001`])
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
        this.happinessP = res.ModUserScrPc.find(e => e.Module == "Happiness")?.Percentage
        this.livingwithpeaceP = res.ModUserScrPc.find(e => e.Module == "Living With Peace")?.Percentage
        this.pleasureP = res.ModUserScrPc.find(e => e.Module == "Pleasure")?.Percentage
        this.ibP = res.ModUserScrPc.find(e => e.Module == "Inner Boredom")?.Percentage
        this.comparisonP = res.ModUserScrPc.find(e => e.Module == "Comparison")?.Percentage
      })
  }

  viewblog(id) {
    localStorage.setItem("blogdata", JSON.stringify(id))
    localStorage.setItem("blogId", JSON.stringify(id))
    this.router.navigate(['/teenagers/blog-article'], { replaceUrl: true, skipLocationChange: true, queryParams: { sId: `${id}` } })
  }

  getAlertcloseEvent(event) {
    this.enableAlert = false;
    if (event === 'ok') {
      if (!this.guest && !this.Subscriber) {
        this.router.navigate(["/teenagers/onboarding/add-to-cart"]);
      } else if (this.guest) {
        localStorage.setItem("subscribepage", 'T');
        this.router.navigate(["/teenagers/onboarding/login"]);
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

  // audioevent(audioContent) {
  //   this.router.navigate(['teenagers/curated/audiopage/', audioContent.url,audioContent.title, Math.random()])
  // }
}
