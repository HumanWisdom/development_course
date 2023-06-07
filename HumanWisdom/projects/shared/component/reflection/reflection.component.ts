import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { ProgramType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';
@Component({
  selector: 'app-reflection',
  templateUrl: './reflection.component.html',
  styleUrls: ['./reflection.component.scss'],
})
export class ReflectionComponent implements OnInit {
  //reflectionResponses:any
  reflectionData = '';
  @Input() reflection: string;
  @Input() hint: string;
  @Input() bg: string;
  @Input() bg_tn: string;
  @Input() bg_cft: string;
  @Input() set reflectionResponse(data) {
    // this.reflectionData = data !== 'null' ? data : '';
  };
  @Input() toc: string;
  @Input() rid: string;
  @Output() sendResponse = new EventEmitter<any>();
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
  programName:string="";
  constructor(public router: Router, public service: AdultsService, public sharedService:SharedService) {
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
    this.programName = this.getProgramTypeName(SharedService.ProgramId)?.toLowerCase().toString();
    if(this.programName=='teenagers'){
      this.programName='';
    }

    this.reflectionData = this.reflection !== 'null' ? this.reflection : '';
  }
  sharedForum(e) {
    console.log(e)
    this.shared = e
  }

  confirmShare() {
    let obj = {
      'Post': this.reflectionData,
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
    if (this.reflectionData)
      this.sendResponse.emit(this.reflectionData)
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

  getProgramTypeName(value: number): string {
    const enumKey = Object.keys(ProgramType).find(key => ProgramType[key] === value);
    return enumKey as string;
  }

  goToToc() {
    this.router.navigate(['/'+this.programName+'/' + this.toc])
  }

  goToDash() {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.router.navigate(['/adults/adult-dashboard'])
    }
    else if(SharedService.ProgramId == ProgramType.Teenagers) {
      this.programName = "";
      this.router.navigate([this.programName + '/teenager-dashboard'])
    }else{
      this.router.navigate(['/adults/adult-dashboard'])
    }
  }
}
