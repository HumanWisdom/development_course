import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S78005p0Page } from './s78005p0.page';

describe('S78005p0Page', () => {
  let component: S78005p0Page;
  let fixture: ComponentFixture<S78005p0Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S78005p0Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S78005p0Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
