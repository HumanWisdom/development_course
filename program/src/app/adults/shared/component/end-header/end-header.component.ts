import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-end-header',
  templateUrl: './end-header.component.html',
  styleUrls: ['./end-header.component.scss'],
})
export class EndHeaderComponent implements OnInit {
  @Input() toc: string;
  socialShare=true
  shareUrl:any
  token=JSON.parse(localStorage.getItem("token"))

  constructor(private router:Router,private ac:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.toc)
  }

  sendIndex(){
   console.log("https://humanwisdom.me/course/#/adults/"+this.toc+`?t=${this.token}`)
  }
  routeJournal(){
    this.router.navigate(['/adults/journal'])
  }
}
