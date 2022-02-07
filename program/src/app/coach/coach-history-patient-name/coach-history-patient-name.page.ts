import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoachAppointmentHistroy } from '../coach-model/coach-appointment-history';
import { CoachDataService } from '../services/coach-data.service';
import { CoachService } from '../services/coach.service';

@Component({
  selector: 'app-coach-history-patient-name',
  templateUrl: './coach-history-patient-name.page.html',
  styleUrls: ['./coach-history-patient-name.page.scss'],
  providers:[DecimalPipe]
})
export class CoachHistoryPatientNamePage implements OnInit {
  appointmentHistoryList:CoachAppointmentHistroy[]=[];
  UserIds:any[]=[];
  constructor(private dataService:CoachDataService,

    private apiService:CoachService,
    private router:Router,
    private currencyPipe:DecimalPipe) { }


  ngOnInit() {
    this.getAppointmentHistory();
  }
 getAppointmentHistory(){
  this.dataService.appointmentHistory= [this.dataService.IntializeCoachAppointmentHistroy()];
   this.apiService.getAppointmentHistory().subscribe(res=>{
    this.appointmentHistoryList=res;
    this.GetUniqueUserId();
    });
  // this.appointmentHistoryList=JSON.parse(JSON.stringify(this.dataService.getData()));
  
 }

 GetUniqueUserId(){
   this.appointmentHistoryList.forEach(element => {
    if(this.UserIds.length==0 || !this.UserIds.some(x=>x==element.UserID)){
         this.UserIds.push(element.UserID);
    }
   });
  }

  ChangeHistory($event){
    if($event.target.value=='Revenue'){
     this.router.navigate(['coach/coach-history-revenue'])
    }
    if($event.target.value=='Date'){
      this.router.navigate(['coach/coach-history-date'])
     }
  }

  GetUserName(userId){
    let history= this.appointmentHistoryList.filter(x=>x.UserID==userId);
    let count=history.length;
    return history[0].FName+' '+history[0].LName+"("+count+")";
  }

  GetRevenueCount(userId){
    let sum=0;
    var appList=  this.appointmentHistoryList.filter(x=>x.UserID==userId)
    appList.map(x=>+x.PerSessionFee).forEach(element => {
    sum+=element;
    });
    return appList[0].PerSessionFee_Curr +' ' + this.currencyPipe.transform(sum,'1.0-0');
  }
  GetFilteredAppointmentList(userId){
    return  this.appointmentHistoryList.filter(x=>x.UserID==userId);
  }
  goBack() {
    this.router.navigate(['coach/coach-history-date'])
  }
}
