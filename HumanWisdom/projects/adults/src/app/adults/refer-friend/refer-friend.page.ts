import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AdultsService } from '../adults.service';

@Component({
  selector: 'app-refer-friend',
  templateUrl: './refer-friend.page.html',
  styleUrls: ['./refer-friend.page.scss'],
})
export class ReferFriendPage implements OnInit {
  email = '';
  name = '';
  content = '';
  enableAlert = false;
  emailElmtRegex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$');

  constructor(private service: AdultsService, private location: Location, public platform: Platform) { }

  ngOnInit() {
  }
  sharewhatsapp(){
    var url ='https://api.whatsapp.com/send'
   var text="Check out the HumanWisdom Program: The Best Mental Health App for Stress, Anger & Depression Management|HumanWisdom";
    window.open(url + '?text='+encodeURIComponent(text))
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
  }

  getAlertcloseEvent(event) {
    this.content = '';
    this.enableAlert = false;
  }

  disabled() {
    if (this.emailElmtRegex.test(this.email) && this.name.length > 3) {
      return false;
    } else {
      return true;
    }
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
}
