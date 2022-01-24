import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { NgbCalendar, NgbDate, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CoachAvailabilityInfo, CoachAvailabilityInfoDetail } from '../coach-model/coach-availability-info';

import * as moment from 'moment';
import { Router } from '@angular/router';
import { CoachDataService } from '../services/coach-data.service';
import { CoachService } from '../services/coach.service';

declare var $: any;
@Component({
  selector: 'app-coach-calendar-plugin',
  templateUrl: './coach-calendar-plugin.page.html',
  styleUrls: ['./coach-calendar-plugin.page.scss'],
  styles: [`
  .custom-day {
    text-align: center;
    padding: 0.185rem 0.25rem;
    display: inline-block;
    height: 2rem;
    width: 2rem;
  }
  .custom-day.focused {
    background-color: #e6e6e6;
  }
  .custom-day.range, .custom-day:hover {
    background-color: rgb(2, 117, 216);
    color: white;
  }
  .custom-day.faded {
    background-color: rgba(2, 117, 216, 0.5);
  }
`]
})

export class CoachCalendarPluginPage implements OnInit {
  public calenderPlugin: FormGroup;
  hoveredDate: NgbDate | null = null;
  selectedDays:any=[];
  startTime: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
  endTime: NgbTimeStruct = {hour: 13, minute: 45, second: 0};
  dropdownSettings: IDropdownSettings = {};
  languageList = [];
  hourStep = 1;
  minuteStep = 15;
  secondStep = 30
  fromDate: NgbDate;
  isTimeRangeInvalid:boolean;
  toDate: NgbDate | null = null;
  isShowCalender=false;
  coachAvailabilityInfo:CoachAvailabilityInfo
  coachAvailabilityInfoDetail:CoachAvailabilityInfoDetail;
  coachAvailabilityInfoDetailList:CoachAvailabilityInfoDetail[]=[];
  nearestDate = null;
  appointmentDates = '';
  constructor(calendar: NgbCalendar,
      private dataservice: CoachDataService,
       private formbuilder: FormBuilder,
       private apiService:CoachService,
       private router :Router){    
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 1);
    // this.fromDate=null;
    // this.toDate=null;
    this.languageList = this.dataservice.getDays().
    map(x => new Object({ item_id: x.code, item_text: x.name }));
  this.dropdownSettings = {
    idField: 'item_id',
    textField: 'item_text',
  };
  }

  ngOnInit() {
    this.onGetDates();
    this.coachAvailabilityInfo= this.dataservice.InitializeCoachAvailability();
    this.coachAvailabilityInfoDetail=this.dataservice.InitializeCoachAvailabilityInfoDetail();
  this.calenderPlugin = this.formbuilder.group({
    DateRange: [''],
    StartTime: [''],
    EndTime: [''],
    SelectedDayes: ['']
  });
  }

  onGetDates() {
    let getData = []
    this.apiService.getAppointmentHistory().subscribe(res=>{
      getData=res;
       });

    if (getData.length > 0) {
      getData.map(res => {
        res['BookingDates'] = res.Date.split(' ')[0].split('/')[2] + '-' + res.Date.split(' ')[0].split('/')[1] + '-' + res.Date.split(' ')[0].split('/')[0] + ' ' + moment(res.StartTime.split(' ')[1] + res.StartTime.split(' ')[2], 'hh:mm A').format('HH:mm');
      });
    }

    const date = new Date();
    const n = date.toDateString();
    const time = date.toLocaleTimeString();

    const dateToCheckFor = moment(n).format('YYYY-MM-DD') + ' ' + moment(time, 'hh:mm A').format('HH:mm');

    getData.forEach(date => {
      let diff = moment(date['BookingDates']).diff(moment(dateToCheckFor), 'minutes');
      if (diff > 0) {
        if (this.nearestDate) {
          if (moment(date['BookingDates']).diff(moment(this.nearestDate?.BookingDates), 'minutes') < 0) {
            this.nearestDate = date;
          }
        } else {
          this.nearestDate = date;
        }
      }
    });

    this.appointmentDates = moment(this.nearestDate?.BookingDates).format('dddd, D MMMM YYYY, hh A')
    // + ' - ' +  moment(this.nearestDate?.EndTime.split(' ')[1]+this.nearestDate?.EndTime.split(' ')[2], 'hh:mm A').format('HH:mm A');
  }
  toggleCalender(){
    if(this.isShowCalender){
      this.isShowCalender=false;
    }else{
      this.isShowCalender=true;
    }
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
      this.coachAvailabilityInfo.EndDate=this.toDate.year+"/"+this.toDate.month+"/"+this.toDate.day;
    } else {
      this.toDate = null;
      this.fromDate = date;
      this.coachAvailabilityInfo.StartDate=this.fromDate.year+"/"+this.fromDate.month+"/"+this.fromDate.day;
    }
   
    
  }
  ViewAllApp(){
    this.router.navigate(['frameworks/coach-history-date'])
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }
  SetAvailability(){
    this.SetModelData();
    var currentDate=new Date(this.coachAvailabilityInfo.StartDate);
    for (var d = currentDate; d <=  new Date(this.coachAvailabilityInfo.EndDate); d.setDate(currentDate.getDate() + 1)) {
       let date=new Date(d); 
       if(this.coachAvailabilityInfo.Days.includes(new Date(d).getDay().toString())){
          this.coachAvailabilityInfoDetail.StartDate=date.toString();
          this.coachAvailabilityInfoDetail.EndDate=date.toString();
          this.coachAvailabilityInfoDetail.StartTime=this.coachAvailabilityInfo.StartTime;
          this.coachAvailabilityInfoDetail.EndTime=this.coachAvailabilityInfo.EndTime;
          this.coachAvailabilityInfoDetail.Day=date.getDay().toString()
          this.coachAvailabilityInfoDetailList.push(JSON.parse(JSON.stringify(this.coachAvailabilityInfoDetail)));
      }
    }
    console.log(this.coachAvailabilityInfoDetailList);

    console.log(this.coachAvailabilityInfo);
    this.ResetCalender();
  }
  
SetModelData(){
  this.coachAvailabilityInfo.Days= this.selectedDays.map(x => x.item_id);
  this.coachAvailabilityInfo.StartTime=this.startTime.hour+":"+this.startTime.minute;
  this.coachAvailabilityInfo.EndTime=this.endTime.hour+":"+this.endTime.minute;
}

  ResetCalender(){
    this.coachAvailabilityInfo=this.dataservice.InitializeCoachAvailability();
    this.coachAvailabilityInfoDetail=this.dataservice.InitializeCoachAvailabilityInfoDetail();
    this.selectedDays=[];
    this.startTime= {hour: 13, minute: 30, second: 0};
    this.endTime = {hour: 13, minute:45 , second: 0};
    this.fromDate=null;
    this.toDate=null;
    this.toggleCalender();
  }
  onTimeChange(event,eventName){
    if(eventName=='startTime'){
     if(this.endTime.hour==event.hour && this.endTime.minute<=event.minute){
        this.isTimeRangeInvalid=true;
     }else if(this.endTime.hour<event.hour){
      this.isTimeRangeInvalid=true;
     }else{
      this.isTimeRangeInvalid=false;
     }
    }else{
        if(this.startTime.hour==event.hour && this.startTime.minute>=event.minute){
           this.isTimeRangeInvalid=true;
        }else if(this.startTime.hour>event.hour){
         this.isTimeRangeInvalid=true;
        }else{
         this.isTimeRangeInvalid=false;
        }
    }


    console.log(this.endTime)
  }
  SetDisabled(){
    if( this.selectedDays?.length==0 || this.fromDate==null || this.toDate==null){
      return true;
    }
    return false;
  }
}
