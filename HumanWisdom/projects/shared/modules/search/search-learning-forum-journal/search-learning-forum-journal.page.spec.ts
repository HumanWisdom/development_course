import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchLearningForumJournalPage } from './search-learning-forum-journal.page';

describe('SearchLearningForumJournalPage', () => {
  let component: SearchLearningForumJournalPage;
  let fixture: ComponentFixture<SearchLearningForumJournalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchLearningForumJournalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchLearningForumJournalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
