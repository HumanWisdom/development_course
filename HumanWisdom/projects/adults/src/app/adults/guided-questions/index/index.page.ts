import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, SimpleChange } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AdultsService } from "../../adults.service";
import { Location } from "@angular/common";
import * as $ from 'jquery';
import { BehaviorSubject, Subject } from "rxjs";
import { addEventListener } from "@ionic/core/dist/types/utils/helpers";
import { LogEventService } from "src/app/log-event.service";

@Component({
  selector: "app-index",
  templateUrl: "./index.page.html",
  styleUrls: ["./index.page.scss"],
})
export class IndexPage implements OnInit, AfterViewInit {
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"));
  userId: any;
  journalList = [];
  reflectionList = [];
  dailyQuestion: any;
  dailyResponse: any;
  dailyId: any;
  isDiary: boolean = true;
  updateDailyId: any;
  isGuidedQueestionsTab: boolean = false;
  d: any;
  jrList = [];
  jrListC = [];
  topic = [];
  searchedText: string;
  isReloadList = true;
  enableAlert = false;
  guest = false;
  Subscriber = false;

  constructor(
    private router: Router,
    private rout: ActivatedRoute,
    public service: AdultsService,
    private location: Location,
    public logeventservice: LogEventService,
    private elementRef: ElementRef
  ) {

    this.guest = localStorage.getItem('guest') === 'T' ? true : false;
    this.Subscriber = localStorage.getItem('Subscriber') === '1' ? true : false;

  }

  ngOnInit() {

    if (this.saveUsername == false)
      this.userId = JSON.parse(sessionStorage.getItem("userId"));
    else {
      this.userId = JSON.parse(localStorage.getItem("userId"));
      this.viewJournalAndReflections();
      this.getDailyQuestion();
    }
    var isGuid = this.rout.snapshot.queryParamMap.get("isGuided");
    if (isGuid && isGuid == "true") {
      this.GetGuidedQs_Topics();
      this.isGuidedQueestionsTab = true;
      this.isDiary = false;
    }
  }

  viewJournalAndReflections() {
    this.service.viewJournal(this.userId).subscribe((res) => {
      this.jrList = res;
      this.jrList.sort((val1, val2) => {
        return <any>new Date(val2.Date) - <any>new Date(val1.Date);
      });
      this.jrListC = this.jrList;
    });
  }
  showGuidedQuestions() {
    this.jrList = this.jrListC.filter((p) => p.JrType == "Guided Questions");
  }

  goToNote(jId, jTitle, jNotes, type) {
      if (this.guest || !this.Subscriber) {
        this.enableAlert = true;
      } else {
        this.router.navigate([
          "/adults/note",
          { title: jTitle, jId: jId, jNotes: jNotes, type: type },
        ]);
      }
  }
  Note() {
    return false;
  }
  note() {
    this.router.navigate(["/adults/note"]);
  }

  ngAfterViewInit() {
    var data = this.elementRef.nativeElement.getElementsByClassName('gqtns_search');
    data[0].addEventListener('click', this.clearInput.bind(this));
  }

  RouteToToQuestions(item) {
    if (this.guest && !this.Subscriber) {
      this.enableAlert = true;
    } else {
      let url = `/journal${item.Landing_URL}`;
      this.router.navigate([url], { state: { "isBypass": true } });
    }

    // this.router.navigate(['/journal/introduction'],{state:{"data":JSON.stringify(item)}})
  }

  clearInput() {
    this.searchedText = '';
    this.viewJournalAndReflections();
    this.getDailyQuestion();
  }

  getDailyQuestion() {
    this.service.getDailyQuestion(this.userId).subscribe(
      (res) => {
        console.log("daily", res);
        this.d = res;
        this.dailyQuestion = res[0].Qtn;
        this.dailyResponse = res[0].Ans;
        /* if(this.dailyResponse==null)
        this.dailyResponse="Start Typing"*/
        this.dailyId = res[0].QueId;
        console.log(this.dailyQuestion, this.dailyResponse);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addDailyQuestion(id) {
    console.log(id, this.dailyResponse);
    this.service
      .addDailyQuestion({
        SubscriberID: this.userId,
        ReflectionId: id,
        Resp: this.dailyResponse,
      })
      .subscribe(
        (res) => { },
        (error) => {
          console.log(error);
        }
      );
  }
  NavigateToQuestions(data) {
    this.router.navigate(["/guidedquestions"], {
      queryParams: { Qid: data.ProgId, Attempt: data.UserReflectionID },
    });
  }
  GoToQuestions(data) {
    if (this.guest && !this.Subscriber) {
      this.enableAlert = true;
    } else {
      if (data.JrType == "Guided Questions") {
        this.NavigateToQuestions(data);
      } else {
        this.goToNote(data.RowId, data.TitleQue, data.Response, data.JrType);
      }
    }
  }
  YourDiary() {
    this.logeventservice.logEvent('click_journal_YourDiary');
    this.isDiary = true;
    this.isGuidedQueestionsTab = false;
    this.viewJournalAndReflections();
    this.getDailyQuestion();
    var data = this.elementRef.nativeElement.getElementsByClassName('gqtns_search') as HTMLCollection;
    setTimeout(() => {
      if (data != null && data != undefined && data.length > 0) {
        data[0].addEventListener('click', this.clearInput.bind(this));
      }
    }, 200);
  }
  GuidedQuestionTab() {
    this.logeventservice.logEvent('click_journal_guided_questions');
    this.isDiary = false;
    this.isGuidedQueestionsTab = true;
    this.GetGuidedQs_Topics();
  }
  searchText($event) {
    this.logeventservice.logEvent('click_search');
    if ($event.target.value == "") {
      this.viewJournalAndReflections();
      this.getDailyQuestion();

    } else if ($event.target.value != "") {
      this.jrList = this.jrListC.filter(
        (it) =>
          it?.Response?.toLowerCase().includes(
            $event.target.value.toLowerCase()
          ) ||
          it?.TitleQue?.toLowerCase().includes(
            $event.target.value.toLowerCase()
          )
      );
    }
  }

  showAll() {
    this.viewJournalAndReflections();
  }

  showReflections() {
    this.jrList = this.jrListC.filter((p) => p.JrType == "Reflections");
  }
  showNotes() {
    this.jrList = this.jrListC.filter((p) => p.JrType == "Diary");
  }

  GetGuidedQs_Topics() {
    this.service.GetGuidedQs_Topics().subscribe((res) => {
      this.topic = res;
    });
  }
  goBack() {
    this.location.back();
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

}
