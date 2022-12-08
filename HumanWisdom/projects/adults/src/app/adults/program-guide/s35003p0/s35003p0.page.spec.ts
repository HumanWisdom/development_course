import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S35003p0Page } from './s35003p0.page';

describe('S35003p0Page', () => {
  let component: S35003p0Page;
  let fixture: ComponentFixture<S35003p0Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S35003p0Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S35003p0Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
