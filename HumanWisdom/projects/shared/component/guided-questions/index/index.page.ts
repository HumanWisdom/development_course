import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { LogEventService } from '../../../services/log-event.service';
import { CommonService } from '../../../services/common.service';
import { NavigationService } from '../../../services/navigation.service';
import { SharedService } from '../../../services/shared.service';
import { ProgramType } from '../../../models/program-model';


@Component({
  selector: "app-index",
  templateUrl: "./index.page.html",
  styleUrls: ["./index.page.scss"],
})
export class IndexPage implements OnInit, AfterViewInit {
  @Input() defaultShow = true;
  @Input() search = '';
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
  enableTab = 'All';
  viewMore = [];
  viewLess = [];
  isViewMore = true;
  isAdults: boolean = true; 
  dailyCheckIn:any;

  constructor(
    private router: Router,
    private rout: ActivatedRoute,
    public service: CommonService,
    private location: Location,
    public logeventservice: LogEventService,
    private elementRef: ElementRef,
    private cd: ChangeDetectorRef,
    private navigationService: NavigationService
  ) {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
    this.guest = localStorage.getItem('guest') === 'T' ? true : false;
    this.Subscriber = localStorage.getItem('Subscriber') === '1' ? true : false;
if (SharedService.ProgramId == ProgramType.Adults) {
        this.isAdults = true;
      } else {
        this.isAdults = false;
      }
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
      this.service.getDailyCheckins().subscribe(dailyCheckIn=>{
        if(dailyCheckIn){
          this.jrList = res;
          this.dailyCheckIn = dailyCheckIn;
          this.jrList.sort((val1, val2) => {
            return <any>new Date(val2.Date) - <any>new Date(val1.Date);
          });
          this.jrListC = this.jrList;
          if (!this.defaultShow) {
            this.searchjournal(this.search);
          }
        }
      })

    });
  }
  showGuidedQuestions() {
    this.enableTab = 'Guided';
    if (this.searchedText) {
      this.jrList = this.jrListC.filter(
        (it) =>
          (it?.Response?.toLowerCase().includes(
            this.searchedText.toLowerCase()
          ) ||
            it?.TitleQue?.toLowerCase().includes(
              this.searchedText.toLowerCase())
          ) &&
          it?.JrType == "Guided Questions"
      );
    } else {
      this.jrList = this.jrListC.filter((p) => p.JrType == "Guided Questions");
    }
  }

  goToNote(jId, jTitle, jNotes, type) {
    if (this.guest || !this.Subscriber) {
      this.enableAlert = true;
    } else {
      this.router.navigate([
        SharedService.getUrlfromFeatureName('note'),
        { title: jTitle, jId: jId, jNotes: jNotes, type: type },
      ]);
    }
  }
  Note() {
    return false;
  }
  note() {
    this.router.navigate([SharedService.getUrlfromFeatureName('note')]);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      var data = this.elementRef.nativeElement.getElementsByClassName('gqtns_search');
      if (data && data != null) {
        data[0]?.addEventListener('click', this.clearInput.bind(this));
      }
    }, 1000);
  }

  RouteToToQuestions(item) {
    if (this.guest || !this.Subscriber) {
      this.enableAlert = true;
    } else {
      let url =  `${SharedService.getUrlfromFeatureName('journal')}/${item.Landing_URL}`;
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
  
    this.router.navigate([SharedService.getUrlfromFeatureName('guidedquestions')], {
      queryParams: { Qid: data.ProgId, Attempt: data.UserReflectionID },
    });
  }
  GoToQuestions(data) {
    if (this.guest || !this.Subscriber) {
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

  searchjournal(text) {
    this.logeventservice.logEvent('click_search');
    if (text == "") {
      this.viewJournalAndReflections();
      this.getDailyQuestion();

    } else if (text != "") {
      this.jrList = this.jrListC.filter(
        (it) =>
          it?.Response?.toLowerCase().includes(
            text.toLowerCase()
          ) ||
          it?.TitleQue?.toLowerCase().includes(
            text.toLowerCase()
          )
          ||
          it?.ModuleName?.toLowerCase().includes(
            text.toLowerCase()
          )
      );
    }
  }

  showAll() {
    this.enableTab = 'All';
    if (this.searchedText) {
      this.jrList = this.jrListC.filter(
        (it) =>
          it?.Response?.toLowerCase().includes(
            this.searchedText.toLowerCase()
          ) ||
          it?.TitleQue?.toLowerCase().includes(
            this.searchedText.toLowerCase()
          )
      );
    } else {
      this.viewJournalAndReflections();
    }
  }

  showReflections() {
    this.enableTab = 'Reflections';
    if (this.searchedText) {
      this.jrList = this.jrListC.filter(
        (it) =>
          (it?.Response?.toLowerCase().includes(
            this.searchedText.toLowerCase()
          ) ||
            it?.TitleQue?.toLowerCase().includes(
              this.searchedText.toLowerCase())
          ) &&
          it?.JrType == "Reflections"
      );
    } else {
      this.jrList = this.jrListC.filter((p) => p.JrType == "Reflections");
    }
  }
  showNotes() {
    this.enableTab = 'Diary';
    if (this.searchedText) {
      this.jrList = this.jrListC.filter(
        (it) =>
          (it?.Response?.toLowerCase().includes(
            this.searchedText.toLowerCase()
          ) ||
            it?.TitleQue?.toLowerCase().includes(
              this.searchedText.toLowerCase())
          ) &&
          it?.JrType == "Diary"
      );
    } else {
      this.jrList = this.jrListC.filter((p) => p.JrType == "Diary");
      this.cd.detectChanges()
    }

  }

  GetGuidedQs_Topics() {
    this.service.GetGuidedQs_Topics().subscribe((res) => {
      this.viewMore = res.filter((d, i) => i < 6);
      this.viewLess = res.filter((d, i) => i > 6);
      this.topic = this.viewMore;
    });
  }
  goBack() {
    if(this.isGuidedQueestionsTab && !SharedService.isFromAdults){
        this.isGuidedQueestionsTab = false;
        this.isDiary=true;
        this.viewJournalAndReflections();
        this.getDailyQuestion();
    }else{
      SharedService.isFromAdults =  false;
        //  this.router.navigate(['/adults/adult-dashboard']);
        var url = this.navigationService.navigateToBackLink();
        if (url == null) {
          this.location.back();
        }else{
          this.router.navigate([url]);
        }
    }

  }

  getAlertcloseEvent(event) {
    this.enableAlert = false;
    if (event === 'ok') {
      if (!this.guest && !this.Subscriber) {
        this.router.navigate([SharedService.getUrlfromFeatureName('subscription/start-your-free-trial')]);
      } else if (this.guest) {
        localStorage.setItem("subscribepage", 'T');
        this.router.navigate([SharedService.getUrlfromFeatureName("onboarding/login")]);
      }
    }
  }

  viewMoreAndLess(data) {
    this.isViewMore = data;

    if(this.isViewMore) {
      this.topic = this.viewMore;
    }else {
      this.topic = [...this.viewMore, ...this.viewLess];
    }
  }
  getImagePath(rowId){
    return this.dailyCheckIn.filter(x=>x.RowID == +rowId)[0].ImgPath;
  }
}
