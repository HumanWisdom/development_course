import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./subscribed-unsubscribed/subscribed-unsubscribed.module').then( m => m.SubscribedUnsubscribedPageModule)
  },
  {
    path: 'subscribed-unsubscribed',
    loadChildren: () => import('./subscribed-unsubscribed/subscribed-unsubscribed.module').then( m => m.SubscribedUnsubscribedPageModule)
  },
  {
    path: 'referral-code',
    loadChildren: () => import('./referral-code/referral-code.module').then( m => m.ReferralCodePageModule)
  },
  {
    path: 'partnership-subscribed',
    loadChildren: () => import('./partnership-subscribed/partnership-subscribed.module').then( m => m.PartnershipSubscribedPageModule)
  },
  {
    path: 'partnership-treesisters',
    loadChildren: () => import('./partnership-treesisters/partnership-treesisters.module').then( m => m.PartnershipTreesistersPageModule)
  },
  {
    path: 'payment-bank',
    loadChildren: () => import('./payment-bank/payment-bank.module').then( m => m.PaymentBankPageModule)
  },
  {
    path: 'payment-paypal',
    loadChildren: () => import('./payment-paypal/payment-paypal.module').then( m => m.PaymentPaypalPageModule)
  },
  {
    path: 'payment-income',
    loadChildren: () => import('./payment-income/payment-income.module').then( m => m.PaymentIncomePageModule)
  },
  {
    path: 'payment-plant-trees',
    loadChildren: () => import('./payment-plant-trees/payment-plant-trees.module').then( m => m.PaymentPlantTreesPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnershipAppRoutingModule { }
