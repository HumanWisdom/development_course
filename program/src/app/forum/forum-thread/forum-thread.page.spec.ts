import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForumThreadPage } from './forum-thread.page';

describe('ForumThreadPage', () => {
  let component: ForumThreadPage;
  let fixture: ComponentFixture<ForumThreadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumThreadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForumThreadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
