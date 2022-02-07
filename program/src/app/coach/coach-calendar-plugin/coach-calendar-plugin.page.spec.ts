import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoachCalendarPluginPage } from './coach-calendar-plugin.page';

describe('CoachCalendarPluginPage', () => {
  let component: CoachCalendarPluginPage;
  let fixture: ComponentFixture<CoachCalendarPluginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachCalendarPluginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoachCalendarPluginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
