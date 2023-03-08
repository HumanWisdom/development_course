import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { AdultsService } from "../../adults.service";

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
  eventID = 0;
  enableRegister = false;

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
      let split = res[0]['Event_Date'].replace('th', '');
      let format = moment(split).format('YYYY, MM, DD');
      let today = moment().format('YYYY, MM, DD');
      var a = moment([format]);
      var b = moment([today]);
      let diff = a.diff(b, 'days');
      if (diff > 0) {
        this.enableRegister = true;
      }
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
