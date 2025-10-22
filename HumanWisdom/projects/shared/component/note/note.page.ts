import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { LogEventService } from '../../services/log-event.service';
import { ProgramType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {
  userId: any;
  saveUsername = JSON.parse(localStorage.getItem("saveUsername") || 'false');
  title: any;
  notes: any;
  noteId = 0;
  t = new Date();
  minDate = this.t.getFullYear() + "-" + this.addZero(this.t.getMonth() + 1) + "-" + this.addZero(this.t.getDate());
  urlNotes: any;
  urlId: any;
  urlTitle: any;
  urlType: any;
  urlPid: any;
  successfullySaved: boolean = false;
  isSave: boolean = false;
  urlMid: any;
  id = 0;
  readOnly = false;
  enableSave = false;
  oldnotes = '';
  isAdults: boolean = true; 

  @ViewChild('savebtn') savebtn!: ElementRef;
  @ViewChild('successbtn') successbtn!: ElementRef;

  constructor(
    private router: Router,
    private service: CommonService,
    private location: Location,
    private activate: ActivatedRoute,
    public logeventservice: LogEventService,
  ) {
    this.isAdults = SharedService.ProgramId === ProgramType.Adults;
  }

  ngOnInit() {
    this.userId = this.saveUsername ? JSON.parse(localStorage.getItem("userId") || '0') : JSON.parse(sessionStorage.getItem("userId") || '0');

    this.urlNotes = this.activate.snapshot.paramMap.get('jNotes');
    this.urlId = this.activate.snapshot.paramMap.get('jId');
    this.urlTitle = this.activate.snapshot.paramMap.get('title');
    this.urlType = this.activate.snapshot.paramMap.get('type');
    this.urlPid = this.activate.snapshot.paramMap.get('pId');
    this.urlMid = this.activate.snapshot.paramMap.get('mId');

    if (this.urlId != 0) {
      this.notes = this.urlNotes;
      this.oldnotes = this.notes;
      this.title = this.urlTitle;
      this.id = this.urlId;
      this.readOnly = true;
    }
  }

  save() {
    this.savebtn.nativeElement.click();
  }

  doNotSave() {
    this.isSave = false;
  }

  submitProgress() {
    if (this.urlType === 'dq') this.editDq();
    else if (this.urlType === 'Diary') this.editJournal();
    else if (this.urlType === 'reflection') this.editReflection();
    else if (this.urlId == 0) this.addNote();

    this.isSave = false;
  }

  addNote() {
    this.service.submitJournal({
      JournalId: 0,
      JDate: this.minDate,
      Title: this.title,
      Notes: this.notes,
      UserId: this.userId
    }).subscribe({
      next: () => {},
      error: err => console.log(err),
      complete: () => this.successbtn.nativeElement.click()
    });
  }

  editJournal() {
    this.service.submitJournal({
      JournalId: this.urlId,
      JDate: this.minDate,
      Title: this.title,
      Notes: this.notes,
      UserId: this.userId
    }).subscribe({
      next: () => {},
      error: err => console.log(err),
      complete: () => this.successbtn.nativeElement.click()
    });
  }

  editReflection() {
    this.service.addReflection({
      SubscriberID: this.userId,
      ReflectionId: this.urlId,
      Resp: this.notes
    }).subscribe({
      next: () => {},
      error: err => console.log(err),
      complete: () => this.successbtn.nativeElement.click()
    });
  }

  editDq() {
    this.service.addDailyQuestion({
      SubscriberID: this.userId,
      ReflectionId: this.urlId,
      Resp: this.notes
    }).subscribe({
      next: () => {},
      error: err => console.log(err),
      complete: () => this.successfullySaved = true
    });
  }

  continue() {
    this.successfullySaved = false;
    this.isSave = false;
    this.router.navigate(['/' + SharedService.getprogramName() + '/journal']);
  }

  addZero(i: number) {
    return i < 10 ? '0' + i : i.toString();
  }

  goBack() {
    this.location.back();
  }

  dataChanged(event: string) {
    this.enableSave = this.oldnotes?.trim() !== event?.trim();
  }

  closeAllModals() {
    const modals = document.querySelectorAll('.modal.show');
    modals.forEach((modal: any) => {
      const instance = (window as any).bootstrap?.Modal.getInstance(modal);
      if (instance) instance.hide();
      else {
        modal.classList.remove('show');
        modal.setAttribute('aria-hidden', 'true');
        (modal as HTMLElement).style.display = 'none';
      }
    });

    const backdrops = document.querySelectorAll('.modal-backdrop');
    backdrops.forEach(b => b.remove());
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
  }
}
