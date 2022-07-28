import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-notification-type',
  templateUrl: './notification-type.component.html',
  styleUrls: ['./notification-type.component.css']
})
export class NotificationTypeComponent implements OnInit {
  notificationType: any;
  notificationTypeList: any[];
  upnotificationType: any;
  searchedTitle: string = '';
  backupNotificationType: any[];
  selectedTypeId:string='0'
  notificationList:[]=[];
  constructor(private service: UsersService) {
    this.ClearInputBox();
    this.clearUpdateModel();
  }

  ngOnInit(): void {
    this.getNotificationTypeList();
  }
  getNotificationTypeList(){
    this.service.getNotificationTypeList().subscribe(x=>{
      if(x){
       this.notificationTypeList=x; 
       this.backupNotificationType=x;
      }
    })
  }

  addNotificationType() {
    this.service.addNotificationType(this.notificationType).subscribe((x) => {
      this.ClearInputBox();
      window.alert('Topics Saved successfully');
    });
  }

  filechanged(file,isSave){
   if(isSave){
    this.notificationType.IconPath= file.target.files[0].name;
   }else{
    this.upnotificationType.IconPath= file.target.files[0].name;
   }

  }
  reset() {
    this.ClearInputBox();
  }

  ClearInputBox() {
    this.notificationType = {
      TypeId:0,
      Type:"",
      IconPath:"",
      Template:""
    };
  }

  initUpdate(TypeId) {
    let data = this.notificationTypeList.filter((x) => x.TypeId == TypeId);
    if (data && data.length > 0) {
      this.upnotificationType.TypeId = data[0].TypeId;
      this.upnotificationType.Type = data[0].NotificationType;
      this.upnotificationType.IconPath = data[0].IconPath;
      this.upnotificationType.Template = data[0].NotificationTemplate;
      //this.myFile.nativeElement.value=data[0].IconPath;
    }
  }
  GetFileName(){
    if(this.upnotificationType.IconPath!=''){
      return    this.upnotificationType.IconPath;
    }
  }

  clearUpdateModel() {
    this.upnotificationType = {
      TypeId:0,
      Type:"",
      IconPath:"",
      Template:""
    }
  }

  updateTypeById () {
    this.service.addNotificationType(this.upnotificationType).subscribe(
      (res) => {
        if (res) {
          window.alert('Notification Type updated successfully');
          this.getNotificationTypeList();
        }
      },
      (error) => {
        console.log(error.error.Message);
        window.alert(error.error.Message);
      }
    );
  }

  searchTitle() {
    if (this.searchedTitle == '') {
      this.notificationTypeList = this.backupNotificationType;
    } else {
      this.notificationTypeList = this.backupNotificationType.filter((x) =>
        x.NotificationType.toLowerCase().includes(this.searchedTitle.toLowerCase())
      );
    }
  }

  // updateQuestionById(){
  //   this.service.addGuidedQuestion(this.upguidedQuestion).subscribe(x=>{
  //     if(x){
  //       alert('Updated Sucessfully');
  //     }
  //   })
  // }


  deleteType(id){
    var retVal = confirm("Are you sure you want to delete?");
    if( retVal == true ) {
      this.service.DelnotificationType({ "Id":parseInt(id)}).
      subscribe(res=>
        {
        },
        error=>{
          console.log(error)
        },
        ()=>{
          window.alert('Notification Type deleted successfully')
         this.getNotificationTypeList();
        }
      )
    } else {
      return false;
    }

  }
  HandleBrowseClick(){
    //this.updateMyFile.nativeElement.click();
  }
}