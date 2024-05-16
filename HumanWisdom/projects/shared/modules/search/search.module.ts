import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { ForumService } from '../../forum/forum.service';


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
