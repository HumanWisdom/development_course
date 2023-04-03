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

  constructor(public router: Router, public service: AdultsService) { }

  ngOnInit() {
    this.showheaderbar = true
    var lastSlash = this.path.lastIndexOf("/");
    this.scrNumber = this.path.substring(lastSlash + 2);
    console.log(this.scrNumber)
    this.getProgress(this.scrNumber)
  }
  sharedForum(e) {
    console.log(e)
    this.shared = e
  }

  confirmShare() {
    this.confirmed = true
    this.enableReadonly = true
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
