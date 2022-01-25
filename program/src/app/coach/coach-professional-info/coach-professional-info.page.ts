import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Country, State, City }  from 'country-state-city';
import { CoachInfo } from '../coach-model/coach-info';
import { CoachDataService } from '../services/coach-data.service';
import { CoachService } from '../services/coach.service';

@Component({
  selector: 'app-coach-professional-info',
  templateUrl: './coach-professional-info.page.html',
  styleUrls: ['./coach-professional-info.page.scss'],
})
export class CoachProfessionalInfoPage implements OnInit {
  public professionalInfo: FormGroup
  public certificate = [];
  public certificateValid = [];
  public isCurrent = false;
  public inCorrectType = false;
  public countries = [];
  public city=[];
  callingCountries:string;
  constructor(private router: Router, 
    private formbuilder: FormBuilder,
     private dataservice: CoachDataService,
     private apiService:CoachService) {
  }


  ngOnInit() {
    
    // this.SetCountriesData();
    this.countries=Country.getAllCountries().map(o => new Object({name: o.name, code: o.isoCode,phonecode:o.phonecode}));
    this.professionalInfo = this.formbuilder.group({
      Coach_Qualifications: this.formbuilder.array([]),
      Coach_WorkExp: this.formbuilder.array([]),
      Coach_Certificates: this.formbuilder.array([]),
      Coach_Websites: this.formbuilder.array([]),
      Coach_Specializations: ['', [Validators.required]]
    });
    this.InitializeCoachInfo();
  }

  // SetCountriesData(){
  //   this.callingCountries = require('country-data').callingCountries;
  //   }

  createqualification(value) {
    if (value === 0) {
      return this.formbuilder.group({
        name: [''],
      })
    } else if (value === 1) {
      return this.formbuilder.group({
        InstituteName: [''],
        City: ['', [Validators.required]],
        Country: ['', [Validators.required]],
        From_Year: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4), Validators.maxLength(4)]],
        From_Month: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1), Validators.max(12), Validators.maxLength(2)]],
        To_Year: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4), Validators.maxLength(4)]],
        To_Month: ['',  [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1), Validators.max(12), Validators.maxLength(2)]],
        IsCurrent: [false]
      })
    } else if (value === 2) {
      return this.formbuilder.group({
        name: ['']
      })
    } else if (value === 3) {
      const reg = "((http|https)://)?(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)";
      return this.formbuilder.group({
        name: ['', [Validators.required, Validators.pattern(reg)]]
      })
    }
  }

  addNext(value) {
    if (value === 0) {
      (this.professionalInfo.controls['Coach_Qualifications'] as FormArray).push(this.createqualification(value))
    } else if (value === 1) {
      (this.professionalInfo.controls['Coach_WorkExp'] as FormArray).push(this.createqualification(value))
    } else if (value === 2) {
      (this.professionalInfo.controls['Coach_Certificates'] as FormArray).push(this.createqualification(value))
    } else if (value === 3) {
      (this.professionalInfo.controls['Coach_Websites'] as FormArray).push(this.createqualification(value))
    }

    console.log('QUalificationValues', this.professionalInfo?.controls['Coach_WorkExp'] )
  }

  RemoveQUalification(i) {
    (this.professionalInfo.controls['Coach_Qualifications'] as FormArray).removeAt(i);
  }

  RemoveExp(i) {
    (this.professionalInfo.controls['Coach_WorkExp'] as FormArray).removeAt(i);
  }

  RemoveLinks(i) {
    (this.professionalInfo.controls['Coach_Websites'] as FormArray).removeAt(i);
  }

  RemoveCertificate(i) {
    (this.professionalInfo.controls['Coach_Certificates'] as FormArray).removeAt(i);
    if(this.certificate.length>0){
     this.certificate.splice(i,1);
   }
  }

  isCurrentWorking(e, i) {
    const orderItemsArray = this.professionalInfo.get('Coach_WorkExp') as FormArray;

      orderItemsArray.at(i).patchValue({
        'To_Year': '',
        'To_Month': '',
      })
    if(e.target.checked){
      this.isCurrent = true;
      
      (<FormArray>this.professionalInfo.get('Coach_WorkExp'))?.controls[i].get('To_Month').clearValidators();
      (<FormArray>this.professionalInfo.get('Coach_WorkExp'))?.controls[i].get('To_Year').clearValidators();
      (<FormArray>this.professionalInfo.get('Coach_WorkExp'))?.controls[i].get('To_Month').updateValueAndValidity();
      (<FormArray>this.professionalInfo.get('Coach_WorkExp'))?.controls[i].get('To_Year').updateValueAndValidity();

    } else {
      this.isCurrent = false;
      (<FormArray>this.professionalInfo.get('Coach_WorkExp'))?.controls[i].get('To_Month').setValidators([Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1), Validators.max(12), Validators.maxLength(2)]);
      (<FormArray>this.professionalInfo.get('Coach_WorkExp'))?.controls[i].get('To_Year').setValidators([Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4), Validators.maxLength(4)]);
      (<FormArray>this.professionalInfo.get('Coach_WorkExp'))?.controls[i].get('To_Month').updateValueAndValidity();
      (<FormArray>this.professionalInfo.get('Coach_WorkExp'))?.controls[i].get('To_Year').updateValueAndValidity();

    }
  }

  changeCity($event:any, i:number){
    let country=this.countries.filter(x=>x.name==$event.target.value)[0];
   this.city.push(City.getCitiesOfCountry(country.code));
  }
  changeCountry($event:any, i:number){
    let country=this.countries.filter(x=>x.name==$event)[0];
  return City.getCitiesOfCountry(country?.code ? country?.code : '');
  }

  handleFileInput(files, text, i) {
    let file = files.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
      debugger
      const res: string = e.target.result.split(',')[1];
      if(res.length * 2  > 2**21) {
        if(this.certificate[i] == undefined){
          alert("Max File Size 2 MB");
          this.certificateValid.push(true);
          return ;
        } else {
          this.certificate[i].CertificationName = "";
      this.certificate[i].Certificates= "";
      this.certificate[i].CertificationPath = "";
      this.certificateValid[i] = false;
      return ;
        }
        
      }
     if( this.certificate[i] == undefined) {
      this.certificate.push({ "CertificationName": file['name'], "Certificates": res,"CertificationPath":''});
      // this.certificateValid.push(true);
     } else {
      this.certificate[i].CertificationName = file['name'];
      this.certificate[i].Certificates= res
      this.certificate[i].CertificationPath = "";
      
     }
      
     // (<HTMLInputElement>document.getElementById(text)).value = file['name']
    };
  }

  clickuploadimage(id) {
    document.getElementById(id).click();
  }

  nextRoute() {
    let obj = this.professionalInfo.value;
    // delete obj['certificate']
    obj['Coach_Certificates'] = this.certificate;
    obj['Coach_Websites'] = this.professionalInfo.value['Coach_Websites'].map((d) => d['name']);
    obj['Coach_Qualifications'] = this.professionalInfo.value['Coach_Qualifications'].map((d) => d['name']);
    obj['Coach_Specializations'] = [this.professionalInfo.value['Coach_Specializations']];
    // delete obj['link']
    // delete obj['qualification']
   
    this.dataservice.professionalInfo.next(obj)
    this.dataservice.coachInfo = Object.assign(this.dataservice.coachInfo, this.professionalInfo.value);
    // this.dataservice.coachInfo.Coach_Languages = this.personalInfo.get('Coach_Languages').value.map(x => x.item_id);
     localStorage.setItem('coachInfo', JSON.stringify(this.dataservice.coachInfo));
     this.router.navigate(['coach/coach-payment-info'])
    // this.dataservice.coachInfo=Object.assign(this.dataservice.coachInfo,this.professionalInfo.value);
    // this.router.navigate(['frameworks/coach-payment-info'])
  }

  saveForLater() {
    let obj = this.professionalInfo.value;
    //delete obj['certificate']
    this.dataservice.coachInfo = Object.assign(this.dataservice.coachInfo, this.professionalInfo.value);
    this.dataservice.coachInfo.Id = +localStorage.getItem('userId');
    this.dataservice.coachInfo.Coach_Certificates = this.certificate;
    this.dataservice.coachInfo.Coach_Specializations = [this.professionalInfo.value['Coach_Specializations']];
    this.dataservice.coachInfo.Coach_Websites =  this.professionalInfo.value['Coach_Websites'].map((d) => d['name']);
    this.dataservice.coachInfo.Coach_Qualifications =  this.professionalInfo.value['Coach_Qualifications'].map((d) => d['name']);
    //delete obj['link']
    //delete obj['qualification']
    this.dataservice.professionalInfo.next(obj)
    this.apiService.register(this.dataservice.coachInfo).subscribe(res => {
      if(res=="1"){
      console.log("Successfully Saved");
      localStorage.setItem('coachInfo', JSON.stringify(this.dataservice.coachInfo));
      }
    });
  }

  goBack() {
    this.router.navigate(['coach/coach-personal-info'])
  }
  InitializeCoachInfo(){
    if(localStorage.getItem('coachInfo')==null){
      this.GetCoachDetails();
    }else{
      this.dataservice.coachInfo = JSON.parse(localStorage.getItem('coachInfo'));
      this.setProfessionalInfoFormControl(this.dataservice.coachInfo);
    }
    }
  
    GetCoachDetails() {
      this.apiService.getCoachDetails(+localStorage.getItem('userId')).subscribe(res => {
        this.dataservice.coachInfo = res;
        if (res != null) {
          this.setProfessionalInfoFormControl(res);
        } else {
          this.addNext(0);
          this.addNext(1);
          this.addNext(2);
          this.addNext(3);
        }
      });
    }

    customValidator()
    {
      return (control:FormControl)=>
      {
        const form=control.parent
        if (form)
        {
          const fromYear=form.get('From_Year');
          const toYear=form.get('To_Year');
          return fromYear?.value && toYear?.value && +toYear.value<+fromYear.value ? {error:'TO Should be graterthan From Year'}:null
        }
      }
    }

  

    buildOrderItemsForm(item): FormGroup {
      this.city.push(City.getCitiesOfCountry(item.Country));
      return this.formbuilder.group({
        InstituteName: [item.InstituteName],
        City: [item.City, [Validators.required]],
        Country: [item.Country, [Validators.required]],
        From_Year: [item.From_Year, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4), Validators.maxLength(4), this.customValidator()]],
        From_Month: [item.From_Month, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1), Validators.max(12), Validators.maxLength(2)]],
        To_Year: [item.To_Year, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4), Validators.maxLength(4), this.customValidator()]],
        To_Month: [item.To_Month,  [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1), Validators.max(12), Validators.maxLength(2)]],
        IsCurrent: [item.IsCurrent === '1' ? true : false]
      })
    }

    certificatesUpdate(item, i): FormGroup {
      return this.formbuilder.group({ "CertificationName": item.CertificationName, "Certificates": item.Certificates })
    }

    qualificationUpdate(item): FormGroup {
      return this.formbuilder.group({ "name": item })
    }
    linkUpdate(item): FormGroup {
      const reg = "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?";
      
      return this.formbuilder.group({ 
        // "name": item
        name: [item, [Validators.required, Validators.pattern(reg)]]
       })
    }


  setProfessionalInfoFormControl(res:CoachInfo){
   const orderItemsArray = this.professionalInfo.get('Coach_WorkExp') as FormArray;
   const certificate = this.professionalInfo.get('Coach_Certificates') as FormArray;
   const qualification = this.professionalInfo.get('Coach_Qualifications') as FormArray;
   const link = this.professionalInfo.get('Coach_Websites') as FormArray;
   if(res.Coach_Qualifications.length > 0) {
    res.Coach_Qualifications.forEach(item => {
      qualification.push(this.qualificationUpdate(item))
    });
   } else {

    qualification.push(this.formbuilder.group({
      name: ''
    }));
    
   }
   if(res.Coach_Websites.length > 0) {
    res.Coach_Websites.forEach(item => {
      link.push(this.linkUpdate(item))
    });
   } else {

    link.push(this.formbuilder.group({
      name: ''
    }));
    
   }
   if(res.Coach_WorkExp.length > 0){
    res.Coach_WorkExp.forEach(item => {
      orderItemsArray.push(this.buildOrderItemsForm(item))
    });
  } else {
    orderItemsArray.push(
      this.formbuilder.group({
        InstituteName: '',
        Country: '',
        City: '',      
        From_Year: '',
        From_Month: '',
        To_Year: '',
        To_Month: '',
        IsCurrent: false   
      })
    )
  }
   
  if(res.Coach_Certificates.length > 0 ) {
    this.certificate=[];
    this.certificate=res.Coach_Certificates;
    
    res.Coach_Certificates.forEach((item, i) => {
      certificate.push(this.certificatesUpdate(item, i));     
      this.certificateValid.push(true);
    });
  } else {
    certificate.push(this.formbuilder.group({
      name: ''
    }));
    this.certificateValid.push(true);
  }
    this.professionalInfo.patchValue(
      {
        Coach_Specializations: res.Coach_Specializations.toString()
    });

  }
 validURL(myURL) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ //port
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i');
    return pattern.test(myURL);
 }
}
