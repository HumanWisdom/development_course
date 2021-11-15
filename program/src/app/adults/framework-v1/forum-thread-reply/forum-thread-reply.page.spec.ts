import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForumThreadReplyPage } from './forum-thread-reply.page';

describe('ForumThreadReplyPage', () => {
  let component: ForumThreadReplyPage;
  let fixture: ComponentFixture<ForumThreadReplyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumThreadReplyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForumThreadReplyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
