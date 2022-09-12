import { Component, Input, OnInit } from '@angular/core';
import { AdultsService } from 'src/app/adults/adults.service';

@Component({
  selector: 'app-journal-we',
  templateUrl: './journal-we.component.html',
  styleUrls: ['./journal-we.component.scss'],
})
export class JournalWeComponent implements OnInit {

  qrList = JSON.parse(localStorage.getItem("qrList"))

  @Input()
  journalques = 'Notice 3 things about the appearance of a person you see everyday that you normally overlook.';

  @Input()
  rId = 854

  enabletick = false;
  userId: any
  note = ''
  btnText = 'Add to journal'
  t = new Date()
  minDate = this.t.getFullYear() + "-" + this.addZero(this.t.getMonth() + 1) + "-" + this.addZero(this.t.getDate())

  constructor(private service: AdultsService) { }

  ngOnInit() {
    this.userId = JSON.parse(sessionStorage.getItem("userId"))
    this.findReflection()
  }

  findReflection() {
    let reflectionA = this.qrList.ListOfReflection
    for (var i = 0; i < reflectionA.length; i++) {
      if (this.rId == reflectionA[i].ReflectionId) {
        this.journalques = reflectionA[i].Que
      }
    }
  }

  addjournal() {
    if (!this.enabletick) {
      this.service.addJournal({
        "JournalId": 0,
        "JDate": "2022-09-08",
        "Title": "Todays Tasks",
        "Notes": this.note,
        "UserId": this.userId
      }).subscribe(res => {
        this.enabletick = true;
        this.btnText = 'Added to journal';
      }, error => {
        console.log(error)
      })
    }
  }

  addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
}
