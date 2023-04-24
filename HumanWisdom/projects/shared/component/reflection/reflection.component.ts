import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
@Component({
  selector: 'app-reflection',
  templateUrl: './reflection.component.html',
  styleUrls: ['./reflection.component.scss'],
})
export class ReflectionComponent implements OnInit {
  //reflectionResponses:any
  @Input() reflection: string;
  @Input() hint: string;
  @Input() bg: string;
  @Input() bg_tn: string;
  @Input() bg_cft: string;
  @Input() reflectionResponse: string;
  @Input() toc: string;
  @Input() rid: string;
  @Output() sendResponse = new EventEmitter<string>();
  @Output() goPrevious = new EventEmitter<string>();
  shared: any
  confirmed: any
  path = this.router.url
  scrNumber: any
  progress = localStorage.getItem("progressbarvalue") ? parseFloat(localStorage.getItem("progressbarvalue")) : 0;
  showheaderbar = true
  pageaction = localStorage.getItem("pageaction");
  enableReadonly = false;
  guest = false;
  Subscriber = false;
  textDisabled = false;
  userId: any;
  placeholder = 'Write your answer here';

  constructor(public router: Router, public service: AdultsService) {
    this.userId = JSON.parse(localStorage.getItem("userId"))
  }

  ngOnInit() {
    this.showheaderbar = true
    var lastSlash = this.path.lastIndexOf("/");
    this.scrNumber = this.path.substring(lastSlash + 2);
    console.log(this.scrNumber)
    this.getProgress(this.scrNumber)
    this.guest = localStorage.getItem('guest') === 'T' ? true : false;
    this.Subscriber = localStorage.getItem('Subscriber') === '1' ? true : false;
    if (this.guest || !this.Subscriber) {
      this.placeholder = 'Please subscribe to access your online journal'
      this.textDisabled = true;
    }
  }
  sharedForum(e) {
    console.log(e)
    this.shared = e
  }

  confirmShare() {
    let obj = {
      'Post': this.reflectionResponse,
      'ReflectionID': this.rid,
      'UserId': this.userId
    }
    this.service.addUserRefPost(obj).subscribe((res) => {
      if (res) {
        this.confirmed = true;
        this.enableReadonly = true;
      }
    })
  }


  next() {
    if (this.reflectionResponse)
      this.sendResponse.emit(this.reflectionResponse)
    else {
      this.sendResponse.emit(null)
    }



  }

  previous() {
    this.goPrevious.emit()

  }
  getProgress(p) {
    this.service.screenProgress(p)
      .subscribe(
        r => {
          this.progress = parseFloat(r)
          console.log(this.progress, "sessionProgress")
          localStorage.setItem("progressbarvalue", this.progress.toString())
          setTimeout(() => {
            this.showheaderbar = true;
          }, 100)
        }
      )

  }
  goToToc() {
    this.router.navigate(['/adults/' + this.toc])
  }
  goToDash() {
    this.router.navigate(['/adults/adult-dashboard'])
  }

}
