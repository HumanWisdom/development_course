import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-end-header',
  templateUrl: './end-header.component.html',
  styleUrls: ['./end-header.component.scss'],
})
export class EndHeaderComponent {
  @Input() toc: string;
  socialShare=true
  shareUrl:any
  token=JSON.parse(localStorage.getItem("token"))

  constructor(private readonly router:Router,private readonly ac:ActivatedRoute) { 
    SharedService.isModuleEnd = true;
  }

  sendIndex(){
   console.log("https://humanwisdom.me/adults/"+this.toc+`?t=${this.token}`)
  }
  routeJournal(){
    localStorage.setItem('NaviagtedFrom', this.router.url);
    if (SharedService.ProgramId == ProgramType.Teenagers) {
      this.router.navigate(['/teenagers/journal'])
    } else {
      this.router.navigate(['/adults/journal'])
    }
  }
  routeForum(){
    localStorage.setItem('NaviagtedFrom', this.router.url);
    if (SharedService.ProgramId == ProgramType.Teenagers) {
      this.router.navigate(['/teenagers/forum'])
    } else {
      this.router.navigate(['/forum'])
    }
  }
}
