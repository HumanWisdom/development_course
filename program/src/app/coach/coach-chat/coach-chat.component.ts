import { Component, OnInit } from '@angular/core';
import { CometChat } from '@cometchat-pro/chat';
import { COMETCHAT_CONSTANTS } from '../CONSTS';

@Component({
  selector: 'HumanWisdom-coach-chat',
  templateUrl: './coach-chat.component.html',
  styleUrls: ['./coach-chat.component.scss'],
})
export class CoachChatComponent implements OnInit {
  item: any;
  coachUID: string = "";
  isChatList: boolean;
  composedThreadMessage = [];
  groupMessage = [];
  type: any = 'user';
  parentMessageId: number = 0;
  callMessage = [];
  constructor() { }

  ngOnInit() {
    
    this.coachUID = window.history.state?.data ? window.history.state.data.coachID : '';
    this.isChatList = window.history.state?.data ? window.history.state.data.isChatList : false;
    this.logginCometChat();
    

  }
  logginCometChat(){
    CometChat.login(localStorage.getItem('userId').toString(), COMETCHAT_CONSTANTS.AUTH_KEY).then(
      (user) => {
        console.log("Login Successful:", { user });
        localStorage.setItem('Comechat',JSON.stringify(user))
        if(this.coachUID){
          this.getUserByUID();
        }
      },
      (error) => {
        console.log("Login failed with exception:", { error });
        // this.onLoginError = true;
        // this.errorMsg = error.message;
      }
    );
  }
  actionHandler(event) {
    console.log(event)
  }

  getUserByUID() {
    CometChat.getUser(this.coachUID.toString()).then(
      user => {
        debugger
        this.item = user;
        console.log("User details fetched for user:", user);
      }, error => {
        debugger
        console.log("User details fetching failed with error:", error);
      }
    );
  }
}
