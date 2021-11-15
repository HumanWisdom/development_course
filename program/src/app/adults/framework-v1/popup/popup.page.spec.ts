import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupPage } from './popup.page';

describe('PopupPage', () => {
  let component: PopupPage;
  let fixture: ComponentFixture<PopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
