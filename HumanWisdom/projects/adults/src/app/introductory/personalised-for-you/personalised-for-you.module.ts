import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonalisedForYouPageRoutingModule } from './personalised-for-you-routing.module';
import { PersonalisedForYouPage } from './personalised-for-you.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PersonalisedForYouPageRoutingModule
  ],
  declarations: [PersonalisedForYouPage]
})
export class PersonalisedForYouPageModule { }
