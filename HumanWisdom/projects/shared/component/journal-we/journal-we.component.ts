import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { Router } from '@angular/router';
import { ProgramType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-journal-we',
  templateUrl: './journal-we.component.html',
  styleUrls: ['./journal-we.component.scss'],
})
export class JournalWeComponent implements OnInit {
  qrList = JSON.parse(localStorage.getItem("qrList"))
   @Input()
   journalques = 'Notice 3 things about the appearance of a person you see everyday that you normally overlook.';
  @Output() guestEvent=new EventEmitter<any>();
  @Input()
  rId = 854
  enableAlert=false;
  enabletick = false;
  userId: any
  note = ''
  btnText = 'Add to journal'
  t = new Date()
  minDate = this.t.getFullYear() + "-" + this.addZero(this.t.getMonth() + 1) + "-" + this.addZero(this.t.getDate())
  startTime: any
  endTime: any
  totalTime: any
  isGuest:boolean = false;
  enabletickValue = true;
  isAdults: boolean = true; 

  constructor(private service: AdultsService, private router: Router) { 
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
  }

  ngOnInit() {
    this.isGuest = localStorage.getItem('guest') =='T';
    this.userId = JSON.parse(sessionStorage.getItem("userId"))
    this.findReflection()
    this.startTime = Date.now();
    this.checkRoute();
  }
  checkRoute(): void {
    // Check if the current URL contains "wisdom-exercise"
    if (this.router.url.includes('wisdom-exercise')) {
      this.enabletickValue = false;
    }
  }

  findReflection() {
    let reflectionA=[];
    reflectionA = this.qrList?.ListOfReflection
    for (var i = 0; i < reflectionA.length; i++) {
      if (this.rId == reflectionA[i].ReflectionId) {
        this.journalques = reflectionA[i].Que
      }
    }
  }

  addjournal() {
    if(localStorage.getItem('guest')!= 'T'){
      if (!this.enabletick) {
        /* this.service.addJournal({
          "JournalId": 0,
          "JDate": "2022-09-08",
          "Title": "Todays Tasks",
          "Notes": this.note,
          "UserId": this.userId
        }) */
        this.endTime = Date.now();
        this.totalTime = this.endTime - this.startTime;

        this.service.submitProgressReflection({
          "ScrNumber": "",
          "UserId": this.userId,
          "BookMark": 0,
          "ModuleId": 75,
          "screenType": 8,
          "timeSpent": this.totalTime,
          "ReflectionId": this.rId,
          "Resp":  this.note
        }).subscribe(res => {
          this.enabletick = true;
          this.btnText = 'Added to journal';
        }, error => {
          console.log(error)
        })
      }
    }else{
      this.guestEvent.emit(true);
      // let retVal = confirm("Start your free trial to activate the Journal");
      // if( retVal == true ) {
      //   this.router.navigate(['/log-in']);
      // } else {
      //   return false;
      // }
    }

  }
  getAlertcloseEvent(event) {
    if(event=='ok'){
      this.enableAlert = false;
      this.router.navigate(["/onboarding/login"], {
        replaceUrl: true,
        skipLocationChange: true
      });
    }else{
      this.enableAlert = false;
    }
  }

  addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  routejournel(){
    if(this.isAdults){
      this.router.navigate(['/adults/journal'])
    }
    else{
      this.router.navigate(['/teenagers/journal'])
    }
   
  }
}
