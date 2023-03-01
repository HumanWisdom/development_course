import { Component, OnInit } from '@angular/core';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-e01',
  templateUrl: './e01.page.html',
  styleUrls: ['./e01.page.scss'],
})
export class E01Page implements OnInit {

  tocImage = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/curated_dbs/images/events/artworks/01.png"
  tocColor = "white"
  eventData = [];
  name = '';
  email = '';

  constructor(private service: AdultsService) {
    this.getEventID();
  }

  ngOnInit() {
  }

  getEventID() {
    this.service.getEventbyId('29').subscribe(res => {
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
      "EventsID": 29,
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
