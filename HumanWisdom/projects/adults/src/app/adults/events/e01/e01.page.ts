import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  emailElmtRegex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$');

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
      let split = new Date(res[0]['EventDt'])


      /*    let split = res[0]['Event_Date'].replace('th', '');
         let format = moment(split).format('YYYY, MM, DD');
         let today = moment().format('YYYY, MM, DD');
         var a = moment([format]);
         var b = moment([today]);
         let diff = a.diff(b, 'days'); */

      if (split > new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1)) {
        // if (diff > 0) {
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

  namevalidation() {
    if (this.name === '') {
      return 'Please enter name';
    } else if (this.name.length < 3) {
      return 'Name must be at least 3 characters';
    } else {
      return '';
    }
  }

  emailvalidation() {
    if (this.email === '') {
      return 'Please enter email';
    } else if (!(this.emailElmtRegex.test(this.email))) {
      return 'Please enter valid email';
    } else {
      return '';
    }
  }

  disabled() {
    if (this.emailElmtRegex.test(this.email) && this.name.length > 2) {
      return false;
    } else {
      return true;
    }
  }

}
