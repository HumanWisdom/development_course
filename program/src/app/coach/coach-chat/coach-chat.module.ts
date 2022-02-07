import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { CoachChatComponent } from './coach-chat.component';
import { CometChatUI } from '../cometchat-pro-angular-ui-kit/CometChatWorkspace/src/components/CometChatUI/CometChat-Ui/cometchat-ui.module';
import { CometChatConversationListWithMessages } from '../cometchat-pro-angular-ui-kit/CometChatWorkspace/src/components/Chats/CometChat-conversation-list-with-messages/cometchat-conversation-list-with-messages.module';
import { CometChatGroupListWithMessages } from '../cometchat-pro-angular-ui-kit/CometChatWorkspace/src/components/Groups/CometChat-group-list-with-messages/cometchat-group-list-with-messages.module';
import { CometChatUserListWithMessages } from '../cometchat-pro-angular-ui-kit/CometChatWorkspace/src/components/Users/CometChat-user-list-with-messages/cometchat-user-list-with-messages.module';
import { CometChatConversationList } from '../cometchat-pro-angular-ui-kit/CometChatWorkspace/src/components/Chats/CometChat-conversation-list/cometchat-conversation-list.module';
import { CometChatGroupList } from '../cometchat-pro-angular-ui-kit/CometChatWorkspace/src/components/Groups/CometChat-group-list/cometchat-group-list.module';
import { CometChatUserList } from '../cometchat-pro-angular-ui-kit/CometChatWorkspace/src/components/Users/CometChat-user-list/cometchat-user-list.module';
import { CometChatAvatar } from '../cometchat-pro-angular-ui-kit/CometChatWorkspace/src/components/Shared/CometChat-avatar/cometchat-avatar.module';



const routes: Routes = [
  {
    path: '',
    component: CoachChatComponent
  }
];

@NgModule({
  imports: [
   // CommonModule,
    FormsModule,
    IonicModule,
    CometChatUI,
    CometChatConversationListWithMessages,
    CometChatGroupListWithMessages,
    CometChatUserListWithMessages,
    CometChatConversationList,
    CometChatGroupList,
    CometChatUserList,
    CometChatAvatar,
    RouterModule.forChild(routes)
  ],
  declarations: [CoachChatComponent],
  //  UserListPageComponent,
  exports: [RouterModule]
})
export class CoachChatPageModule {}
