import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LogEventService } from '../../../../../shared/services/log-event.service';
import { AdultsService } from '../adults.service';
import { NavigationService } from '../../../../../shared/services/navigation.service';


@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  styleUrls: ['./journal.page.scss'],
})
export class JournalPage implements OnInit {
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  userId: any
  journalList = []
  reflectionList = []
  dailyQuestion: any
  dailyResponse: any
  dailyId: any
  updateDailyId: any
  d: any
  jrList = []
  jrListC = []
  searchedText: any


  constructor(private router: Router, private location: Location,
    private service: AdultsService, public logeventservice: LogEventService, private navigationService: NavigationService,
    private meta: Meta, private title: Title) {

  }


  ngOnInit() {
    this.title.setTitle('Personal Growth Journal ')
    this.meta.updateTag({ property: 'title', content: 'Personal Growth Journal ' })
    this.meta.updateTag({ property: 'description', content: 'Our journal provides a safe space to explore your thoughts and emotions. Connect with others and learn from their experiences to enhance your personal growth.' })
    this.meta.updateTag({ property: 'keywords', content: 'Personal growth journal,Mindfulness journaling,Personal relationship journal,Communication in relationships,Mindful relationships' })



    if (this.saveUsername == false)
      this.userId = JSON.parse(sessionStorage.getItem("userId"))
    else
      this.userId = JSON.parse(localStorage.getItem("userId"))
    this.viewJournalAndReflections()
    this.getDailyQuestion()
  }

  viewJournalAndReflections() {
    this.service.viewJournal(this.userId)
      .subscribe(res => {

        this.jrList = res
        this.jrList.sort((val1, val2) => { return <any>new Date(val2.Date) - <any>new Date(val1.Date) })
        this.jrListC = this.jrList
        console.log("jr sorted", this.jrList)
        /*this.journalList=res.ListOfJournal
        this.reflectionList=res.ListOfReflection
        console.log("journal List",this.journalList)
        console.log("reflection ",this.reflectionList)*/

      })
  }



  goToNote(jId, jTitle, jNotes, type) {
    console.log(jId, jTitle, jNotes, type)
    this.router.navigate(['/adults/note',
      { title: jTitle, jId: jId, jNotes: jNotes, type: type }])
  }

  note() {
    this.router.navigate(['/adults/note'])

  }


  getDailyQuestion() {
    this.service.getDailyQuestion(this.userId)
      .subscribe(res => {
        console.log("daily", res)
        this.d = res
        this.dailyQuestion = res[0].Qtn

        this.dailyResponse = res[0].Ans
        /* if(this.dailyResponse==null)
           this.dailyResponse="Start Typing"*/
        this.dailyId = res[0].QueId
        

      },
        error => {
          console.log(error)
        })

  }

  addDailyQuestion(id) {
    console.log(id, this.dailyResponse)
    this.service.addDailyQuestion({
      "SubscriberID": this.userId,
      "ReflectionId": id,
      "Resp": this.dailyResponse
    })
      .subscribe(res => {



      },
        error => {
          console.log(error)
        })


  }

  searchText() {
    this.logeventservice.logEvent('click_search');
    if (this.searchedText == "")
      this.viewJournalAndReflections()
    else if (this.searchedText != "") {
      this.jrList = this.jrList.filter(it => {
        return it.Response.toLowerCase().includes(this.searchedText.toLowerCase())
          || it.TitleQue.toLowerCase().includes(this.searchedText.toLowerCase());
      });
    }

  }

  showAll() {
    console.log("shwAll")
    this.viewJournalAndReflections()
  }

  showReflections() {
    console.log("in reflections")

    this.jrList = this.jrListC.filter(p => p.ProgId != "0")
  }
  showNotes() {
    console.log("in notes")
    this.jrList = this.jrListC.filter(p => p.ProgId == "0")
  }
  goBack() {
    // this.location.back()
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.location.back();
    }else{
      this.router.navigate([url]);
    }
  }
}
