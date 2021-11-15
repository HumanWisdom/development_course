import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupS01Page } from './popup-s01.page';

describe('PopupS01Page', () => {
  let component: PopupS01Page;
  let fixture: ComponentFixture<PopupS01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupS01Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupS01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
