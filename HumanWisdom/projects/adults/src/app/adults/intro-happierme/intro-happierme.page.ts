import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-happierme',
  templateUrl: './intro-happierme.page.html',
  styleUrls: ['./intro-happierme.page.scss'],
})
export class IntroHappiermePage implements OnInit {

  constructor(private location: Location,private router: Router) { }

  ngOnInit() {
  }

  goBack() 
  {
    this.location.back();
  }

  getclcickevent($event){
            
  }
  routeVideoaudio(type, url, title = '') {
    if(type === 'video') {
     this.router.navigate([url, 'T', title])
    }else{
     let concat = encodeURIComponent(url.replaceAll('/','~'));
     this.router.navigate(['adults/audiopage/', concat, '1', 'T', title])
    }
 }
}

