import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetPasswordPage } from './set-password.page';

describe('SetPasswordPage', () => {
  let component: SetPasswordPage;
  let fixture: ComponentFixture<SetPasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetPasswordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
