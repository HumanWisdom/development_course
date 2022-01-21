import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoachInfo } from '../coach-model/coach-info';
import { CoachDataService } from '../services/coach-data.service';
import { CoachService } from '../services/coach.service';

@Component({
  selector: 'app-coach-payment-info',
  templateUrl: './coach-payment-info.page.html',
  styleUrls: ['./coach-payment-info.page.scss'],
})
export class CoachPaymentInfoPage implements OnInit {
  public paymentinfo: FormGroup;
  public natinalIdFront: string;
  public natinalIdback: string;
  isTermsAndConditionChkd =new FormControl(false);
  constructor(
    private router: Router,
     private formbuilder: FormBuilder,
      private dataservice: CoachDataService, private apiservice: CoachService) {
    this.paymentinfo = this.formbuilder.group({
      Consult_StrtTime: ['', [Validators.required, Validators.pattern("(([0-1]?[0-9])|(2[0-3])):[0-5][0-9]:[0-5][0-9]")]],
      Consult_EndTime: ['', [Validators.required, Validators.pattern("(([0-1]?[0-9])|(2[0-3])):[0-5][0-9]:[0-5][0-9]")]],
      PerSessionFee: ['', [Validators.required]],
      PerSessionFee_Curr: ['INR', [Validators.required]],
      PayPalID: ['', [Validators.required]]
    })
   }

  ngOnInit() {
    this.SetInitialCoachInfo();
  }

  goBack() {
    this.router.navigate(['coach/coach-professional-info'])
  }

  SetInitialCoachInfo() {
    this.dataservice.coachInfo = this.dataservice.InitializeCoachInfo();
    if (localStorage.getItem('coachInfo') == null) {
      this.GetCoachDetails();
    } else {
      this.dataservice.coachInfo = JSON.parse(localStorage.getItem('coachInfo'));
      this.SetPaymentInfo(this.dataservice.coachInfo);
    }
  }
  
  GetCoachDetails() {
    this.apiservice.getCoachDetails(+localStorage.getItem('userId')).subscribe(res => {
      this.dataservice.coachInfo = res;
      if (res != null) {
       this.SetPaymentInfo(res);
      }
    });
  }

  SetPaymentInfo(coachInfo:CoachInfo){
    this.paymentinfo.setValue({
      Consult_StrtTime: coachInfo.Consult_StrtTime,
      Consult_EndTime:  coachInfo.Consult_EndTime,
      PerSessionFee: coachInfo.PerSessionFee,
      PerSessionFee_Curr: coachInfo.PerSessionFee_Curr ? coachInfo.PerSessionFee_Curr : 'INR',
      PayPalID: coachInfo.PayPalID
    });
    this.natinalIdFront=coachInfo.NationalID_FrontImgPath,
    this.natinalIdback=coachInfo.NationalID_BackImgPath
  }

  handleFileInput(files, value) {
    let file = files.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
      const res: string = e.target.result.split(',')[1];;
      if(value === 0) {
        this.natinalIdFront = res;
      }else {
        this.natinalIdback = res
      }
    };
  }

  clickuploadimage(id) {
    document.getElementById(id).click();
  }

  submitForm(eventName:string) {
    if(this.paymentinfo.invalid || this.natinalIdback==''  || this.natinalIdFront==''){
      return false;
    }
    if(eventName=='submit' && !this.isTermsAndConditionChkd.value){
      return false;
    }
    let profile;
    let professional;
    this.dataservice.personalInfo.subscribe((res) => {
      profile = res;
    })
    this.dataservice.professionalInfo.subscribe((res) => {
      professional = res;
    })
    let obj = this.paymentinfo.value;

    this.dataservice.coachInfo=Object.assign(this.dataservice.coachInfo,obj);
    this.dataservice.coachInfo.NationalID_Back="";
    this.dataservice.coachInfo.NationalID_Front="";
    this.dataservice.coachInfo.NationalID_FrontImgPath=this.natinalIdFront;
    this.dataservice.coachInfo.NationalID_BackImgPath=this.natinalIdback;
    if(eventName == 'submit') {
      this.dataservice.coachInfo.RegSubmit = 1;
    }
    this.apiservice.register( this.dataservice.coachInfo).subscribe((res) => {
      if(res=="1"){
        localStorage.setItem('coachInfo', JSON.stringify(this.dataservice.coachInfo));
        if(eventName=='submit'){
          this.router.navigate(['coach/coach-congratulations'])
        }
      }
    })
  }

}
