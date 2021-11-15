import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { CredComponent } from './cred/cred.component';
import { UsersModule} from '../users/users.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CredComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    UsersModule,
    FormsModule
  ]
})
export class LoginModule { }
