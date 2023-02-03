import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S78003p0Page } from './s78003p0.page';

describe('S78003p0Page', () => {
  let component: S78003p0Page;
  let fixture: ComponentFixture<S78003p0Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S78003p0Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S78003p0Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
