import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notification: any;
  notificationList: any[];
  updateNotification: any;
  searchedTitle: string = '';
  backupNotification: any[];
  selectedTypeId:string='0'
  TypeList:any[]=[]
  constructor(private service: UsersService) {
    this.ClearInputBox();
    this.clearUpdateModel();
  }

  ngOnInit(): void {
    this.getTypeList();
    this.getNotificationList();
  }
  getNotificationList(){
    this.service.NotificationList().subscribe(x=>{
      if(x){
       this.notificationList=x; 
       this.backupNotification=x;
      }
    })
  }

  public ClearInputBox(){
    this.notification={
      TypeId:"0",
    NotificationMsg:"",
    Url:""
}
  }

  public clearUpdateModel(){
    this.updateNotification={
    NotificationMsg:"",
    Url:"",
    IconPath:"",
    NotificationId:0
 }
  }
  addNotification(){
    this.service.addNotification(this.notification).subscribe(x=>{
      if(x){
          this.getNotificationList();
          this.ClearInputBox();
      }
    });
  }


  getTypeList(){
    this.service.NotificationTypeList().subscribe(x=>{
      if(x){
       this.TypeList=x; 
      }
    })
  }
  searchTitle(){
    if (this.searchedTitle == '') {
      this.notificationList = this.backupNotification;
    } else {
      this.notificationList = this.backupNotification.filter((x) =>
        x.NotificationMsg.toLowerCase().includes(this.searchedTitle.toLowerCase())
      );
    }
  }

  update() {
    this.service.addNotification(this.updateNotification).subscribe(
      (res) => {
        if (res) {
          window.alert('Notification updated successfully');
          this.getNotificationList();
        }
      },
      (error) => {
        console.log(error.error.Message);
        window.alert(error.error.Message);
      }
    );
  }

  initUpdate(notificationId){
    let data = this.notificationList.filter((x) => x.NotificationId == notificationId);
    if (data && data.length > 0) {
      this.updateNotification.NotificationId = data[0].NotificationId;
      this.updateNotification.IconPath = data[0].IconPath;
      this.updateNotification.Url = data[0].Url;
      this.updateNotification.NotificationMsg = data[0].NotificationMsg;
    }
  }

  
  delete(id){
    var retVal = confirm("Are you sure you want to delete?");
    if( retVal == true ) {
      this.service.Delnotification({ "Id":parseInt(id)}).
      subscribe(res=>
        {
        },
        error=>{
          console.log(error)
        },
        ()=>{
          window.alert('Notification deleted successfully')
         this.getNotificationList();
        }
      )
    } else {
      return false;
    }

  }

}
