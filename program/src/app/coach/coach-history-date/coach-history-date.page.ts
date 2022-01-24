import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoachAppointmentHistroy } from '../coach-model/coach-appointment-history';
import { CoachDataService } from '../services/coach-data.service';
import { CoachService } from '../services/coach.service';

@Component({
  selector: 'app-coach-history-date',
  templateUrl: './coach-history-date.page.html',
  styleUrls: ['./coach-history-date.page.scss'],
})
export class CoachHistoryDatePage implements OnInit {
   appointmentHistoryList:CoachAppointmentHistroy[]=[];
   data:any;
   Dates:Date[]=[];
  constructor(private datService:CoachDataService,
   private apiService:CoachService,
   private router:Router) { }

  ngOnInit() {
    this.getAppointmentHistory();
  }                                   
 getAppointmentHistory(){
  this.datService.appointmentHistory= [this.datService.IntializeCoachAppointmentHistroy()];
   this.apiService.getAppointmentHistory().subscribe(res=>{
    this.appointmentHistoryList=res;
    });
   // this.appointmentHistoryList=JSON.parse(JSON.stringify(this.datService.getData()));
   this.GroupAppointmentByDate();
 }


 getAppCount(userId:any){
   return this.appointmentHistoryList.filter(x=>x.UserId==userId).length;
 }
 ChangeHistory($event){
   if($event.target.value=='Patient'){
    this.router.navigate(['coach/coach-history-patient-name'])
   }
   if($event.target.value=='Revenue'){
    this.router.navigate(['coach/coach-history-revenue'])
   }
 }
GroupAppointmentByDate(){
  this.appointmentHistoryList.forEach(element => {
    if(this.Dates.length==0 || 
      this.Dates.some(x=>x.getDay()!=new Date(element.Date).getDay() &&
    x.getMonth()!=new Date(element.Date).getMonth()
     && x.getFullYear() != new Date(element.Date).getFullYear() )){
       this.Dates.push(new Date(element.Date))
    }
  });
}
}
