import { Location } from '@angular/common';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AdultsService } from '../../adults.service';

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

  constructor(private service: AdultsService, private router: Router, private location: Location,
    private meta: Meta, private title: Title) {
      this.guest = localStorage.getItem('guest') === 'T' ? true : false;
      this.Subscriber = localStorage.getItem('Subscriber') === '1' ? true : false;
      this.mediaUrl = {
        pc01: 
        {
          url: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/podcasts/42.mp3',
          title: 'The Art of Living and Dying: Lessons from HumanWisdom'
        },
        pc02: 
        {
          url: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/podcasts/1.mp3',
          title: 'Addiction and Wisdom: A Conversation on Overcoming and Avoiding'
        },
        pc03: 
        {
          url: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/podcasts/17.mp3',
          title: 'Healing Hearts: Navigating Sorrow and Loss with Human Wisdom'
        }
      }
    }

  ngOnInit() {
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

  goBack() {
    this.location.back()
  }
  routeGuided() {
    this.router.navigate(['/adults/journal'], { queryParams: { "isGuided": true } })
  }
  youtube(link) {
    this.router.navigate(['/adults/curated/youtubelink', link])
  }

  s3video(link) {
    this.router.navigate(['/adults/wisdom-shorts', link])
  }

  audiopage(audiofile, title, id) {
    let mediaAudio = JSON.parse(localStorage.getItem("mediaAudio"))
    let audioLink = mediaAudio + audiofile
    this.router.navigate(['/adults/curated/audiopage', audioLink, title, id])
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
    this.router.navigate(['blog-article'], { replaceUrl: true, skipLocationChange: true, queryParams: { sId: `${id}` } })
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
    if (this.guest || !this.Subscriber) {
      this.enableAlert = true;
    }else {
      this.router.navigate([route]);
    }
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  audioevent(audioContent) {
    this.router.navigate(['adults/curated/audiopage/', audioContent.url,audioContent.title, Math.random()])
  }
}
