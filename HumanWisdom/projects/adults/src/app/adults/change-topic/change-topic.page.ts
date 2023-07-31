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
  changeTopicList:any;
  isSelected : boolean =false;
  selectedId:any="0";
  constructor(private location: Location, private service: AdultsService, public router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.changeTopicList = this.service.personalisedforyoulist;
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
        this.url = this.activatedRoute.snapshot.paramMap.get('url');
        this.router.navigate([this.url]);
      }
    });
  }

  updateList(id){
    this.selectedId = id;
    if(parseInt(id)>0){
      this.isSelected = true;
    }
  }
}
