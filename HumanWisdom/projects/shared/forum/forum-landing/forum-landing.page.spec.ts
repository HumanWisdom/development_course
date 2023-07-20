import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForumLandingPage } from './forum-landing.page';

describe('ForumLandingPage', () => {
  let component: ForumLandingPage;
  let fixture: ComponentFixture<ForumLandingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumLandingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForumLandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
