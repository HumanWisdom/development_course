import { Location } from '@angular/common';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AdultsService } from '../../adults.service';
import { NavigationService } from '../../../../../../shared/services/navigation.service';

@Component({
  selector: 'HumanWisdom-change-unhelpful-habits',
  templateUrl: './change-unhelpful-habits.page.html',
  styleUrls: ['./change-unhelpful-habits.page.scss'],
})
export class ChangeUnhelpfulHabitsPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;

  userId = 100
  qrList: any
  goToPage: any
  addictionP: any
  pleasureP: any
  conditioningP: any
  stressP: any
  foodP: any
  enableAlert = false;
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

  constructor(private service: AdultsService, private router: Router, private location: Location,
    private navigationService:NavigationService,
    private meta: Meta, private title: Title) {
      this.guest = localStorage.getItem('guest') === 'T' ? true : false;
      this.Subscriber = localStorage.getItem('Subscriber') === '1' ? true : false;
      this.mediaUrl = {
        pc01: 
        {
          id: 42,
          url: '/podcasts/42.mp3',
          title: 'Exploring Mortality'
        },
        pc02: 
        {
          id: 1,
          url: '/podcasts/1.mp3',
          title: 'Introduction'
        },
        pc03: 
        {
          id: 17,
          url: '/podcasts/17.mp3',
          title: 'Sorrow and loss'
        }
      }
    }

  ngOnInit() {
    localStorage.setItem("NaviagtedFrom", '/adults/curated/change-unhelpful-habits');

    this.title.setTitle('Change Unhelpful Habits: Transform Your Life with Positive Behavior Change')
    this.meta.updateTag({ property: 'title', content: 'Change Unhelpful Habits: Transform Your Life with Positive Behavior Change' })
    this.meta.updateTag({ property: 'description', content: 'Ready to overcome negative habits and transform your life? Discover effective strategies to break bad habits and develop healthy ones with our curated collection of self-improvement tips and mindset shift techniques.' })
    this.meta.updateTag({ property: 'keywords', content: 'Habit change,Breaking bad habits,Overcoming negative habits,Healthy habits,Positive behavior change,Self-improvement tips,Personal growth,Mindset shift' })


    localStorage.setItem('curated', 'habits');
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
    }else{
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
    this.router.navigate(['/adults/curated/audiopage', audioLink, title, id])
    }
  }

  toRead(obj) {
    let sId = obj;
    this.router.navigate(['/adults/wisdom-stories/view-stories'], { queryParams: { sId: `${sId}` } })
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

  routeAddiction(cont: any = 1) {
    var addictionResume
    localStorage.setItem("moduleId", JSON.stringify(45))
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
            this.router.navigate([`/adults/habit-addiction/${addictionResume}`])
          }
          else
            this.router.navigate([`/adults/habit-addiction/s45001`])
        })
  }

  routePleasure(cont: any = 1) {
    var pleasureResume
    localStorage.setItem("moduleId", JSON.stringify(20))
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
            this.router.navigate([`/adults/pleasure/${pleasureResume}`])
          }
          else
            this.router.navigate([`/adults/pleasure/s20001`])
        })
  }

  routeConditioning(cont: any = 1) {
    var conditioningResume
    localStorage.setItem("moduleId", JSON.stringify(15))
    this.service.clickModule(15, this.userId)
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
            this.router.navigate([`/adults/conditioning/${conditioningResume}`])
          }
          else
            this.router.navigate([`/adults/conditioning/s232`])
          /*if(!conditioningResume)
          {

            this.router.navigate([`/adults/conditioning`])
          }
          else
            this.router.navigate([`/adults/conditioning/s${conditioningResume}`])*/
        })
  }

  routeStress(cont: any = 1) {
    var stressResume
    localStorage.setItem("moduleId", JSON.stringify(44))
    this.service.clickModule(44, this.userId)
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
            this.router.navigate([`/adults/stress/${stressResume}`])
          }
          else
            this.router.navigate([`/adults/stress/s44001`])
          /* if(!this.goToPage)
           {

             this.router.navigate([`/adults/stress`])
           }
           else
             this.router.navigate([`/adults/stress/s${stressResume}`])*/
        })
  }

  routeFood(cont: any = 1) {
    var foodResume
    localStorage.setItem("moduleId", JSON.stringify(46))
    this.service.clickModule(46, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        foodResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("foodResume", foodResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/food-health/${foodResume}`])
          }
          else
            this.router.navigate([`/adults/food-health/s46001`])
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
        this.addictionP = res.ModUserScrPc.find(e => e.Module == "Addiction")?.Percentage
        this.pleasureP = res.ModUserScrPc.find(e => e.Module == "Pleasure")?.Percentage
        this.conditioningP = res.ModUserScrPc.find(e => e.Module == "Conditioning")?.Percentage
        this.stressP = res.ModUserScrPc.find(e => e.Module == "Stress")?.Percentage
        this.foodP = res.ModUserScrPc.find(e => e.Module == "Food")?.Percentage
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
    if (!this.Subscriber && audioContent.id >= 4) {
      this.router.navigate(['/adults/subscription/start-your-free-trial']);
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
