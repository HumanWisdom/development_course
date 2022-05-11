import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { CoachChatComponent } from './coach-chat.component';
import { CommonModule } from '@angular/common';
import { BottomNavigationComponent } from 'src/app/adults/shared/component/bottom-navigation/bottom-navigation.component';
import { SharedModule } from 'src/app/adults/shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: CoachChatComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CoachChatComponent,BottomNavigationComponent],
  //  UserListPageComponent,
  exports: [RouterModule]
})
export class CoachChatPageModule {}
