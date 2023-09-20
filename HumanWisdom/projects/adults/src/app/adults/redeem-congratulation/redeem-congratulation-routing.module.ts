import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedeemCongratulationPage } from './redeem-congratulation.page';


const routes: Routes = [
  {
    path: '',
    component: RedeemCongratulationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedeemCongratulationPageRoutingModule {}
