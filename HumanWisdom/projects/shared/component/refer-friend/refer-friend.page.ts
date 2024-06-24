import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { ProgramType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';

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
  isAdults: boolean = true; 

  constructor(private service: AdultsService, private location: Location, public platform: Platform,private router: Router) { 
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
  }

  ngOnInit() {
  }
  sharewhatsapp(){
    var url ='https://api.whatsapp.com/send'
   var text="Check out the HappierMe Program: The Best Mental Health App for Stress, Anger & Depression Management|HumanWisdom";
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

  handleTreeSisterClick() {
    const url = this.isAdults ? '/adults/treesisters' : '/teenagers/treesisters';
    this.router.navigate([url]);
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

          this.content = 'Mail Sent successfully';
          this.enableAlert = true;
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
