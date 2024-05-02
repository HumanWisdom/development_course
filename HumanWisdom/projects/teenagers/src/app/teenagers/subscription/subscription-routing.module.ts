import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("../../../../../shared/subscription/index/index.module").then(m => m.IndexPageModule)
  },
  {
    path: "index",
    loadChildren: () => import("../../../../../shared/subscription/index/index.module").then(m => m.IndexPageModule)
  },
  {
    path: "proceed-to-payment",
    loadChildren: () => import("../../../../../shared/subscription/proceed-to-payment/proceed-to-payment.module").then(m => m.ProceedToPaymentPageModule)
  },
  {
    path: "payment",
    loadChildren: () => import("../../../../../shared/subscription/payment/payment.module").then(m => m.PaymentPageModule)
  },
  {
    path: "payment-failed",
    loadChildren: () => import("../../../../../shared/subscription//payment-failed/payment-failed.module").then(m => m.PaymentFailedPageModule)
  },
  {
    path: "free-trial",
    loadChildren: () => import("../../../../../shared/subscription/free-trial/free-trial.module").then(m => m.FreeTrialPageModule)
  },
  {
    path: 'start-your-free-trial',
    loadChildren: () => import('../../../../../shared/subscription/start-your-free-trial/start-your-free-trial.module').then( m => m.StartYourFreeTrialPageModule)
  },
  {
    path: 'try-free-and-subscribe',
    loadChildren: () => import('../../../../../shared/subscription/try-free-and-subscribe/try-free-and-subscribe.module').then( m => m.TryFreeAndSubscribePageModule)
  },
  {
    path: 'redeem-activate-now',
    loadChildren: () => import('../../../../../shared/subscription/redeem-activate-now/redeem-activate-now.module').then( m => m.RedeemActivateNowPageModule)
  },
  {
    path: 'gift-a-friend',
    loadChildren: () => import('../../../../../shared/subscription/gift-a-friend/gift-a-friend.module').then( m => m.GiftAFriendPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('../../../../../shared/subscription/cart/cart.module').then( m => m.CartPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionRoutingModule { }
