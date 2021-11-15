import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CredComponent} from './cred/cred.component'
const routes: Routes = [ 
  {path:'',
component: CredComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
