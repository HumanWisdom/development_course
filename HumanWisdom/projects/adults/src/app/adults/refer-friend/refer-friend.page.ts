import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdultsService } from '../adults.service';

@Component({
  selector: 'app-refer-friend',
  templateUrl: './refer-friend.page.html',
  styleUrls: ['./refer-friend.page.scss'],
})
export class ReferFriendPage implements OnInit {
  email = '';
  name = '';

  constructor(private service: AdultsService, private location: Location) { }

  ngOnInit() {
  }

  keyname(value: any) {
    this.name = value.value
  }

  keyemail(value: any) {
    this.email = value.value
  }

  goBack() {
    this.location.back()
  }

  submitrefer() {
    if (this.email !== '' && this.name !== '' && this.name.length > 3) {
      let userId = JSON.parse(localStorage.getItem("userId"))
      let data = {
        "UserId": userId,
        "FriendName": this.name,
        "FriendEmail": this.email,
        "ConvertedDate": '',
      }
      this.service.referfrd(data).subscribe((res) => {

        if (res) {
          this.email = '';
          this.name = '';
          (<HTMLInputElement>document.getElementById('name')).value = '';
          (<HTMLInputElement>document.getElementById('email')).value = '';
        }
      })
    } else {
      window.alert('Please enter complete details')
    }
  }
}