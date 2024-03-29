import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AdultsService } from '../adults.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-coach',
  templateUrl: './contact-coach.page.html',
  styleUrls: ['./contact-coach.page.scss'],
})
export class ContactCoachPage implements OnInit {
  public form:any;
  public countryList:any=[];
  code='';
  phonecode=''
  enableAlert = false;
  content = '';
  searchResult = [];
  countryFIPS = '';


  constructor(private location:Location,private adultService:AdultsService,
    private meta: Meta, private title: Title) {
    this.initializeForm();
    this.getCountriesList();
   }

  ngOnInit() {

    this.title.setTitle('Contact a Life Coach for Personal Growth')
    this.meta.updateTag({ property: 'title', content: 'Contact a Life Coach for Personal Growth'})
    this.meta.updateTag({ property: 'description', content: 'Find a professional coach to support your personal development' })
    this.meta.updateTag({ property: 'keywords', content: 'Coach contact,Contact a coach,Connect with coach,Get in touch with coach,Find a coach,Personal coaching,Life coaching,Professional coaching,Coaching services,Contact coach form,Coach support' });
}

  initializeForm(){
    this.form={
      Title:'',
      Name:'',
      Country:'',
      EmailID:'',
      ContactNo:''
    }
  }

  goBack(){
    this.location.back()
  }

  titleChangeEvent(value){
    this.form.Title=value;
  }

  onChange($event){
    var value=$event.target.value.split(":")[1].trim();
    this.form.Country=value;
    let data=this.countryList.filter(x=>x.CountryName==value)[0];
    if(data){
      document.getElementById("code").innerHTML = data.ISO2;
      document.getElementById("phoneCode").innerHTML = data.PhoneCode;
    }else{
      document.getElementById("code").innerHTML = '';
      document.getElementById("phoneCode").innerHTML = '';
    }

  }

  getAlertcloseEvent(event) {
    this.content = '';
    this.enableAlert = false;
  }


  dataChanged(event) {
    this.searchResult = [];
    this.form.Country = event;
    let fil = this.countryList.filter((d) => d['CountryName'] === event);
    if(fil.length > 0) {
       this.phonecode = fil[0]['PhoneCode'].toString() ? '+' + fil[0]['PhoneCode'].toString() : '';
       this.countryFIPS = fil[0]['FIPS'].toString();
    }
  }

  getAutoCompleteList(value) {
    if (this.countryList.length > 0) {
      if (value == null || value == "") {
        this.searchResult = this.countryList;
      } else {
        this.searchResult = this.countryList.filter(x => (x['CountryName'].toLocaleLowerCase()).includes(value?.toLocaleLowerCase()));
      }
    }
  }

  onFocus() {
    if (this.form?.Country == '') {
      this.searchResult = this.countryList;
    } else {
      this.searchResult = this.countryList.filter(x => (x['CountryName'].toLocaleLowerCase()).includes(this.form?.Country?.toLocaleLowerCase()));
    }
  }

  clearSearch() {
    this.form.Country = '';
    this.searchResult = [];
    this.phonecode ='';
    this.countryFIPS = '';
  }


  submit(){
   this.adultService.contactForm(this.form).subscribe(res=>{
    if(res){
      this.initializeForm();
      this.phonecode='';
      this.code='';
      this.content = 'Submitted Successfully';
      this.enableAlert = true;
      // alert("Submitted Successfully");
    }
   });
  }
  checkValidPhoneNo(){
    if(this.form.ContactNo!=''){
      if(isNaN(this.form.ContactNo)){
        return true;
      }
      return (this.form.ContactNo.length<7 || this.form.ContactNo.length>12);
    }
    }
   ValidateEmail(ischeck?){
    if(ischeck){
      if(this.form.EmailID!=''){
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(this.form.EmailID) == false)
        {
            return false;
        }
        return true;
      }
      return true;
    }
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(this.form.EmailID) == false)
    {
        return false;
    }

    return true;

}
  getCountriesList(){
     this.countryList= this.adultService.getCountryList();
  }
}
