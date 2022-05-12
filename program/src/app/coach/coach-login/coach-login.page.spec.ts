import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoachLoginPage } from './coach-login.page';

describe('CoachLoginPage', () => {
  let component: CoachLoginPage;
  let fixture: ComponentFixture<CoachLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoachLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
