import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'HumanWisdom-events-index',
  templateUrl: './events-index.page.html',
  styleUrls: ['./events-index.page.scss'],
})
export class EventsIndexPage implements OnInit {

  constructor(private location:Location, private router: Router) { }

  ngOnInit() {
  }

  goBack(){
    this.location.back()
  }

  youtube(link) {
    this.router.navigate(['/adults/curated/youtubelink', link])
  }

}
