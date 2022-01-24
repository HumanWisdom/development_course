import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Country, State } from 'country-state-city';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CoachInfo } from '../coach-model/coach-info';
import { CoachService } from '../services/coach.service';
import { CoachDataService } from '../services/coach-data.service';
@Component({
  selector: 'app-coach-personal-info',
  templateUrl: './coach-personal-info.page.html',
  styleUrls: ['./coach-personal-info.page.scss'],
})
export class CoachPersonalInfoPage implements OnInit {
  public personalInfo: FormGroup
  public profilepic: any;
  public gender: string = "male";
  countries = []
  currencies: string;
  regions: string;
  languages: string;
  callingCountries: string;
  state = [];
  languageList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {};
  constructor(
    private router: Router,
    private formbuilder: FormBuilder,
    private dataservice: CoachDataService,
    private apiservice: CoachService) {
      this.initialForms()
  
    
  }

  ngOnInit() {
    
    this.PerformInitialDataBind();
  }

  initialForms() {
    this.personalInfo = this.formbuilder.group({
      Title: ['Mr.', [Validators.required]],
      Name: ['', [Validators.required]],
      Gender: ['male', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      Address: ['', [Validators.required]],
      City: ['', [Validators.required]],
      Country: ['', [Validators.required]],
      State: ['', [Validators.required]],
      Primary_CTC: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10,15}$")]],
      Secondary_CTC: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10,15}$")]],
      Coach_Languages: ['', [Validators.required]],
      Code: ['', [Validators.required]],
      Phonecode: ['', [Validators.required]]
    })
  }

  PerformInitialDataBind() {
    this.dataservice.userId=+localStorage.getItem('userId');
    // this.SetCountriesData();
    this.countries = Country.getAllCountries().map(o => new Object({ name: o?.name, code: o?.isoCode, phonecode: o?.phonecode }));
    this.languageList = this.dataservice.getLanguageList().
      map(x => new Object({ item_id: x?.name, item_text: x?.name }));
    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
    };
    this.SetInitialCoachInfo();
  }


  SetInitialCoachInfo() {
    this.dataservice.coachInfo = this.dataservice.InitializeCoachInfo();
    if (localStorage.getItem('coachInfo') == null) {
      
      this.GetCoachDetails();
    } else {
      this.dataservice.coachInfo = JSON.parse(localStorage.getItem('coachInfo'));
      this.SetPersonalFormControlValue(this.dataservice.coachInfo);
    }
  }

  goBack() {
    this.router.navigate(['frameworks'], { state: { data: { isChecked: true } } })
  }
  IsNumeric(event: any) {
    this.dataservice.IsNumericOnly(event);
  }
  GetCoachDetails() {
    this.apiservice.getCoachDetails(+localStorage.getItem('userId')).subscribe(res => {
      this.dataservice.coachInfo = res;
      if (res != null) {
        this.SetPersonalFormControlValue(res);
      }
    });
  }

  SetPersonalFormControlValue(res: CoachInfo) {
    this.selectedItems = [];
    res?.Coach_Languages?.map(res => {
      this.selectedItems.push(
        { item_id: res, item_text: res  }
      );
    });
    this.personalInfo.setValue(
      {
        Title: res.Title,
        Name: res.Name,
        Gender: res.Gender.toLowerCase(),
        Email: res.Email,
        Address: res.Address,
        City: res.City,
        Country: res.Country,
        State: res.State,
        Primary_CTC: res.Primary_CTC,
        Secondary_CTC: res.Secondary_CTC,
        Coach_Languages: this.selectedItems,
        Phonecode: "+91",
        Code: ""
      });
      this.profilepic = 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/' + res.ProfilePic;
      this.changeCity(res?.Country)
      this.SetPersonalInfoObservableData();
  }

  handleFileInput(files) {
    let file = files.target.files[0];
    let reader = new FileReader();
    if (files.length === 0)
        return;
    const mimeType = file.type;
    if (mimeType.match(/image\/*/) == null) {
        return;
    }
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      let byte: any = reader.result;
      byte = byte.split('base64,')
      this.profilepic=reader.result;
      if(byte[1] !== undefined && byte[1] !== '') {
        let obj = {
          "UserID": this.dataservice.userId,
          "byteArray": byte[1] 
        }
        this.apiservice.uploaderAvatar(obj).subscribe((r) => {
          if(r) {
            this.profilepic = reader.result; 
          }
        })
      }
    }




    
  }

  getFileUpload(event) {
  
  }

  GetLanguages() {
    this.apiservice.getLanguageList().subscribe(res => {
      console.log(res);
    })
  }

  clickuploadimage() {
    document.getElementById("file").click();
  }

  getGender(value) {
    this.gender = value;
  }
  // SetCountriesData() {
  //   this.currencies = require('country-data').currencies,
  //     this.regions = require('country-data').regions,
  //     this.languages = require('country-data').languages,
  //     this.callingCountries = require('country-data').callingCountries;
  // }


  changeCity(name: any) {
    let country = this.countries.filter(x => x.name == name)[0];
    this.personalInfo.patchValue({
      Code: country?.code,
      Phonecode: country?.phonecode,
    });
    if(country?.code){
      this.state = State.getStatesOfCountry(country?.code);
    }
    
  }

  //Save for Letter
  saveForLater() {
    this.dataservice.coachInfo = Object.assign(this.dataservice.coachInfo, this.personalInfo.value);
    this.dataservice.coachInfo.Id = +localStorage.getItem('userId');
    this.dataservice.coachInfo.Coach_Languages = this.personalInfo.get('Coach_Languages').value.map(x => x.item_id);
    this.apiservice.register(this.dataservice.coachInfo).subscribe(res => {
      console.log("Sucessfully saved");
      localStorage.setItem('coachInfo', JSON.stringify(this.dataservice.coachInfo));
    });
  }
  //Next
  nextRoute() {
   
    this.dataservice.coachInfo = Object.assign(this.dataservice.coachInfo, this.personalInfo.value);
    this.dataservice.coachInfo.Coach_Languages = this.personalInfo.get('Coach_Languages').value.map(x => x.item_id);
    localStorage.setItem('coachInfo', JSON.stringify(this.dataservice.coachInfo));
    this.router.navigate(['coach/coach-professional-info'])
  }


  SetPersonalInfoObservableData(){
    let obj = this.personalInfo.value;
    obj['Gender'] = this.gender;
    // obj['ProfilePic'] = this.profilepic.split(',')[1];
  //  obj['Coach_Languages'] = this.personalInfo.get('Coach_Languages').value.map(x => x.item_id);
    this.dataservice.personalInfo.next(obj);
  }

}
