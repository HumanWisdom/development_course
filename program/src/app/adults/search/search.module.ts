import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { AdultsService } from '../adults.service';
import { ForumService } from 'src/app/forum/forum.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SearchRoutingModule
  ],
  providers:[
    AdultsService,
    ForumService
  ]
})
export class SearchModule { }
