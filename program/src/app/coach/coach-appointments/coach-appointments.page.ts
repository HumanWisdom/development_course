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
  finalHourse = '';

  constructor(private router: Router, private apiService: CoachService) { }

  ngOnInit() {
    this.onGetDates();
    
  }

  goBack() {
    this.router.navigate(['coach/coach-customer-directory'])
  }

  convertTime(res) {
    var interval = setInterval(() => {
     console.log('DATA');

     var startTime = moment(res.StartTime.split(' ')[1] + res.StartTime.split(' ')[2], 'HH:mm:ss a');
     var endTime = moment(new Date().toLocaleTimeString(), 'HH:mm:ss a');
     
     // calculate total duration
     let duration: any = moment.duration(endTime.diff(startTime));

    //  console.log('TOtal DUration anfd Time are', res['BookingDates']  , duration, hours);
    this.finalHourse = duration?._data?.hours + ':' + duration?._data?.minutes 
    console.log('DURATIONS ARE HERES', this.finalHourse)
    return this.finalHourse;
    }, 1000);
  }


  onGetDates = async () => {
    this.isAPICalling = true;
    let getData = []
    await this.apiService.getUpComingAppointment().subscribe(res => {
      getData = res;
      if (getData.length > 0) {
        getData.map((res) => {
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
            res.Date.split(' ')[0].split('/')[1]).format('ddd, D MMM YYYY') + ' ' +
            moment(res.StartTime.split(' ')[1] + res.StartTime.split(' ')[2], 'hh:mm A').format('HH.mm A') +
            '-' +
            moment(res.EndTime.split(' ')[1] + res.EndTime.split(' ')[2], 'hh:mm A').format('HH.mm A');

           // res['Timersss'] = this.convertTime(res);

        });
      }
      getData.forEach(date => {
        if(date.CancelledBy == "0" && date.CancelledDateTime == "") {
        if (date.Completed == '1') {
          this.previousDate.push(date);
        } else {
          this.upcomingDate.push(date);
        }
      }
      });
      this.isAPICalling = false;

    }, error => {
      this.isAPICalling = false;
    });
  }
}
