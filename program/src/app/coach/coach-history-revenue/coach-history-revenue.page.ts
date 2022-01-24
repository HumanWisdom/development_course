import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoachAppointmentHistroy } from '../coach-model/coach-appointment-history';
import { CoachDataService } from '../services/coach-data.service';
import { CoachService } from '../services/coach.service';

@Component({
  selector: 'app-coach-history-revenue',
  templateUrl: './coach-history-revenue.page.html',
  styleUrls: ['./coach-history-revenue.page.scss'],
})
export class CoachHistoryRevenuePage implements OnInit {

  appointmentHistoryList:CoachAppointmentHistroy[]=[];
  UserIds:any[]=[];
  isShow:boolean=false;
  constructor(private dataService:CoachDataService,

    private apiService:CoachService,
    private router:Router) { }


  ngOnInit() {
    this.getAppointmentHistory();
  }
 getAppointmentHistory(){
   this.isShow=false;
  this.dataService.appointmentHistory= [this.dataService.IntializeCoachAppointmentHistroy()];
   this.apiService.getAppointmentHistory().subscribe(res=>{
    this.appointmentHistoryList=res;
    });
   //this.appointmentHistoryList=JSON.parse(JSON.stringify(this.dataService.getData()));
   this.GetUniqueUserId();
 }
 GetUniqueUserId(){
   this.appointmentHistoryList.forEach(element => {
    if(this.UserIds.length==0 || !this.UserIds.some(x=>x.UserId==element.UserId)){
         this.UserIds.push({UserId:element.UserId,Sum:0});
    }
   });
   for(var i=0;i<this.UserIds.length;i++){
      this.UserIds[i].Sum= this.GetRevenueCount(this.UserIds[i].UserId);
   }
   
   this.UserIds.sort((a,b)=>{
    return a.Sum > b.Sum ? -1 : 1;
  })
   this.isShow=true;
  }

  GetCurrency(userId){
    return this.appointmentHistoryList.filter(x=>x.UserId==userId)[0].PerSessionFee_Curr;
  }

  ChangeHistory($event){
    if($event.target.value=='Patient'){
     this.router.navigate(['coach/coach-history-patient-name'])
    }
    if($event.target.value=='Date'){
      this.router.navigate(['coach/coach-history-date'])
     }
  }
  GetUserName(userId){
    let history= this.appointmentHistoryList.filter(x=>x.UserId==userId);
    let count=history.length;
    return history[0].FName+' '+history[0].LName+"("+count+")";
  }

  GetRevenueCount(userId){
    let sum=0;
    var appList=  this.appointmentHistoryList.filter(x=>x.UserId==userId)
    appList.map(x=>+x.PerSessionFee).forEach(element => {
    sum+=element;
    });
    return sum;
  }
  GetFilteredAppointmentList(userId){
    return  this.appointmentHistoryList.filter(x=>x.UserId==userId);
  }

  goBack() {
    this.router.navigate(['coach/coach-history-patient-name'])
  }
}
