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
      this.content = 'Please enter complete details';
      this.enableAlert = true;
    }
  }

  getAlertcloseEvent(event) {
    this.content = '';
    this.enableAlert = false;
  }
}
