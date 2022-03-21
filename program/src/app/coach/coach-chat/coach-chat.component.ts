import { Component, OnInit } from '@angular/core';
import { CometChat } from '@cometchat-pro/chat';
import { COMETCHATCONSTANTS } from '../CONSTS';

@Component({
  selector: 'HumanWisdom-coach-chat',
  templateUrl: './coach-chat.component.html',
  styleUrls: ['./coach-chat.component.scss'],
})
export class CoachChatComponent implements OnInit {
  item: any;
  coachUID: string = "";
  isChatList: boolean=false;
  composedThreadMessage = [];
  groupMessage = [];
  type: any = 'user';
  parentMessageId: number = 0;
  callMessage = [];
  isChatMessages:boolean=false
  constructor() { }

  ngOnInit() {
    
    this.coachUID = window.history.state?.data ? window.history.state.data.coachID : '';
  
    this.logginCometChat();
    

  };
  
  logginCometChat(){
    let isChatMessages=false;
    CometChat.login(localStorage.getItem('userId').toString(), COMETCHATCONSTANTS.AUTH_KEY).then(
      (user) => {
       let  isChatList=(localStorage.getItem('isChatList')!=null) ? (localStorage.getItem('isChatList') =='true'?true:false):false;
       if(!isChatList){
        isChatList = window.history.state?.data ? window.history.state.data.isChatList : false;
           isChatMessages =  !isChatList;
           this.isChatList=isChatList;
           localStorage.setItem('coachUID',this.coachUID);
           localStorage.setItem('Comechat',JSON.stringify(user))
        }
        if(isChatMessages){
         
          CometChat.getUser(this.coachUID.toString()).then(info=>{
            localStorage.setItem('isChatList',this.isChatList.toString());
            console.log("Login Successful:", { user });
            this.item = info;
            this.isChatMessages=isChatMessages;
          });
        }
      },
      (error) => {
        console.log("Login failed with exception:", { error });
      }
    );
  }
  actionHandler(event) {
    console.log(event)
  }

  getUserByUID() {
    CometChat.getUser(this.coachUID.toString()).then(
      user => {
        this.item = user;
        console.log("User details fetched for user:", user);
      }, error => {
        console.log("User details fetching failed with error:", error);
      }
    );
  }
}
