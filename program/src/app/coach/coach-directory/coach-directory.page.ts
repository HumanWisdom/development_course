import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoachService } from '../services/coach.service';
import * as moment from 'moment';
import { GetCoachListDetails } from '../coach-model/coach-customer-directory';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-coach-directory',
  templateUrl: './coach-directory.page.html',
  styleUrls: ['./coach-directory.page.scss'],
})
export class CoachDirectoryPage implements OnInit {

  nearestDate = null;
  coachNames = '';
  appointmentDates = '';
  coachLists: GetCoachListDetails[] = [];
  isAPICalling = false;

  constructor(private router: Router,  private apiService:CoachService) { }

  ngOnInit() {
    this.onGetDates();
   this.getCoachList();
  }

  setCurrencyDetails(i) {
    let finalString = '';
      if(this.coachLists[i]?.PerSessionFee_Curr && this.coachLists[i]?.PerSessionFee) {
        finalString =  this.coachLists[i]?.PerSessionFee_Curr + ' ' + this.coachLists[i]?.PerSessionFee + '/session (30 min)';
      } else {
        finalString = '';
      }
      return finalString ;
  }

  setCoachExp(i){
    let finalString = '';
      if(this.coachLists[i]?.ExpYears && this.coachLists[i]?.ExpMonths) {
        finalString = 'Experience: ' + this.coachLists[i]?.ExpYears +'.'+ this.coachLists[i]?.ExpMonths + ' years'
      }else if(this.coachLists[i]?.ExpYears && this.coachLists[i]?.ExpMonths === '') {
        finalString = 'Experience: ' + this.coachLists[i]?.ExpYears + ' years'
      }else if(this.coachLists[i]?.ExpYears === '' && this.coachLists[i]?.ExpMonths) {
        finalString = 'Experience: ' + this.coachLists[i]?.ExpMonths + ' months'
      } else {
        finalString = '';
      }
      return finalString;
  }

  getCoachList() {
    this.isAPICalling = true;
    this.apiService.getAllCoach().subscribe(res => {
      this.isAPICalling = false;
      this.coachLists = res;
      console.log('RES is are', this.coachLists)
    }, error => {
      this.isAPICalling = false;
    })
  }

  goBack() {
    this.router.navigate(['coach/coach-customer-introduction'],  { state: { data: { isChecked: true } } })
  }

  onGetDates = async () => {
    let getData = []
   await  this.apiService.getUpComingAppointment().subscribe(res=>{
      getData=res;
    if (getData.length > 0) {
      getData.map(res => {
        res['BookingDates'] = res.Date.split(' ')[0].split('/')[2] + '-' + res.Date.split(' ')[0].split('/')[0] + '-' + res.Date.split(' ')[0].split('/')[1] + ' ' + moment(res.StartTime.split(' ')[1] + res.StartTime.split(' ')[2], 'hh:mm A').format('HH:mm');
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
    if(this.nearestDate !== null) {
      this.appointmentDates = moment(this.nearestDate?.BookingDates).format('dddd, D MMMM YYYY, hh A')
    }
    
    console.log('Appointment dates are:', this.appointmentDates);
  });
    // + ' - ' +  moment(this.nearestDate?.EndTime.split(' ')[1]+this.nearestDate?.EndTime.split(' ')[2], 'hh:mm A').format('HH:mm A');
  }

}
