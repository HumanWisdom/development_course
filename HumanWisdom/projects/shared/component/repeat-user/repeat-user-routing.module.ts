import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepeatUserPage } from './repeat-user.page';
import { MyDailyPracticePage } from './my-daily-practice/my-daily-practice.page';
const routes: Routes = [
  {
    path: '',
    component: RepeatUserPage
  },
  {
    path: 'my-daily-practice',
    component: MyDailyPracticePage
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepeatUserPageRoutingModule {}
