import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { GetCoachListDetails } from '../coach-model/coach-customer-directory';
import { CoachService } from '../services/coach.service';

@Component({
  selector: 'app-coach-appointments',
  templateUrl: './coach-appointments.page.html',
  styleUrls: ['./coach-appointments.page.scss'],
})
export class CoachAppointmentsPage implements OnInit {

  nearestDate = null;
  upcomingDate = [];
  previousDate = [];
  isAPICalling = false;

  constructor(private router: Router, private apiService: CoachService) { }

  ngOnInit() {
    this.onGetDates();
  }

  goBack() {
    this.router.navigate(['coach/coach-customer-directory'])
  }

  onGetDates = async () => {
    this.isAPICalling = true;
    let getData = []
    await this.apiService.getUpComingAppointment().subscribe(res => {
      getData = res;
      if (getData.length > 0) {
        getData.map(res => {
          res['BookingDates'] = res.Date.split(' ')[0].split('/')[2] + 
                                '-' + 
                                res.Date.split(' ')[0].split('/')[0] + 
                                '-' + 
                                res.Date.split(' ')[0].split('/')[1] + 
                                ' ' + 
                                moment(res.StartTime.split(' ')[1] + res.StartTime.split(' ')[2], 'hh:mm A').format('HH:mm A');
          res['combineDate'] = moment(res.Date.split(' ')[0].split('/')[2] + 
          '-' + 
          res.Date.split(' ')[0].split('/')[0] + 
          '-' + 
          res.Date.split(' ')[0].split('/')[1] ).format('ddd, D MMM YYYY') + ' '+
          moment(res.StartTime.split(' ')[1] + res.StartTime.split(' ')[2], 'hh:mm A').format('HH.mm A') + 
          '-' + 
          moment(res.EndTime.split(' ')[1] + res.EndTime.split(' ')[2], 'hh:mm A').format('HH.mm A')
          ;
        });
      }

      const date = new Date();
      const n = date.toDateString();
      const time = date.toLocaleTimeString();

      const dateToCheckFor = moment(n).format('YYYY-MM-DD') + ' ' + moment(time, 'hh:mm A').format('HH:mm');

      getData.forEach(date => {
        let diff = moment(date['BookingDates']).diff(moment(dateToCheckFor), 'minutes');
        if (diff > 0) {
          this.upcomingDate.push(date);
          if (this.nearestDate) {
            if (moment(date['BookingDates']).diff(moment(this.nearestDate?.BookingDates), 'minutes') < 0) {
              this.nearestDate = date;
            }
          } else {
            this.nearestDate = date;
          }
        } else{
          this.previousDate.push(date);
        }
      });
      this.isAPICalling = false;
      console.log('Upcoming Uppointment', this.upcomingDate);
      console.log('Previous Uppointment', this.previousDate);
      // if (this.nearestDate !== null) {
      //   this.appointmentDates = moment(this.nearestDate?.BookingDates).format('dddd, D MMMM YYYY, hh A')
      // }

      // console.log('Appointment dates are:', this.appointmentDates);
    }, error => {
      this.isAPICalling = false;
    });
    // + ' - ' +  moment(this.nearestDate?.EndTime.split(' ')[1]+this.nearestDate?.EndTime.split(' ')[2], 'hh:mm A').format('HH:mm A');
  }
}
