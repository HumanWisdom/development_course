import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchLearningForumJournalPageRoutingModule } from './search-learning-forum-journal-routing.module';

import { SearchLearningForumJournalPage } from './search-learning-forum-journal.page';

import {SharedModule} from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchLearningForumJournalPageRoutingModule,
    SharedModule
  ],
  declarations: [SearchLearningForumJournalPage]
})
export class SearchLearningForumJournalPageModule {}
