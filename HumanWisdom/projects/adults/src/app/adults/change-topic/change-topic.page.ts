import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { AdultsService } from '../adults.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-change-topic',
  templateUrl: './change-topic.page.html',
  styleUrls: ['./change-topic.page.scss'],
})
export class ChangeTopicPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;
  url: any;
  changeTopicList: any;
  isSelected: boolean = false;
  selectedId: any = "0";
  constructor(private location: Location, private service: AdultsService, public router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.changeTopicList = this.service.personalisedforyoulist;
    this.getUserPreferenceMapping();
  }

  getUserPreferenceMapping() {
    this.service.getUserpreference().subscribe(res => {
      if (res) {
        this.selectedId = res;
      }
    })
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() {
    this.location.back();
  }

  update() {
    this.service.AddUserPreference(this.selectedId).subscribe(res => {
      if (res) {
        this.url = localStorage.getItem('lastRoute')?.toString();
        if(this.url==null){
          this.url ='/adult-dashboard';
        }
        this.router.navigate([this.url]);
      }
    });
  }

  updateList(id) {
    this.selectedId = id;
    if (parseInt(id) > 0) {
      this.isSelected = true;
    }
  }
}
