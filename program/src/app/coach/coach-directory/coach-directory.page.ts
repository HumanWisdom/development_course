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
  coachList: GetCoachListDetails[] = [];
  isAPICalling = false;
  searchText: string;
  filtData:any = [];

  constructor(private router: Router, private apiService: CoachService) { 
    //this.coachLists=this.coachList.filter(x=>x.CoachID>0);
  }
  SearchText(value:any){
    

  }
  ngOnInit() {
    this.onGetDates();
     if(window.history.state.data?.isFromDemos) {
    if(window.history.state.data?.isChecked.length == 0 || window.history.state.data?.isChecked == undefined) {
      this.coachLists = [];
      this.filtData = window.history.state?.data?.filterDatas;
    } else {
      this.isAPICalling = true;
      // this.apiService.getAllCoach().subscribe(res => {
        
        this.coachLists = window.history.state?.data?.isChecked;
        this.filtData = window.history.state?.data?.filterDatas;
        this.SetNameofCoach( this.coachLists)
        this.isAPICalling = false;
      // }, error => {
      //   this.isAPICalling = false;
      // })   
    }
   } else {
      this.getCoachList();
    }
  
    console.log('DDDDDDDDDDDDDDDDDDDDD', window.history.state?.data?window.history.state.data.isChecked: false);
  }
         
  setCurrencyDetails(i) {
    let finalString = '';
    if (this.coachLists[i]?.PerSessionFee_Curr && this.coachLists[i]?.PerSessionFee) {
      finalString = this.coachLists[i]?.PerSessionFee_Curr + ' ' + this.coachLists[i]?.PerSessionFee + '/session (60 min)';
    } else {
      finalString = '';
    }
    return finalString;
  }
 filter(){
   debugger
  //  if(this.filtData.length > 0)
   this.router.navigate(['coach/coach-directory-filter'], { state: { data: { filterDatas: this.filtData } } })
  

 }
  setCoachExp(i) {
    let finalString = '';
    if (this.coachLists[i]?.ExpYears && this.coachLists[i]?.ExpMonths) {
      finalString = 'Experience: ' + this.coachLists[i]?.ExpYears + '.' + this.coachLists[i]?.ExpMonths + ' years'
    } else if (this.coachLists[i]?.ExpYears && this.coachLists[i]?.ExpMonths === '') {
      finalString = 'Experience: ' + this.coachLists[i]?.ExpYears + ' years'
    } else if (this.coachLists[i]?.ExpYears === '' && this.coachLists[i]?.ExpMonths) {
      finalString = 'Experience: ' + this.coachLists[i]?.ExpMonths + ' months'
    } else {
      finalString = '';
    }
    return finalString;
  }

  ViewAllApp(){
    this.router.navigate(['coach/coach-appointments'])
  }

  getCoachList() {
    this.isAPICalling = true;
    this.apiService.getAllCoach().subscribe(res => {
      this.isAPICalling = false;
      this.coachLists = res;
      this.SetNameofCoach( this.coachLists)
    }, error => {
      this.isAPICalling = false;
    })
  }
SetNameofCoach(coachLists:GetCoachListDetails[]){
  for(var i=0; i< coachLists?.length;i++){
        coachLists[i].Name=coachLists[i].FName+" "+coachLists[i].LName
  }
}
  goBack() {
    this.router.navigate(['coach/coach-customer-introduction'], { state: { data: { isChecked: true } } })
  }





  ratings(i: number) {
    return new Array(i);
  }
  onGetDates = async () => {
    let getData = []
    await this.apiService.getUpComingAppointment().subscribe(res => {
      getData = res;
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
      if (this.nearestDate !== null) {
        this.appointmentDates = moment(this.nearestDate?.BookingDates).format('dddd, D MMMM YYYY, hh A')
      }

      console.log('Appointment dates are:', this.appointmentDates);
    });
    // + ' - ' +  moment(this.nearestDate?.EndTime.split(' ')[1]+this.nearestDate?.EndTime.split(' ')[2], 'hh:mm A').format('HH:mm A');
  }

}
