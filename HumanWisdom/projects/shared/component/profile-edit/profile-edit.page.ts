import { Component, OnInit, ElementRef, Renderer2, EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingService } from '../../../shared/services/onboarding.service';
import { CommonService } from '../../services/common.service';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {
  fileToUpload: File = null;
  data;
  url;
  userId;
  fullname;
  email = 'test';
  userdetail = 'tset';
  imageupload;
  content = '';
  enableAlert = false;
  countryCode: any = '';
  countryList: any = [];
  isdcode: any = '';
  country: any = '';
  phoneno: any = '';
  age: any = '';
  profession: any = '';
  title: any = '';
  titleList: any = ['Title', 'Ms', 'Mr.', 'Mrs.', 'Others'];
  searchResult = [];
  isAdults = true;
  isShow = false;
  byteArray: any;
  fileName = '';
  objString: any;
  object:any;
  isupload = false;
  @ViewChild('myText') myTextarea: ElementRef;
  constructor(private onboardingService: OnboardingService, private router: Router, private Service: CommonService
  ) {
    // this.triggerElement?.nativeElement?.addEventListener('customEvent', () => {
    //   console.log('Received custom event from index.html');
    // });
    this.userId = JSON.parse(localStorage.getItem("userId"));
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
    this.exposeFunction();
  }

  handleEvent(payload: any) {
    console.log('Received event in Angular:', payload);
    this.objString = payload;
    const jsonObject = JSON.parse(payload);
    const byteArray= 'data:;base64,'+jsonObject.base64String;
    this.isShow = true;
    this.imageupload = byteArray;
    this.isupload = true;
    this.byteArray = jsonObject.base64String;
    this.object = {
      "UserID": this.userId,
      "byteArray": "",
      "byteStringAndroid":jsonObject.base64String
    };
    setTimeout(() => {
      this.myTextarea.nativeElement.focus();
    }, 500);
  }

  // Expose function to global window object
  exposeFunction() {
    window['handleAngularEvent'] = this.handleEvent.bind(this);
  }


  ngOnInit() {
    this.getCountry();
    setTimeout(() => {
      this.onboardingService.getuser(this.userId).subscribe((res) => {
        this.userdetail = res[0];
        // this.url = 'data:image/jpg;base64,' + this.userdetail['UserImage']
        let img = this.userdetail['UserImagePath'].split('\\');
        this.url = img[0]+"/"+img[1];
        this.email = this.userdetail['Email']
        this.age = this.userdetail['Age'] === '0' || this.userdetail['Age'] === '0' ? '' : this.userdetail['Age']
        this.country = this.userdetail['Country']
        this.isdcode = this.userdetail['ISD_Code'] ? this.userdetail['ISD_Code'].toString().includes('+') ? this.userdetail['ISD_Code'] : '+' + this.userdetail['ISD_Code'] : ''
        this.profession = this.userdetail['Profession']
        this.phoneno = this.userdetail['PhoneNo']
        this.title = !this.userdetail['Title'] ? 'Title' : this.userdetail['Title']
        let userres = JSON.parse(localStorage.getItem("loginResponse"));
        let nameupdate = localStorage.getItem(
          "nameupdate"
        );
        if (nameupdate) {
          this.fullname = nameupdate
        } else {
          this.fullname = userres['Name']
        }
      })
    }, 1000)
  }

  clickEventForProfile() {
    const customEvent = new CustomEvent('ImageEditClicked');
    window.dispatchEvent(customEvent);
  }

  clickNativeElement() {
    setTimeout(() => {
      const customEvent = new CustomEvent('nativeEvent');
      window.dispatchEvent(customEvent);
    }, 500);
  }


  getFileUpload(event) {
    const files = event.target.files;
    if (files.length === 0)
      return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    this.fileToUpload = files;
   this.isupload = true;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      let byte: any = reader.result;
      byte = byte.split('base64,')
      if (byte[1] !== undefined && byte[1] !== '') {
       this.object= {
          "UserID": this.userId,
          "byteArray": byte[1],
          "byteStringAndroid":""
        }
        this.imageupload = reader.result;
      }
    }
  }

  closeprofileedit() {
    this.router.navigate([`/${SharedService.getprogramName()}/onboarding/user-profile`]);
  }

  updateUser() {
    let name = this.fullname.split(' ')
    let obj = {
      "UserID": this.userdetail['UserID'],
      "RoleID": this.userdetail['RoleId'],
      "FName": name[0],
      "LName": name[1] === undefined ? '' : name[1],
      "Email": this.email,
      "ISD_Code": this.isdcode,
      "Country": this.country,
      "PhoneNo": this.phoneno,
      "Age": this.age,
      "Profession": this.profession,
      "Title": this.title
    }
    this.onboardingService.updateUser(obj).subscribe((r) => {
      console.log(r)
      if (r) {
        this.onboardingService.uploaderAvatar(this.object).subscribe((r) => {
          if (r) {
           this.onboardingService.updateUserDetails.next(true); 
           console.log("image uplodaed successfully");
          }})
        localStorage.setItem(
          "nameupdate",
          this.fullname
        );
        this.content = 'User profile updated successfully';
        this.enableAlert = true;
      }
    })
  }

  getAlertcloseEvent(event) {
    this.content = '';
    this.enableAlert = false;
  }

  getCountry() {
    this.Service.GetCountry().subscribe((res: any) => {
      this.countryList = res;
      if (res['in_eu']) {
        this.countryCode = 'EUR'
      } else {
        this.countryCode = res['country_code_iso3']
      }
    },

      error => {
        console.log(error)
      },
      () => {
      });

  }

  dataChanged(event) {
    this.searchResult = [];
    this.country = event;
    let fil = this.countryList.filter((d) => d['Country'] === event);
    if (fil.length > 0) {
      this.isdcode = fil[0]['ISD_Code'] ? '+' + fil[0]['ISD_Code'] : ''
    }
  }

  getAutoCompleteList(value) {
    if (this.countryList.length > 0) {
      if (value == null || value == "") {
        this.searchResult = this.countryList;
      } else {
        this.searchResult = this.countryList.filter(x => (x['Country'].toLocaleLowerCase()).includes(value?.toLocaleLowerCase()));
      }
    }
  }

  onFocus() {
    if (this.country == '') {
      this.searchResult = this.countryList;
    } else {
      this.searchResult = this.countryList.filter(x => (x['Country'].toLocaleLowerCase()).includes(this.country?.toLocaleLowerCase()));
    }
  }

  clearSearch() {
    this.country = '';
    this.searchResult = [];
  }
}
