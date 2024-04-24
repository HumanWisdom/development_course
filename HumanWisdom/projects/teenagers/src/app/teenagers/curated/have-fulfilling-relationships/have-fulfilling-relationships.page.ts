import { Location } from '@angular/common';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../../../shared/services/navigation.service';
import { TeenagersService } from '../../teenagers.service';
import { SharedService } from '../../../../../../shared/services/shared.service';
import { ProgramType } from '../../../../../../shared/models/program-model';


@Component({
  selector: 'HumanWisdom-have-fulfilling-relationships',
  templateUrl: './have-fulfilling-relationships.page.html',
  styleUrls: ['./have-fulfilling-relationships.page.scss'],
})
export class HaveFulfillingRelationshipsPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;

  userId = 100
  qrList: any
  goToPage: any
  relationshipsP: any
  enP: any
  rmP: any
  communicationP: any
  loveP: any
  opinionsandbeliefsP: any
  lifestoriesList = []
  sId: any
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
          title: 'Emotional Wellness in Relationships'
        },
        pc03:
        {
          id: 9,
          url: '/podcasts/9.mp3',
          title: 'Living with Compassion'
        },
        pc04:
        {
          id: 57,
          url: '/podcasts/57.mp3',
          title: 'Understanding expectations for happier relationships'
        },
        pc05:
        {
          id: 56,
          url: '/podcasts/56.mp3',
          title: 'How can we be more kind'
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
    localStorage.setItem("NaviagtedFrom", '/teenagers/curated/have-fulfilling-relationships');

    this.title.setTitle('Building Healthy Relationships')
    this.meta.updateTag({ property: 'title', content: 'Building Healthy Relationships' })
    this.meta.updateTag({ property: 'description', content: 'Learn how to build healthy, fulfilling relationships that last with these helpful tips.' })
    this.meta.updateTag({ property: 'keywords', content: 'Healthy Relationships,Building Trust in Relationships,Communication in Relationships,Overcoming Relationship Challenges,Developing Intimacy in Relationships,Nurturing Relationships,Maintaining Positive Relationships' })

    localStorage.setItem('curated', 'relationships');
    let rem = localStorage.getItem('remember');
    if (!rem || rem === 'F' && localStorage.getItem("isloggedin") === 'T') {
      this.userId = JSON.parse(localStorage.getItem("userId"))
    }

    this.service.getcuratedrelationshipdashstories().subscribe((res) => {
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

  audiopage(audiofile, title, id) {
    if (this.guest || !this.Subscriber) {
      this.router.navigate(['/subscription/start-your-free-trial']);
    }else{
    let mediaAudio = JSON.parse(localStorage.getItem("mediaAudio"))
    let audioLink = mediaAudio + audiofile
    this.router.navigate(['/teenagers/curated/audiopage', audioLink, title, id])
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

  routeRelationships(cont: any = 1) {
    var relationshipResume
    localStorage.setItem("moduleId", JSON.stringify(131))
    this.service.clickModule(131, this.userId)
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
            this.router.navigate([`/teenagers/relationships/${relationshipResume}`])
          }
          else
            this.router.navigate([`/teenagers/relationships/s131001`])

          /*if(!relationshipResume)
            {

              this.router.navigate([`/teenagers/relationships`])
            }
            else
              this.router.navigate([`/teenagers/relationships/s${relationshipResume}`])*/

        })
  }

  routeEmotionalNeeds(cont: any = 1) {
    var enR
    localStorage.setItem("moduleId", JSON.stringify(120))
    this.service.clickModule(120, this.userId)
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
            this.router.navigate([`/teenagers/emotional-needs/${enR}`])
          }
          else
            this.router.navigate([`/teenagers/emotional-needs/s120001`])

          /*if(!sinR)
          {

            this.router.navigate([`/teenagers/self-interest`])
          }
          else
            this.router.navigate([`/teenagers/self-interest/s${sinR}`])*/

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

  routeCommunication(cont: any = 1) {
    var communicationR
    localStorage.setItem("moduleId", JSON.stringify(132))
    this.service.clickModule(132, this.userId)
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
            this.router.navigate([`/teenagers/communication/${communicationR}`])
          }
          else
            this.router.navigate([`/teenagers/communication/s132001`])

          /* if(!communicationR)
           {

             this.router.navigate([`/teenagers/communication`])
           }
           else
             this.router.navigate([`/teenagers/communication/s${communicationR}`])*/

        })
  }

  routeLove(cont: any = 1) {
    var loveResume
    localStorage.setItem("moduleId", JSON.stringify(134))
    this.service.clickModule(134, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        loveResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen     
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("loveResume", loveResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/teenagers/love/${loveResume}`])
          }
          else
            this.router.navigate([`/teenagers/love/s134001`])
          /* if(!lonelinessResume)
            {

              this.router.navigate([`/teenagers/loneliness/s162p0`])
            }
            else
              this.router.navigate([`/teenagers/loneliness/s${lonelinessResume}`])*/

        })
  }

  routeOpinionsAndBeliefs(cont: any = 1) {
    var opinionsandbeliefsResume
    localStorage.setItem("moduleId", JSON.stringify(140))
    this.service.clickModule(140, this.userId)
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
            this.router.navigate([`/teenagers/opinions-beliefs/${opinionsandbeliefsResume}`])
          }
          else
            this.router.navigate([`/teenagers/opinions-beliefs/s140001`])
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
        this.relationshipsP = res.ModUserScrPc.find(e => e.Module == "Relationships")?.Percentage
        this.enP = res.ModUserScrPc.find(e => e.Module == "Emotional Needs")?.Percentage
        this.rmP = res.ModUserScrPc.find(e => e.Module == "Reactive Mind")?.Percentage
        this.communicationP = res.ModUserScrPc.find(e => e.Module == "Communication")?.Percentage
        this.loveP = res.ModUserScrPc.find(e => e.Module == "Love")?.Percentage
        this.opinionsandbeliefsP = res.ModUserScrPc.find(e => e.Module == "Opinions And Beliefs")?.Percentage
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
