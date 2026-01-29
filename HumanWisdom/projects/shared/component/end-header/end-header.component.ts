import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private readonly router:Router,private readonly ac:ActivatedRoute) { }

  sendIndex(){
   console.log("https://humanwisdom.me/adults/"+this.toc+`?t=${this.token}`)
  }
  routeJournal(){
    this.router.navigate(['/adults/journal'])
  }
  routeForum(){
    this.router.navigate(['/forum'])
  }
}
