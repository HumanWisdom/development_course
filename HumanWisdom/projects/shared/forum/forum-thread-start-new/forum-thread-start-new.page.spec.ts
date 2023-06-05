import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForumThreadStartNewPage } from './forum-thread-start-new.page';

describe('ForumThreadStartNewPage', () => {
  let component: ForumThreadStartNewPage;
  let fixture: ComponentFixture<ForumThreadStartNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumThreadStartNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForumThreadStartNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
