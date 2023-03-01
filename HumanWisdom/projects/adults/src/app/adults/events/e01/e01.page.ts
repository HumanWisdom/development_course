import { Component, OnInit } from '@angular/core';
import { AdultsService } from "../../adults.service";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-e01',
  templateUrl: './e01.page.html',
  styleUrls: ['./e01.page.scss'],
})
export class E01Page implements OnInit {

  tocImage = ""
  tocColor = "white"
  eventData = [];
  name = '';
  email = '';
  eventID=0;
  constructor(private service: AdultsService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.eventID = params?.eid
    });
    this.getEventID();
  }

  ngOnInit() {
  }

  getEventID() {
    this.service.getEventbyId(this.eventID).subscribe(res => {
      this.eventData = res[0];
      this.tocImage = this.eventData['ArtImgPath'];
    },
      error => console.log(error),
      () => {
      }
    )
  }

  registerEvent() {
    let obj = {
      "EventsID": this.eventID,
      "Name": this.name,
      "EmailID": this.email
    }
    this.service.registerevent(obj).subscribe((res) => {
      alert(res);
      this.name = '';
      this.email = '';
    },
      error => alert(error),
      () => {
      }
    )
  }

}
