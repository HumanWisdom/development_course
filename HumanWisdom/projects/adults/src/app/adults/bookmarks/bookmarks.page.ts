import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../adults.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.page.html',
  styleUrls: ['./bookmarks.page.scss'],
})
export class BookmarksPage implements OnInit {
  public bookmarkList = [];
  public userName: string;
  public allkeys = [];
  public urlPath = 'https://www.humanwisdom.info/';
  // public urlPath = 'http://ec2-18-132-47-231.eu-west-2.compute.amazonaws.com:88/';
  public qrList: any
  public userId = 100
  public goToPage: any
  public saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  public loginResponse = JSON.parse(localStorage.getItem("loginResponse"))
  public points: any
  public daysVisited: any
  public timeSpent: any
  public percentage: any
  public resume = []
  public stressP: any
  public relationshipsP: any
  public communicationP: any
  public loveP: any
  public successandfailureP: any
  public happinessP: any

  constructor(private service: AdultsService, private router: Router) {
    let userId = JSON.parse(localStorage.getItem("userId"))
    this.service.bookmark(userId).subscribe(res => {
      let modulename = [];
      let keys = [];
      res.forEach((s) => {
        let m = [];
        if (!(modulename.some((f) => f['ModuleName'] === s['ModuleName']))) {
          res.forEach((d) => {
            if (d['TPath'] !== '' && s['ModuleName'] === d['ModuleName']) {
              m.push(d)
              keys.push(s['ModuleName'])
            }
          })
          modulename = [...m, ...modulename]
        }
      })
      let dup = new Set([...keys])
      let arr = []
      new Set([...keys]).forEach((i) => {
        arr.push(i)
      })
      this.allkeys = arr
      let result = []
      dup.forEach((d) => {
        let subres = []
        modulename.forEach((h) => {
          if (d === h['ModuleName']) {
            subres.push(h)
          }
        })
        let obj = {}
        obj[d] = subres
        result.push(obj);
      })
      this.bookmarkList = result;
    }
    )
    let rem = localStorage.getItem('remember');
    if (!rem || rem === 'F' && localStorage.getItem("isloggedin") === 'T') {
      this.userId = JSON.parse(localStorage.getItem("userId"))
      this.getProgress()
    }

  }

  imgClick(item) {
    console.log(item)
    this.router.navigate(['/' + item['ModuleUrl'] + 's' + item['ScrNo']])
  }

  ngOnInit() {
  }

  getProgress() {
    this.service.getPoints(this.userId)
      .subscribe(res => {

        this.points = parseInt(res.PointsScored)
        this.goToPage = res.LastScrNo
        this.daysVisited = res.noOfDaysVisited
        this.timeSpent = res.noOfDaysVisited
        this.percentage = parseInt(res.overallPercentage)
        this.resume = []
        localStorage.setItem("overallPercentage", this.percentage)
        //resume section
        res.ModUserScrPc.filter(x => {
          if (parseFloat(x.Percentage) < 100) {
            if (x.ModuleId != 71 && x.ModuleId != 72) {
              if (x.ModuleId < 10) {
                x.ModuleId = "0" + x.ModuleId

              }

              x.imgPath = `https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/${x.ModuleId}.png`
              this.resume.push(x)
              this.resume.sort((val1, val2) => { return <any>new Date(val2.LastUpdatedOn) - <any>new Date(val1.LastUpdatedOn) })
            }
          }
        })

        //static progress
        this.happinessP = res.ModUserScrPc.find(e => e.Module == "Happiness")?.Percentage
        this.stressP = res.ModUserScrPc.find(e => e.Module == "Stress")?.Percentage
        this.relationshipsP = res.ModUserScrPc.find(e => e.Module == "Relationships")?.Percentage
        this.communicationP = res.ModUserScrPc.find(e => e.Module == "Communication")?.Percentage
        this.loveP = res.ModUserScrPc.find(e => e.Module == "Love")?.Percentage
        this.successandfailureP = res.ModUserScrPc.find(e => e.Module == "Success and Failure")?.Percentage
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
          //this.router.navigate([`/adults/wisdom-exercise/s75001`])
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

  routeLove(cont: any = 1) {
    var loveResume
    localStorage.setItem("moduleId", JSON.stringify(62))
    this.service.clickModule(62, this.userId)
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
            this.router.navigate([`/adults/love/${loveResume}`])
          }
          else
            this.router.navigate([`/adults/love/s62001`])
        })
  }

  // living with wisdom 2
  routeHappiness(cont: any = 1) {
    var hR
    localStorage.setItem("moduleId", JSON.stringify(23))
    this.service.clickModule(23, this.userId)
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
            this.router.navigate([`/adults/happiness/${hR}`])
          }
          else
            this.router.navigate([`/adults/happiness/s23001`])
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


}